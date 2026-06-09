export default async function loadZ3() {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const z3 = require('z3-solver');
    // init z3
    const z3p = window.z3Promise || (() => {
        return window.z3Promise = z3.init();
    })();
    return z3p;
}
