### Run Z3 in JS bindings

```z3-js
const x = Z3.Int.const('x');

const solver = new Z3.Solver();
solver.add(Z3.And(x.ge(0), x.le(9)));
await solver.check();
```