---
title: Soft Constraints
sidebar_position: 4
---

The `(assert-soft formula [:weight numeral] [:id id])` command asserts a weighted soft constraint. The weight must be a positive natural number, but is optional. If omitted, the weight is set to 1.

```z3
(declare-const x Int)
(declare-const y Int)
(define-fun a1 () Bool (> x 0))
(define-fun a2 () Bool (< x y))
(define-fun a3 () Bool (<= (+ y x) 0))
(assert (= a3 a1))
(assert (or a3 a2))
(assert-soft a3         :weight 3)
(assert-soft (not a3)   :weight 5) 
(assert-soft (not a1)   :weight 10)
(assert-soft (not a2)   :weight 3)
(check-sat)
(get-model)
(get-objectives)
(eval a1)
(eval a2)
(eval a3)
```

Floating point and integer weights can be mixed; internally weights are converted into rational numbers.

```z3
(declare-const a1 Bool)
(declare-const a2 Bool)
(declare-const a3 Bool)
(assert-soft a1 :weight 0.1)
(assert-soft a2 :weight 1.0)
(assert-soft a3 :weight  1)
(assert-soft (or (not a1) (not a2)) :weight 3.2)
(check-sat)
(get-objectives)
(get-model)
```

You can use identifiers to group soft constraints. You can also repeat the same soft constraint. Every repetition counts independently. In the example we add the soft constrsaint `a` twice and force it to be false. The penalty for group `x` is therefore 2. The penalty for group `y` is because there is only one soft constraint that is impossible to satisfy.

```z3
(declare-const a Bool)
(declare-const b Bool)
(assert-soft false :id y)
(assert-soft a :id x)
(assert-soft a :id x)
(assert-soft b :id x)
(assert (not a))

(check-sat)
(get-objectives)
```
