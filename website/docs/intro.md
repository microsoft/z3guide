---
sidebar_position: 1
---

# Tutorial Intro 

Guide

Getting Started with Z3 A Guide
================================

Be sure to follow along with the examples by clicking the edit link in the corner. See what the tool says, try your own formulas, and experiment!

Introduction
------------

Z3 is a state-of-the art theorem prover from Microsoft Research. It can be used to check the satisfiability of logical formulas over one or more theories. Z3 offers a compelling match for software analysis and verification tools, since several common software constructs map directly into supported theories.

The main objective of the tutorial is to introduce the reader on how to use Z3 effectively for logical modeling and solving. The tutorial provides some general background on logical modeling, but we have to defer a full introduction to first-order logic and decision procedures to text-books.

Z3 is a low level tool. It is best used as a component in the context of other tools that require solving logical formulas. Consequently, Z3 exposes a number of API facilities to make it convenient for tools to map into Z3, but there are no stand-alone editors or user-centric facilities for interacting with Z3. The language syntax used in the front ends favor simplicity in contrast to linguistic convenience.

Basic Commands
--------------

The Z3 input format is an extension of the one defined by the [SMT-LIB 2.0 standard](httpwww.smtlib.org). A Z3 script is a sequence of commands. The help command displays a list of all available commands. The command echo displays a message. Internally, Z3 maintains a stack of user provided formulas and declarations. We say these are the assertions provided by the user. The command declare-const declares a constant of a given type (aka sort). The command declare-fun declares a function. In the following example, we declared a function that receives an integer and a boolean, and returns an integer.

```
(echo starting Z3...)
(declare-const a Int)
(declare-fun f (Int Bool) Int)
```

The command assert adds a formula into the Z3 internal stack. We say the set of formulas in the Z3 stack is satisfiable if there is an interpretation (for the user declared constants and functions) that makes all asserted formulas true.

```
(declare-const a Int)
(declare-fun f (Int Bool) Int)
(assert ( a 10))
(assert ( (f a true) 100))
(check-sat)
```

The first asserted formula states that the constant a must be greater than 10. The second one states that the function f applied to a and true must return a value less than 100. The command check-sat determines whether the current formulas on the Z3 stack are satisfiable or not. If the formulas are satisfiable, Z3 returns sat. If they are not satisfiable (i.e., they are unsatisfiable), Z3 returns unsat. Z3 may also return unknown when it can't determine whether a formula is satisfiable or not.

When the command check-sat returns sat, the command get-model can be used to retrieve an interpretation that makes all formulas on the Z3 internal stack true.

```
(declare-const a Int)
(declare-fun f (Int Bool) Int)
(assert ( a 10))
(assert ( (f a true) 100))
(check-sat)
(get-model)
```

The interpretation is provided using definitions. For example, the definition

>  define-fun a () Int [val])

states that the value of a in the model is [val]. The definition

> (define-fun f ((x!1 Int) (x!2 Bool)) Int
>    ...
> )

is very similar to a function definition used in programming languages. In this example, x1 and x2 are the arguments of the function interpretation created by Z3. For this simple example, the definition of f is based on ite's (aka if-then-elses or conditional expressions). For example, the expression

> (ite (and (= x!1 11) (= x!2 false)) 21 0)


evaluates (returns) 21 when x!1 is equal to 11, and x!2 is equal to false. Otherwise, it returns 0.

### Using Scopes

In some applications, we want to explore several similar problems that share several definitions and assertions. We can use the commands push and pop for doing that. Z3 maintains a global stack of declarations and assertions. The command push creates a new scope by saving the current stack size. The command pop removes any assertion or declaration performed between it and the matching push. The check-sat and get-assertions commands always operate on the content of the global stack.

In the following example, the command (assert p) signs an error because the pop command removed the declaration for p. If the last pop command is removed, then the error is corrected.

```
(declare-const x Int)
(declare-const y Int)
(declare-const z Int)
(push)
(assert (= (+ x y) 10))
(assert (= (+ x ( 2 y)) 20))
(check-sat)
(pop) ; remove the two assertions
(push) 
(assert (= (+ ( 3 x) y) 10))
(assert (= (+ ( 2 x) ( 2 y)) 21))
(check-sat)
(declare-const p Bool)
(pop)
(assert p) ; error, since declaration of p was removed from the stack
```
The push and pop commands can optionally receive a numeral argument as specifed by the SMT 2 language.

### Configuration

The command set-option is used to configure Z3. Z3 has several options to control its behavior. Some of these options (e.g., produce-proofs) can only be set before any declaration or assertion. We use the reset command to erase all assertions and declarations. After the reset command, all configuration options can be set.

```
(set-option print-success true) 
(set-option produce-unsat-cores true) ; enable generation of unsat cores
(set-option produce-models true) ; enable model generation
(set-option produce-proofs true) ; enable proof generation
(declare-const x Int)
(set-option produce-proofs false) ; error, cannot change this option after a declaration or assertion
(echo before reset)
(reset)
(set-option produce-proofs false) ; ok
```

The option print-success true is particularly useful when Z3 is being controlled by another application using pipes. In this mode, commands, that otherwise would not print any output, will print success.

### Additional commands

The command (display t) just applies the Z3 pretty printer to the given expression. The command (simplify t) displays a possibly simpler expression equivalent to t. This command accepts many different options, (help simplify) will display all available options.

```
(declare-const a (Array Int Int))
(declare-const x Int)
(declare-const y Int)
(display (+ x 2 x 1))
(simplify (+ x 2 x 1))
(simplify ( (+ x y) (+ x y)))
(simplify ( (+ x y) (+ x y)) som true) ; put all expressions in sum-of-monomials form.
(simplify (= x (+ y 2)) arith-lhs true)
(simplify (= (store (store a 1 2) 4 3)
             (store (store a 4 3) 1 2)))
(simplify (= (store (store a 1 2) 4 3)
             (store (store a 4 3) 1 2))
          sort-store true)
(help simplify)
```

The define-sort command defines a new sort symbol that is an abbreviation for a sort expression. The new sort symbol can be parameterized, in which case the names of the parameters are specified in the command and the sort expression uses the sort parameters. The form of the command is this

> (define-sort [symbol] ([symbol]+) [sort])

The following example defines several abbreviations for sort expressions.

```
(define-sort Set (T) (Array T Bool))
(define-sort IList () (List Int))
(define-sort List-Set (T) (Array (List T) Bool))
(define-sort I () Int)

(declare-const s1 (Set I))
(declare-const s2 (List-Set Int))
(declare-const a I)
(declare-const l IList)

(assert (= (select s1 a) true))
(assert (= (select s2 l) false))
(check-sat)
(get-model)
```


Propositional Logic
-------------------

The pre-defined sort Bool is the sort (type) of all Boolean propositional expressions. Z3 supports the usual Boolean operators and, or, xor, not, = (implication), ite (if-then-else). Bi-implications are represented using equatity =. The following example shows how to prove that if p implies q and q implies r, then p implies r. We accomplish that by showing that the negation is unsatisfiable. The command define-fun is used to define a macro (aka alias). In this example, conjecture is an alias for the conjecture we want to prove.

```
(declare-const p Bool)
(declare-const q Bool)
(declare-const r Bool)
(define-fun conjecture () Bool
	(= (and (= p q) (= q r))
		(= p r)))
(assert (not conjecture))
(check-sat)
``` 

### Satisfiability and Validity

A formula F is valid if F always evaluates to true for any assignment of appropriate values to its uninterpreted function and constant symbols. A formula F is satisfiable if there is some assignment of appropriate values to its uninterpreted function and constant symbols under which F evaluates to true. Validity is about finding a proof of a statement; satisfiability is about finding a solution to a set of constraints. Consider a formula F with some uninterpreted constants, say a and b. We can ask whether F is valid, that is whether it is always true for any combination of values for a and b. If F is always true, then not F is always false, and then not F will not have any satisfying assignment; that is, not F is unsatisfiable. That is, F is valid precisely when not F is not satisfiable (is unsatisfiable). Alternately, F is satisfiable if and only if not F is not valid (is invalid). Z3 finds satisfying assignments (or report that there are none). To determine whether a formula F is valid, we ask Z3 whether not F is satisfiable. Thus, to check the deMorgan's law is valid (i.e., to prove it), we show its negation to be unsatisfiable.

```
(declare-const a Bool)
(declare-const b Bool)
(define-fun demorgan () Bool
    (= (and a b) (not (or (not a) (not b)))))
(assert (not demorgan))
(check-sat)
```

Uninterpreted functions and constants
-------------------------------------

The basic building blocks of SMT formulas are constants and functions. Constants are just functions that take no arguments. So everything is really just a function.

```
(declare-fun f (Int) Int)
(declare-fun a () Int) ; a is a constant
(declare-const b Int) ; syntax sugar for (declare-fun b () Int)
(assert ( a 20))
(assert ( b a))
(assert (= (f 10) 1))
(check-sat)
(get-model)
```

Unlike programming languages, where functions have side-effects, can throw exceptions, or never return, functions in classical first-order logic have no side-effects and are total. That is, they are defined on all input values. This includes functions, such as division.

Function and constant symbols in pure first-order logic are _uninterpreted_ or _free_, which means that no a priori interpretation is attached. This is in contrast to functions belonging to the signature of theories, such as arithmetic where the function + has a fixed standard interpretation (it adds two numbers). Uninterpreted functions and constants are maximally flexible; they allow any interpretation that is consistent with the constraints over the function or constant.

To illustrate uninterpreted functions and constants let us introduce an (uninterpreted) sort A, and the constants x, y ranging over A. Finally let f be an uninterpreted function that takes one argument of sort A and results in a value of sort A. The example illustrates how one can force an interpretation where f applied twice to x results in x again, but f applied once to x is different form x.

```
(declare-sort A)
(declare-const x A)
(declare-const y A)
(declare-fun f (A) A)
(assert (= (f (f x)) x))
(assert (= (f x) y))
(assert (not (= x y)))
(check-sat)
(get-model)
```

The resulting model introduces abstract values for the elements in A, because the sort A is uninterpreted. The interpretation for f in the model toggles between the two values for x and y, which are different.

Arithmetic
----------

Z3 has builtin support for integer and real constants. This two types should not be confused with machine integers (32-bit or 64-bit) and floating point numbers. These two types (sorts) represent the mathematical integers and reals. The command declare-const is used to declare integer and real constants.

```
(declare-const a Int)
(declare-const b Int)
(declare-const c Int)
(declare-const d Real)
(declare-const e Real)
```


After constants are declared, the user can assert.smt formulas containing these constants. The formulas contain arithmetic operators such as +, -, , and so on. The command check-sat will instruct Z3 to try to find an interpretation for the declared constants that makes all formulas true. The interpretation is basically assigning a number to each constant. If such interpretation exists, we say it is a model for the asserted formulas. The command get-model displays the model built by Z3.

```
(declare-const a Int)
(declare-const b Int)
(declare-const c Int)
(declare-const d Real)
(declare-const e Real)
(assert ( a (+ b 2)))
(assert (= a (+ ( 2 c) 10)))
(assert (= (+ c b) 1000))
(assert (= d e))
(check-sat)
(get-model)
```

Real constants should contain a decimal point. Unlike most programming languages, Z3 will not convert automatically integers into reals and vice-versa. The function to-real can be used to convert an integer expression into a real one.

```
(declare-const a Int)
(declare-const b Int)
(declare-const c Int)
(declare-const d Real)
(declare-const e Real)
(assert ( e (+ (to_real (+ a b)) 2.0)))
(assert (= d (+ (to_real c) 0.5)))
(assert ( a b))
(check-sat)
(get-model)
```

### Nonlinear arithmetic

We say a formula is nonlinear if it contains expressions of the form ( t s) where t and s are not numbers. Nonlinear real arithmetic is very expensive, and Z3 is not complete for this kind of formula. The command check-sat may return unknown or loop. Nonlinear integer arithmetic is undecidable there is no procedure that is correct and terminates (for every input) with a sat or unsat answer. Yes, it is impossible to build such procedure. Note that, this does not prevent Z3 from returning an answer for many nonlinear problems. The real limit is that there will always be a nonlinear integer arithmetic formula that it will fail produce an answer.

```
(declare-const a Int)
(assert ( ( a a) 3))
(check-sat)
(get-model)

(echo Z3 does not always find solutions to non-linear problems)
(declare-const b Real)
(declare-const c Real)
(assert (= (+ ( b b b) ( b c)) 3.0))
(check-sat)

(echo yet it can show unsatisfiabiltiy for some nontrivial nonlinear problems...)
(declare-const x Real)
(declare-const y Real)
(declare-const z Real)
(assert (= ( x x) (+ x 2.0)))
(assert (= ( x y) x))
(assert (= ( (- y 1.0) z) 1.0))
(check-sat)

(reset)
(echo When presented only non-linear constraints over reals, Z3 uses a specialized complete solver)
(declare-const b Real)
(declare-const c Real)
(assert (= (+ ( b b b) ( b c)) 3.0))
(check-sat)
(get-model)
```

### Division

Z3 also has support for division, integer division, modulo and remainder operators. Internally, they are all mapped to multiplication.

```
(declare-const a Int)
(declare-const r1 Int)
(declare-const r2 Int)
(declare-const r3 Int)
(declare-const r4 Int)
(declare-const r5 Int)
(declare-const r6 Int)
(assert (= a 10))
(assert (= r1 (div a 4))) ; integer division
(assert (= r2 (mod a 4))) ; mod
(assert (= r3 (rem a 4))) ; remainder
(assert (= r4 (div a (- 4)))) ; integer division
(assert (= r5 (mod a (- 4)))) ; mod
(assert (= r6 (rem a (- 4)))) ; remainder
(declare-const b Real)
(declare-const c Real)
(assert (= b ( c 3.0)))
(assert (= c 20.0))
(check-sat)
(get-model)
```

In Z3, division by zero is allowed, but the result is not specified. Division is not a partial function. Actually, in Z3 all functions are total, although the result may be underspecified in some cases like division by zero.

```
(declare-const a Real)
; The following formula is satisfiable since division by zero is not specified.
(assert (= ( a 0.0) 10.0)) 
(check-sat)
(get-model)

; Although division by zero is not specified, division is still a function.
; So, ( a 0.0) cannot evaluated to 10.0 and 2.0.
(assert (= ( a 0.0) 2.0)) 
(check-sat)
```

If you are not happy with this behavior, you may use ite (if-then-else) operator to guard every division, and assign whatever intepretation you like to the division by zero. This example uses define-fun constructor to create a new operator mydiv. This is essentially a macro, and Z3 will expand its definition for every application of mydiv.

```
; defining my own division operator where x0.0 == 0.0 for every x.
(define-fun mydiv ((x Real) (y Real)) Real
  (if (not (= y 0.0))
      ( x y)
      0.0))
(declare-const a Real)
(declare-const b Real)
(assert (= (mydiv a b) 1.0))
(assert (= b 0.0))
(check-sat)
```

Bitvectors
----------

Modern CPUs and main-stream programming languages use arithmetic over fixed-size bit-vectors. The theory of bit-vectors allows modeling the precise semantics of unsigned and of signed two-complements arithmetic. There are a large number of supported functions and relations over bit-vectors. They are summarized on Z3's documentation link here! of the binary APIs and they are summarized on the SMT-LIB link here!  web-site. We will not try to give a comprehensive overview here, but touch on some of the main features.

In contrast to programming languages, such as C, C++, C#, Java, there is no distinction between signed and unsigned bit-vectors as numbers. Instead, the theory of bit-vectors provides special signed versions of arithmetical operations where it makes a difference whether the bit-vector is treated as signed or unsigned.

Z3 supports Bitvectors of arbitrary size. (_ BitVec n) is the sort of bitvectors whose length is n. Bitvector literals may be defined using binary, decimal and hexadecimal notation. In the binary and hexadecimal cases, the bitvector size is inferred from the number of characters. For example, the bitvector literal #b010 in binary format is a bitvector of size 3, and the bitvector literal #x0a0 in hexadecimal format is a bitvector of size 12. The size must be specified for bitvector literals in decimal format. For example, (_ bv10 32) is a bitvector of size 32 that representes the numeral 10. By default, Z3 display bitvectors in hexadecimal format if the bitvector size is a multiple of 4, and in binary otherwise. The command (set-option pp.bv-literals false) can be used to force Z3 to display bitvector literals in decimal format.

```
(display #b0100)
(display (_ bv20 8))
(display (_ bv20 7))
(display #x0a) 
(set-option pp.bv-literals false)
(display #b0100)
(display (_ bv20 8))
(display (_ bv20 7))
(display #x0a) 
```

### Basic Bitvector Arithmetic
```
(simplify (bvadd #x07 #x03)) ; addition
(simplify (bvsub #x07 #x03)) ; subtraction
(simplify (bvneg #x07)) ; unary minus
(simplify (bvmul #x07 #x03)) ; multiplication
(simplify (bvurem #x07 #x03)) ; unsigned remainder
(simplify (bvsrem #x07 #x03)) ; signed remainder
(simplify (bvsmod #x07 #x03)) ; signed modulo
(simplify (bvshl #x07 #x03)) ; shift left
(simplify (bvlshr #xf0 #x03)) ; unsigned (logical) shift right
(simplify (bvashr #xf0 #x03)) ; signed (arithmetical) shift right
```
### Bitwise Operations

 ```
(simplify (bvor #x6 #x3))   ; bitwise or
(simplify (bvand #x6 #x3))  ; bitwise and
(simplify (bvnot #x6)) ; bitwise not
(simplify (bvnand #x6 #x3)) ; bitwise nand
(simplify (bvnor #x6 #x3)) ; bitwise nor
(simplify (bvxnor #x6 #x3)) ; bitwise xnor
```
We can prove a bitwise version of deMorgan's law
```
(declare-const x (_ BitVec 64))
(declare-const y (_ BitVec 64))
(assert (not (= (bvand (bvnot x) (bvnot y)) (bvnot (bvor x y)))))
(check-sat)
```

Let us illustrate a simple property of bit-wise arithmetic. There is a fast way to check that fixed size numbers are powers of two. It turns out that a bit-vector x is a power of two or zero if and only if x & (x - 1) is zero, where & represents the bitwise and. We check this for four bits below.

```
(define-fun is-power-of-two ((x (_ BitVec 4))) Bool 
  (= #x0 (bvand x (bvsub x #x1))))
(declare-const a (_ BitVec 4))
(assert 
 (not (= (is-power-of-two a) 
         (or (= a #x0) 
             (= a #x1) 
             (= a #x2) 
             (= a #x4) 
             (= a #x8)))))
(check-sat)
```

### Predicates over Bitvectors

```
(simplify (bvule #x0a #xf0))  ; unsigned less or equal
(simplify (bvult #x0a #xf0))  ; unsigned less than
(simplify (bvuge #x0a #xf0))  ; unsigned greater or equal
(simplify (bvugt #x0a #xf0))  ; unsigned greater than
(simplify (bvsle #x0a #xf0))  ; signed less or equal
(simplify (bvslt #x0a #xf0))  ; signed less than
(simplify (bvsge #x0a #xf0))  ; signed greater or equal
(simplify (bvsgt #x0a #xf0))  ; signed greater than
```

Signed comparison, such as bvsle, takes the sign bit of bitvectors into account for comparison, while unsigned comparison treats the bitvector as unsigned (treats the bitvector as a natural number).

```
(declare-const a (_ BitVec 4))
(declare-const b (_ BitVec 4))
(assert (not (= (bvule a b) (bvsle a b))))
(check-sat)
(get-model)
```

Arrays
------

As part of formulating a programme of a mathematical theory of computation McCarthy proposed a _basic_ theory of arrays as characterized by the select-store axioms. The expression (select a i) returns the value stored at position i of the array a; and (store a i v) returns a new array identical to a, but on position i it contains the value v.

Z3 contains a decision procedure for the basic theory of arrays. By default, Z3 assumes that arrays are extensional over select. In other words, Z3 also enforces that if two arrays agree on all reads, then the arrays are equal.

It also contains various extensions for operations on arrays that remain decidable and amenable to efficient saturation procedures (here efficient means, with an NP-complete satisfiability complexity). We describe these extensions in the following using a collection of examples. Additional background on these extensions is available in the paper [Generalized and Efficient Array Decision Procedures](httpresearch.microsoft.comen-usumpeopleleonardofmcad09.pdf).

### Select and Store

Let us first check a basic property of arrays. Suppose a1 is an array of integers, then the constraint (and (= (select a1 x) x) (= (store a1 x y) a1)) is satisfiable for an array that contains an index x that maps to x, and when x = y (because the first equality forced the range of x to be x). We can check this constraint.

```
(declare-const x Int)
(declare-const y Int)
(declare-const z Int)
(declare-const a1 (Array Int Int))
(declare-const a2 (Array Int Int))
(declare-const a3 (Array Int Int))
(assert (= (select a1 x) x))
(assert (= (store a1 x y) a1))
(check-sat)
(get-model)
```

On the other hand, the constraints become unsatisfiable when asserting (not (= x y)).

```
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

```
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

In the following, we will simulate basic Boolean algebra (set theory) using the array theory extensions in Z3. Z3 provides a parametrized map function on arrays. It allows applying arbitrary functions to the range of arrays. The following example illustrates how to use the map function.

```
(define-sort Set (T) (Array T Bool))
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

We can use the parametrized map function to encode finite sets and finite bags. Finite bags can be modeled similarly to sets. A bag is here an array that maps elements to their multiplicity. Main bag operations include union, obtained by adding multiplicity, intersection, by taking the minimum multiplicity, and a dual join operation that takes the maximum multiplicity. In the following example, we define the bag-union using map. Notice that we need to specify the full signature of + since it is an overloaded operator.

```
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

Datatypes
---------

Algebraic datatypes, known from programming languages such as ML, offer a convenient way for specifying common data structures. Records and tuples are special cases of algebraic datatypes, and so are scalars (enumeration types). But algebraic datatypes are more general. They can be used to specify finite lists, trees and other recursive structures.

### Records

A record is specified as a datatype with a single constructor and as many arguments as record elements. The number of arguments to a record are always the same. The type system does not allow to extend records and there is no record subtyping.

The following example illustrates that two records are equal only if all the arguments are equal. It introduces the parametric type Pair, with constructor mk-pair and two arguments that can be accessed using the selector functions first and second.

```
(declare-datatypes (T1 T2) ((Pair (mk-pair (first T1) (second T2)))))
(declare-const p1 (Pair Int Int))
(declare-const p2 (Pair Int Int))
(assert (= p1 p2))
(assert ( (second p1) 20))
(check-sat)
(get-model)
(assert (not (= (first p1) (first p2))))
(check-sat)
```

### Scalars (enumeration types)

A scalar sort is a finite domain sort. The elements of the finite domain are enumerated as distinct constants. For example, the sort S is a scalar type with three values A, B and C. It is possible for three constants of sort S to be distinct, but not for four constants.

```
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

```
(declare-datatypes (T) ((Lst nil (cons (hd T) (tl Lst)))))
(declare-const l1 (Lst Int))
(declare-const l2 (Lst Bool))
```

The List recursive datatype is builtin in Z3. The empty list is nil, and the constructor insert is used to build new lists. The accessors head and tail are defined as usual.

```
(declare-const l1 (List Int))
(declare-const l2 (List Int))
(declare-const l3 (List Int))
(declare-const x Int)
(assert (not (= l1 nil)))
(assert (not (= l2 nil)))
(assert (= (head l1) (head l2)))
(assert (not (= l1 l2)))
(assert (= l3 (insert x l2)))
(assert ( x 100))
(check-sat)
(get-model)
(assert (= (tail l1) (tail l2)))
(check-sat)
```

In the example above, we also assert that l1 and l2 are not nil. This is because the interpretation of head and tail is underspecified on nil. So then head and tail would not be able to distinguish nil from (insert (head nil) (tail nil)).

### Mutually recursive datatypes

You can also specify mutually recursive datatypes for Z3. We list one example below.

```
; declare a mutually recursive parametric datatype
(declare-datatypes (T) ((Tree leaf (node (value T) (children TreeList)))
                        (TreeList nil (cons (car Tree) (cdr TreeList)))))
(declare-const t1 (Tree Int))
(declare-const t2 (Tree Bool))
; we must use the 'as' construct to distinguish the leaf (Tree Int) from leaf (Tree Bool)
(assert (not (= t1 (as leaf (Tree Int)))))
(assert ( (value t1) 20))
(assert (not (is-leaf t2)))
(assert (not (value t2)))
(check-sat)
(get-model)
```

In the example above, we have a tree of Booleans and a tree of integers. The leaf constant must return a tree of a specific sort. To specify the result sort, we use the qualified identifier (as leaf (Tree Int)). Note that, we do not need to use a qualified identifer for value, since Z3 can infer the intended declaration using the sort of the argument.

### Z3 will not prove inductive facts

The ground decision procedures for recursive datatypes don't lift to establishing inductive facts. Z3 does not contain methods for producing proofs by induction. This may change in the future. In particular, consider the following example where the function p is true on all natural numbers, which can be proved by induction over Nat. Z3 enters a matching loop as it attempts instantiating the universally quantified implication.

```
(set-option timeout 2000)
(declare-datatypes () ((Nat zero (succ (pred Nat)))))
(declare-fun p (Nat) Bool)
(assert (p zero))
(assert (forall ((x Nat)) (implies (p (pred x)) (p x))))
(assert (not (forall ((x Nat)) (p x))))
(check-sat)
(get-info all-statistics)
```

Quantifiers
-----------

Z3 is a _decision procedure_ for the combination of the previous quantifier-free theories. That is, it can answer whether a quantifier-free formula, modulo the theories referenced by the formula, is satisfiable or whether it is unsatisfiable. Z3 also accepts and can work with formulas that use quantifiers. It is no longer a decision procedure for such formulas in general (and for good reasons, as there can be no decision procedure for first-order logic).

Nevertheless, Z3 is often able to handle formulas involving quantifiers. It uses several approaches to handle quantifiers. The most prolific approach is using _pattern-based_ quantifier instantiation. This approach allows instantiating quantified formulas with ground terms that appear in the current search context based on _pattern annotations_ on quantifiers. Another approach is based on _saturation theorem proving_ using a superposition calculus which is a modern method for applying resolution style rules with equalities. The pattern-based instantiation method is quite effective, even though it is inherently incomplete. The saturation based approach is complete for pure first-order formulas, but does not scale as nicely and is harder to predict.

Z3 also contains a model-based quantifier instantiation component that uses a model construction to find good terms to instantiate quantifiers with; and Z3 also handles many decidable fragments.

### Modeling with Quantifiers

Suppose we want to model an object oriented type system with single inheritance. We would need a predicate for sub-typing. Sub-typing should be a partial order, and respect single inheritance. For some built-in type constructors, such as for array-of, sub-typing should be monotone.

```
(declare-sort Type)
(declare-fun subtype (Type Type) Bool)
(declare-fun array-of (Type) Type)
(assert (forall ((x Type)) (subtype x x)))
(assert (forall ((x Type) (y Type) (z Type))
          (= (and (subtype x y) (subtype y z)) 
              (subtype x z)))) 
(assert (forall ((x Type) (y Type))
          (= (and (subtype x y) (subtype y x)) 
              (= x y))))
(assert (forall ((x Type) (y Type) (z Type))
          (= (and (subtype x y) (subtype x z)) 
              (or (subtype y z) (subtype z y))))) 
(assert (forall ((x Type) (y Type))
          (= (subtype x y) 
              (subtype (array-of x) (array-of y)))))
(declare-const root-type Type)
(assert (forall ((x Type)) (subtype x root-type)))
(check-sat)
```

### Patterns

The Stanford Pascal verifier and the subsequent Simplify theorem prover pioneered the use of pattern-based quantifier instantiation. The basic idea behind pattern-based quantifier instantiation is in a sense straight-forward Annotate a quantified formula using a _pattern_ that contains all the bound variables. So a pattern is an expression (that does not contain binding operations, such as quantifiers) that contains variables bound by a quantifier. Then instantiate the quantifier whenever a term that matches the pattern is created during search. This is a conceptually easy starting point, but there are several subtleties that are important.

In the following example, the first two options make sure that Model-based quantifier instantiation and saturation engines are disabled. We also annotate the quantified formula with the pattern (f (g x)). Since there is no ground instance of this pattern, the quantifier is not instantiated, and Z3 fails to show that the formula is unsatisfiable.

```
(set-option smt.auto-config false) ; disable automatic self configuration
(set-option smt.mbqi false) ; disable model-based quantifier instantiation
(declare-fun f (Int) Int)
(declare-fun g (Int) Int)
(declare-const a Int)
(declare-const b Int)
(declare-const c Int)
(assert (forall ((x Int))
                (! (= (f (g x)) x)
                   pattern ((f (g x))))))
(assert (= (g a) c))
(assert (= (g b) c))
(assert (not (= a b)))
(check-sat)
```

When the more permissive pattern (g x) is used. Z3 proves the formula to be unsatisfiable. More restrive patterns minimize the number of instantiations (and potentially improve performance), but they may also make Z3 less complete.

```
(set-option smt.auto-config false) ; disable automatic self configuration
(set-option smt.mbqi false) ; disable model-based quantifier instantiation
(declare-fun f (Int) Int)
(declare-fun g (Int) Int)
(declare-const a Int)
(declare-const b Int)
(declare-const c Int)
(assert (forall ((x Int))
                (! (= (f (g x)) x)
                   pattern ((g x)))))
(assert (= (g a) c))
(assert (= (g b) c))
(assert (not (= a b)))
(check-sat)
```

Some patterns may also create long instantiation chains. Consider the following assertion.

> (assert (forall (x Type) (y Type) 
>  (! (= (subtype x y) (subtype (array-of x) (array-of y)))
>     pattern ((subtype x y))
>  ))


The axiom gets instantiated whenever there is some ground term of the form (subtype s t). The instantiation causes a fresh ground term (subtype (array-of s) (array-of t)), which enables a new instantiation. This undesirable situation is called a matching loop. Z3 uses many heuristics to break matching loops.

Before elaborating on the subtleties, we should address an important first question. What defines the terms that are created during search In the context of most SMT solvers, and of the Simplify theorem prover, terms exist as part of the input formula, they are of course also created by instantiating quantifiers, but terms are also implicitly created when equalities are asserted. The last point means that terms are considered up to congruence and pattern matching takes place modulo ground equalities. We call the matching problem E-matching. For example, if we have the following equalities

```
(set-option smt.auto-config false) ; disable automatic self configuration
(set-option smt.mbqi false) ; disable model-based quantifier instantiation
(declare-fun f (Int) Int)
(declare-fun g (Int) Int)
(declare-const a Int)
(declare-const b Int)
(declare-const c Int)
(assert (forall ((x Int))
                (! (= (f (g x)) x)
                   pattern ((f (g x))))))
(assert (= a (g b)))
(assert (= b c))
(assert (not (= (f a) c)))
(check-sat)
```

The terms (f a) and (f (g b)) are equal modulo the equalities. The pattern (f (g x)) can be matched and x bound to b (and the equality (= (f (g b)) b) is deduced.

While E-matching is an NP-complete problem, the main sources of overhead in larger verification problems comes from matching thousands of patterns in the context of an evolving set of terms and equalities. Z3 integrates an efficient E-matching engine using term indexing techniques.

### Multi-patterns

In some cases, there is no pattern that contains all bound variables and does not contain interpreted symbols. In these cases, we use multi-patterns. In the following example, the quantified formula states that f is injective. This quantified formula is annotated with the multi-pattern (f x) (f y)

```
(declare-sort A)
(declare-sort B)
(declare-fun f (A) B)
(assert (forall ((x A) (y A))
                (! (= (= (f x) (f y)) (= x y))
                   pattern ((f x) (f y))
                   )))
(declare-const a1 A)
(declare-const a2 A)
(declare-const b B)
(assert (not (= a1 a2)))
(assert (= (f a1) b))
(assert (= (f a2) b))
(check-sat)
```

The quantified formula is instantiated for every pair of occurrences of f. A simple trick allows formulating injectivity of f in such a way that only a linear number of instantiations is required. The trick is to realize that f is injective if and only if it has a partial inverse.

```
(declare-sort A)
(declare-sort B)
(declare-fun f (A) B)
(declare-fun f-inv (B) A)
(assert (forall ((x A))
                (! (= (f-inv (f x)) x)
                   pattern ((f x))
                   )))
(declare-const a1 A)
(declare-const a2 A)
(declare-const b B)
(assert (not (= a1 a2)))
(assert (= (f a1) b))
(assert (= (f a2) b))
(check-sat)
```

### No patterns

The annotation no-pattern can be used to instrument Z3 not to use a certain sub-expression as a pattern. The pattern inference engine may otherwise choose arbitrary sub-expressions as patterns to direct quantifier instantiation.

### Model-based Quantifier Instantiation

The model-based quantifier instantiation (MBQI) is essentially a counter-example based refinement loop, where candidate models are built and checked. When the model checking step fails, it creates new quantifier instantiations. The models are returned as simple functional programs. In the following example, the model provides an interpretation for function f and constants a and b. One can easily check that the returned model does indeed satisfy the quantifier.

```
(set-option smt.mbqi true)
(declare-fun f (Int Int) Int)
(declare-const a Int)
(declare-const b Int)

(assert (forall ((x Int)) (= (f x x) (+ x a))))

(assert ( (f a b) a))
(assert ( a 0))
(check-sat)
(get-model)

(echo evaluating (f (+ a 10) 20)...)
(eval (f (+ a 10) 20))
```

The command eval evaluates an expression in the last model produced by Z3. It is essentially executing the function program produced by Z3.

MBQI is a decision procedure for several useful fragments. It may find models even for formulas that are not in any of these fragments. We describe some of these fragments.

#### Effectively Propositional

The effectively propositional class of formulas (aka The Bernays-Schonfinkel class) is a decidable fragment of first-order logic formulas. It corresponds to formulas which, when written in prenex normal form contain only constants, universal quantifiers, and functions that return boolean values (aka predicates).

Problems arising from program verification often involve establishing facts of quantifier-free formulas, but the facts themselves use relations and functions that are conveniently axiomatized using a background theory that uses quantified formulas. One set of examples of this situation comprise of formulas involving partial-orders. The following example axiomatizes a subtype partial order relation that has the tree property. That is, if x and y are subtypes of z, then x is a subtype of y or y is a subtype of x. The option (set-option model.compact true) instructs Z3 to eliminate trivial redundancies from the generated model. In this example, Z3 also creates a finite interpretation for the uninterpreted sort T.

```
(set-option smt.mbqi true)
(set-option model.compact true)

;; T is an uninterpreted sort
(declare-sort T) 

(declare-fun subtype (T T) Bool)

;; subtype is reflexive
(assert (forall ((x T)) (subtype x x)))

;; subtype is antisymmetric
(assert (forall ((x T) (y T)) (= (and (subtype x y)
                                       (subtype y x))
                                       (= x y))))
;; subtype is transitive
(assert (forall ((x T) (y T) (z T)) (= (and (subtype x y)
                                             (subtype y z))
                                             (subtype x z))))
;; subtype has the tree-property
(assert (forall ((x T) (y T) (z T)) (= (and (subtype x z)
                                             (subtype y z))
                                        (or (subtype x y)
                                            (subtype y x)))))

;; now we define a simple example using the axiomatization above.
(declare-const obj-type T)
(declare-const int-type T)
(declare-const real-type T)
(declare-const complex-type T)
(declare-const string-type T)

;; we have an additional axiom every type is a subtype of obj-type
(assert (forall ((x T)) (subtype x obj-type)))

(assert (subtype int-type real-type))
(assert (subtype real-type complex-type))
(assert (not (subtype string-type real-type)))
(declare-const root-type T)
(assert (subtype obj-type root-type))
(check-sat)
(get-model)

(echo Is int-type a subtype of complex-type)
(eval (subtype int-type complex-type))
(echo Is int-type = obj-type)
(eval (= int-type obj-type))
(echo Is int-type a subtype of root-type)
(eval (subtype int-type root-type))
(echo Is root-type = obj-type)
(eval (= root-type obj-type))
```

Note that it uses two auxiliary functions (subtype!25 and k!24) that were not part of your formula. They are auxiliary definitions created by Z3 during the model construction procedure. We can also ask questions by using the eval command. For example,

> (eval (subtype int-type complex-type))

executes (evaluates) the given expression using the produced functional program (model).

Constraints over sets (Boolean Algebras) can be encoded into this fragment by treating sets as unary predicates and lifting equalities between sets as formula equivalence.

```
(set-option smt.mbqi true)
(set-option model.compact true)

;; A, B, C and D are sets of Int
(declare-fun A (Int) Bool)
(declare-fun B (Int) Bool)
(declare-fun C (Int) Bool)
(declare-fun D (Int) Bool)

;; A union B is a subset of C
(assert (forall ((x Int)) (= (or (A x) (B x)) (C x))))

;; B minus A is not empty
;; That is, there exists an integer e that is B but not in A
(declare-const e Int)
(assert (and (B e) (not (A e))))

;; D is equal to C
(assert (forall ((x Int)) (iff (D x) (C x))))

;; 0, 1 and 2 are in B
(assert (B 0))
(assert (B 1))
(assert (B 2))

(check-sat)
(get-model)
(echo Is e an element of D)
(eval (D e))

(echo Now proving that A is a strict subset of D)
;; This is true if the negation is unsatisfiable
(push)
(assert (not (and 
              ;; A is a subset of D
              (forall ((x Int)) (= (A x) (D x)))
              ;; but, D has an element that is not in A.
              (exists ((x Int)) (and (D x) (not (A x)))))))
(check-sat)
(pop)
```

#### Stratified Sorts Fragment

The statified sorts fragment is another decidable fragment of many sorted first-order logic formulas. It corresponds to formulas which, when written in prenex normal form, there is a function level from sorts to naturals, and for every function

> declare-fun f (S_1 ... S_n) R)
>
> level(R)  level(S_i).

#### Array Property Fragment

The array property fragment can encode properties about unidimensional, and is strong enough to say an array is sorted. More information about this fragment can be found in the paper [What's Decidable About Arrays](httpacademic.research.microsoft.comPaper1843442.aspx).

(set-option smt.mbqi true)
(set-option model.compact true)

```
;; A0, A1, A2, A3, A4 are arrays from Integers to Integers.
(declare-fun A0 (Int) Int) (declare-fun A1 (Int) Int)
(declare-fun A2 (Int) Int) (declare-fun A3 (Int) Int)
(declare-fun A4 (Int) Int) 
(declare-const n Int) (declare-const l Int)
(declare-const k Int) (declare-const x Int)
(declare-const y Int) (declare-const w Int)
(declare-const z Int)

;; A1 = A0[k - w]
(assert (= (A1 k) w))
(assert (forall ((x Int)) (or (= x k) (= (A1 x) (A0 x)))))

;; A2 = A1[l - x] = A0[k - w][l - x]
(assert (= (A2 l) x))
(assert (forall ((x Int)) (or (= x l) (= (A2 x) (A1 x)))))

;; A3 = A0[k - y]
(assert (= (A3 k) y))
(assert (forall ((x Int)) (or (= x k) (= (A3 x) (A0 x)))))

;; A4 = A3[l - z] = A0[k - y][l - z] 
(assert (= (A3 l) z))
(assert (forall ((x Int)) (or (= x l) (= (A4 x) (A3 x)))))

(assert (and ( w x) ( x y) ( y z)))
(assert (and ( 0 k) ( k l) ( l n)))
(assert ( (- l k) 1))

;; A2 is sorted in the interval [0,n-1]
(assert (forall ((i Int) (j Int))
                (= (and (= 0 i) (= i j) (= j (- n 1)))
                    (= (A2 i) (A2 j)))))

(check-sat)
(get-model)

;; A4 is sorted in the interval [0,n-1]
(assert (forall ((i Int) (j Int))
                (= (and (= 0 i) (= i j) (= j (- n 1)))
                    (= (A4 i) (A4 j)))))

(check-sat)
```

#### List Fragment

The list fragment can encode properties about data-structures such as lists. For each quantified axiom q in this fragment, there is an easy way to satisfy q. More information about this fragment can be found in the paper [Data Structure Specifications via Local Equality Axioms](httpwww.cs.berkeley.edu~neculaPapersverifier-cav05.pdf).

```
(set-option smt.mbqi true)
;; Ptr is the pointer sort.
(declare-sort Ptr)
;; (next p) represents p.next
;; The pointer reached by following the field next of p.
(declare-fun next  (Ptr) Ptr)
(declare-fun prev  (Ptr) Ptr)
(declare-fun state (Ptr) Int)
(declare-fun prio  (Ptr) Int)
(declare-const null Ptr)
(declare-const RUN  Int)
(declare-const SLP  Int)
(assert (distinct RUN SLP))

;; Asserting data-structure invariants in the current state.

;; p != null && p.next != null = p.next.prev = p
(assert (forall ((p Ptr))
                (= (and (not (= p null))
                         (not (= (next p) null)))
                    (= (prev (next p)) p))))

;; p != null && p.prev != null = p.prev.next = p
(assert (forall ((p Ptr))
                (= (and (not (= p null))
                         (not (= (prev p) null)))
                    (= (next (prev p)) p))))

;;  p != null && p.prev != null = p.state = p.next.state
(assert (forall ((p Ptr))
                (= (and (not (= p null))
                         (not (= (next p) null)))
                    (= (state p) (state (next p))))))

;;  p != null && p.prev != null && p.state = RUN = p.prio = p.next.prio
(assert (forall ((p Ptr))
                (= (and (not (= p null))
                         (not (= (next p) null))
                         (= (state p) RUN))
                    (= (prio p) (prio (next p))))))

;; Verifying Verification Conditions (VCs) for remove procdure
(declare-const x Ptr)
;; new-state, new-next, new-prev and new-prio represent the state 
;; of the system after executing the remove procedure.
(declare-fun new-state (Ptr) Int)
(declare-fun new-next  (Ptr) Ptr)
(declare-fun new-prev  (Ptr) Ptr)
(declare-fun new-prio  (Ptr) Int)
;; pre-conditions
(assert (not (= x null)))
(assert (not (= (prev x) null)))
(assert (= (state x) RUN))
;; updates
;; --- new-prev = prev
(assert (forall ((p Ptr)) (= (new-prev p) (prev p))))
;; --- new-prio = prio
(assert (forall ((p Ptr)) (= (new-prio p) (prio p))))
;; --- new-state = state[x - SLP]
(assert (= (new-state x) SLP))
(assert (forall ((p Ptr)) (or (= p x) (= (new-state p) (state p)))))
;; ----
;; --- new-next  = next[(prev x) - (next x); x - null]
(assert (= (new-next x) null))
(assert (= (new-next (prev x)) (next x)))
(assert (forall ((p Ptr)) (or (= p x) (= p (prev x)) (= (new-next p) (next p)))))
;; ---

;; Proving the data-structure invariants in the new state.

(push)
(assert (not (forall ((p Ptr))
                     (= (and (not (= p null))
                              (not (= (new-next p) null)))
                         (= (new-prev (new-next p)) p)))))
(check-sat)
(get-model)
(pop)
(echo Why it is not valid)
(echo Trying again using a fresh constant bad-ptr as an witness for the failure...)
(push)
(declare-const bad-ptr Ptr)
(assert (not (= (and (not (= bad-ptr null))
                      (not (= (new-next bad-ptr) null)))
                 (= (new-prev (new-next bad-ptr)) bad-ptr))))
(check-sat)
(get-model)
(echo null is)
(eval null)
(echo bad-ptr is)
(eval bad-ptr)
(echo In the new state, bad-ptr.next is)
(eval (new-next bad-ptr))
(echo In the new state, bad-ptr.next.prev is)
(eval (new-prev (new-next bad-ptr)))
(pop)
```

#### Essentially (Almost) Uninterpreted Fragment

The essentiallyalmost uninterpreted fragment subsumes the previous fragments, and uses a more relaxed notion of stratification. More information about this fragment can be found in the paper [Complete instantiation for quantified formulas in Satisfiabiliby Modulo Theories.](httpresearch.microsoft.comen-usumpeopleleonardoci.pdf) The model based quantifier instantiation approach used in Z3 is also described in this paper. Stratified data-structures (such as arrays of pointers) can be encoded in this fragment.

```
(set-option smt.mbqi true)
;; Ptr is the pointer sort.
(declare-sort Ptr)
;; (next p) represents p.next
;; The pointer reached by following the field next of p.
(declare-fun next  (Ptr) Ptr)
(declare-fun prev  (Ptr) Ptr)
(declare-fun state (Ptr) Int)
(declare-fun prio  (Ptr) Int)
(declare-const null Ptr)
(declare-const RUN  Int)
(declare-const SLP  Int)
(assert (distinct RUN SLP))

;; Asserting data-structure invariants in the current state.

;; p != null && p.next != null = p.next.prev = p
(assert (forall ((p Ptr))
                (= (and (not (= p null))
                         (not (= (next p) null)))
                    (= (prev (next p)) p))))

;; p != null && p.prev != null = p.prev.next = p
(assert (forall ((p Ptr))
                (= (and (not (= p null))
                         (not (= (prev p) null)))
                    (= (next (prev p)) p))))

;;  p != null && p.prev != null = p.state = p.next.state
(assert (forall ((p Ptr))
                (= (and (not (= p null))
                         (not (= (next p) null)))
                    (= (state p) (state (next p))))))

;;  p != null && p.prev != null && p.state = RUN = p.prio = p.next.prio
(assert (forall ((p Ptr))
                (= (and (not (= p null))
                         (not (= (next p) null))
                         (= (state p) RUN))
                    (= (prio p) (prio (next p))))))

;; Verifying Verification Conditions (VCs) for remove procdure
(declare-const x Ptr)
;; new-state, new-next, new-prev and new-prio represent the state 
;; of the system after executing the remove procedure.
(declare-fun new-state (Ptr) Int)
(declare-fun new-next  (Ptr) Ptr)
(declare-fun new-prev  (Ptr) Ptr)
(declare-fun new-prio  (Ptr) Int)
;; pre-conditions
(assert (not (= x null)))
(assert (not (= (prev x) null)))
(assert (= (state x) RUN))
;; updates
;; --- new-prev = prev
(assert (forall ((p Ptr)) (= (new-prev p) (prev p))))
;; --- new-prio = prio
(assert (forall ((p Ptr)) (= (new-prio p) (prio p))))
;; --- new-state = state[x - SLP]
(assert (= (new-state x) SLP))
(assert (forall ((p Ptr)) (or (= p x) (= (new-state p) (state p)))))
;; ----
;; --- new-next  = next[(prev x) - (next x); x - null]
(assert (= (new-next x) null))
(assert (= (new-next (prev x)) (next x)))
(assert (forall ((p Ptr)) (or (= p x) (= p (prev x)) (= (new-next p) (next p)))))
;; ---

;; Proving the data-structure invariants in the new state.

(push)
(assert (not (forall ((p Ptr))
                     (= (and (not (= p null))
                              (not (= (new-next p) null)))
                         (= (new-prev (new-next p)) p)))))
(check-sat)
(get-model)
(pop)
(echo Why it is not valid)
(echo Trying again using a fresh constant bad-ptr as an witness for the failure...)
(push)
(declare-const bad-ptr Ptr)
(assert (not (= (and (not (= bad-ptr null))
                      (not (= (new-next bad-ptr) null)))
                 (= (new-prev (new-next bad-ptr)) bad-ptr))))
(check-sat)
(get-model)
(echo null is)
(eval null)
(echo bad-ptr is)
(eval bad-ptr)
(echo In the new state, bad-ptr.next is)
(eval (new-next bad-ptr))
(echo In the new state, bad-ptr.next.prev is)
(eval (new-prev (new-next bad-ptr)))
(pop)
``` 

Shifts on streams (or arrays) can also be encoded.

```
(set-option smt.mbqi true)
;; f an g are streams
(declare-fun f (Int) Int)
(declare-fun g (Int) Int)

;; the segment [a, n + a] of stream f is equal
;; to the segment [0, n] of stream g.
(declare-const n Int)
(declare-const a Int)
(assert (forall ((x Int)) (= (and (= 0 x) (= x n))
                              (= (f (+ x a)) (g x)))))

;; adding some constraints to a
(assert ( a 10))
(assert (= (f a) 2))
(assert (= (g 3) (- 10)))

(check-sat)
(get-model)
```
#### Quantified Bit-Vector Formulas

A quantified bit-Vector formula (QBVF) is a many sorted first-order logic formula where the sort of every variable is a bit-vector sort. The QBVF satisfiability problem, is the problem of deciding whether a QBVF is satisfiable modulo the theory of bit-vectors. This problem is decidable because every universal (existental) quantifier can be expanded into a conjunction (disjunction) of potentially exponential, but finite size. A distinguishing feature in QBVF is the support for uninterpreted function and predicate symbols. More information about this fragment can be found in the paper [Efficiently Solving Quantified Bit-Vector Formulas](httpresearch.microsoft.comen-usumpeopleleonardofmcad10.pdf).

```
(set-option smt.mbqi true)
(define-sort Char () (_ BitVec 8))

(declare-fun f  (Char) Char)
(declare-fun f1 (Char) Char)
(declare-const a Char)

(assert (bvugt a #x00))
(assert (= (f1 (bvadd a #x01)) #x00))
(assert (forall ((x Char)) (or (= x (bvadd a #x01)) (= (f1 x) (f x)))))

(check-sat)
(get-model)
```
#### Conditional (and Pseudo) Macros

Quantifiers defining macros are also automatically detected by the Model Finder. In the following example, the first three quantifiers are defining f by cases.
```
(set-option smt.mbqi true)
(declare-fun f (Int) Int)
(declare-fun p (Int) Bool)
(declare-fun p2 (Int) Bool)
(declare-const a Int)
(declare-const b Int)
(declare-const c Int)
(assert (forall ((x Int)) 
                (= (not (p x)) (= (f x) (+ x 1)))))
(assert (forall ((x Int)) 
                (= (and (p x) (not (p2 x))) (= (f x) x))))
(assert (forall ((x Int)) 
                (= (p2 x) (= (f x) (- x 1)))))
(assert (p b))
(assert (p c))
(assert (p2 a))
(assert ( (f a) b))
(check-sat)
(get-model)
```
#### My formula is not in any of the fragments above

Even if your formula is not in any of the fragments above. Z3 may still find a model for it. For example, The following simple example is not in the fragments described above.
```
(set-option smt.mbqi true)
(declare-fun n () Int)
(declare-fun a_1 () Int)
(declare-fun f (Int) Int)
(declare-fun g_1 (Int) Int)
(assert ( n 0))
(assert (forall ((i Int))
        (= (and (= 0 i) (= i n))
            (and (= (f 0) 0)
                 (= (f 2) 2)
                 (= 0 (f i))
                 (= (f i) 2)
                 (= (= (f i) 2) (= i n))
                 (= (= (f i) 0)
                     (or (= (f (+ i 1)) 1) (= (f (+ i 1)) 2)))
                 (= (= (f i) 1)
                     (or (= (f (+ i 1)) 1) (= (f (+ i 1)) 2)))
                 (= (g_1 0) 0)
                 (= (= (f i) 0) (= (g_1 (+ i 1)) 0))
                 (= (= (f i) 1) (= (g_1 (+ i 1)) (+ (g_1 i) 1)))
                 (= (= (f i) 2)
                     (= (g_1 (+ i 1)) (g_1 i)))
                 (= (= (f i) 1) ( (g_1 i) a_1))
                 (= (= (f i) 2) 
                     (and (= (g_1 i) a_1) ( (g_1 i) 2)))))))
(check-sat)
(get-model)

(echo Property does not hold for n  1)
(assert ( n 1))
(check-sat)
```
The Z3 preprocessor has many options that may improve the performace of the model finder. In the following example, macro-finder will expand quantifiers representing macros at preprocessing time.
```
(set-option smt.mbqi true)
(set-option smt.macro-finder true)

(declare-sort Action)
(declare-sort Role)
(declare-sort Permission)
(declare-sort Id)

(declare-fun Client () Role)  
(declare-fun FinAdmin () Role)
(declare-fun FinClerk () Role)
(declare-fun Manager () Role)
(declare-fun POAdmin () Role)
(declare-fun POClerk () Role)
(declare-fun action2int (Action) Int)
(declare-fun id1 () Id)
(declare-fun id2 () Id)
(declare-fun id2int (Id) Int)
(declare-fun id3 () Id)
(declare-fun id4 () Id)
(declare-fun id5 () Id)
(declare-fun id6 () Id)
(declare-fun id7 () Id)
(declare-fun p1 () Permission)
(declare-fun p2 () Permission)
(declare-fun p3 () Permission)
(declare-fun p4 () Permission)
(declare-fun p5 () Permission)
(declare-fun p6 () Permission)
(declare-fun permission2int (Permission) Int)
(declare-fun role2int (Role) Int)
(declare-fun role_level (Role) Int)
(declare-fun t1_receive () Action)
(declare-fun t2_invoke () Action)
(declare-fun t3_split () Action)
(declare-fun t4_join () Action)
(declare-fun t5_invoke () Action)
(declare-fun t6_invoke () Action)
(declare-fun t7_invokeO () Action)
(declare-fun t8_invokeI () Action)
(declare-fun t9_invoke () Action)
(declare-fun in_creator_ctrPay_0 () Int)
(declare-fun in_creator_ctrPay_1 () Int)
(declare-fun in_customer_crtPO_0 () Int)
(declare-fun in_customer_crtPO_1 () Int)
(declare-fun out_approverPOPayment_apprPay_0 () Int)
(declare-fun out_approverPOPayment_apprPay_1 () Int)
(declare-fun out_approverPO_apprPO_0 () Int)
(declare-fun out_approverPO_apprPO_1 () Int)
(declare-fun out_creator_ctrPay_0 () Int)
(declare-fun out_creator_ctrPay_1 () Int)
(declare-fun out_signerGRN_ctrsignGRN_0 () Int)
(declare-fun out_signerGRN_ctrsignGRN_1 () Int)
(declare-fun out_signerGRN_signGRN_0 () Int)
(declare-fun out_signerGRN_signGRN_1 () Int)
(declare-fun p10_final_0 () Int)
(declare-fun p10_final_1 () Int)
(declare-fun p11_final_0 () Int)
(declare-fun p11_final_1 () Int)
(declare-fun p1_final_0 () Int)
(declare-fun p1_final_1 () Int)
(declare-fun p2_final_0 () Int)
(declare-fun p2_final_1 () Int)
(declare-fun p3_running_0 () Int)
(declare-fun p3_running_1 () Int)
(declare-fun p4_final_0 () Int)
(declare-fun p4_final_1 () Int)
(declare-fun p5_final_0 () Int)
(declare-fun p5_final_1 () Int)
(declare-fun p6_initial_0 () Int)
(declare-fun p6_initial_1 () Int)
(declare-fun p7_final_0 () Int)
(declare-fun p7_final_1 () Int)
(declare-fun p8_initial_0 () Int)
(declare-fun p8_initial_1 () Int)
(declare-fun p9_initial_0 () Int)
(declare-fun p9_initial_1 () Int)


;PREDICATES

(declare-fun has_permission (Id Action) Bool)
(declare-fun permission (Permission Action) Bool)
(declare-fun role (Role) Bool)
(declare-fun role_le (Role Role) Bool)
(declare-fun role_permission_assign (Role Permission) Bool)
(declare-fun user (Id) Bool)
(declare-fun user_role_assign (Id Role) Bool)
(declare-fun can_exec_0 (Id Action) Bool)
(declare-fun can_exec_1 (Id Action) Bool)
(declare-fun executed_0 (Id Action) Bool) 
(declare-fun executed_1 (Id Action) Bool)
(declare-fun initial_pm_0 () Bool)
(declare-fun initial_wf_0 () Bool)
(declare-fun t1_receive_0_1 (Id) Bool)
(declare-fun t2_invoke_0_1 (Id) Bool)
(declare-fun t3_split_0_1 (Id) Bool)
(declare-fun t4_join_0_1 (Id) Bool)
(declare-fun t5_invoke_0_1 (Id) Bool)
(declare-fun t6_invoke_0_1 (Id) Bool)
(declare-fun t7_invokeO_0_1 (Id) Bool)
(declare-fun t8_invokeI_0_1 (Id) Bool)
(declare-fun t9_invoke_0_1 (Id) Bool)

(assert
(forall ((U Action) (V Action)) (implies (= (action2int U) (action2int V)) (= U V))))
 

;assumption 2
(assert
(forall ((U Action)) (and (= 1 (action2int U)) (= (action2int U) 9))))
 

;assumption 3
(assert
(= (action2int t1_receive) 1))

;assumption 4
(assert
(= (action2int t2_invoke) 2))

;assumption 5
(assert
(= (action2int t3_split) 3))

;assumption 6
(assert
(= (action2int t4_join) 4))

;assumption 7
(assert
(= (action2int t5_invoke) 5))

;assumption 8
(assert
(= (action2int t6_invoke) 6))

;assumption 9
(assert
(= (action2int t7_invokeO) 7))

;assumption 10
(assert
(= (action2int t8_invokeI) 8))

;assumption 11
(assert
(= (action2int t9_invoke) 9))

;assumption 12
(assert
(forall ((U Role) (V Role)) (implies (= (role2int U) (role2int V)) (= U V))))
 

;assumption 13
(assert
(forall ((U Role)) (and (= 1 (role2int U)) (= (role2int U) 6))))
 

;assumption 14
(assert
(= (role2int Manager) 1))

;assumption 15
(assert
(= (role2int FinAdmin) 2))

;assumption 16
(assert
(= (role2int FinClerk) 3))

;assumption 17
(assert
(= (role2int POAdmin) 4))

;assumption 18
(assert
(= (role2int POClerk) 5))

;assumption 19
(assert
(= (role2int Client) 6))

;assumption 20
(assert
(forall ((U Permission) (V Permission)) (implies (= (permission2int U) (permission2int V)) (= U V))))
 

;assumption 21
(assert
(forall ((U Permission)) (and (= 1 (permission2int U)) (= (permission2int U) 6))))
 

;assumption 22
(assert
(= (permission2int p1) 1))

;assumption 23
(assert
(= (permission2int p2) 2))

;assumption 24
(assert
(= (permission2int p3) 3))

;assumption 25
(assert
(= (permission2int p4) 4))

;assumption 26
(assert
(= (permission2int p5) 5))

;assumption 27
(assert
(= (permission2int p6) 6))

;assumption 28
(assert
(forall ((U Permission) (V Action)) (iff (permission U V) (or (and (= U p1) (= V t2_invoke)) (or (and (= U p2) (= V t5_invoke)) (or (and (= U p3) (= V t6_invoke)) (or (and (= U p4) (or (= V t7_invokeO) (= V t8_invokeI))) (or (and (= U p5) (= V t9_invoke)) (and (= U p6) (= V t1_receive))))))))))
 

;assumption 29
(assert
(forall ((U Id) (V Role)) (iff (user_role_assign U V) (or (and (= U id7) (= V Manager)) (or (and (= U id1) (= V Manager)) (or (and (= U id2) (= V FinAdmin)) (or (and (= U id3) (= V FinClerk)) (or (and (= U id4) (= V POAdmin)) (or (and (= U id5) (= V POClerk)) (and (= U id6) (= V Client)))))))))))
 

;assumption 30
(assert
(forall ((U Role) (V Permission)) (iff (role_permission_assign U V) (or (and (= U POClerk) (= V p3)) (or (and (= U FinClerk) (= V p4)) (or (and (= U POAdmin) (or (= V p1) (= V p3))) (or (and (= U FinAdmin) (or (= V p5) (= V p4))) (or (and (= U Client) (or (= V p6) (= V p2))) (and (= U Manager) (or (= V p1) (or (= V p3) (or (= V p4) (= V p5)))))))))))))
 

;assumption 31
(assert
(forall ((U Id) (V Action)) (iff (has_permission U V) (or (and (user_role_assign U Manager) (and (role_permission_assign Manager p1) (permission p1 V))) (or (and (user_role_assign U Manager) (and (role_permission_assign Manager p2) (permission p2 V))) (or (and (user_role_assign U Manager) (and (role_permission_assign Manager p3) (permission p3 V))) (or (and (user_role_assign U Manager) (and (role_permission_assign Manager p4) (permission p4 V))) (or (and (user_role_assign U Manager) (and (role_permission_assign Manager p5) (permission p5 V))) (or (and (user_role_assign U Manager) (and (role_permission_assign Manager p6) (permission p6 V))) (or (and (user_role_assign U POClerk) (and (role_permission_assign POClerk p1) (permission p1 V))) (or (and (user_role_assign U POClerk) (and (role_permission_assign POClerk p2) (permission p2 V))) (or (and (user_role_assign U POClerk) (and (role_permission_assign POClerk p3) (permission p3 V))) (or (and (user_role_assign U POClerk) (and (role_permission_assign POClerk p4) (permission p4 V))) (or (and (user_role_assign U POClerk) (and (role_permission_assign POClerk p5) (permission p5 V))) (or (and (user_role_assign U POClerk) (and (role_permission_assign POClerk p6) (permission p6 V))) (or (and (user_role_assign U FinClerk) (and (role_permission_assign FinClerk p1) (permission p1 V))) (or (and (user_role_assign U FinClerk) (and (role_permission_assign FinClerk p2) (permission p2 V))) (or (and (user_role_assign U FinClerk) (and (role_permission_assign FinClerk p3) (permission p3 V))) (or (and (user_role_assign U FinClerk) (and (role_permission_assign FinClerk p4) (permission p4 V))) (or (and (user_role_assign U FinClerk) (and (role_permission_assign FinClerk p5) (permission p5 V))) (or (and (user_role_assign U FinClerk) (and (role_permission_assign FinClerk p6) (permission p6 V))) (or (and (user_role_assign U FinAdmin) (and (role_permission_assign FinAdmin p1) (permission p1 V))) (or (and (user_role_assign U FinAdmin) (and (role_permission_assign FinAdmin p2) (permission p2 V))) (or (and (user_role_assign U FinAdmin) (and (role_permission_assign FinAdmin p3) (permission p3 V))) (or (and (user_role_assign U FinAdmin) (and (role_permission_assign FinAdmin p4) (permission p4 V))) (or (and (user_role_assign U FinAdmin) (and (role_permission_assign FinAdmin p5) (permission p5 V))) (or (and (user_role_assign U FinAdmin) (and (role_permission_assign FinAdmin p6) (permission p6 V))) (or (and (user_role_assign U POAdmin) (and (role_permission_assign POAdmin p1) (permission p1 V))) (or (and (user_role_assign U POAdmin) (and (role_permission_assign POAdmin p2) (permission p2 V))) (or (and (user_role_assign U POAdmin) (and (role_permission_assign POAdmin p3) (permission p3 V))) (or (and (user_role_assign U POAdmin) (and (role_permission_assign POAdmin p4) (permission p4 V))) (or (and (user_role_assign U POAdmin) (and (role_permission_assign POAdmin p5) (permission p5 V))) (or (and (user_role_assign U POAdmin) (and (role_permission_assign POAdmin p6) (permission p6 V))) (or (and (user_role_assign U Client) (and (role_permission_assign Client p1) (permission p1 V))) (or (and (user_role_assign U Client) (and (role_permission_assign Client p2) (permission p2 V))) (or (and (user_role_assign U Client) (and (role_permission_assign Client p3) (permission p3 V))) (or (and (user_role_assign U Client) (and (role_permission_assign Client p4) (permission p4 V))) (or (and (user_role_assign U Client) (and (role_permission_assign Client p5) (permission p5 V))) (and (user_role_assign U Client) (and (role_permission_assign Client p6) (permission p6 V)))))))))))))))))))))))))))))))))))))))))
 

;assumption 32
(assert
(forall ((U Role) (V Role)) (iff (role_le U V) ( (role_level U) (role_level V)))))
 

;assumption 33
(assert
(= (role_level Manager) 3))

;assumption 34
(assert
(= (role_level FinAdmin) 2))

;assumption 35
(assert
(= (role_level FinClerk) 1))

;assumption 36
(assert
(= (role_level POAdmin) 2))

;assumption 37
(assert
(= (role_level POClerk) 1))

;assumption 38
(assert
(= (role_level Client) 0))

;assumption 39
(assert
(forall ((U Id) (V Id)) (implies (= (id2int U) (id2int V)) (= U V))))
 

;assumption 40
(assert
(forall ((U Id)) (and (= 1 (id2int U)) (= (id2int U) 7))))
 

;assumption 41
(assert
(= (id2int id1) 1))

;assumption 42
(assert
(= (id2int id2) 2))

;assumption 43
(assert
(= (id2int id3) 3))

;assumption 44
(assert
(= (id2int id4) 4))

;assumption 45
(assert
(= (id2int id5) 5))

;assumption 46
(assert
(= (id2int id6) 6))

;assumption 47
(assert
(= (id2int id7) 7))

;assumption 48
(assert
(iff initial_wf_0 (and (= p1_final_0 0) (and (= p2_final_0 0) (and (= p3_running_0 0) (and (= p4_final_0 0) (and (= p5_final_0 0) (and (= p6_initial_0 0) (and (= p7_final_0 0) (and (= p8_initial_0 0) (and (= p9_initial_0 1) (and (= p10_final_0 0) (and (= p11_final_0 0) (and (= in_customer_crtPO_0 1) (and (= in_creator_ctrPay_0 1) (and (= out_approverPO_apprPO_0 0) (and (= out_approverPOPayment_apprPay_0 0) (and (= out_creator_ctrPay_0 0) (and (= out_signerGRN_ctrsignGRN_0 0) (= out_signerGRN_signGRN_0 0))))))))))))))))))))

;assumption 49
(assert
(iff initial_pm_0 (forall ((U Id) (V Action)) (iff (executed_0 U V) false))
 ))

;assumption 50
(assert
(forall ((U Id) (V Action)) (iff (can_exec_0 U V) (or (and (= V t5_invoke) (and (has_permission U t5_invoke) (or (and (not (= U id1)) (executed_0 id1 t2_invoke)) (or (and (not (= U id2)) (executed_0 id2 t2_invoke)) (or (and (not (= U id3)) (executed_0 id3 t2_invoke)) (or (and (not (= U id4)) (executed_0 id4 t2_invoke)) (or (and (not (= U id5)) (executed_0 id5 t2_invoke)) (or (and (not (= U id6)) (executed_0 id6 t2_invoke)) (and (not (= U id7)) (executed_0 id7 t2_invoke)))))))))) (or (and (= V t6_invoke) (and (and (has_permission U t6_invoke) (or (and (not (= U id1)) (executed_0 id1 t2_invoke)) (or (and (not (= U id2)) (executed_0 id2 t2_invoke)) (or (and (not (= U id3)) (executed_0 id3 t2_invoke)) (or (and (not (= U id4)) (executed_0 id4 t2_invoke)) (or (and (not (= U id5)) (executed_0 id5 t2_invoke)) (or (and (not (= U id6)) (executed_0 id6 t2_invoke)) (and (not (= U id7)) (executed_0 id7 t2_invoke))))))))) (and (has_permission U t6_invoke) (or (and (not (= U id1)) (executed_0 id1 t5_invoke)) (or (and (not (= U id2)) (executed_0 id2 t5_invoke)) (or (and (not (= U id3)) (executed_0 id3 t5_invoke)) (or (and (not (= U id4)) (executed_0 id4 t5_invoke)) (or (and (not (= U id5)) (executed_0 id5 t5_invoke)) (or (and (not (= U id6)) (executed_0 id6 t5_invoke)) (and (not (= U id7)) (executed_0 id7 t5_invoke))))))))))) (or (and (= V t9_invoke) (and (has_permission U t9_invoke) (exists ((W Role))  (and (user_role_assign U W) (and (or (and (user_role_assign id1 Manager) (and (role_le Manager W) (executed_0 id1 t7_invokeO))) (or (and (user_role_assign id2 Manager) (and (role_le Manager W) (executed_0 id2 t7_invokeO))) (or (and (user_role_assign id3 Manager) (and (role_le Manager W) (executed_0 id3 t7_invokeO))) (or (and (user_role_assign id4 Manager) (and (role_le Manager W) (executed_0 id4 t7_invokeO))) (or (and (user_role_assign id5 Manager) (and (role_le Manager W) (executed_0 id5 t7_invokeO))) (or (and (user_role_assign id6 Manager) (and (role_le Manager W) (executed_0 id6 t7_invokeO))) (or (and (user_role_assign id7 Manager) (and (role_le Manager W) (executed_0 id7 t7_invokeO))) (or (and (user_role_assign id1 POClerk) (and (role_le POClerk W) (executed_0 id1 t7_invokeO))) (or (and (user_role_assign id2 POClerk) (and (role_le POClerk W) (executed_0 id2 t7_invokeO))) (or (and (user_role_assign id3 POClerk) (and (role_le POClerk W) (executed_0 id3 t7_invokeO))) (or (and (user_role_assign id4 POClerk) (and (role_le POClerk W) (executed_0 id4 t7_invokeO))) (or (and (user_role_assign id5 POClerk) (and (role_le POClerk W) (executed_0 id5 t7_invokeO))) (or (and (user_role_assign id6 POClerk) (and (role_le POClerk W) (executed_0 id6 t7_invokeO))) (or (and (user_role_assign id7 POClerk) (and (role_le POClerk W) (executed_0 id7 t7_invokeO))) (or (and (user_role_assign id1 FinClerk) (and (role_le FinClerk W) (executed_0 id1 t7_invokeO))) (or (and (user_role_assign id2 FinClerk) (and (role_le FinClerk W) (executed_0 id2 t7_invokeO))) (or (and (user_role_assign id3 FinClerk) (and (role_le FinClerk W) (executed_0 id3 t7_invokeO))) (or (and (user_role_assign id4 FinClerk) (and (role_le FinClerk W) (executed_0 id4 t7_invokeO))) (or (and (user_role_assign id5 FinClerk) (and (role_le FinClerk W) (executed_0 id5 t7_invokeO))) (or (and (user_role_assign id6 FinClerk) (and (role_le FinClerk W) (executed_0 id6 t7_invokeO))) (or (and (user_role_assign id7 FinClerk) (and (role_le FinClerk W) (executed_0 id7 t7_invokeO))) (or (and (user_role_assign id1 FinAdmin) (and (role_le FinAdmin W) (executed_0 id1 t7_invokeO))) (or (and (user_role_assign id2 FinAdmin) (and (role_le FinAdmin W) (executed_0 id2 t7_invokeO))) (or (and (user_role_assign id3 FinAdmin) (and (role_le FinAdmin W) (executed_0 id3 t7_invokeO))) (or (and (user_role_assign id4 FinAdmin) (and (role_le FinAdmin W) (executed_0 id4 t7_invokeO))) (or (and (user_role_assign id5 FinAdmin) (and (role_le FinAdmin W) (executed_0 id5 t7_invokeO))) (or (and (user_role_assign id6 FinAdmin) (and (role_le FinAdmin W) (executed_0 id6 t7_invokeO))) (or (and (user_role_assign id7 FinAdmin) (and (role_le FinAdmin W) (executed_0 id7 t7_invokeO))) (or (and (user_role_assign id1 POAdmin) (and (role_le POAdmin W) (executed_0 id1 t7_invokeO))) (or (and (user_role_assign id2 POAdmin) (and (role_le POAdmin W) (executed_0 id2 t7_invokeO))) (or (and (user_role_assign id3 POAdmin) (and (role_le POAdmin W) (executed_0 id3 t7_invokeO))) (or (and (user_role_assign id4 POAdmin) (and (role_le POAdmin W) (executed_0 id4 t7_invokeO))) (or (and (user_role_assign id5 POAdmin) (and (role_le POAdmin W) (executed_0 id5 t7_invokeO))) (or (and (user_role_assign id6 POAdmin) (and (role_le POAdmin W) (executed_0 id6 t7_invokeO))) (or (and (user_role_assign id7 POAdmin) (and (role_le POAdmin W) (executed_0 id7 t7_invokeO))) (or (and (user_role_assign id1 Client) (and (role_le Client W) (executed_0 id1 t7_invokeO))) (or (and (user_role_assign id2 Client) (and (role_le Client W) (executed_0 id2 t7_invokeO))) (or (and (user_role_assign id3 Client) (and (role_le Client W) (executed_0 id3 t7_invokeO))) (or (and (user_role_assign id4 Client) (and (role_le Client W) (executed_0 id4 t7_invokeO))) (or (and (user_role_assign id5 Client) (and (role_le Client W) (executed_0 id5 t7_invokeO))) (or (and (user_role_assign id6 Client) (and (role_le Client W) (executed_0 id6 t7_invokeO))) (and (user_role_assign id7 Client) (and (role_le Client W) (executed_0 id7 t7_invokeO)))))))))))))))))))))))))))))))))))))))))))) (or (and (user_role_assign id1 Manager) (and (role_le Manager W) (executed_0 id1 t8_invokeI))) (or (and (user_role_assign id2 Manager) (and (role_le Manager W) (executed_0 id2 t8_invokeI))) (or (and (user_role_assign id3 Manager) (and (role_le Manager W) (executed_0 id3 t8_invokeI))) (or (and (user_role_assign id4 Manager) (and (role_le Manager W) (executed_0 id4 t8_invokeI))) (or (and (user_role_assign id5 Manager) (and (role_le Manager W) (executed_0 id5 t8_invokeI))) (or (and (user_role_assign id6 Manager) (and (role_le Manager W) (executed_0 id6 t8_invokeI))) (or (and (user_role_assign id7 Manager) (and (role_le Manager W) (executed_0 id7 t8_invokeI))) (or (and (user_role_assign id1 POClerk) (and (role_le POClerk W) (executed_0 id1 t8_invokeI))) (or (and (user_role_assign id2 POClerk) (and (role_le POClerk W) (executed_0 id2 t8_invokeI))) (or (and (user_role_assign id3 POClerk) (and (role_le POClerk W) (executed_0 id3 t8_invokeI))) (or (and (user_role_assign id4 POClerk) (and (role_le POClerk W) (executed_0 id4 t8_invokeI))) (or (and (user_role_assign id5 POClerk) (and (role_le POClerk W) (executed_0 id5 t8_invokeI))) (or (and (user_role_assign id6 POClerk) (and (role_le POClerk W) (executed_0 id6 t8_invokeI))) (or (and (user_role_assign id7 POClerk) (and (role_le POClerk W) (executed_0 id7 t8_invokeI))) (or (and (user_role_assign id1 FinClerk) (and (role_le FinClerk W) (executed_0 id1 t8_invokeI))) (or (and (user_role_assign id2 FinClerk) (and (role_le FinClerk W) (executed_0 id2 t8_invokeI))) (or (and (user_role_assign id3 FinClerk) (and (role_le FinClerk W) (executed_0 id3 t8_invokeI))) (or (and (user_role_assign id4 FinClerk) (and (role_le FinClerk W) (executed_0 id4 t8_invokeI))) (or (and (user_role_assign id5 FinClerk) (and (role_le FinClerk W) (executed_0 id5 t8_invokeI))) (or (and (user_role_assign id6 FinClerk) (and (role_le FinClerk W) (executed_0 id6 t8_invokeI))) (or (and (user_role_assign id7 FinClerk) (and (role_le FinClerk W) (executed_0 id7 t8_invokeI))) (or (and (user_role_assign id1 FinAdmin) (and (role_le FinAdmin W) (executed_0 id1 t8_invokeI))) (or (and (user_role_assign id2 FinAdmin) (and (role_le FinAdmin W) (executed_0 id2 t8_invokeI))) (or (and (user_role_assign id3 FinAdmin) (and (role_le FinAdmin W) (executed_0 id3 t8_invokeI))) (or (and (user_role_assign id4 FinAdmin) (and (role_le FinAdmin W) (executed_0 id4 t8_invokeI))) (or (and (user_role_assign id5 FinAdmin) (and (role_le FinAdmin W) (executed_0 id5 t8_invokeI))) (or (and (user_role_assign id6 FinAdmin) (and (role_le FinAdmin W) (executed_0 id6 t8_invokeI))) (or (and (user_role_assign id7 FinAdmin) (and (role_le FinAdmin W) (executed_0 id7 t8_invokeI))) (or (and (user_role_assign id1 POAdmin) (and (role_le POAdmin W) (executed_0 id1 t8_invokeI))) (or (and (user_role_assign id2 POAdmin) (and (role_le POAdmin W) (executed_0 id2 t8_invokeI))) (or (and (user_role_assign id3 POAdmin) (and (role_le POAdmin W) (executed_0 id3 t8_invokeI))) (or (and (user_role_assign id4 POAdmin) (and (role_le POAdmin W) (executed_0 id4 t8_invokeI))) (or (and (user_role_assign id5 POAdmin) (and (role_le POAdmin W) (executed_0 id5 t8_invokeI))) (or (and (user_role_assign id6 POAdmin) (and (role_le POAdmin W) (executed_0 id6 t8_invokeI))) (or (and (user_role_assign id7 POAdmin) (and (role_le POAdmin W) (executed_0 id7 t8_invokeI))) (or (and (user_role_assign id1 Client) (and (role_le Client W) (executed_0 id1 t8_invokeI))) (or (and (user_role_assign id2 Client) (and (role_le Client W) (executed_0 id2 t8_invokeI))) (or (and (user_role_assign id3 Client) (and (role_le Client W) (executed_0 id3 t8_invokeI))) (or (and (user_role_assign id4 Client) (and (role_le Client W) (executed_0 id4 t8_invokeI))) (or (and (user_role_assign id5 Client) (and (role_le Client W) (executed_0 id5 t8_invokeI))) (or (and (user_role_assign id6 Client) (and (role_le Client W) (executed_0 id6 t8_invokeI))) (and (user_role_assign id7 Client) (and (role_le Client W) (executed_0 id7 t8_invokeI))))))))))))))))))))))))))))))))))))))))))))) )) )) (or (and (= V t1_receive) (has_permission U t1_receive)) (or (and (= V t2_invoke) (has_permission U t2_invoke)) (or (and (= V t7_invokeO) (has_permission U t7_invokeO)) (and (= V t8_invokeI) (has_permission U t8_invokeI)))))))))))
 

;assumption 51
(assert
(forall ((U Id) (V Action)) (iff (can_exec_1 U V) (or (and (= V t5_invoke) (and (has_permission U t5_invoke) (or (and (not (= U id1)) (executed_1 id1 t2_invoke)) (or (and (not (= U id2)) (executed_1 id2 t2_invoke)) (or (and (not (= U id3)) (executed_1 id3 t2_invoke)) (or (and (not (= U id4)) (executed_1 id4 t2_invoke)) (or (and (not (= U id5)) (executed_1 id5 t2_invoke)) (or (and (not (= U id6)) (executed_1 id6 t2_invoke)) (and (not (= U id7)) (executed_1 id7 t2_invoke)))))))))) (or (and (= V t6_invoke) (and (and (has_permission U t6_invoke) (or (and (not (= U id1)) (executed_1 id1 t2_invoke)) (or (and (not (= U id2)) (executed_1 id2 t2_invoke)) (or (and (not (= U id3)) (executed_1 id3 t2_invoke)) (or (and (not (= U id4)) (executed_1 id4 t2_invoke)) (or (and (not (= U id5)) (executed_1 id5 t2_invoke)) (or (and (not (= U id6)) (executed_1 id6 t2_invoke)) (and (not (= U id7)) (executed_1 id7 t2_invoke))))))))) (and (has_permission U t6_invoke) (or (and (not (= U id1)) (executed_1 id1 t5_invoke)) (or (and (not (= U id2)) (executed_1 id2 t5_invoke)) (or (and (not (= U id3)) (executed_1 id3 t5_invoke)) (or (and (not (= U id4)) (executed_1 id4 t5_invoke)) (or (and (not (= U id5)) (executed_1 id5 t5_invoke)) (or (and (not (= U id6)) (executed_1 id6 t5_invoke)) (and (not (= U id7)) (executed_1 id7 t5_invoke))))))))))) (or (and (= V t9_invoke) (and (has_permission U t9_invoke) (exists ((W Role))  (and (user_role_assign U W) (and (or (and (user_role_assign id1 Manager) (and (role_le Manager W) (executed_1 id1 t7_invokeO))) (or (and (user_role_assign id2 Manager) (and (role_le Manager W) (executed_1 id2 t7_invokeO))) (or (and (user_role_assign id3 Manager) (and (role_le Manager W) (executed_1 id3 t7_invokeO))) (or (and (user_role_assign id4 Manager) (and (role_le Manager W) (executed_1 id4 t7_invokeO))) (or (and (user_role_assign id5 Manager) (and (role_le Manager W) (executed_1 id5 t7_invokeO))) (or (and (user_role_assign id6 Manager) (and (role_le Manager W) (executed_1 id6 t7_invokeO))) (or (and (user_role_assign id7 Manager) (and (role_le Manager W) (executed_1 id7 t7_invokeO))) (or (and (user_role_assign id1 POClerk) (and (role_le POClerk W) (executed_1 id1 t7_invokeO))) (or (and (user_role_assign id2 POClerk) (and (role_le POClerk W) (executed_1 id2 t7_invokeO))) (or (and (user_role_assign id3 POClerk) (and (role_le POClerk W) (executed_1 id3 t7_invokeO))) (or (and (user_role_assign id4 POClerk) (and (role_le POClerk W) (executed_1 id4 t7_invokeO))) (or (and (user_role_assign id5 POClerk) (and (role_le POClerk W) (executed_1 id5 t7_invokeO))) (or (and (user_role_assign id6 POClerk) (and (role_le POClerk W) (executed_1 id6 t7_invokeO))) (or (and (user_role_assign id7 POClerk) (and (role_le POClerk W) (executed_1 id7 t7_invokeO))) (or (and (user_role_assign id1 FinClerk) (and (role_le FinClerk W) (executed_1 id1 t7_invokeO))) (or (and (user_role_assign id2 FinClerk) (and (role_le FinClerk W) (executed_1 id2 t7_invokeO))) (or (and (user_role_assign id3 FinClerk) (and (role_le FinClerk W) (executed_1 id3 t7_invokeO))) (or (and (user_role_assign id4 FinClerk) (and (role_le FinClerk W) (executed_1 id4 t7_invokeO))) (or (and (user_role_assign id5 FinClerk) (and (role_le FinClerk W) (executed_1 id5 t7_invokeO))) (or (and (user_role_assign id6 FinClerk) (and (role_le FinClerk W) (executed_1 id6 t7_invokeO))) (or (and (user_role_assign id7 FinClerk) (and (role_le FinClerk W) (executed_1 id7 t7_invokeO))) (or (and (user_role_assign id1 FinAdmin) (and (role_le FinAdmin W) (executed_1 id1 t7_invokeO))) (or (and (user_role_assign id2 FinAdmin) (and (role_le FinAdmin W) (executed_1 id2 t7_invokeO))) (or (and (user_role_assign id3 FinAdmin) (and (role_le FinAdmin W) (executed_1 id3 t7_invokeO))) (or (and (user_role_assign id4 FinAdmin) (and (role_le FinAdmin W) (executed_1 id4 t7_invokeO))) (or (and (user_role_assign id5 FinAdmin) (and (role_le FinAdmin W) (executed_1 id5 t7_invokeO))) (or (and (user_role_assign id6 FinAdmin) (and (role_le FinAdmin W) (executed_1 id6 t7_invokeO))) (or (and (user_role_assign id7 FinAdmin) (and (role_le FinAdmin W) (executed_1 id7 t7_invokeO))) (or (and (user_role_assign id1 POAdmin) (and (role_le POAdmin W) (executed_1 id1 t7_invokeO))) (or (and (user_role_assign id2 POAdmin) (and (role_le POAdmin W) (executed_1 id2 t7_invokeO))) (or (and (user_role_assign id3 POAdmin) (and (role_le POAdmin W) (executed_1 id3 t7_invokeO))) (or (and (user_role_assign id4 POAdmin) (and (role_le POAdmin W) (executed_1 id4 t7_invokeO))) (or (and (user_role_assign id5 POAdmin) (and (role_le POAdmin W) (executed_1 id5 t7_invokeO))) (or (and (user_role_assign id6 POAdmin) (and (role_le POAdmin W) (executed_1 id6 t7_invokeO))) (or (and (user_role_assign id7 POAdmin) (and (role_le POAdmin W) (executed_1 id7 t7_invokeO))) (or (and (user_role_assign id1 Client) (and (role_le Client W) (executed_1 id1 t7_invokeO))) (or (and (user_role_assign id2 Client) (and (role_le Client W) (executed_1 id2 t7_invokeO))) (or (and (user_role_assign id3 Client) (and (role_le Client W) (executed_1 id3 t7_invokeO))) (or (and (user_role_assign id4 Client) (and (role_le Client W) (executed_1 id4 t7_invokeO))) (or (and (user_role_assign id5 Client) (and (role_le Client W) (executed_1 id5 t7_invokeO))) (or (and (user_role_assign id6 Client) (and (role_le Client W) (executed_1 id6 t7_invokeO))) (and (user_role_assign id7 Client) (and (role_le Client W) (executed_1 id7 t7_invokeO)))))))))))))))))))))))))))))))))))))))))))) (or (and (user_role_assign id1 Manager) (and (role_le Manager W) (executed_1 id1 t8_invokeI))) (or (and (user_role_assign id2 Manager) (and (role_le Manager W) (executed_1 id2 t8_invokeI))) (or (and (user_role_assign id3 Manager) (and (role_le Manager W) (executed_1 id3 t8_invokeI))) (or (and (user_role_assign id4 Manager) (and (role_le Manager W) (executed_1 id4 t8_invokeI))) (or (and (user_role_assign id5 Manager) (and (role_le Manager W) (executed_1 id5 t8_invokeI))) (or (and (user_role_assign id6 Manager) (and (role_le Manager W) (executed_1 id6 t8_invokeI))) (or (and (user_role_assign id7 Manager) (and (role_le Manager W) (executed_1 id7 t8_invokeI))) (or (and (user_role_assign id1 POClerk) (and (role_le POClerk W) (executed_1 id1 t8_invokeI))) (or (and (user_role_assign id2 POClerk) (and (role_le POClerk W) (executed_1 id2 t8_invokeI))) (or (and (user_role_assign id3 POClerk) (and (role_le POClerk W) (executed_1 id3 t8_invokeI))) (or (and (user_role_assign id4 POClerk) (and (role_le POClerk W) (executed_1 id4 t8_invokeI))) (or (and (user_role_assign id5 POClerk) (and (role_le POClerk W) (executed_1 id5 t8_invokeI))) (or (and (user_role_assign id6 POClerk) (and (role_le POClerk W) (executed_1 id6 t8_invokeI))) (or (and (user_role_assign id7 POClerk) (and (role_le POClerk W) (executed_1 id7 t8_invokeI))) (or (and (user_role_assign id1 FinClerk) (and (role_le FinClerk W) (executed_1 id1 t8_invokeI))) (or (and (user_role_assign id2 FinClerk) (and (role_le FinClerk W) (executed_1 id2 t8_invokeI))) (or (and (user_role_assign id3 FinClerk) (and (role_le FinClerk W) (executed_1 id3 t8_invokeI))) (or (and (user_role_assign id4 FinClerk) (and (role_le FinClerk W) (executed_1 id4 t8_invokeI))) (or (and (user_role_assign id5 FinClerk) (and (role_le FinClerk W) (executed_1 id5 t8_invokeI))) (or (and (user_role_assign id6 FinClerk) (and (role_le FinClerk W) (executed_1 id6 t8_invokeI))) (or (and (user_role_assign id7 FinClerk) (and (role_le FinClerk W) (executed_1 id7 t8_invokeI))) (or (and (user_role_assign id1 FinAdmin) (and (role_le FinAdmin W) (executed_1 id1 t8_invokeI))) (or (and (user_role_assign id2 FinAdmin) (and (role_le FinAdmin W) (executed_1 id2 t8_invokeI))) (or (and (user_role_assign id3 FinAdmin) (and (role_le FinAdmin W) (executed_1 id3 t8_invokeI))) (or (and (user_role_assign id4 FinAdmin) (and (role_le FinAdmin W) (executed_1 id4 t8_invokeI))) (or (and (user_role_assign id5 FinAdmin) (and (role_le FinAdmin W) (executed_1 id5 t8_invokeI))) (or (and (user_role_assign id6 FinAdmin) (and (role_le FinAdmin W) (executed_1 id6 t8_invokeI))) (or (and (user_role_assign id7 FinAdmin) (and (role_le FinAdmin W) (executed_1 id7 t8_invokeI))) (or (and (user_role_assign id1 POAdmin) (and (role_le POAdmin W) (executed_1 id1 t8_invokeI))) (or (and (user_role_assign id2 POAdmin) (and (role_le POAdmin W) (executed_1 id2 t8_invokeI))) (or (and (user_role_assign id3 POAdmin) (and (role_le POAdmin W) (executed_1 id3 t8_invokeI))) (or (and (user_role_assign id4 POAdmin) (and (role_le POAdmin W) (executed_1 id4 t8_invokeI))) (or (and (user_role_assign id5 POAdmin) (and (role_le POAdmin W) (executed_1 id5 t8_invokeI))) (or (and (user_role_assign id6 POAdmin) (and (role_le POAdmin W) (executed_1 id6 t8_invokeI))) (or (and (user_role_assign id7 POAdmin) (and (role_le POAdmin W) (executed_1 id7 t8_invokeI))) (or (and (user_role_assign id1 Client) (and (role_le Client W) (executed_1 id1 t8_invokeI))) (or (and (user_role_assign id2 Client) (and (role_le Client W) (executed_1 id2 t8_invokeI))) (or (and (user_role_assign id3 Client) (and (role_le Client W) (executed_1 id3 t8_invokeI))) (or (and (user_role_assign id4 Client) (and (role_le Client W) (executed_1 id4 t8_invokeI))) (or (and (user_role_assign id5 Client) (and (role_le Client W) (executed_1 id5 t8_invokeI))) (or (and (user_role_assign id6 Client) (and (role_le Client W) (executed_1 id6 t8_invokeI))) (and (user_role_assign id7 Client) (and (role_le Client W) (executed_1 id7 t8_invokeI))))))))))))))))))))))))))))))))))))))))))))) )) )) (or (and (= V t1_receive) (has_permission U t1_receive)) (or (and (= V t2_invoke) (has_permission U t2_invoke)) (or (and (= V t7_invokeO) (has_permission U t7_invokeO)) (and (= V t8_invokeI) (has_permission U t8_invokeI)))))))))))
 

;assumption 52
(assert
(forall ((U Id)) (iff (t1_receive_0_1 U)
   (and (and (can_exec_0 U t1_receive) (and (= 1 in_customer_crtPO_0) (= 1 p9_initial_0)))
  (and (and (= p1_final_1 p1_final_0) (and (= p2_final_1 p2_final_0) (and (= p3_running_1 p3_running_0) (and (= p4_final_1 p4_final_0) (and (= p5_final_1 p5_final_0) (and (= p6_initial_1 p6_initial_0) (and (= p7_final_1 p7_final_0) (and (= p8_initial_1 p8_initial_0) (and (= p9_initial_1 (+ (~ 1) p9_initial_0)) (and (= p10_final_1 (+ 1 p10_final_0)) (and (= p11_final_1 p11_final_0) (and (= in_customer_crtPO_1 (+ (~ 1) in_customer_crtPO_0)) (and (= in_creator_ctrPay_1 in_creator_ctrPay_0) (and (= out_creator_ctrPay_1 out_creator_ctrPay_0) (and (= out_approverPOPayment_apprPay_1 out_approverPOPayment_apprPay_0) (and (= out_approverPO_apprPO_1 out_approverPO_apprPO_0) (and (= out_signerGRN_signGRN_1 out_signerGRN_signGRN_0) (and (= out_signerGRN_ctrsignGRN_1 out_signerGRN_ctrsignGRN_0) true))))))))))))))))))
  (forall ((V Id) (W Action)) (iff (executed_1 V W) (or (and (= V U) (= W t1_receive)) (executed_0 V W))))
  )
  )
   )))
 

;assumption 53
(assert 
 (not (and initial_wf_0 (and initial_pm_0 (t1_receive_0_1 id6))))
 )

(set-info status sat)
(check-sat)
(get-model)
```
It is very effective in this benchmark since it contains many quantifiers of the form

> forall x.  p(x) = ....

The Z3 model finder is more effective if the input formula does not contain nested quantifiers. If that is not the case for your formula, you can use the option

> (set-option smt.pull-nested-quantifiers true)

The following challenge problem from the paper [SEM a system for enumerating models](httpacademic.research.microsoft.comPaper615910.aspx) is proved to be unsatisfiable in less than one second by Z3.

```
(set-option smt.mbqi true)
(declare-sort S)
(declare-fun g (S S) S)
(declare-fun f (S S) S)
(declare-const a S)
(declare-const b S)

(assert (forall ((x S) (y S))
                (= (g (f x y) (f x x)) x)))
(assert (forall ((x S) (y S))
                (= (f (g x y) (g x x)) x)))
(assert (forall ((x S) (y S) (z S))
                (= (g (g x y) z) (g (g y z) x))))
(assert (forall ((x S) (y S) (z S))
                (= (f (f x y) z) (f (f y z) x))))
(assert (distinct (g a (f b a)) (f a (g b a))))
(check-sat)
```
Conclusion
----------

Z3 is an efficient theorem prover used in many software testing, analysis and verification applications. In this tutorial, we covered its main capabilities using the textual interface. However, most applications use the Z3 programmatic [API](httpsz3prover.github.ioapihtmlindex.html) to access these features.