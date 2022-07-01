---
title: Division
---


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