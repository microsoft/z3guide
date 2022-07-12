import { initZ3 } from 'z3-solver/build/z3-built.js';
import z3Module from 'z3-solver/build/z3-built.wasm'

// Since webpack will change the name and potentially the path of the
// `.wasm` file, we have to provide a `locateFile()` hook to redirect
// to the appropriate URL.
// More details: https://kripken.github.io/emscripten-site/docs/api_reference/module.html
const wasm = initZ3({
  locateFile(path) {
    if (path.endsWith(`.wasm`)) {
      return z3Module
    }
    return path
  },
});

export default wasm;