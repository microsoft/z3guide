---
title: Datatypes
sidebar_position: 9 
---

Algebraic datatypes, known from programming languages such as ML, offer a convenient way for specifying common data structures. Records and tuples are special cases of algebraic datatypes, and so are scalars (enumeration types). But algebraic datatypes are more general. They can be used to specify finite lists, trees and other recursive structures.

### Records

A record is specified as a datatype with a single constructor and as many arguments as record elements. The number of arguments to a record are always the same. The type system does not allow to extend records and there is no record subtyping.

The following example illustrates that two records are equal only if all the arguments are equal. It introduces the parametric type Pair, with constructor mk-pair and two arguments that can be accessed using the selector functions first and second.

```z3
(declare-datatypes (T1 T2) ((Pair (mk-pair (first T1) (second T2)))))
(declare-const p1 (Pair Int Int))
(declare-const p2 (Pair Int Int))
(assert (= p1 p2))
(assert (< (second p1) 20))
(check-sat)
(get-model)
(assert (not (= (first p1) (first p2))))
(check-sat)
```

### Scalars (enumeration types)

A scalar sort is a finite domain sort. The elements of the finite domain are enumerated as distinct constants. For example, the sort S is a scalar type with three values A, B and C. It is possible for three constants of sort S to be distinct, but not for four constants.

```z3
(declare-datatypes () ((S A B C)))
(declare-const x S)
(declare-const y S)
(declare-const z S)
(declare-const u S)
(assert (distinct x y z))
(check-sat)
(assert (distinct x y z u))
(check-sat)
```

### Recursive datatypes

A recursive datatype declaration includes itself directly (or indirectly) as a component. A standard example of a recursive data-type is the one of lists. A parametric list can be specified in Z3 as

```z3
(declare-datatypes (T) ((Lst nil (cons (hd T) (tl Lst)))))
(declare-const l1 (Lst Int))
(declare-const l2 (Lst Bool))
```

The List recursive datatype is builtin in Z3. The empty list is nil, and the constructor insert is used to build new lists. The accessors head and tail are defined as usual.

```z3 no-build
(declare-const l1 (List Int))
(declare-const l2 (List Int))
(declare-const l3 (List Int))
(declare-const x Int)
(assert (not (= l1 nil)))
(assert (not (= l2 nil)))
(assert (= (head l1) (head l2)))
(assert (not (= l1 l2)))
(assert (= l3 (insert x l2)))
(assert (< x 100))
(check-sat)
(get-model)
(assert (= (tail l1) (tail l2)))
(check-sat)
```

In the example above, we also assert that l1 and l2 are not nil. This is because the interpretation of head and tail is underspecified on nil. So then head and tail would not be able to distinguish nil from (insert (head nil) (tail nil)).

### Mutually recursive datatypes

You can also specify mutually recursive datatypes for Z3. We list one example below.

```z3
; declare a mutually recursive parametric datatype
(declare-datatypes (T) ((Tree leaf (node (value T) (children TreeList)))
                        (TreeList nil (cons (car Tree) (cdr TreeList)))))
(declare-const t1 (Tree Int))
(declare-const t2 (Tree Bool))
; we must use the 'as' construct to distinguish the leaf (Tree Int) from leaf (Tree Bool)
(assert (not (= t1 (as leaf (Tree Int)))))
(assert (< (value t1) 20))
(assert (not (is-leaf t2)))
(assert (not (value t2)))
(check-sat)
(get-model)
```

In the example above, we have a tree of Booleans and a tree of integers. The leaf constant must return a tree of a specific sort. To specify the result sort, we use the qualified identifier (as leaf (Tree Int)). Note that, we do not need to use a qualified identifer for value, since Z3 can infer the intended declaration using the sort of the argument.

### Z3 will not prove inductive facts

The ground decision procedures for recursive datatypes don't lift to establishing inductive facts. Z3 does not contain methods for producing proofs by induction. This may change in the future. In particular, consider the following example where the function p is true on all natural numbers, which can be proved by induction over Nat. Z3 enters a matching loop as it attempts instantiating the universally quantified implication.

```z3
(set-option :timeout 2000)
(declare-datatypes () ((Nat zero (succ (pred Nat)))))
(declare-fun p (Nat) Bool)
(assert (p zero))
(assert (forall ((x Nat)) (implies (p (pred x)) (p x))))
(assert (not (forall ((x Nat)) (p x))))
(check-sat)
(get-info :all-statistics)
```

### Nested datatypes with Arrays and Sequences

In some applications it is convenient to have a sequence of types that are 
recursively defined. For example an abstract syntax tree of a program is a sequence of 
basic statements, and a basic statement can be an assignment or an if-then-else statement,
where the then and else branches are statements. Similarly, it may be convenient to use
a nesting of algebraic data-types and arrays. Z3 supports nesting ADTs over sequences and over
ranges of arrays.

```z3
(declare-sort Expr)
(declare-sort Var)
(declare-datatypes ((Stmt 0)) 
  (((Assignment (lval Var) (rval Expr)) 
    (If (cond Expr) (th Stmt) (el Stmt)) 
    (Seq (stmts (Seq Stmt))))))

(declare-const s Stmt)
(declare-const t Stmt)

(assert ((_ is Seq) t))
(assert ((_ is Seq) s))
(assert (= s (seq.nth (stmts t) 2)))
(assert (>= (seq.len (stmts s)) 5))
(check-sat)
(get-model)
(assert (= s (Seq (seq.unit s))))
(check-sat)
```