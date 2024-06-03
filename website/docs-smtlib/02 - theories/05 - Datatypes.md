---
title: Datatypes
sidebar_position: 5
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

### Record Updates

You can create variants of records by updating selected fields.

```z3
(declare-datatypes (T1 T2) ((Pair (mk-pair (first T1) (second T2)))))
(declare-const p1 (Pair Int Int))
(declare-const p2 (Pair Int Int))
(assert (not (= p1 p2)))
(assert (= p1 ((_ update-field first) p2 1)))
(check-sat)
(get-model)
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

```z3
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

In the example above, we also assert that l1 and l2 are not nil. This is because the interpretation of head and tail is under-specified on nil. So then head and tail would not be able to distinguish nil from (insert (head nil) (tail nil)).

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

In the example above, we have a tree of Booleans and a tree of integers. The leaf constant must return a tree of a specific sort. To specify the result sort, we use the qualified identifier (as leaf (Tree Int)). Note that, we do not need to use a qualified identifier for value, since Z3 can infer the intended declaration using the sort of the argument.

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

## Using Datatypes for solving type constraints

In the following we use algebraic datatypes to represent type constraints
for simply typed lambda calculus.
Terms and types over simply typed lambda calculus are of the form

- $M ::= x \mid M M \mid \lambda x \ . \ M$
- $\tau ::= int \mid string \mid \tau \rightarrow \tau$

where $x$ is bound variable, $M M'$ applies the function $M$ to argument $M'$, and $\lambda x \ . \ M$ is a lambda abstraction.
The $int$ and $string$ types are type constants.

A type judgemnt is

* $\Gamma \vdash M : \tau$

where $\Gamma$ is a type environment that provides types to free variables in $M$.
An expression $M$ has a type $\tau$ if there is a derivation using the rules:

* $\Gamma, x : \tau \vdash x : \tau$
* $\Gamma \vdash M : \tau \rightarrow \tau'$, $\Gamma \vdash M' : \tau$, $\Gamma \vdash M M' : \tau'$.
* $\Gamma, x : \tau \vdash M : \tau'$, $\Gamma \vdash \lambda x : M : \tau \rightarrow \tau'$.

We can use constraints over algebraic data-types to determine if expressions can be typed. 

* $type(M M') = Y$,  $type(M) = X \rightarrow Y$, $type(M') = X$, for fresh $X, Y$.
* $type(\lambda x . M) = type(x) \rightarrow type(M)$

#### Checking if terms have principal types

We define types and expressions as algebraic data-types.
The types of applications produces three constraints for
applications and the single constraint for lambda abstraction.
The encoding into SMTLIB uses several features. Besides algebraic
data-types it uses uninterpreted functions instead of introducing
fresh variables. It defines a recursive function that extracts
type constraints from an expression. 

```z3
(declare-datatypes () ((Type 
  int 
  string 
  (arrow (dom Type) (rng Type)))))
(declare-sort Var)
(declare-datatypes () ((M 
  (lam (bound Var) (body M)) 
  (var (v Var)) 
  (app (fn M) (arg M)))))
(declare-fun type (M) Type)
(define-fun dom ((M M)) Type (dom (type M)))
(define-fun rng ((M M)) Type (rng (type M)))
(define-fun type ((x Var)) Type (type (var x)))
(declare-const x Var)
(declare-const y Var)
(define-fun app-constraint ((M1 M) (M2 M)) Bool
  (and (= (dom M1) (type M2))
       (is-arrow (type M1))
       (= (type (app M1 M2)) (rng M1)))
)
(define-fun lam-constraint ((x Var) (M M)) Bool
  (= (type (lam x M)) (arrow (type x) (type M)))
)

(define-fun-rec type-constraints ((M M)) Bool
    (match M
     (case (var x) true)
     (case (app M1 M2)
         (if (app-constraint M1 M2)
             (and (type-constraints M1) (type-constraints M2)) 
             false))
     (case (lam x M1)
         (if (lam-constraint x M1)
             (type-constraints M1) 
             false))
    )
)

; the identity function can be typed.
(push)
(assert (type-constraints (lam x (var x))))
(check-sat)
(pop)

; there is no simple type for x such that (x x) is well typed.
; the type constraints are unsat due to the semantics of algebraic
; data-types: it is not possible to create an instance of an
; algebraic data-type that is a sub-term of itself.
(push)
(assert (type-constraints (lam x (app (var x) (var x)))))
(check-sat)
(pop)

; Applying a function that takes an integer to a string is not well-typed
(push)
(declare-const plus M)
(assert (= (type plus) (arrow int (arrow int int))))
(declare-fun ofint (Int) M)
(assert (= (type (ofint 3)) int))
(declare-fun ofstring (String) M)
(assert (= (type (ofstring "a")) string))
(assert (type-constraints (app (lam x (app (app plus (var x)) (ofint 3))) (ofstring "a"))))
(check-sat)
(pop)
```

### Using UNSAT cores to identify mutually inconsistent type constraints
We can track each sub-expression and use unsatisfiable cores to 
identify a set of mutually inconsistent type constraints. 
When the core is minimial, it means that modifying any one of the 
subterms from the corresponding violated constraints can fix the type error. This provides some indication of error location, but isn't 
great for diagnostics. In the next section we use MaxSAT for more
targeted diagnostics. 

```z3
(set-option :produce-unsat-cores true)
(set-option :smt.core.minimize true)
(declare-datatypes () ((Type 
  int 
  string 
  (arrow (dom Type) (rng Type)))))
(declare-sort Var)
(declare-datatypes () ((M 
  (lam (bound Var) (body M)) 
  (var (v Var)) 
  (app (fn M) (arg M)))))
(declare-fun type (M) Type)
(declare-const x Var)
(declare-const y Var)
(define-fun dom ((M M)) Type (dom (type M)))
(define-fun rng ((M M)) Type (rng (type M)))
(define-fun type ((x Var)) Type (type (var x)))
(define-fun app-constraint ((M1 M) (M2 M)) Bool
  (and (= (dom M1) (type M2))
       (is-arrow (type M1))
       (= (type (app M1 M2)) (rng M1))
  )
)
(define-fun lam-constraint ((x Var) (M M)) Bool
  (= (type (lam x M)) (arrow (type x) (type M)))
)

(declare-const plus M)
(assert (= (type plus) (arrow int (arrow int int))))
(declare-fun ofint (Int) M)
(declare-fun ofstring (String) M)
(define-const x_plus_3 M (app (app plus (var x)) (ofint 3)))

(assert (= (type (ofint 3)) int))
(assert (= (type (ofstring "a")) string))

(assert (! (app-constraint (lam x x_plus_3) (ofstring "a")) :named t1))
(assert (! (lam-constraint x x_plus_3)                      :named t2))
(assert (! (app-constraint (app plus (var x)) (ofint 3))    :named t3))
(assert (! (app-constraint plus (var x))                    :named t4))
(check-sat)
(get-unsat-core)
```

### Using optimization to local type errors

By asserting each type checking condition as a soft constraint and seeking an optimized solution to satisfy as many type constraints as possible, we obtain targeted information of what sub-terms could not
be type checked.

We can read off the type annotations for remaining sub-terms using 
the current model. Albeit, it is not a user-friendly format. 

```z3
(declare-datatypes () ((Type 
  int 
  string 
  (arrow (dom Type) (rng Type)))))
(declare-sort Var)
(declare-datatypes () ((M 
  (lam (bound Var) (body M)) 
  (var (v Var)) 
  (app (fn M) (arg M)))))
(declare-fun type (M) Type)
(declare-const x Var)
(declare-const y Var)
(define-fun dom ((M M)) Type (dom (type M)))
(define-fun rng ((M M)) Type (rng (type M)))
(define-fun type ((x Var)) Type (type (var x)))
(define-fun app-constraint ((M1 M) (M2 M)) Bool
  (and (= (dom M1) (type M2))
          (is-arrow (type M1))
          (= (type (app M1 M2)) (rng M1))
  )
)
(define-fun lam-constraint ((x Var) (M M)) Bool
  (= (type (lam x M)) (arrow (type x) (type M)))
)

(declare-const plus M)
(assert (= (type plus) (arrow int (arrow int int))))
(declare-fun ofint (Int) M)
(assert (= (type (ofint 3)) int))
(declare-fun ofstring (String) M)
(declare-const t1 Bool)
(declare-const t2 Bool)
(declare-const t3 Bool)
(declare-const t4 Bool)
(assert (= (type (ofstring "a")) string))
(define-const x_plus_3 M (app (app plus (var x)) (ofint 3)))
(assert (= t1 (app-constraint (lam x x_plus_3) (ofstring "a"))))
(assert (= t2 (lam-constraint x x_plus_3)))
(assert (= t3 (app-constraint (app plus (var x)) (ofint 3))))
(assert (= t4 (app-constraint plus (var x))))
(assert-soft t1)
(assert-soft t2)
(assert-soft t3)
(assert-soft t4)
(check-sat)
(get-objectives)
(get-value (t1 t2 t3 t4))
(get-model)
```