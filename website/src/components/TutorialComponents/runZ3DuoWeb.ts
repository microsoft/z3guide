import loadZ3 from './loadZ3';

import { Z3_error_code, } from 'z3-solver';

export default async function runZ3DuoWeb(user_input: string, secret_input: string): Promise<string> {

    // init z3
    const z3p = loadZ3();

    const { Context, Z3: Z3Core } = await z3p;
    let Z3 = Context('main');

    let output = '';
    let error = '';
    let outputObj;

    const throwIfError = (ctxPtr) => {
        const errorCode = Z3Core.get_error_code(ctxPtr);
        console.log(ctxPtr)
        console.log({errorCode})
        if (Z3Core.get_error_code(ctxPtr) !== Z3_error_code.Z3_OK) {
            throw new Error(Z3Core.get_error_msg(ctxPtr, Z3Core.get_error_code(ctxPtr)));
        }
    }

    try {
        const s1 = new Z3.Solver();
        const s2 = new Z3.Solver();
        s1.fromString(user_input);
        s2.fromString(secret_input);

        throwIfError(s1.ptr);
        throwIfError(s2.ptr);

        const not_user = Z3.Not(Z3.And(s1.assertions()));
        const not_secret = Z3.Not(Z3.And(s2.assertions()));
        s2.add(not_user);
        s1.add(not_secret);

        const user_not_secret = await s1.check();
        const secret_not_user = await s2.check();

        const sat = (s: string) => s === 'sat';

        if (sat(secret_not_user) && sat(user_not_secret)) {
            outputObj = {
                model1: s2.model().sexpr(),
                res1: {
                    secret: true,
                    user: false,
                },
                model2: s1.model().sexpr(),
                res2: {
                    user: true,
                    secret: false
                }
            };
        } else if (sat(secret_not_user)) {
            outputObj = {
                model1: s2.model().sexpr(),
                res1: {
                    secret: true,
                    user: false,
                }
            };
        } else if (sat(user_not_secret)) {
            outputObj = {
                model1: s1.model().sexpr(),
                res1: {
                    user: true,
                    secret: false
                }
            };

        } else { // both unsat
            output = `You got the right formula! Congratulations!`;
        }
    } catch (e) {
        // error with running z3
        error = e.message ?? 'Error message is empty';
        console.log({error});
    }

    const finalOutput = outputObj ? JSON.stringify(outputObj) : output;

    // we are guaranteed to have non-undefined output and error
    return JSON.stringify({ output: finalOutput, error: error });
}
