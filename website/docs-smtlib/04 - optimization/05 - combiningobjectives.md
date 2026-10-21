---
title: Combining Objectives
sidebar_position: 5
---

Many optimization problems require solving multiple objectives.

## Lexicographic Combination

Z3 uses by default a lexicographic priority of objectives. It solves first for the objective that is declared first.

```z3
(declare-const x Int)
(declare-const y Int)
(declare-const z Int)
(assert (< x z))
(assert (< y z))
(assert (< z 5))
(assert (not (= x y)))
(maximize x)
(maximize y)
(check-sat)
(get-model)
(get-objectives)
```

It is also possible to declare multiple classes of soft assertions. To do this, use an optional tag to differentiate classes of soft assertions.
The first tag group `A` is given precedence over the second group `B` that is introduced later.

```z3 
(declare-const a Bool)
(declare-const b Bool)
(declare-const c Bool)
(assert-soft a :weight 1 :id A)
(assert-soft b :weight 2 :id B)
(assert-soft c :weight 3 :id A)
(assert (= a c))
(assert (not (and a b)))
(check-sat)
(get-model)
(get-objectives)
```

## Pareto Fronts

To override lexicographic priorities, set the option opt.priority to [Pareto](https://en.wikipedia.org/wiki/Pareto_front).

```z3
(declare-const x Int)
(declare-const y Int)
(assert (>= 5 x))
(assert (>= x 0))
(assert (>= 4 y))
(assert (>= y 0))
(minimize x)
(maximize (+ x y))
(minimize y)
(set-option :opt.priority pareto)
(check-sat)
(get-objectives)
(check-sat)
(get-objectives)
(check-sat)
(get-objectives)
(check-sat)
(get-objectives)
```

### Nonlinear Pareto Fronts

:::info Z3 5.3 and later

Z3 5.3 adds nlsat-backed Pareto enumeration for pure nonlinear real-arithmetic
problems. This example is non-interactive because the guide's embedded solver
uses Z3 5.0; run it with Z3 5.3 or later.

:::

The following problem restricts `x` and `y` to the nonnegative axes of the
circle `x*x + y*y = 2`. Its two feasible points are also its two Pareto-optimal
points: improving one coordinate requires decreasing the other.

```lisp
(set-option :opt.priority pareto)
(set-option :opt.pareto_nlsat true)
(declare-const x Real)
(declare-const y Real)
(assert (>= x 0.0))
(assert (>= y 0.0))
(assert (= (+ (* x x) (* y y)) 2.0))
(assert (or (= x 0.0) (= y 0.0)))
(maximize x)
(maximize y)
(check-sat)
(get-objectives)
(check-sat)
(get-objectives)
(check-sat)
```

The first two checks return `sat`, discovering `(0, sqrt(2))` and
`(sqrt(2), 0)` in an unspecified order. The third returns `unsat`: there are
no further Pareto points. Objective output may display rational isolating
intervals for algebraic values; the nlsat-backed search compares the exact
algebraic model values rather than rounded interval endpoints.

Without the assertion restricting the points to the axes, the quarter-circle
has infinitely many Pareto points, so repeated checks need not exhaust the
front. The new backend does not make every nonlinear Pareto front finite.
Its `:opt.pareto_nlsat` control is enabled by default; see
[Advanced Topics](07%20-%20advancedtopics.md#nonlinear-real-optimization-controls)
for related controls.

## Independent Objectives
If we just want to find the optimal value for each objective, set the option opt.priority to box.

```z3 
(declare-const x Real)
(declare-const y Real)
(assert (>= 5 (- x y)))
(assert (>= x 0))
(assert (>= 4 y))
(assert (> y 0))
(minimize x)
(maximize (+ x y))
(minimize y)
(maximize y)
(set-option :opt.priority box)
(check-sat)
(get-objectives)
```


