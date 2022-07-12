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

To override lexicographic priorities, set the option opt.priority to Pareto.

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


