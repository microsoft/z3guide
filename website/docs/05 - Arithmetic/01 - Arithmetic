--- 
title: Basics
---

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
(assert (= a (+ ( 2 c) 10)))
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