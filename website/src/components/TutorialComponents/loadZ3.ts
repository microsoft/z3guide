import type { Z3HighLevel, Z3LowLevel } from 'z3-solver';

declare global {
    interface Window { z3Promise: Promise<Z3HighLevel & Z3LowLevel> } // use any to escape typechecking
}

export default async function loadZ3() {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const z3 = require('z3-solver');

    // init z3
    const z3p: Promise<Z3HighLevel & Z3LowLevel> = window.z3Promise || (() => {
        return window.z3Promise = z3.init();
    })();

    return z3p;
}