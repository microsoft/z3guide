---
title: Arrays
sidebar_position: 4
---

> **SMTLIB2 standard** [Arrays](http://smtlib.cs.uiowa.edu/theories-ArraysEx.shtml)


As part of formulating a programme of a mathematical theory of computation McCarthy proposed a _basic_ theory of arrays as characterized by the select-store axioms. The expression (select a i) returns the value stored at position i of the array a; and (store a i v) returns a new array identical to a, but on position i it contains the value v.

Z3 contains a decision procedure for the basic theory of arrays. By default, Z3 assumes that arrays are extensional over select. In other words, Z3 also enforces that if two arrays agree on all reads, then the arrays are equal.

It also contains various extensions for operations on arrays that remain decidable and amenable to efficient saturation procedures (here efficient means, with an NP-complete satisfiability complexity). We describe these extensions in the following using a collection of examples. Additional background on these extensions is available in the paper [Generalized and Efficient Array Decision Procedures](https://www.microsoft.com/en-us/research/publication/generalized-efficient-array-decision-procedures/).

### Select and Store

Let us first check a basic property of arrays. Suppose a1 is an array of integers, then the constraint (and (= (select a1 x) x) (= (store a1 x y) a1)) is satisfiable for an array that contains an index x that maps to x, and when x = y (because the first equality forced the range of x to be x). We can check this constraint.

```z3
(declare-const x Int)
(declare-const y Int)
(declare-const a1 (Array Int Int))
(declare-const a2 (Array Int Int))
(assert (= (select a1 x) x))
(assert (= (store a1 x y) a1))
(check-sat)
(get-model)
```

On the other hand, the constraints become unsatisfiable when asserting (not (= x y)).

```z3
(declare-const x Int)
(declare-const y Int)
(declare-const z Int)
(declare-const a1 (Array Int Int))
(declare-const a2 (Array Int Int))
(declare-const a3 (Array Int Int))
(assert (= (select a1 x) x))
(assert (= (store a1 x y) a1))
(assert (not (= x y)))
(check-sat)
```

### Constant Arrays

The array that maps all indices to some fixed value can be specified in Z3 using the const construct. It takes one value from the range type of the array and creates an array. Z3 cannot infer what kind of array must be returned by the const construct by just inspecting the argument type. Thus, a qualified identifier (as const (Array T1 T2)) must be used. The following example defines a constant array containing only ones.

```z3
(declare-const all1 (Array Int Int))
(declare-const a Int)
(declare-const i Int)
(assert (= all1 ((as const (Array Int Int)) 1)))
(assert (= a (select all1 i)))
(check-sat)
(get-model)
(assert (not (= a 1)))
(check-sat)
```

### Array models

Models provide interpretations of the uninterpreted (aka free) constants and functions that appear in the satisfiable formula. An interpretation for arrays is very similar to the interpretation of a function. Z3 uses the construct (_ as-array f) to give the interpretation for arrays. If the array a is equal to (_ as-array f), then for every index i, (select a i) is equal to (f i). In the previous example, Z3 creates the auxiliary function k!0 to assign an interpretation to the array constant all1.

### Mapping Functions on Arrays

In the following, we will simulate basic Boolean algebra (set theory) using the array theory extensions in Z3. Z3 provides a parameterized map function on arrays. It allows applying arbitrary functions to the range of arrays. The following example illustrates how to use the map function.
The type constructor `(Set T)` is a macro for `(Array T Bool)`.

```z3
(declare-const a (Set Int))
(declare-const b (Set Int))
(declare-const c (Set Int))
(declare-const x Int)
(push)
(assert (not (= ((_ map and) a b) ((_ map not) ((_ map or) ((_ map not) b) ((_ map not) a))))))
(check-sat)
(pop)
(push) 
(assert (and (select ((_ map and) a b) x) (not (select a x))))
(check-sat)
(pop)
(push) 
(assert (and (select ((_ map or) a b) x) (not (select a x))))
(check-sat)
(get-model)
(assert (and (not (select b x))))
(check-sat)
```

### Bags as Arrays

We can use the parameterized map function to encode finite sets and finite bags. Finite bags can be modeled similarly to sets. A bag is here an array that maps elements to their multiplicity. Main bag operations include union, obtained by adding multiplicity, intersection, by taking the minimum multiplicity, and a dual join operation that takes the maximum multiplicity. In the following example, we define the bag-union using map. Notice that we need to specify the full signature of + since it is an overloaded operator.

```z3
(define-sort A () (Array Int Int Int))
(define-fun bag-union ((x A) (y A)) A
  ((_ map (+ (Int Int) Int)) x y))
(declare-const s1 A)
(declare-const s2 A)
(declare-const s3 A)
(assert (= s3 (bag-union s1 s2)))
(assert (= (select s1 0 0) 5))
(assert (= (select s2 0 0) 3))
(assert (= (select s2 1 2) 4))
(check-sat)
(get-model)
```

### Beyond Arrays

Z3 arrays are identified with function spaces. This choice means that z3's arrays are not literally corresponding to
a first-order models of `select/store` axioms.
There is a construct 

```
(_ as-array f)
```

that for a function `f` creates a corresponding constant with array sort.
For example, if `f` has declaration:

```
(declare-fun f (Int Bool) Real)
```

Then `(as-array f)` has the sort `(Array Int Bool Real)`, an array that takes an Integer, a Boolean and maps to a Real.
Admitting the `as-array` function (and later on admitting `Lambda`) means that the universe of interpretations for the Array
sort includes all definable function spaces. If the theory of arrays only has functions `select, store, const` the universe of interpretations for Array is wider (more formulas are satisfiable).
