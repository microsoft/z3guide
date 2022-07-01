---
title: Arithmetical Optimization
sidebar_position: 3
---

The [SMT-LIB 2.0](http://smtlib.cs.uiowa.edu/) standard is extended with three commands for expressing optimization objectives. The (maximize t) command instructs check-sat to produce a model that maximizes the value of term t. The type of t must be either Int, Real, or BitVec.

```z3
(declare-const x Int)
(declare-const y Int)
(assert (< x 2))
(assert (< (- y x) 1))
(maximize (+ x y))
(check-sat)
(get-objectives)
```

The (minimize t) command instructs check-sat to produce a model that minimizes the value of term t.

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

