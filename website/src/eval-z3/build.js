'use strict';
let path = require('path');
let esbuild = require('esbuild');
let libs = require('./ts-libs.js');

esbuild
  .build({
    entryPoints: [path.join(__dirname, 'eval-z3.ts')],
    bundle: true,
    minify: true,
    globalName: 'evalZ3Mod',
    outfile: path.join(__dirname, '../../static/eval-z3.js'),
    external: ['fs'], // TODO
    define: {
      TS_LIBS: JSON.stringify(libs),
    },
    plugins: [],
  })
  .catch(() => process.exit(1));

// build a non-bundled copy for use from node, during the docusaurus build phase
esbuild
  .build({
    entryPoints: [path.join(__dirname, 'eval-z3.ts')],
    format: 'cjs',
    platform: 'node',
    bundle: false,
    minify: false,
    outfile: path.join(__dirname, '../../built-scripts/eval-z3.js'),
    define: {
      TS_LIBS: JSON.stringify(libs),
    },
    plugins: [],
  })
  .catch(() => process.exit(1));
