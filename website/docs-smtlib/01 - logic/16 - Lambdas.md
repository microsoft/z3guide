---
title: Lambdas
sidebar_position: 16
---

Lambda binding is available as an extension to the theory of arrays.

## Syntax and Semantics

Lambda expressions use syntax similar to quantifiers. It is of the form:

```
(lambda ((x X) (y Y) (z Z)) t)
```

where `x y z` are lambda bound variables and `t` is an expression that can contain the bound variables. 

The laws of lambda calculus apply. 
The simplifier performs $\beta$ reduction.

```z3
(declare-const a Int)
(declare-const b Int)
(declare-const c Int)
(simplify (select (lambda ((x Int) (y Int) (z Int)) (+ x (* z y))) a b c))
```

Other rules $\alpha$ (renaming) and $\eta$ (extensionality) are enforced by the solver.

## Inlining definitions using Lambda

The main utility of lambdas in Z3 is for introducing inline definitions as the following `memset` example illustrates.

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

Note that the type of `(lambda ((x Int)) (if (and (<= lo x) (<= x hi)) y (m x)))` is `(Array Int Int)`. 


## Lambdas as Arrays

Thus, the type of a lambda expression is an array where the domain of the 
array are the argument types and the range is the sort of the body of the lambda expression.

Thus, in z3 arrays are synonymous with function spaces. You can transition between arrays and 
functions using `as-array` to convert a function to an array and using function macros to treat an array as a function. 
The example also illustrates a subtle use of recursive function declarations.
Functions declared using `define-fun-rec` are expanded on demand and therefore the function symbols are available as arguments to `as-array`.
This contrasts functinos declared using `define-fun` that are treated as macros that are expanded at parse time. Their function symbols cannot be passed to `as-array`.

```z3
(declare-fun f (Int) Int)
(push)
(assert (not (=  (select (_ as-array f) 0) (f 0))))
(check-sat)
(pop)
(push)
(declare-const a (Array Int Int))
(define-fun-rec f2 ((x Int)) Int (select a x))
(assert (not (= (select a 0) (select (_ as-array f2) 0))))
(check-sat)
(pop)
```

## From First-Order to limited Higher-Order

There is limited true higher order reasoning. One basic example that _does_ work thanks to model construction of MBQI instantiation procedure
is establishing a second-order definition for equality.

```z3
(declare-const x Int)
(declare-const y Int)
(assert (forall ((q (Array Int Bool))) (= (q x) (q y))))
(assert (not (= x y)))
(check-sat)
```

During instantiation, z3 determines to instantiate `q` with the term `(lambda ((z Int)) (= x z))` and therefore it infers the fact `(= (= x x) (= x y))`.
Note that the example illustrates using an array as a function application. We wrote `(q x)` instead of `(select q x)` for the array `q`. 
It is a feature that is supported as a convenience: the parser performs a best-effort coercions to insert `select` automatically. 
