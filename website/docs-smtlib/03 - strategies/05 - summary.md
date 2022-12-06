---
title: Tactics Summary
sidebar_position: 5
---

## Tactic demodulator

### Short Description:

Extracts equalities from quantifiers and applies them for simplification

### Long Description

In first-order theorem proving (FOTP), a demodulator is a universally quantified formula of the form:

`Forall X1, ..., Xn.  L[X1, ..., Xn] = R[X1, ..., Xn]`
Where `L[X1, ..., Xn]` contains all variables in `R[X1, ..., Xn]`, and 
`L[X1, ..., Xn]` is "bigger" than `R[X1, ...,Xn]`.

The idea is to replace something big `L[X1, ..., Xn]` with something smaller `R[X1, ..., Xn]`.

After selecting the demodulators, we traverse the rest of the formula looking for instances of `L[X1, ..., Xn]`.
Whenever we find an instance, we replace it with the associated instance of `R[X1, ..., Xn]`.

For example, suppose we have

```
Forall x, y.  f(x+y, y) = y
and
f(g(b) + h(c), h(c)) <= 0
```

The term `f(g(b) + h(c), h(c))` is an instance of `f(x+y, y)` if we replace `x <- g(b)` and `y <- h(c)`.
So, we can replace it with `y` which is bound to `h(c)` in this example. So, the result of the transformation is:

```
Forall x, y.  f(x+y, y) = y
and
h(c) <= 0
```

### Example
 
```
  (declare-sort S 0)
  (declare-sort S1 0)
  (declare-sort S2 0)
  (declare-fun f () S)
  (declare-fun f1 () S)
  (declare-fun f2 (S1 S) S)
  (declare-fun f3 (S2 S) S1)
  (declare-fun f4 () S)
  (declare-fun f5 () S2)
  (assert (not (= f1 (f2 (f3 f5 f4) f))))
  (assert (forall ((q S) (v S)) (or (= q v) (= f1 (f2 (f3 f5 q) v)) (= (f2 (f3 f5 v) q) f1))))
  (assert (forall ((q S) (x S)) (not (= (f2 (f3 f5 q) x) f1))))
  (apply demodulator)
```

It generates

```
  (goals
  (goal
    (forall ((q S) (v S)) (= q v))
    (forall ((q S) (x S)) (not (= (f2 (f3 f5 q) x) f1)))
    :precision precise :depth 1)
  )
```

### Notes

* supports unsat cores
* does not support fine-grained proofs


## Tactic elim-uncnstr

### Short Description

Eliminate Unconstrained uninterpreted constants

### Long Description

The tactic eliminates uninterpreted constants that occur only once in a goal and such that the immediate context
where they occur can be replaced by a fresh constant. We call these occurrences invertible.
It relies on a series of theory specific invertibility transformations.
In the following assume `x` and `x'` occur in a unique subterm and `y` is a fresh uninterpreted constant.

#### Boolean Connectives

| Original Context | New Term | Updated solution        |
|------------------|----------|------------------------ |
`(if c x x')`      | `y`      | `x = x' = y`            |
`(if x x' e)`      |  `y`     | `x = true, x' = y`      |
`(if x t x')`      | `y`      | `x = false, x' = y`     |
`(not x)`          | `y`      | `x = (not y)`           |
`(and x x')`       | `y`      | `x = y, x' = true`      |
`(or  x x')`       | `y`      | `x = y, x' = false`     |
`(= x t)`          | `y`      | `x = (if y t (diff t))` |

where diff is a diagnonalization function available in domains of size `>` 1.

#### Arithmetic

| Original Context | New Term | Updated solution        |
|------------------|----------|------------------------ |
`(+ x t)`          | `y`      | `x = y - t`             |
`(* x x')`         | `y`      | `x = y, x' = 1`         |
`(* -1 x)`         | `y`      | `x = -y`                | 
`(<= x t)`         | `y`      | `x = (if y t (+ t 1))`  |
`(<= t x)`         | `y`      | `x = (if y t (- t 1))`  |

#### Bit-vectors

| Original Context | New Term | Updated solution         |
|------------------|----------|--------------------------|
`(bvadd x t)`      | `y`      | `x = y - t`              |
`(bvmul x x')`     | `y`      | `x = y, x' = 1`          |
`(bvmul odd x)`    | `y`      | `x = inv(odd)*y`         | 
`((extract sz-1 0) x)` | `y`  | `x = y`                  |
`((extract hi lo) x)`  | `y`  | `x = (concat y1 y y2)`   |
`(udiv x x')`      | `y`      | `x = y, x' = 1`          |
`(concat x x')`    | `y`      | `x = (extract hi1 lo1 y)` |
`(bvule x t)`      | `(or y (= t MAX))` | `x = (if y t (bvadd t 1))` |
`(bvule t x)`      | `(or y (= t MIN))` | `x = (if y t (bvsub t 1))` | 
`(bvnot x)`        | `y`                | `x = (bvnot y)`            |
`(bvand x x')`     | `y`                | `x = y, x' = MAX`          |

In addition there are conversions for shift and bit-wise or and signed comparison.

#### Arrays

| Original Context | New Term | Updated solution         |
|------------------|----------|--------------------------|
`(select x t)`     | `y`      | `x = (const y)`          |
`(store x x1 x2)`  | `y`      | `x2 = (select x x1), x = y, x1 = arb` | 

#### Algebraic Datatypes

| Original Context | New Term | Updated solution         |
|------------------|----------|--------------------------|
`(head x)`         | `y`      | `x = (cons y arb)`       |



### Example

```z3
(declare-const x Int)
(declare-const y Int)
(declare-fun p (Int) Bool)    
(assert (>= (+ y (+ x y)) y))
(assert (p y))
(apply elim-uncnstr)
(assert (p (+ x y)))
(apply elim-uncnstr)
```

### Notes

* supports unsat cores
* does not support fine-grained proofs


## Tactic propagate-values

### Short Description:

Tactic for propagating equalities `(= t v)` where `v` is a value

### Long Description

In a context where terms are equated to constants it is invariably beneficial to 
replace terms, that can be compound, with the constants and then simplify the resulting formulas.
The propagate-values tactic accomplishes the task of replacing such terms.

### Example
 
```z3
(declare-const x Int)
(declare-const y Int)
(declare-fun f (Int) Int)
(assert (= 1 (f (+ x y))))
(assert (= 2 x))
(assert (> (f (+ 2 y)) y))
(apply propagate-values)
```

### Notes

* supports unsat cores



## Tactic simplify

### Short Description:

The tactic performs algebraic simplifcations on formulas

### Long Description

The simplify tactic invokes z3's main rewriting engine. 
The rewriting engine contains support for theory specific simplifications.
The set of simplifications invoked is open ended. Useful algebraic simplifications
are added to the rewrite engine as they are discovered to be useful.

Note that the simplifier does not ensure that equivalent formulas are simplified to the same form.
In other words it does not guarantee canonicity. This contrasts with BDD packages where BDDs constructed
from two equivalent formulas are guaranteed to be equal.

### Example
 
```z3
  (declare-const x Int)
  (declare-const y Int)
  (assert (> x (+ x y)))
  (apply simplify)
```

### Notes

* supports unsat cores, proof terms


## Tactic solve-eqs

### Short Description

Solve for variables

### Long Description

The tactic eliminates variables that can be brought into solved form.
For example, the assertion `x = f(y + z)` can be solved for `x`, replacing `x`
everywhere by `f(x + y)`. It depends on a set of theory specific equality solvers

* Basic equations
  * equations between uninterpreted constants and terms. 
  * equations written as `(if p (= x t) (= x s))` are solved as `(= x (if p t s))`.
  * asserting `p` or `(not p)` where `p` is uninterpreted, causes `p` to be replaced by `true` (or `false`).

* Arithmetic equations
  * It solves `x mod k = s` to `x = k * m' + s`, where m'` is a fresh constant. 
  * It finds variables with unit coefficients in integer linear equations.
  * It solves for `x * Y = Z$ under the side-condition `Y != 0` as `x = Z/Y`.
 
It also allows solving for uninterpreted constants that only appear in a single disjuction. For example, 
`(or (= x (+ 5 y)) (= y (+ u z)))` allows solving for `x`. 

### Example

```z3
(declare-const x Int)
(declare-const y Int)
(declare-const z Int)
(declare-const u Int)
(assert (or (and (= x (+ 5 y)) (> u z)) (= y (+ u z))))
(apply solve-eqs)
```

It produces the goal
```
(goal
  (or (not (<= u z)) (= y (+ u z)))
  :precision precise :depth 1)
```
where `x` was solved as `(+ 5 y)`.

### Notes

* supports unsat cores
* does not support fine-grained proofs

