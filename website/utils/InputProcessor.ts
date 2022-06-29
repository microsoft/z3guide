import { readFile, writeFile } from 'fs/promises';
import { createHash, Hash } from 'crypto';
import { init } from 'z3-solver';


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
        const hash = this._hash.update(input).digest('hex');
        const path = `@site/build/solutions/${hash}.json`;
        return this.getOutput(path);
    }

    public async getOutput(path): Promise<{ [key: string]: any }> {
        try {
            const data = await readFile(path, { flag: 'r' });
            return JSON.parse(data.toString());
        } catch (err) {
            // TODO run z3
            const { Z3 } = await init();
            // problem: the typescript bindings don't have an option to take smtlib2 formatted inputs?

            // default output atm
            return {
                status: 1,
                value: "execution failed",
            }
        }
    }
}

