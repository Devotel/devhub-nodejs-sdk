#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Check required files exist
const requiredFiles = [
  'dist/esm/index.js',
  'dist/esm/index.d.ts',
  'dist/cjs/index.js',
  'dist/cjs/index.d.ts',
  'dist/cjs/package.json'
];

let allFilesExist = true;

requiredFiles.forEach(file => {
  if (!fs.existsSync(file)) {
    console.error(`❌ Missing: ${file}`);
    allFilesExist = false;
  } else {
    console.log(`✅ Found: ${file}`);
  }
});

// Check CJS package.json has correct type
const cjsPackage = JSON.parse(fs.readFileSync('dist/cjs/package.json', 'utf8'));
if (cjsPackage.type !== 'commonjs') {
  console.error('❌ CJS package.json missing type: commonjs');
  allFilesExist = false;
} else {
  console.log('✅ CJS package.json has correct type');
}

if (!allFilesExist) {
  process.exit(1);
}

console.log('✅ Build validation passed');