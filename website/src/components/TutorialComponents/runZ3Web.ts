import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
declare global {
    interface Window { z3Promise: any } // use any to escape typechecking
}

// function loadZ3(callback: () => void) {

//     // }
// };

export default async function runZ3Web(input: string): Promise<string> {
    /*
        // load z3
        const callback = () => console.log('z3 loaded');
        const existingScript = document.getElementById('z3-script');
        if (!existingScript) {
            const { siteConfig } = useDocusaurusContext();
            const script = document.createElement('script');
            script.src = `${siteConfig.baseUrl}z3-built.js`;
            script.id = 'z3-script';
            document.head.appendChild(script);
        }
        if (existingScript && callback) callback();
        */

    // init z3
    const z3 = require('z3-solver');
    window.z3Promise = z3.init();
    let { Z3 } = await window.z3Promise;

    // done on every snippet
    const cfg = Z3.mk_config();
    const ctx = Z3.mk_context(cfg);
    Z3.del_config(cfg);

    let output, error = undefined;

    try {
        output = await Z3.eval_smtlib2_string(ctx, input);
    } catch (e) {
        // error with running z3
        error = e.message;
    } finally {
        Z3.del_context(ctx);
    }

    return JSON.stringify({ output: output, error: error });
}