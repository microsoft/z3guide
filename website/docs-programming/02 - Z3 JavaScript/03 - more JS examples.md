# Examples from the JS bindings unit test

:::warning 
Type checking for Z3-typed function parameters messes up with how we process JS/TS inputs, so for now we don't include any top-level functions that include such parameters.
:::

```z3-js
// proves x = y implies g(x) = g(y)

const solver = new Z3.Solver();
const sort = Z3.Int.sort();
const x = Z3.Int.const('x');
const y = Z3.Int.const('y');
const g = Z3.Function.declare('g', sort, sort);

const conjecture = Z3.Implies(x.eq(y), g.call(x).eq(g.call(y)));
solver.add(Z3.Not(conjecture));
await solver.check(); // unsat
```

```z3-js
// disproves that x = y implies g(g(x)) = g(y)

const solver = new Z3.Solver();
const sort = Z3.Int.sort();
const x = Z3.Int.const('x');
const y = Z3.Int.const('y');
const g = Z3.Function.declare('g', sort, sort);
const conjecture = Z3.Implies(x.eq(y), g.call(g.call(x)).eq(g.call(y)));
solver.add(Z3.Not(conjecture));
await solver.check(); //sat
```

```z3-js
// proves De Morgan's Law
const solver = new Z3.Solver();
const [x, y] = [Z3.Bool.const('x'), Z3.Bool.const('y')];
const conjecture = Z3.Eq(Z3.Not(Z3.And(x, y)), Z3.Or(Z3.Not(x), Z3.Not(y)));
solver.add(Z3.Not(conjecture));
await solver.check(); // unsat
```

```z3-js
// finds a model
const solver = new Z3.Solver();
const x = Z3.Int.const('x');
const y = Z3.Int.const('y');

solver.add(x.ge(1)); // x >= 1
solver.add(y.lt(x.add(3))); // y < x + 3

await solver.check(); // sat

const model = solver.model();
await model.sexpr();
```

```z3-js
// solves sudoku
function toSudoku(data: string): (number | null)[][] {
    const cells: (number | null)[][] = Array.from({ length: 9 }, () => Array.from({ length: 9 }, () => null));

    const lines = data.trim().split('\n');
    for (let row = 0; row < 9; row++) {
        const line = lines[row].trim();
        for (let col = 0; col < 9; col++) {
            const char = line[col];
            if (char !== '.') {
                cells[row][col] = Number.parseInt(char);
            }
        }
    }
    return cells;
}

const INSTANCE = toSudoku(`
....94.3.
...51...7
.89....4.
......2.8
.6.2.1.5.
1.2......
.7....52.
9...65...
.4.97....
`);

const EXPECTED = toSudoku(`
715894632
234516897
689723145
493657218
867231954
152489763
376148529
928365471
541972386
`);


const cells = [];
// 9x9 matrix of integer variables
for (let i = 0; i < 9; i++) {
    const row = [];
    for (let j = 0; j < 9; j++) {
        row.push(Z3.Int.const(`x_${i}_${j}`));
    }
    cells.push(row);
}

const solver = new Z3.Solver();

// each cell contains a value 1<=x<=9
for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
        solver.add(cells[i][j].ge(1), cells[i][j].le(9));
    }
}

// each row contains a digit only once
for (let i = 0; i < 9; i++) {
    solver.add(Z3.Distinct(...cells[i]));
}

// each column contains a digit only once
for (let j = 0; j < 9; j++) {
    const column = [];
    for (let i = 0; i < 9; i++) {
        column.push(cells[i][j]);
    }
    solver.add(Z3.Distinct(...column));
}

// each 3x3 contains a digit at most once
for (let iSquare = 0; iSquare < 3; iSquare++) {
    for (let jSquare = 0; jSquare < 3; jSquare++) {
        const square = [];

        for (let i = iSquare * 3; i < iSquare * 3 + 3; i++) {
            for (let j = jSquare * 3; j < jSquare * 3 + 3; j++) {
                square.push(cells[i][j]);
            }
        }

        solver.add(Z3.Distinct(...square));
    }
}

for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
        const digit = INSTANCE[i][j];
        if (digit !== null) {
            solver.add(cells[i][j].eq(digit));
        }
    }
}

await solver.check(); // sat
```

```z3-js
// numerals 1
const n1 = Z3.Real.val('1/2');
const n2 = Z3.Real.val('0.5');
const n3 = Z3.Real.val(0.5);

const conjecture = Z3.And(n1.eq(n2), n1.eq(n3));

const solver = new Z3.Solver();
solver.add(Z3.Not(conjecture));
await solver.check();
```

```z3-js
// numerals 2
const n4 = Z3.Real.val('-1/3');
const n5 = Z3.Real.val('-0.3333333333333333333333333333333333');

const conjecture = n4.neq(n5);

const solver = new Z3.Solver();
solver.add(Z3.Not(conjecture));
await solver.check();
```

TODO: setParam doesn't work with how with process JS inputs
```z3-js
// non-linear arithmetic

setParam('pp.decimal', true);
setParam('pp.decimal_precision', 20);

const x = Z3.Real.const('x');
const y = Z3.Real.const('y');
const z = Z3.Real.const('z');

const solver = new Z3.Solver();
solver.add(x.mul(x).add(y.mul(y)).eq(1)); // x^2 + y^2 == 1
solver.add(x.mul(x).mul(x).add(z.mul(z).mul(z)).lt('1/2')); // x^3 + z^3 < 1/2

await solver.check(); // sat
```

TODO: seems that we can only get the final output, not intermediate ones
```z3-js
// bitvectors: simple proofs
const x = Z3.BitVec.const('x', 32);

const sConj = x.sub(10).sle(0).eq(x.sle(10));
const sSolver = new Z3.Solver();
sSolver.add(sConj);
await sSolver.check(); // sat

const sModel = sSolver.model();
sModel.get(x) // signed

const uConj = x.sub(10).ule(0).eq(x.ule(10));
const uSolver = new Z3.Solver();
uSolver.add(uConj);
await uSolver.check(); // sat

const uModel = uSolver.model();
uModel.get(x) // unsigned
```


```z3-js
// solves an equation
const x = Z3.BitVec.const('x', 32);
const y = Z3.BitVec.const('y', 32);

const solver = new Z3.Solver();
const conjecture = x.xor(y).sub(103).eq(x.mul(y));
solver.add(conjecture);
await solver.check(); // sat

const model = solver.model();
// need the following cast for `asSignedValue` to work
const xSol = model.get(x) as BitVecNum;
const ySol = model.get(y) as BitVecNum;

Z3.isBitVecVal(xSol) && Z3.isBitVecVal(ySol); // true

// TODO: fix the remaining lines
const xv = xSol.asSignedValue();
const yv = ySol.asSignedValue();

// this solutions wraps around so we need to check using modulo
(xv ^ yv) - 103n === (xv * yv) % 2n ** 32n; // true
```

```z3-js
// AstVector
const solver = new Z3.Solver();

const vector = new Z3.AstVector<Arith>() as AstVector<string, Arith>;
for (let i = 0; i < 5; i++) {
    vector.push(Z3.Int.const(`int__${i}`));
}

const length = vector.length();
for (let i = 0; i < length; i++) {
    solver.add((vector.get(i) as Arith).gt(1));
}

await solver.check(); // sat
```