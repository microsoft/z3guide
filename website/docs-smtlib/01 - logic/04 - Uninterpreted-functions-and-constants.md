---
title: Uninterpreted Functions and Constants
sidebar_position: 4
---
The basic building blocks of SMT formulas are constants and functions. Constants are just functions that take no arguments. So everything is really just a function.

```z3
(declare-fun f (Int) Int)
(declare-fun a () Int) ; a is a constant
(declare-const b Int) ; syntax sugar for (declare-fun b () Int)
(assert (< a 20))
(assert (< b a))
(assert (= (f 10) 1))
(check-sat)
(get-model)
```

Unlike programming languages, where functions have side-effects, can throw exceptions, or never return, functions in classical first-order logic have no side-effects and are total. That is, they are defined on all input values. This includes functions, such as division.

Function and constant symbols in pure first-order logic are _uninterpreted_ or _free_, which means that no a priori interpretation is attached. This is in contrast to functions belonging to the signature of theories, such as arithmetic where the function + has a fixed standard interpretation (it adds two numbers). Uninterpreted functions and constants are maximally flexible; they allow any interpretation that is consistent with the constraints over the function or constant.

To illustrate uninterpreted functions and constants let us introduce an (uninterpreted) sort A, and the constants x, y ranging over A. Finally let f be an uninterpreted function that takes one argument of sort A and results in a value of sort A. The example illustrates how one can force an interpretation where f applied twice to x results in x again, but f applied once to x is different form x.

```z3
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

The resulting model introduces abstract values for the elements in A, because the sort A is uninterpreted. 
The interpretation for f in the model toggles between the two values for x and y, which are different.

The solver in z3 uses congruence closure to reason about equalities.
Congruence closure allows inferring new equalities when the arguments to two applications
of the same function are equal. In the example below, congruence closure infers that 
`x` equals `(f x)` based on the first two assertions.
So the constraints become unsatisfiable when adding the disequality between
these two terms.
```z3
(declare-sort A)
(declare-fun f (A) A)
(declare-const x A)
(assert (= (f (f x)) x))
(assert (= (f (f (f x))) x))
(check-sat)
(get-model)
  
(assert (not (= (f x) x)))
(check-sat)
```