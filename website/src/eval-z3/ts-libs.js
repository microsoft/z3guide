// this file defines a map from file names to their contents
// for all of TypeScripts built-in type definitions (except the DOM)
// as well as the typedefs for z3-solver
// you can just run it from node,
// but because it needs the file system,
// it has to be run at build time for the web-distributable bundle

'use strict';
let fs = require('fs');
let path = require('path');
let ts = require('typescript');
let { createMinifier } = require('dts-minify');

let dtsMinfier = createMinifier(ts);
let files = {};

// add typescript's internal library definitions
let tslibPath = path.join(__dirname, '../../node_modules/typescript/lib');
for (let lib of fs.readdirSync(tslibPath)) {
  if (!/^lib\..*\.d\.ts$/.test(lib) || lib.includes('.dom.')) {
    continue;
  }
  let contents = fs.readFileSync(path.join(tslibPath, lib), 'utf8');
  files[lib.split('/').at(-1)] = dtsMinfier.minify(contents);
}

// add z3-solver definitions
let z3Name = '/node_modules/z3-solver/build';
let z3Path = path.join(__dirname, '../..', z3Name);
(function addZ3(dirPath, dirName) {
  for (let ent of fs.readdirSync(dirPath, { withFileTypes: true })) {
    let entPath = path.join(dirPath, ent.name);
    let entName = path.join(dirName, ent.name);
    if (ent.isFile() && ent.name.endsWith('.d.ts')) {
      let contents = fs.readFileSync(entPath, 'utf8');
      files[entName] = dtsMinfier.minify(contents);
    } else if (ent.isDirectory()) {
      addZ3(entPath, entName);
    }
  }
})(z3Path, z3Name);

module.exports = files;
