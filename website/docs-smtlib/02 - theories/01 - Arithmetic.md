--- 
title: Arithmetic
sidebar_position: 1
---

:::info

Z3 supports the theory of arithmetic described in the following places.

>  [**SMTLIB2** standard Integers](https://smt-lib.org/theories-Ints.shtml)

>  [**SMTLIB2** standard Reals](https://smt-lib.org/theories-Reals.shtml)

>  [**SMTLIB2** standard Mixed Int Reals](https://smt-lib.org/theories-Reals_Ints.shtml)

:::

## Basics

Z3 has built-in support for integer and real constants. These two types should not be confused with machine integers (32-bit or 64-bit) and floating point numbers. These two types (sorts) represent the mathematical integers and reals. The command `declare-const` is used to declare integer and real constants.

```z3
(declare-const a Int)
(declare-const b Int)
(declare-const c Int)
(declare-const d Real)
(declare-const e Real)
```


After constants are declared, the user can assert formulas containing that use these constants and arithmetic operators such as +, -, *, etc. The `check-sat` command instructs Z3 to try to find an interpretation for the declared constants that makes all formulas true. The interpretation is basically assigning a number to each constant. If such interpretation exists, we say it is a model for the asserted formulas. The command `get-model` displays the model built by Z3.

```z3
(declare-const a Int)
(declare-const b Int)
(declare-const c Int)
(declare-const d Real)
(declare-const e Real)
(assert (< a (+ b 2)))
(assert (= a (+ (* 2 c) 10)))
(assert (= (+ c b) 1000))
(assert (= d e))
(check-sat)
(get-model)
```

Real constants should contain a decimal point. Unlike most programming languages, Z3 will not convert automatically integers into reals and vice-versa. The function to-real can be used to convert an integer expression into a real one.

```z3
(declare-const a Int)
(declare-const b Int)
(declare-const c Int)
(declare-const d Real)
(declare-const e Real)
(assert (< e (+ (to_real (+ a b)) 2.0)))
(assert (= d (+ (to_real c) 0.5)))
(assert (< a b))
(check-sat)
(get-model)
```

Some operators are chainable. This includes comparison operators such as `<` and `<=`. 

```z3
(declare-const a Int)
(declare-const b Int)
(declare-const c Int)
(assert (< a b c))
(check-sat)
(get-model)
```

We can use mixed constraints to ask questions on how reals behave under rounding.
The following query considers when the sum of two integers, x, y are above a constant `a`, 
while the sum of two reals are below `a`. At the same time the integers x, y are within unit distance
to the integers. 

```z3
(declare-const xR Real)
(declare-const yR Real)
(declare-const x Int)
(declare-const y Int)
(declare-const a Int)

(assert (< (+ xR yR) a))
(assert (> (+ x y) a))
(assert (or (= x xR) (< x xR (+ x 1)) (< (- x 1) xR x)))
(assert (or (= y yR) (< y yR (+ y 1)) (< (- y 1) yR y)))
(check-sat)
(get-model)
```

## Difference Arithmetic

Many problem classes use only limited set of arithmetical constraints. One such class is job-shop scheduling constraints.
Simpler instances can be encoded and solved using SMT, while advanced uses of job shop scheduling problems do not
have efficient encodings directly into arithmetic. For job-shop problems tasks have start time, duration and constraints
specifying whether tasks should not overlap and ordering. To specify ordering and overlap constraints require 
comparing just two time points separated by a constant offset. Comparisons of this form fall within the class
of _difference arithmetic_ constraints. 

```z3
(set-logic QF_IDL) ; optional in Z3
(declare-fun t11 () Int)
(declare-fun t12 () Int)
(declare-fun t21 () Int)
(declare-fun t22 () Int)
(declare-fun t31 () Int)
(declare-fun t32 () Int)

(assert (and (>= t11 0) (>= t12 (+ t11 2)) (<= (+ t12 1) 8)))
(assert (and (>= t21 0) (>= t22 (+ t21 3)) (<= (+ t22 1) 8)))
(assert (and (>= t31 0) (>= t32 (+ t31 2)) (<= (+ t32 3) 8)))
(assert (or (>= t11 (+ t21 3)) (>= t21 (+ t11 2))))
(assert (or (>= t11 (+ t31 2)) (>= t31 (+ t11 2))))
(assert (or (>= t21 (+ t31 2)) (>= t31 (+ t21 3))))
(assert (or (>= t12 (+ t22 1)) (>= t22 (+ t12 1))))
(assert (or (>= t12 (+ t32 3)) (>= t32 (+ t12 1))))
(assert (or (>= t22 (+ t32 3)) (>= t32 (+ t22 1))))
(check-sat)
(get-model)
```

In the  example we model three jobs, each job has two tasks 
to be completed by two workers. Thus, there are six variables for every task/worker combination. 
The start time of job 1 on worker 2 is given by `t12`. It has duration 1, so has to start at least one unit before 
the completion deadline 8. It follows task `t11` which has duration 2 and cannot overlap with other tasks on work station 2.

## Non-linear arithmetic


We say a formula is nonlinear if it contains expressions of the form (* t s) where t and s are not numbers. Nonlinear real arithmetic is very expensive, and Z3 is not complete for this kind of formula. The command check-sat may return unknown or loop. Nonlinear integer arithmetic is undecidable there is no procedure that is correct and terminates (for every input) with a sat or unsat answer. Yes, it is impossible to build such procedure. Note that, this does not prevent Z3 from returning an answer for many nonlinear problems. The real limit is that there will always be a nonlinear integer arithmetic formula that it will fail produce an answer.

```z3
(declare-const a Int)
(assert (< (* a a) 3))
(check-sat)
(get-model)

(echo "Z3 does not always find solutions to non-linear problems")
(declare-const b Real)
(declare-const c Real)
(assert (= (+ (* b b b) (sin (* b c))) 7))
(check-sat)

(echo "yet it can show unsatisfiability for some nontrivial nonlinear problems...")
(declare-const x Real)
(declare-const y Real)
(declare-const z Real)
(assert (= (* x x) (+ x 2.0)))
(assert (= (* x y) x))
(assert (= (* (- y 1.0) z) 1.0))
(check-sat)

(reset)
(echo "When presented only non-linear polynomial constraints over reals, Z3 uses a specialized complete solver")
(declare-const b Real)
(declare-const c Real)
(assert (= (+ (* b b b) (* b c)) 3.0))
(check-sat)
(get-model)
```

## Transcendental Arithmetic

:::warning Experimental support in Z3 5.3

Transcendental reasoning is incomplete and is not covered by the complete
polynomial real-arithmetic procedure described above. Solver selection matters:
in Z3 5.3.1 the default `QF_NTA` route can return `sat` for an assertion
`(<= (exp x) 0.0)`, although the assertion is mathematically false.
The `smt` tactic refutes this example, but that is not a guarantee that it
decides other transcendental problems correctly or completely.

The examples in this section are non-interactive because the guide's embedded
solver uses Z3 5.0. Run them with Z3 5.3 or later, taking the version-specific
limitations into account.

:::

Z3 5.3 adds the following real-valued operators and extends reasoning for
transcendental functions.

| Operation | Mathematical meaning |
|-----------|----------------------|
| `(exp x)` | Natural exponential of the real argument `x` |
| `(log x)` or `(ln x)` | Natural logarithm; use a positive argument |
| `(atan2 y x)` or `(arctan2 y x)` | Two-argument arctangent, with the vertical argument `y` first |

These are Z3 extensions, not operators of the SMT-LIB polynomial real-arithmetic
theory. They complement the existing trigonometric, inverse-trigonometric,
hyperbolic, and inverse-hyperbolic operators. The logic name `QF_NTA` selects
quantifier-free nonlinear transcendental arithmetic in Z3; the operators are
also available with logic `ALL` or without a `set-logic` command.
Constrain arguments to the mathematical domains needed by your application,
such as `x > 0` for `log`, and do not rely on out-of-domain values.

The exponential is always positive. The following query explicitly uses the
`smt` tactic to refute its negation:

```lisp
(set-logic QF_NTA)
(declare-const x Real)
(assert (<= (exp x) 0.0))
(check-sat-using smt)
```

The result is `unsat` in Z3 5.3.1. Replacing the final command by ordinary
`check-sat` takes a different solver route and exhibits the issue noted above.
Do not treat a result from one route as validation of another.

The nonlinear solver combines theory lemmas and bounds with numerical checking
of candidate assignments. `:smt.arith.nl.transcendental` controls these
transcendental checks, and `:smt.arith.nl.transcendental_tolerance` controls their
numerical tolerance (default `0.0000001`). These controls do not provide an
exact, complete decision procedure, and changing the tolerance is not a way to
obtain a proof of exact satisfiability. A query may return `unknown` or exhaust
its resource budget. Keep this support separate from exact polynomial NRA
solving and from floating-point arithmetic.

## Division


Z3 also has support for division, integer division, modulo and remainder operators. Internally, they are all mapped to multiplication.

```z3
(declare-const a Int)
(declare-const r1 Int)
(declare-const r2 Int)
(declare-const r3 Int)
(declare-const r4 Int)
(declare-const r5 Int)
(declare-const r6 Int)
(assert (= a 10))
(assert (= r1 (div a 4))) ; integer division
(assert (= r2 (mod a 4))) ; mod
(assert (= r3 (rem a 4))) ; remainder
(assert (= r4 (div a (- 4)))) ; integer division
(assert (= r5 (mod a (- 4)))) ; mod
(assert (= r6 (rem a (- 4)))) ; remainder
(declare-const b Real)
(declare-const c Real)
(assert (= b (/ c 3.0)))
(assert (= c 20.0))
(check-sat)
(get-model)
```

In Z3, division by zero is allowed, but the result is not specified. Division is not a partial function.
Actually, in Z3 all functions are total, although the result may be under-specified in some cases like division by zero.

:::info
We say that an interpreted function (such as `/`) is _under-specified_ when the meaning of the function is not fixed on all values
of arguments. The division, modulus and remainder functions are _under-specified_ when the second argument is 0. Constraints that
allow the second arguments to these functions to be 0 can still be satisfiable when there are interpretations of the functions
at 0 that satisfy the constraints.
:::

```z3
(declare-const a Real)
; The following formula is satisfiable since division by zero is not specified.
(assert (= (/ a 0.0) 10.0)) 
(check-sat)
(get-model)

; Although division by zero is not specified, division is still a function.
; Therefore, (/ a 0.0) cannot evaluate to both 10.0 and 2.0.
(assert (= (/ a 0.0) 2.0)) 
(check-sat)
```

If you are not happy with this behavior, you may use the `ite` (if-then-else) operator to guard every division, and assign whatever interpretation you like to the division by zero. This example uses define-fun constructor to create a new operator mydiv. This is essentially a macro, and Z3 will expand its definition for every application of mydiv.

```z3
; defining my own division operator where x0.0 == 0.0 for every x.
(define-fun mydiv ((x Real) (y Real)) Real
  (if (not (= y 0.0))
      (/ x y)
      0.0))
(declare-const a Real)
(declare-const b Real)
(assert (= (mydiv a b) 1.0))
(assert (= b 0.0))
(check-sat)
```

## Algorithmic Fragments of Arithmetic

Z3 contains a combination of several engines for solving arithmetic formulas.
The engines are invoked based on the shape of arithmetic formulas. 
For linear real arithmetic formulas it uses dual simplex to determine feasibility.
For linear integer arithmetic formulas it uses techniques from integer programming: cuts and branch and bound.
There are specialized solvers for different arithmetic fragments and, finally, for non-linear arithmetic
constraints z3 contains several small hammers that integrate Grobner basis simplifications, bounds propagation, 
non-linear cylindric algebraic decomposition and reducing non-linear constraints to linear form by sampling at tangent points.

  Logic| Fragment                          | Solver                    | Example                   
|------|-----------------------------------|----------------------------------------------|---------------------------|
| LRA  | Linear Real Arithmetic            | Dual Simplex                                 |  $x + \frac{1}{2}y \leq 3$|
| LIA  | Linear Integer Arithmetic         | CutSat                                       | $a + 3b \leq 3$           |
| LIRA | Mixed Real/Integer                | Cuts + Branch                                | $x + a \geq 4$            |
| IDL  | Integer Difference Logic          | Floyd-Warshall                               | $a - b \leq 4$            |
| RDL  | Real Difference Logic             | Bellman-Ford                                 |                           |
|UTVPI | Unit two-variable per inequality  |                                              | $x + y \leq 4$            |
| NRA  | Polynomial Real Arithmetic        | Model based CAD, Incremental Linearization   | $x^2 + y^2 < 1$           |
