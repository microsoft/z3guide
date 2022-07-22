
# This file is to contain more tests


including samples for which there are python variants for side-to-side learning


```z3-js
const x = Z3.Int.const('x');

const solver = new Z3.Solver();
solver.add(Z3.And(x.ge(10), x.le(9)));
await solver.check();
```
