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
(assert (or (and (< 0 x) (<= x 7)) (= x 11)))

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
(declare-const queen1 (_ BitVec 4))
(declare-const queen2 (_ BitVec 4))
(declare-const queen3 (_ BitVec 4))
(declare-const queen4 (_ BitVec 4))
------

(declare-const queen1 (_ BitVec 4))
(declare-const queen2 (_ BitVec 4))
(declare-const queen3 (_ BitVec 4))
(declare-const queen4 (_ BitVec 4))


(define-fun single_bit ((x (_ BitVec 4))) Bool
   (or (= x (_ bv1 4)) (= x (_ bv2 4))(= x (_ bv4 4))(= x (_ bv8 4))))

(assert (single_bit queen1))
(assert (single_bit queen2))
(assert (single_bit queen3))
(assert (single_bit queen4))

; no vertical
(assert (= (_ bv0 4) (bvand queen1 queen2)))
(assert (= (_ bv0 4) (bvand queen1 queen3)))
(assert (= (_ bv0 4) (bvand queen1 queen4)))
(assert (= (_ bv0 4) (bvand queen2 queen3)))
(assert (= (_ bv0 4) (bvand queen2 queen4)))
(assert (= (_ bv0 4) (bvand queen3 queen4)))

; no diagonal
(assert (= (_ bv0 4) (bvand queen1 (bvlshr queen2 (_ bv1 4)))))
(assert (= (_ bv0 4) (bvand queen1 (bvlshr queen3 (_ bv2 4)))))
(assert (= (_ bv0 4) (bvand queen1 (bvlshr queen4 (_ bv3 4)))))
(assert (= (_ bv0 4) (bvand queen2 (bvlshr queen3 (_ bv1 4)))))
(assert (= (_ bv0 4) (bvand queen2 (bvlshr queen4 (_ bv2 4)))))
(assert (= (_ bv0 4) (bvand queen3 (bvlshr queen4 (_ bv1 4)))))

(assert (= (_ bv0 4) (bvand queen1 (bvshl queen2 (_ bv1 4)))))
(assert (= (_ bv0 4) (bvand queen1 (bvshl queen3 (_ bv2 4)))))
(assert (= (_ bv0 4) (bvand queen1 (bvshl queen4 (_ bv3 4)))))
(assert (= (_ bv0 4) (bvand queen2 (bvshl queen3 (_ bv1 4)))))
(assert (= (_ bv0 4) (bvand queen2 (bvshl queen4 (_ bv2 4)))))
(assert (= (_ bv0 4) (bvand queen3 (bvshl queen4 (_ bv1 4)))))

```


```z3-duo
(declare-const x (_ BitVec 32))
------

; count number of 1's in a bit-vector
;int popcount_32 (unsigned int v) { 
;  v = v - ((v >> 1) & 0x55555555); 
;  v = (v & 0x33333333) + ((v >> 2) & 0x33333333); 
;  v = ((v + (v >> 4) & 0xF0F0F0F) * 0x1010101) >> 24; 
;  return(v); 
;} 

(declare-const x (_ BitVec 32))
(declare-const y (_ BitVec 32))

(define-fun pcLine1 ((x (_ BitVec 32))) (_ BitVec 32)
   (bvsub x (bvand (bvlshr x #x00000001) #x55555555)))

(define-fun pcLine2 ((x (_ BitVec 32))) (_ BitVec 32)
   (bvadd (bvand x #x33333333) (bvand (bvlshr x #x00000002) #x33333333)))

(define-fun pcLine3 ((x (_ BitVec 32))) (_ BitVec 32)
   (bvlshr (bvmul (bvand (bvadd (bvlshr x #x00000004) x) #x0f0f0f0f) #x01010101) #x00000018))


(assert (= y (pcLine3 (pcLine2 (pcLine1 x)))))
```


```z3-duo
(declare-const x0 (_ BitVec 3))
(declare-const x1 (_ BitVec 3))
(declare-const x2 (_ BitVec 3))
(declare-const x3 (_ BitVec 3))
(declare-const x4 (_ BitVec 3))
(declare-const x5 (_ BitVec 3))
(declare-const x6 (_ BitVec 3))
(declare-const x7 (_ BitVec 3))

------
; Gray codes
(declare-const x0 (_ BitVec 3))
(declare-const x1 (_ BitVec 3))
(declare-const x2 (_ BitVec 3))
(declare-const x3 (_ BitVec 3))
(declare-const x4 (_ BitVec 3))
(declare-const x5 (_ BitVec 3))
(declare-const x6 (_ BitVec 3))
(declare-const x7 (_ BitVec 3))

(define-fun single_bit ((x (_ BitVec 3))) Bool
   (or (= x (_ bv1 3)) (= x (_ bv2 3))(= x (_ bv4 3))))

(assert (distinct x0 x1 x2 x3 x4 x5 x6 x7))
(assert (single_bit (bvxor x0 x1)))
(assert (single_bit (bvxor x1 x2)))
(assert (single_bit (bvxor x2 x3)))
(assert (single_bit (bvxor x3 x4)))
(assert (single_bit (bvxor x4 x5)))
(assert (single_bit (bvxor x5 x6)))
(assert (single_bit (bvxor x6 x7)))
(assert (single_bit (bvxor x7 x0)))


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


```z3-duo
(declare-fun P (Int) Bool)
(declare-fun Q (Int) Bool)
------
(declare-fun P (Int) Bool)
(declare-fun Q (Int) Bool)
(assert (forall ((x Int)) (=> (P x) (Q x))))
```


```z3-duo
(declare-fun P (Int) Bool)
(declare-fun Q (Int) Bool)
------
(declare-fun P (Int) Bool)
(declare-fun Q (Int) Bool)
(assert (forall ((x Int)) (= (P x) (Q x))))
```

```z3-duo
(declare-fun P (Int) Bool)
(declare-fun Q (Int) Bool)
------
(declare-fun P (Int) Bool)
(declare-fun Q (Int) Bool)
(assert (forall ((x Int)) (not (= (P x) (Q x)))))
```



```z3-duo
(declare-fun P (Int Int) Bool)
------
(declare-fun P (Int Int) Bool)
(assert (forall ((x Int)) (P x x)))
```


```z3-duo
(declare-fun P (Int Int) Bool)
------
(declare-fun P (Int Int) Bool)
(assert (forall ((x Int)) (P x x)))
(assert (forall ((x Int) (y Int)) (=> (P x y) (P y x))))
```


```z3-duo
(declare-fun P (Int Int) Bool)
------
(declare-fun P (Int Int) Bool)
(assert (forall ((x Int)) (P x x)))
(assert (forall ((x Int) (y Int)) (=> (P x y) (P y x))))
(assert (forall ((x Int) (y Int) (z Int)) (=> (and (P x y) (P y z)) (P x z))))
```



```z3-duo
(declare-fun P (Int Int) Bool)
------
(declare-fun P (Int Int) Bool)
(assert (forall ((x Int) (y Int)) (=> (P x y) (not (P y x)))))
```



