#!/usr/bin/env node
// rvf-search.mjs — semantic search over the oia-model .rvf store.
//
// Embeds the query with ruvector's own ONNX MiniLM (same model that built the store),
// runs `ruvector rvf query`, and maps the returned ids back through the sidecar to
// show file / heading / preview + score.
//
// Usage:  node scripts/rvf-search.mjs "your question"  [-k 8]
import { createRequire } from 'module';
import { execFileSync } from 'child_process';
import { readFileSync, existsSync, rmSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';

const require = createRequire(import.meta.url);
const GROOT = execFileSync('npm', ['root', '-g']).toString().trim();

const ROOT = join(fileURLToPath(new URL('.', import.meta.url)), '..');
const STORE_DIR = join(ROOT, '.rvf-store');
const RVF = join(STORE_DIR, 'oia.rvf');
const CHUNKS = join(STORE_DIR, 'oia.chunks.json');

// ---- args
const argv = process.argv.slice(2);
let k = 8;
const ki = argv.findIndex(a => a === '-k' || a === '--k');
if (ki >= 0) { k = parseInt(argv[ki + 1], 10) || 8; argv.splice(ki, 2); }
const query = argv.join(' ').trim();
if (!query) { console.error('usage: node scripts/rvf-search.mjs "your question" [-k 8]'); process.exit(1); }
if (!existsSync(RVF)) { console.error('store missing — run: node scripts/rvf-index.mjs'); process.exit(1); }

const sidecar = JSON.parse(readFileSync(CHUNKS, 'utf8'));

// ---- embed query (silence the embedder's stdout chatter so our output stays clean)
const _log = console.log; console.log = () => {};
const { embedBatch } = require(join(GROOT, 'ruvector', 'dist', 'index.js'));
const [{ embedding }] = await embedBatch([query]);
console.log = _log;

// ---- query the .rvf store (retry once past a stale writer lock)
function runQuery() {
  return execFileSync('ruvector', ['rvf', 'query', RVF, '-v', embedding.join(','), '-k', String(k)],
    { stdio: ['ignore', 'pipe', 'pipe'] }).toString();
}
let out;
try {
  out = runQuery();
} catch (e) {
  const msg = (e.stderr || e.stdout || '').toString();
  const lock = join(STORE_DIR, 'oia.rvf.lock');
  if (/LockHeld/.test(msg) && existsSync(lock)) { rmSync(lock, { force: true }); out = runQuery(); }
  else throw e;
}

// ---- parse `  1. id=30  dist=0.847860` and map back to chunks
const hits = [];
for (const line of out.split('\n')) {
  const m = /id=(\d+)\s+dist=([\d.]+)/.exec(line);
  if (m) hits.push({ id: m[1], dist: parseFloat(m[2]) });
}

const total = Object.keys(sidecar).length;
console.log(`\n🔎  "${query}"   (top ${hits.length} of ${total} chunks · cosine distance, lower = closer)\n`);
for (let i = 0; i < hits.length; i++) {
  const c = sidecar[hits[i].id] || {};
  console.log(`${String(i + 1).padStart(2)}. [d ${hits[i].dist.toFixed(3)}]  ${c.file}  ›  ${c.heading}`);
  console.log(`     ${(c.preview || '').replace(/\n/g, ' ')}`);
}
console.log('');
