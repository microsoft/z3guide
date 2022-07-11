--- 
title: Arithmetic
sidebar_position: 5
---


>  **SMTLIB2** standard [Integers](http://smtlib.cs.uiowa.edu/theories-Ints.shtml)

>  **SMTLIB2** standard [Reals](http://smtlib.cs.uiowa.edu/theories-Reals.shtml)

>  **SMTLIB2** standard [Mixed Int Reals](http://smtlib.cs.uiowa.edu/theories-Reals_Ints.shtml)

## Basics

Z3 has builtin support for integer and real constants. This two types should not be confused with machine integers (32-bit or 64-bit) and floating point numbers. These two types (sorts) represent the mathematical integers and reals. The command declare-const is used to declare integer and real constants.

```z3
(declare-const a Int)
(declare-const b Int)
(declare-const c Int)
(declare-const d Real)
(declare-const e Real)
```


After constants are declared, the user can assert.smt formulas containing these constants. The formulas contain arithmetic operators such as +, -, , and so on. The command check-sat will instruct Z3 to try to find an interpretation for the declared constants that makes all formulas true. The interpretation is basically assigning a number to each constant. If such interpretation exists, we say it is a model for the asserted formulas. The command get-model displays the model built by Z3.

```z3
(declare-const a Int)
(declare-const b Int)
(declare-const c Int)
(declare-const d Real)
(declare-const e Real)
(assert (< a (+ b 2)))
(assert (= a (+ (* 2 c) 10)))
(assert (= (+ c b) 1000))
(assert (= d e))
(check-sat)
(get-model)
```

Real constants should contain a decimal point. Unlike most programming languages, Z3 will not convert automatically integers into reals and vice-versa. The function to-real can be used to convert an integer expression into a real one.

```z3
(declare-const a Int)
(declare-const b Int)
(declare-const c Int)
(declare-const d Real)
(declare-const e Real)
(assert (< e (+ (to_real (+ a b)) 2.0)))
(assert (= d (+ (to_real c) 0.5)))
(assert (< a b))
(check-sat)
(get-model)
```

## Non-linear arithmetic


We say a formula is nonlinear if it contains expressions of the form (* t s) where t and s are not numbers. Nonlinear real arithmetic is very expensive, and Z3 is not complete for this kind of formula. The command check-sat may return unknown or loop. Nonlinear integer arithmetic is undecidable there is no procedure that is correct and terminates (for every input) with a sat or unsat answer. Yes, it is impossible to build such procedure. Note that, this does not prevent Z3 from returning an answer for many nonlinear problems. The real limit is that there will always be a nonlinear integer arithmetic formula that it will fail produce an answer.

```z3
(declare-const a Int)
(assert (< (* a a) 3))
(check-sat)
(get-model)

(echo "Z3 does not always find solutions to non-linear problems")
(declare-const b Real)
(declare-const c Real)
(assert (= (+ (* b b b) (* b c)) 3.0))
(check-sat)

(echo "yet it can show unsatisfiabiltiy for some nontrivial nonlinear problems...")
(declare-const x Real)
(declare-const y Real)
(declare-const z Real)
(assert (= (* x x) (+ x 2.0)))
(assert (= (* x y) x))
(assert (= (* (- y 1.0) z) 1.0))
(check-sat)

(reset)
(echo "When presented only non-linear constraints over reals, Z3 uses a specialized complete solver")
(declare-const b Real)
(declare-const c Real)
(assert (= (+ (* b b b) (* b c)) 3.0))
(check-sat)
(get-model)
```

## Division


Z3 also has support for division, integer division, modulo and remainder operators. Internally, they are all mapped to multiplication.

```z3
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
(assert (= b (/ c 3.0)))
(assert (= c 20.0))
(check-sat)
(get-model)
```

In Z3, division by zero is allowed, but the result is not specified. Division is not a partial function. Actually, in Z3 all functions are total, although the result may be underspecified in some cases like division by zero.

```z3
(declare-const a Real)
; The following formula is satisfiable since division by zero is not specified.
(assert (= (/ a 0.0) 10.0)) 
(check-sat)
(get-model)

; Although division by zero is not specified, division is still a function.
; So, (/ a 0.0) cannot evaluated to 10.0 and 2.0.
(assert (= (/ a 0.0) 2.0)) 
(check-sat)
```

If you are not happy with this behavior, you may use ite (if-then-else) operator to guard every division, and assign whatever intepretation you like to the division by zero. This example uses define-fun constructor to create a new operator mydiv. This is essentially a macro, and Z3 will expand its definition for every application of mydiv.

```z3
; defining my own division operator where x0.0 == 0.0 for every x.
(define-fun mydiv ((x Real) (y Real)) Real
  (if (not (= y 0.0))
      (/ x y)
      0.0))
(declare-const a Real)
(declare-const b Real)
(assert (= (mydiv a b) 1.0))
(assert (= b 0.0))
(check-sat)
```