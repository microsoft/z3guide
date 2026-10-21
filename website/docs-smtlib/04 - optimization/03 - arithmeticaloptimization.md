---
title: Arithmetical Optimization
sidebar_position: 3
---

Z3 extends the The [SMTLIB format](https://smt-lib.org/) with the following commands for working with optimization objectives:

Command                                | Meaning
---------------------------------------|-------------------------------------------------------------------
`(maximize t)`                         | The result of `(check-sat)` should seek to produce a model that _maximizes_ the value of `t`. The expression can be integer, real or Bit-vector sort.
`(minimize t)`                         | The result of `(check-sat)` should seek to produce a model that _minimizes_ the value of `t` The expression can be integer, real or Bit-vector sort.
`(add-soft b [:weight w] [:id id])`  | The result of `(check-sat)` should seek to satisfy soft constraints. The default weight is 1. Weights are used to give priorities. Soft constraints can be grouped in disjoint groups by tagging them with optional identifiers.
`(get-objectives)`                     | After `(check-sat)` retrieve the values of the maximize, minimize and soft constraint objectives.


## Maximize and Minimize

The `(maximize t)` command instructs check-sat to produce a model that maximizes the value of term t. The type of `t` must be either `Int`, `Real`, or `BitVec`.

```z3
(declare-const x Int)
(declare-const y Int)
(assert (< x 2))
(assert (< (- y x) 1))
(maximize (+ x y))
(check-sat)
(get-objectives)
```

The `(minimize t)` command instructs check-sat to produce a model that minimizes the value of term `t`.

```z3
(declare-const x Int)
(declare-const y Int)
(assert (< x 4))
(assert (< (- y x) 1))
(assert (> y 1))
(minimize (+ x y))
(check-sat)
(get-objectives)
```

## Unbounded Objectives

Not all objective functions are bounded. Z3 indicates that the maxima are at infinity, and the minima are negative infinity.

```z3
(declare-const x Int)
(declare-const y Int)
(assert (< x 2))
(assert (> (- y x) 1))
(maximize (+ x y))
(check-sat)

```

```z3
(declare-const x Int)
(declare-const y Int)
(assert (< x 4))
(assert (< (- y x) 1))
(assert (< y 1))
(minimize (+ x y))
(check-sat)
(get-objectives)
```

## Tight Bounds

Not all finite bounds can be expressed as real numbers. Bounds obtained around strict inequalities are expressed using infinitesimals.

```z3 
(declare-const x Real)
(declare-const y Real)
(assert (< x 4))
(assert (< y 5))
(maximize (+ x y))
(check-sat)
(get-objectives)
```

## Nonlinear Real Objectives

:::info Z3 5.3 and later

Z3 5.3 extends nonlinear real optimization using nlsat cells. The examples in
this section are non-interactive because the guide's embedded solver uses
Z3 5.0; run them with Z3 5.3 or later.

:::

The existing `maximize` and `minimize` commands can optimize real objectives
subject to polynomial nonlinear constraints. An optimum need not be rational.
For example, the largest nonnegative `x` satisfying `x*x <= 2` is the positive
square root of 2.

```lisp
(declare-const x Real)
(assert (>= x 0.0))
(assert (<= (* x x) 2.0))
(maximize x)
(check-sat)
(get-objectives)
(get-value (x))
```

The result is `sat`. Both the objective and `x` can be printed as
`(root-obj (+ (^ x 2) (- 2)) 2)`. This denotes the second real root, in increasing
order, of the displayed polynomial: the positive square root of 2. The `x`
inside a `root-obj` expression is the polynomial variable, not a further
constraint on the declared constant. This representation is exact, unlike a
rounded decimal approximation.

### Open Algebraic Bounds

A finite supremum need not be attained. Replacing the non-strict inequality
above by a strict one leaves the supremum at the square root of 2, but no
feasible model attains it.

```lisp
(declare-const x Real)
(assert (>= x 0.0))
(assert (< (* x x) 2.0))
(maximize x)
(check-sat)
(get-objectives)
(get-value (x))
```

The result is `sat`, with an objective bound expressed using the algebraic
root and a negative infinitesimal `epsilon`. The value returned for `x` is a
feasible value below that bound, not a model attaining the supremum.

These improvements do not give a complete procedure for arbitrary nonlinear
integer, quantified, or transcendental optimization. Resource limits can also
prevent certification of an optimum in a polynomial real problem. Distinguish
a feasible model from a certified bound, and inspect `get-objectives` and any
`unknown` result rather than assuming a displayed model proves optimality.
See [Advanced Topics](07%20-%20advancedtopics.md#nonlinear-real-optimization-controls)
for controls and
[Combining Objectives](05%20-%20combiningobjectives.md#nonlinear-pareto-fronts)
for nonlinear Pareto search.
