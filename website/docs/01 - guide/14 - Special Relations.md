---
title: Special Relations
sidebar_position: 14
---

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
((_ partial-order 0) x y)
```

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
((_ linear-order 0) x y)
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
((_ tree-order 0) x y)
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
((_ piecewise-linear-order 0) x y)
```

## Transitive Closure
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
unsat
```