---
title: Arithmetical Optimization
sidebar_position: 3
---

Z3 extends the The [SMTLIB format](http://smtlib.cs.uiowa.edu/) with the following commands for working with optimization objectives:

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

