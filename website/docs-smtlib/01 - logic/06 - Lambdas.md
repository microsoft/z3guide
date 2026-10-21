---
title: Lambdas
sidebar_position: 6
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
This contrasts with functions declared using `define-fun` that are treated as macros that are expanded at parse time. Their function symbols cannot be passed to `as-array`.

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

## Higher-Order Matching and Term Enumeration

:::info Z3 5.3 and later

Z3 5.3 adds higher-order matching and a quantifier engine that can combine it
with term enumeration. This example is non-interactive because the guide's
embedded solver uses Z3 5.0; run it with Z3 5.3 or later.

:::

An array-sorted quantified variable can stand for a function or predicate.
Ordinary first-order pattern matching cannot always discover the function
needed for an instantiation: that function might be a lambda expression that
does not occur in the input. Higher-order matching can synthesize such lambdas,
and term enumeration supplies additional candidate terms.

The following example quantifies over predicates on an uninterpreted sort `U`.
Its quantified assertion forces arrays `a` and `b` to have equal values at every
index: if their values differed, a predicate distinguishing them would violate
the assertion. Array extensionality then forces `a = b`, contradicting the
different truth values assigned to `q a` and `q b`.

```lisp
(set-option :smt.ho_matching true)
(set-option :smt.ho_qmatcher true)
(set-option :smt.term_enumeration true)
(set-option :smt.ho_matching_bound 1000)
(declare-sort U 0)
(declare-const a (Array U U))
(declare-const b (Array U U))
(declare-fun q ((Array U U)) Bool)
(assert
  (forall ((P (Array U Bool)) (X U))
    (=> (select P (select a X)) (select P (select b X)))))
(assert (q b))
(assert (not (q a)))
(check-sat)
```

The result is `unsat`. The three search switches are disabled by default, and
the techniques remain incomplete. The matching bound limits expansion work; raising
it is not a completeness guarantee. This is still Z3's array/lambda encoding,
not a separate function sort or an SMT-LIB 3 frontend.
See [Quantifiers](05%20-%20Quantifiers.md#higher-order-instantiation)
for the controls and
[Simplifiers](../03%20-%20strategies/05%20-%20simplifiers.md#higher-order-preprocessing)
for preprocessing lambda definitions and predicate instantiations.
