#!/usr/bin/env node
// rvf-index.mjs — build a single-file .rvf semantic vector store over oia-model's markdown.
//
// rUv-native throughout: embeddings come from ruvector's OWN bundled ONNX all-MiniLM-L6-v2
// (embedBatch, 384-d, loaded once), and the store is the canonical .rvf format (ADR-029)
// written via the `ruvector rvf` CLI. No server, no external embedding API.
//
// Produces in .rvf-store/:
//   oia.rvf          — the vector store (id + 384-d vector per chunk)
//   oia.chunks.json  — sidecar: id -> {file, heading, preview, text}  (.rvf holds no metadata)
//   oia.vectors.json — [{id, vector}] handed to `ruvector rvf ingest`
//
// Usage:  node scripts/rvf-index.mjs
import { createRequire } from 'module';
import { execFileSync } from 'child_process';
import { readFileSync, writeFileSync, readdirSync, statSync, mkdirSync, rmSync, existsSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';

const require = createRequire(import.meta.url);
const GROOT = execFileSync('npm', ['root', '-g']).toString().trim();
const { embedBatch } = require(join(GROOT, 'ruvector', 'dist', 'index.js'));

const ROOT = join(fileURLToPath(new URL('.', import.meta.url)), '..'); // oia-model/
const STORE_DIR = join(ROOT, '.rvf-store');
const RVF = join(STORE_DIR, 'oia.rvf');
const CHUNKS = join(STORE_DIR, 'oia.chunks.json');
const VECS = join(STORE_DIR, 'oia.vectors.json');

const DIM = 384;
const MAX_WORDS = 300;   // cap per chunk
const OVERLAP = 40;      // word overlap when a section is windowed
const BATCH = 32;        // embed batch size

const SKIP_DIRS = new Set(['.git', 'node_modules', '.rvf-store', '.claude-flow', '.github']);

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    if (SKIP_DIRS.has(name)) continue;
    const p = join(dir, name);
    const st = statSync(p);
    if (st.isDirectory()) walk(p, out);
    else if (name.toLowerCase().endsWith('.md')) out.push(p);
  }
  return out;
}

// Split a markdown file into sections by heading, windowing long sections.
function chunkFile(text) {
  const lines = text.split(/\r?\n/);
  const sections = [];
  let heading = '(top)';
  let buf = [];
  const flush = () => {
    const body = buf.join('\n').trim();
    if (body) sections.push({ heading, body });
    buf = [];
  };
  for (const line of lines) {
    const m = /^(#{1,6})\s+(.*)$/.exec(line);
    if (m) { flush(); heading = m[2].trim(); }
    else buf.push(line);
  }
  flush();
  // window long sections by words
  const chunks = [];
  for (const s of sections) {
    const words = s.body.split(/\s+/).filter(Boolean);
    if (words.length <= MAX_WORDS) {
      chunks.push({ heading: s.heading, text: s.body });
    } else {
      for (let i = 0; i < words.length; i += (MAX_WORDS - OVERLAP)) {
        chunks.push({ heading: s.heading, text: words.slice(i, i + MAX_WORDS).join(' ') });
      }
    }
  }
  return chunks;
}

async function main() {
  console.log('── rvf-index: building oia-model .rvf store ──');
  const files = walk(ROOT).sort();
  console.log(`  ${files.length} markdown files`);

  // 1. chunk
  const records = []; // {id, file, heading, text}
  for (const f of files) {
    const rel = f.slice(ROOT.length).replace(/^\//, '');
    for (const c of chunkFile(readFileSync(f, 'utf8'))) {
      if (c.text.replace(/\s+/g, ' ').trim().length < 12) continue; // drop trivial
      records.push({ id: records.length, file: rel, heading: c.heading, text: c.text });
    }
  }
  console.log(`  ${records.length} chunks`);

  // 2. embed (context-prefixed so file+heading inform the vector), batched, model loaded once
  const vectors = [];
  for (let i = 0; i < records.length; i += BATCH) {
    const slice = records.slice(i, i + BATCH);
    const texts = slice.map(r => `${r.file} :: ${r.heading}\n${r.text}`);
    const out = await embedBatch(texts);
    for (let j = 0; j < slice.length; j++) {
      vectors.push({ id: slice[j].id, vector: out[j].embedding });
    }
    process.stdout.write(`\r  embedded ${Math.min(i + BATCH, records.length)}/${records.length}`);
  }
  console.log('');

  // 3. write sidecars
  if (existsSync(STORE_DIR)) rmSync(STORE_DIR, { recursive: true, force: true });
  mkdirSync(STORE_DIR, { recursive: true });
  const sidecar = {};
  for (const r of records) {
    sidecar[r.id] = {
      file: r.file,
      heading: r.heading,
      preview: r.text.replace(/\s+/g, ' ').slice(0, 200),
      text: r.text,
    };
  }
  writeFileSync(CHUNKS, JSON.stringify(sidecar));
  writeFileSync(VECS, JSON.stringify(vectors));
  console.log(`  wrote ${CHUNKS.split('/').pop()} + ${VECS.split('/').pop()}`);

  // 4. build the .rvf store via the canonical CLI
  const ruv = (args) => execFileSync('ruvector', args, { stdio: ['ignore', 'pipe', 'pipe'] }).toString();
  ruv(['rvf', 'create', RVF, '-d', String(DIM), '-m', 'cosine']);
  ruv(['rvf', 'ingest', RVF, '-i', VECS]);
  const status = ruv(['rvf', 'status', RVF]);
  console.log('── store built ──');
  console.log(status.split('\n').filter(l => !/integrity check|Skipped helper/.test(l)).join('\n'));
}

main().catch(e => { console.error('\nrvf-index failed:', e.message); process.exit(1); });
