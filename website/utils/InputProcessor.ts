import { readFile, writeFile } from 'fs/promises';
import { createHash, Hash } from 'crypto';
import { init } from 'z3-solver/build/wrapper';
import initZ3 from 'z3-solver/build/z3-built';
// reference: https://github.com/ViRb3/z3-wasm/blob/master/src/main.js


// TODO: Where should I put it and how to communicate with the remark plugin?
export default class InputProcessor {
    private _hash: Hash = createHash('sha1');
    constructor() {
    }

    /**
     * Check if hash exists
     */
    public async process(input: string): Promise<{ [key: string]: any }> {
        // hash via sha1
        return this.getOutput(input);
    }

    public async getOutput(input: string): Promise<{ [key: string]: any }> {
        const hash = this._hash.update(input).digest('hex');
        const path = `@site/build/solutions/${hash}.json`;
        try {
            const data = await readFile(path, { flag: 'r' });
            return JSON.parse(data.toString());
        } catch (err) {
            // TODO run z3
            // code based on https://github.com/ViRb3/z3-wasm/blob/master/src/main.js
            const mod = async () =>
                await initZ3({
                    locateFile: (f) => f,
                    mainScriptUrlOrBlob: "z3-built.js",
                });
            const { Z3 } = await init(mod);

            const cfg = Z3.mk_config();
            const ctx = Z3.mk_context(cfg);
            Z3.del_config(cfg);
            var output = "";
            for (const item of input.split("\n")) {
                // TODO: specify timeout with spawn?
                output = output.concat(await Z3.eval_smtlib2_string(ctx, item));
            }

            const result = {
                status: 0,
                output: output
            };

            // TODO: check sat / unsat / timeout


            // write to file
            try {
                await writeFile(path, JSON.stringify(result));
            } catch (error) {
                throw error;
            }

            // default output atm
            return result;
        }
    }
}

