---
title: Lambdas
sidebar_position: 16
---

Lambda binding is available as an extension to the theory of arrays.
Thus, the type of a lambda expression is an array where the domain of the 
array are the argument types and the range is the sort of the body of the lambda expression.

```z3
(declare-const m (Array Int Int))
(declare-const m1 (Array Int Int))
(declare-const z Int)
(define-fun memset ((lo Int) (hi Int) (y Int) (m (Array Int Int))) 
                   (Array Int Int) 
           (lambda ((x Int)) (if (and (<= lo x) (<= x hi)) y (m x))))
(assert (= m1 (memset 1 700 z m)))
(assert (not (= (select m1 6) z)))
(check-sat)
```

The main utility of lambdas in Z3 is for introducing inline definitions as the `memset` example illustrates.
There is limited true higher order reasoning. One basic example that _does_ work thanks to model construction of MBQI instantiation procedure
is establishing a second-order definition for equality.

```z3
(declare-const x Int)
(declare-const y Int)
(assert (forall ((q (Array Int Bool))) (= (q x) (q y))))
(assert (not (= x y)))
(check-sat)
```