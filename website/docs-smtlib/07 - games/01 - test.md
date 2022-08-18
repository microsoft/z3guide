---
title: Guessing Game Tests
sidebar_position: 1
---

```z3-duo
(declare-const x Int)
------
(declare-const x Int)
(assert (= (mod x 2) 0))
```

```z3-duo
(declare-const x Int)
------
(declare-const x Int)
(assert (and (> x 0) (= (mod x 2) 0)))

```

```z3-duo
(declare-const x (_ BitVec 32))
------
(declare-const x (_ BitVec 32))
(assert (= (bvand x (bvsub 1 (_ bv1 32))) (_ bv0 32)))

```

```z3-duo
(declare-const x (_ BitVec 32))
------
(declare-const x (_ BitVec 32))
(assert (= (bvand x (bvsub 1 (_ bv1 32))) (_ bv0 32)))

```


```z3-duo
(declare-const d0 Int)
(declare-const d1 Int)
(declare-const d2 Int)
(declare-const d3 Int)
(declare-const d4 Int)
(declare-const d5 Int)
(declare-const d6 Int)
(declare-const d7 Int)
(declare-const d8 Int)
(declare-const d9 Int)
(declare-const d10 Int)
(declare-const d11 Int)
(declare-const d12 Int)
(declare-const d13 Int)
(declare-const d14 Int)
(declare-const d15 Int)
(assert (<= 0 d0 9))
(assert (<= 0 d1 9))
(assert (<= 0 d2 9))
(assert (<= 0 d3 9))
(assert (<= 0 d4 9))
(assert (<= 0 d5 9))
(assert (<= 0 d6 9))
(assert (<= 0 d7 9))
(assert (<= 0 d8 9))
(assert (<= 0 d9 9))
(assert (<= 0 d10 9))
(assert (<= 0 d11 9))
(assert (<= 0 d12 9))
(assert (<= 0 d13 9))
(assert (<= 0 d14 9))
(assert (<= 0 d15 9))
------

(declare-const d0 Int)
(declare-const d1 Int)
(declare-const d2 Int)
(declare-const d3 Int)
(declare-const d4 Int)
(declare-const d5 Int)
(declare-const d6 Int)
(declare-const d7 Int)
(declare-const d8 Int)
(declare-const d9 Int)
(declare-const d10 Int)
(declare-const d11 Int)
(declare-const d12 Int)
(declare-const d13 Int)
(declare-const d14 Int)
(declare-const d15 Int)
(assert (<= 0 d0 9))
(assert (<= 0 d1 9))
(assert (<= 0 d2 9))
(assert (<= 0 d3 9))
(assert (<= 0 d4 9))
(assert (<= 0 d5 9))
(assert (<= 0 d6 9))
(assert (<= 0 d7 9))
(assert (<= 0 d8 9))
(assert (<= 0 d9 9))
(assert (<= 0 d10 9))
(assert (<= 0 d11 9))
(assert (<= 0 d12 9))
(assert (<= 0 d13 9))
(assert (<= 0 d14 9))
(assert (<= 0 d15 9))

(define-fun even ((c Int)) Int
      (if (>= (* 2 c) 10) (+ (mod (* 2 c) 10) (div (* 2 c) 10)) (* 2 c)))
(define-fun odd ((c Int)) Int c)
      
(assert (let
	      ((digits (+ (even d0) (odd d1) (even d2) (odd d3) (even d4)
	                 (odd d5) (even d6) (odd d7) (even d8) (odd d9)
			 (even d10) (odd d11) (even d12) (odd d13) (even d14)
			 d15)))
	      (= (mod digits 10) 0)))


	      
;4-5-7-8-4-2-3-0-1-3-7-6-9-2-1
; Starting with the first digit, multiply every second digit by 2:
; 8-5-14-8-8-2-6-0-2-3-14-6-18-2-2
; Every time you have a two-digit number, just add those digits together for a one-digit result:
; 8-5-5-8-8-2-6-0-2-3-5-6-9-2-2
; Finally, add all the numbers together:
; 8 + 5 + 5 + 8 + 8 + 2 + 6 + 0 + 2 + 3 + 5 + 6 + 9 + 2 + 2 = 71
; When this number is added to the check digit, then the result must be an even multiple of 10. In this case:
; 71 + 9 = 80
```