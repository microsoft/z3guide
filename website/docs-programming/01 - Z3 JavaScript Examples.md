---
title: Z3 JavaScript 
sidebar_position: 1
---

The Z3 distribution comes with TypeScript (and therefore JavaScript) bindings for Z3.
In the following we give a few examples of using Z3 through these bindings.
You can run and modify the examples locally in your browser.

## Warmup

We use a collection of basic examples to illustrate the bindings.
The first example is a formula that establishes that there is no number both above 9 and below 10:

```z3-js
const x = Z3.Int.const('x');
Z3.solve(Z3.And(x.ge(10), x.le(9)));
```

We note that the JavaScript bindings wrap z3 expressions into JavaScript options that support methods for building new expressions.
For example, the method `ge` is available on an arithmetic expression `a`. It takes one argument `b` and returns
and expression corresponding to the predicate `a >= b`.
The `Z3.solve` method takes a sequence of predicates and checks if there is a solution. If there is a solution, it returns a model.

## Propositional Logic



Prove De Morgan's Law

```z3-js
const solver = new Z3.Solver();
const [x, y] = [Z3.Bool.const('x'), Z3.Bool.const('y')];
const conjecture = Z3.Eq(Z3.Not(Z3.And(x, y)), Z3.Or(Z3.Not(x), Z3.Not(y)));
Z3.solve(Z3.Not(conjecture))
```

What not to wear? It is well-known that developers of SAT solvers have difficulties looking sharp.
They like to wear some combination of shirt and tie, but can't wear both. What should a SAT solver developer wear?

```z3-js
const [tie, shirt] = [Z3.Bool.const('tie'), Z3.Bool.const('shirt')];
Z3.solve(Z3.Or(tie, shirt), Z3.Implies(tie, shirt), Z3.Or(Z3.Not(tie), Z3.Not(shirt)))
```

## Integer Arithmetic

solve `x > 2 and y < 10 and x + 2y = 7`

```z3-js
const x = Z3.Int.const('x');
const y = Z3.Int.const('y');
Z3.solve(x.gt(2), y.lt(10), x.add(y.mul(2)).eq(7))
```

### Dog, cat mouse

Given 100 dollars, the puzzle asks if it is possible to buy 100 animals
based on their prices that are 15, 1, and 0.25 dollars, respectively.

```z3-js

// Create 3 integer variables

const dog = Z3.Int.const('dog')
const cat = Z3.Int.const('cat')
const mouse = Z3.Int.const('mouse')

Z3.solve(
// there is at least one dog, one cat, and one mouse
   dog.ge(1), cat.ge(1), mouse.ge(1),
   
// we want to buy 100 animals
   dog.add(cat.add(mouse)).eq(100),
   
// We have 100 dollars (10000 cents):
// dogs cost 15 dollars (1500 cents),
// cats cost 1 dollar (100 cents), and
// mice cost 25 cents
(dog.mul(1500)).add(cat.mul(100)).add(mouse.mul(25)).eq(10000));

```

## Uninterpreted Functions

The method `call` is used to build expressions by applying the function node to arguments.

### Prove `x = y implies g(x) = g(y)`

```z3-js
const sort = Z3.Int.sort();
const x = Z3.Int.const('x');
const y = Z3.Int.const('y');
const g = Z3.Function.declare('g', sort, sort);
const conjecture = Z3.Implies(x.eq(y), g.call(x).eq(g.call(y)));
Z3.solve(Z3.Not(conjecture));
```

### Disprove `x = y implies g(g(x)) = g(y)`

we illustrate the use of the `Solver` object in the following example. Instead of calling `Z3.solve` 
we here create a solver object and add assertions to it. The `solver.check()` method is used to check
satisfiability (we expect the result to be `sat` for this example). The method `solver.model()` is used to retrieve a model.

```z3-js
const solver = new Z3.Solver();
const sort = Z3.Int.sort();
const x = Z3.Int.const('x');
const y = Z3.Int.const('y');
const g = Z3.Function.declare('g', sort, sort);
const conjecture = Z3.Implies(x.eq(y), g.call(g.call(x)).eq(g.call(y)));
solver.add(Z3.Not(conjecture));
await solver.check()
solver.model()
```


### Prove `x = y implies g(x) = g(y)`

```z3-js
const sort = Z3.Int.sort();
const x = Z3.Int.const('x');
const y = Z3.Int.const('y');
const g = Z3.Function.declare('g', sort, sort);
const conjecture = Z3.Implies(x.eq(y), g.call(x).eq(g.call(y)));
Z3.solve(Z3.Not(conjecture));
```

### Disprove that `x = y implies g(g(x)) = g(y)`

```z3-js
const sort = Z3.Int.sort();
const x = Z3.Int.const('x');
const y = Z3.Int.const('y');
const g = Z3.Function.declare('g', sort, sort);
const conjecture = Z3.Implies(x.eq(y), g.call(g.call(x)).eq(g.call(y)));
Z3.solve(Z3.Not(conjecture));
```

## Solve sudoku

The popular Sudoko can be solved. 

```z3-js
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

const is_sat = await solver.check(); // sat
const model = solver.model() as Model
var buffer = ""

for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
        const v = model.eval(cells[i][j])
        buffer += `${v}`
    }
    buffer += "\n"
}
buffer
```

The encoding used in the following example uses arithmetic. 
It works here, but is not the only possible encoding approach. 
You can also use bit-vectors for the cells. It is generally better
to use bit-vectors for finite domain problems in z3.

## Arithmetic over Reals

You can create constants ranging over reals from strings that use fractions, decimal notation and from floating point numbers.

```z3-js
const n1 = Z3.Real.val('1/2');
const n2 = Z3.Real.val('0.5');
const n3 = Z3.Real.val(0.5);

const conjecture = Z3.And(n1.eq(n2), n1.eq(n3));
Z3.solve(Z3.Not(conjecture));
```

Z3 uses arbitrary precision arithmetic, so decimal positions are not truncated when you use strings to represent real numerals.

```z3-js
const n4 = Z3.Real.val('-1/3');
const n5 = Z3.Real.val('-0.3333333333333333333333333333333333');

Z3.solve(n4.eq(n5));
```

## Non-linear arithmetic

Z3 uses a decision procedure for non-linear arithmetic over reals. 
It is based on Cylindric Algebraic Decomposition. Solutions to non-linear
arithmetic formulas are no longer necessarily rational. They are represented
as _algebraic numbers_ in general and can be displayed with any number of
decimal position precision.

```z3-js
setParam('pp.decimal', true);
setParam('pp.decimal_precision', 80);

const x = Z3.Real.const('x');
const y = Z3.Real.const('y');
const z = Z3.Real.const('z');

const solver = new Z3.Solver();
solver.add(x.mul(x).add(y.mul(y)).eq(1)); // x^2 + y^2 == 1
solver.add(x.mul(x).mul(x).add(z.mul(z).mul(z)).lt('1/2')); // x^3 + z^3 < 1/2

await solver.check(); // sat
solver.model()
```

## Bit-vectors

Unlike in programming languages, there is no distinction between 
signed and unsigned bit-vectors. Instead the API supports operations
that have different meaning depending on whether a bit-vector is treated
as a signed or unsigned numeral. These are signed comparison and signed division, remainder operations.

In the following we illustrate the use of signed and unsigned less-than-or-equal.

```z3-js
const x = Z3.BitVec.const('x', 32);

const sConj = x.sub(10).sle(0).eq(x.sle(10));
const sSolver = new Z3.Solver();
sSolver.add(sConj);
await sSolver.check(); // sat

const sModel = sSolver.model();


const uConj = x.sub(10).ule(0).eq(x.ule(10));
const uSolver = new Z3.Solver();
uSolver.add(uConj);
await uSolver.check(); // sat

const uModel = uSolver.model();
[uModel.get(x), sModel.get(x)] // unsigned, signed
```

It is easy to write formulas that mix bit-wise and arithmetic operations over bit-vectors.

```z3-js
const x = Z3.BitVec.const('x', 32);
const y = Z3.BitVec.const('y', 32);

const solver = new Z3.Solver();
const conjecture = x.xor(y).sub(103).eq(x.mul(y));
solver.add(conjecture);
const is_sat = await solver.check(); // sat

const model = solver.model();

// need the following cast for `asSignedValue` to work
const xSol = model.get(x) as BitVecNum;
const ySol = model.get(y) as BitVecNum;


const are_vals = Z3.isBitVecVal(xSol) && Z3.isBitVecVal(ySol); // true

const xv = xSol.asSignedValue();
const yv = ySol.asSignedValue();

// this solutions wraps around so we need to check using modulo
const is_eq = (xv ^ yv) - 103n === (xv * yv) % 2n ** 32n; // true

` is-sat: ${is_sat} solutions are values: ${are_vals} satisfy equality: ${is_eq}`
```

## Using Z3 objects wrapped in JavaScript

The following example illustrates the use of AstVector

```z3-js
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
