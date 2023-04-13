---
title: Special Relations
sidebar_position: 10
---

## Special Binary Relations
Binary relations that are partial orders, linear orders, tree orders, and piece-wise linear orders 
can be axiomatized using first order quantifiers. However, reasoning with these quantified axioms involves
non-linear overhead, up to a quadratic number of quantifier instantiations.
The decision procedures for partial, linear, tree and piece-wise linear orders in z3 
use variants of Bellman-Ford push relabeling graphs.


### Partial Order
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

### Linear Order
```z3
(declare-sort A 0)
(declare-fun R (A A) Bool)
(assert (forall ((x A)) (R x x)))
(assert (forall ((x A) (y A)) (=> (and (R x y) (R y x)) (= x y))))
(assert (forall ((x A) (y A) (z A)) (=> (and (R x y) (R y z)) (R x z))))
(assert (forall ((x A) (y A)) (or (R x y) (R y x))))


```

Use instead

```z3
(declare-sort A 0)
(define-fun R ((x A) (y A)) Bool ((_ linear-order 0) x y))

(declare-const a A)
(declare-const b A)
(declare-const c A)
(declare-const d A)
(assert (R a b))
(assert (R a c))

(check-sat)
(get-model)
(eval (R a d))

; at least one of these relations have to hold:
(eval (R b c))
(eval (R c b))

(assert (not (R c d)))
(assert (not (R d c)))
(check-sat)
```


### Tree Order
```z3
(declare-sort A 0)
(declare-fun R (A A) Bool)
(assert (forall ((x A)) (R x x)))
(assert (forall ((x A) (y A)) (=> (and (R x y) (R y x)) (= x y))))
(assert (forall ((x A) (y A) (z A)) (=> (and (R x y) (R y z)) (R x z))))
(assert (forall ((x A) (y A) (z A)) (=> (and (R y x) (R z x)) (or (R y z) (R z y)))))

```

Use instead
```z3

(declare-sort A 0)
(define-fun R ((x A) (y A)) Bool ((_ tree-order 0) x y))

(declare-const a A)
(declare-const b A)
(declare-const c A)
(declare-const d A)
(assert (R a b))
(assert (R b d))
(assert (R a c))
(assert (R c d))
(check-sat)
(get-model)
(assert (not (R b c)))
(assert (not (R c b)))
(check-sat)
```

### Piece-wise Linear Order
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

## Transitive Closures

The transitive closure of a relation is not first-order axiomatizable. However, the decision problem for ground formulas is decidable
because for every binary relation `R` over a finite domain, the transitive closure of it is defined over the finite graph of `R`.
The small model property contrasts non-ground first-order formulas using transitive closure that are not first-order axiomatizable.

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

