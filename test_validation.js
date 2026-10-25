const fs = require('fs');
const path = require('path');

const ROOT = __dirname;

const REQUIRED_PAGES = [
  'index.html',
  'category.html',
  'shop.html',
  'product.html',
  'cart.html',
  'checkout.html',
  'order.html',
  'email-preview.html',
  'track.html',
  'login.html',
  'signup.html',
  'explore.html'
];

const REQUIRED_STYLES = [
  'css/styles.css',
  'css/shop.css',
  'css/auth.css'
];

const REQUIRED_SCRIPTS = [
  'js/emblem-data.js',
  'js/main.js',
  'js/shop-data.js',
  'js/shop.js',
  'js/auth.js'
];

let totalChecks = 0;
let passedChecks = 0;
let failedChecks = 0;

function check(desc, condition) {
  totalChecks++;
  if (condition) {
    passedChecks++;
    console.log(`  [PASS] ${desc}`);
  } else {
    failedChecks++;
    console.error(`  [FAIL] ${desc}`);
  }
}

console.log('--- Mahira Select Validation & QA Test Suite ---\n');

console.log('1. Checking Core Pages Existence & Size:');
for (const p of REQUIRED_PAGES) {
  const filePath = path.join(ROOT, p);
  const exists = fs.existsSync(filePath);
  const size = exists ? fs.statSync(filePath).size : 0;
  check(`${p} exists and is populated (${size} bytes)`, exists && size > 1000);
}

console.log('\n2. Checking Stylesheets:');
for (const s of REQUIRED_STYLES) {
  const filePath = path.join(ROOT, s);
  const exists = fs.existsSync(filePath);
  const size = exists ? fs.statSync(filePath).size : 0;
  check(`${s} exists and has valid size (${size} bytes)`, exists && size > 5000);
}

console.log('\n3. Checking JavaScript Architecture:');
for (const j of REQUIRED_SCRIPTS) {
  const filePath = path.join(ROOT, j);
  const exists = fs.existsSync(filePath);
  const size = exists ? fs.statSync(filePath).size : 0;
  check(`${j} exists and has valid size (${size} bytes)`, exists && size > 2000);
}

console.log('\n4. Auditing Asset Integrity across all pages:');
const missingAssets = new Set();
let referencedAssetCount = 0;

for (const p of REQUIRED_PAGES) {
  const content = fs.readFileSync(path.join(ROOT, p), 'utf-8');
  const assetRegex = /assets\/[a-zA-Z0-9_\-\.]+\.(?:jpg|jpeg|png|svg|webp)/gi;
  let match;
  while ((match = assetRegex.exec(content)) !== null) {
    referencedAssetCount++;
    const assetPath = path.join(ROOT, match[0]);
    if (!fs.existsSync(assetPath)) {
      missingAssets.add(match[0]);
    }
  }
}

// Also check shop-data.js
const shopDataContent = fs.readFileSync(path.join(ROOT, 'js/shop-data.js'), 'utf-8');
const shopDataAssetRegex = /(?:s\d-[a-zA-Z0-9_\-\.]+|women-[a-zA-Z0-9_\-\.]+|f-[a-zA-Z0-9_\-\.]+)\.jpg/gi;
let m;
while ((m = shopDataAssetRegex.exec(shopDataContent)) !== null) {
  referencedAssetCount++;
  const assetPath = path.join(ROOT, 'assets', m[0]);
  if (!fs.existsSync(assetPath)) {
    missingAssets.add('assets/' + m[0]);
  }
}

check(`All ${referencedAssetCount} referenced image assets exist on disk (Missing: ${missingAssets.size})`, missingAssets.size === 0);
if (missingAssets.size > 0) {
  console.error('Missing assets:', Array.from(missingAssets));
}

console.log('\n5. Checking Documentation Suite:');
const docs = [
  'PRD.md',
  'DESIGN_SYSTEM.md',
  'ARCHITECTURE.md',
  'DATABASE.md',
  'SECURITY.md',
  'CODE_STYLE.md',
  'TESTING.md',
  'AGENTS.md',
  'UX_FLOWS.md',
  'API.md'
];

for (const doc of docs) {
  const docPath = path.join(ROOT, doc);
  const exists = fs.existsSync(docPath);
  check(`Documentation ${doc} present`, exists);
}

console.log(`\n==================================================`);
console.log(`Summary: ${passedChecks}/${totalChecks} checks passed. ${failedChecks} failed.`);
console.log(`==================================================\n`);

if (failedChecks > 0) {
  process.exit(1);
} else {
  console.log('All automated quality and integrity gates passed successfully!');
}
