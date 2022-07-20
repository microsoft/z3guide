### Run Z3 in JS bindings

```z3-js
const x = Int.const('x');

const solver = new Solver();
solver.add(And(x.ge(0), x.le(9)));
console.log(await solver.check());
```