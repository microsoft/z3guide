
# This file is to contain more tests


including samples for which there are python variants for side-to-side learning


```z3-js
const x = Z3.Int.const('x');

const solver = new Z3.Solver();
solver.add(Z3.And(x.ge(10), x.le(9)));
await solver.check();
```



Porting guide:

```
x = Int('x')
y = Int('y')
solve(x > 2, y < 10, x + 2*y == 7)
```

```z3-js
const x = Z3.Int.const('x')
const y = Z3.Int.const('y')
solve(x.gt(2), y.lt(10), x.add(y.mul(2)).eq(7))
```
