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
    define: {
      TS_LIBS: JSON.stringify(libs),
    },
    plugins: [],
  })
  .catch(() => process.exit(1));
