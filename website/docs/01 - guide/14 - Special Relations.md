---
title: Special Relations
sidebar_position: 14
---

# Decision Procedures for Special Binary Relations
Binary relations that are partial orders, linear orders, tree orders, and piecewise linear orders 
can be axiomatized using first order quantifiers. However, reasoning with these quantified axioms involves
non-linear overhead, up to a quadratic number of quantifier instantiations.
The decision procedures for partial, linear, tree and piecewise linear orders in z3 
use variants of Ford-Fulkerson push relabeling graphs.


## Partial Order
```z3
(declare-sort A 0)
(declare-fun R (A A) Bool)
(assert (forall ((x A)) (R x x)))
(assert (forall ((x A) (y A)) (=> (and (R x y) (R y x)) (= x y))))
(assert (forall ((x A) (y A) (z A)) (=> (and (R x y) (R y z)) (R x z))))
```

Use instead
```
(define-fun R ((x A) (y A)) Bool ((_ partial-order 0) x y))
```
We are using the index 0 to identify the partial order relation `R`. To create a different relation that is also a partial order use 
a different index, such as `(_ partial-order 1)`.

## Linear Order
```z3
(declare-sort A 0)
(declare-fun R (A A) Bool)
(assert (forall ((x A)) (R x x)))
(assert (forall ((x A) (y A)) (=> (and (R x y) (R y x)) (= x y))))
(assert (forall ((x A) (y A) (z A)) (=> (and (R x y) (R y z)) (R x z))))
(assert (forall ((x A) (y A)) (or (R x y) (R y x))))
```

Use instead
```
(define-fun R ((x A) (y A)) Bool ((_ linear-order 0) x y))
```


## Tree Order
```z3
(declare-sort A 0)
(declare-fun R (A A) Bool)
(assert (forall ((x A)) (R x x)))
(assert (forall ((x A) (y A)) (=> (and (R x y) (R y x)) (= x y))))
(assert (forall ((x A) (y A) (z A)) (=> (and (R x y) (R y z)) (R x z))))
(assert (forall ((x A) (y A) (z A)) (=> (and (R x y) (R x z)) (or (R y z) (R z y)))))
```

Use instead
```
(define-fun R ((x A) (y A)) Bool ((_ tree-order 0) x y))
```

## Piecewise Linear Order
```z3
(declare-sort A 0)
(declare-fun R (A A) Bool)
(assert (forall ((x A)) (R x x)))
(assert (forall ((x A) (y A)) (=> (and (R x y) (R y x)) (= x y))))
(assert (forall ((x A) (y A) (z A)) (=> (and (R x y) (R y z)) (R x z))))
(assert (forall ((x A) (y A) (z A)) (=> (and (R x y) (R x z)) (or (R y z) (R z y)))))
(assert (forall ((x A) (y A) (z A)) (=> (and (R y x) (R z x)) (or (R y z) (R z y)))))
```

Use instead
```
(define-fun R ((x A) (y A)) Bool ((_ piecewise-linear-order 0) x y))
```

# Transitive Closures

The transitive closure of a relation is not first-order axiomatizable. However, the decision problem for ground formulas is decidable
because for every binary relation `R` over a finite domain, the transitive closure of it is defined over the finite graph of `R`.

```z3
(declare-sort A 0)
(declare-fun R (A A) Bool)
(declare-fun b () A)
(declare-fun a () A)
(declare-fun c () A)
(assert (R a b))
(assert (R b c))
(assert (not ((_ transitive-closure R) a c)))
(check-sat)
```
