---
title: Nonlinear Arithmetic 
---

We say a formula is nonlinear if it contains expressions of the form ( t s) where t and s are not numbers. Nonlinear real arithmetic is very expensive, and Z3 is not complete for this kind of formula. The command check-sat may return unknown or loop. Nonlinear integer arithmetic is undecidable there is no procedure that is correct and terminates (for every input) with a sat or unsat answer. Yes, it is impossible to build such procedure. Note that, this does not prevent Z3 from returning an answer for many nonlinear problems. The real limit is that there will always be a nonlinear integer arithmetic formula that it will fail produce an answer.

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