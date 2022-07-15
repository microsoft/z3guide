---
title: Recursive Functions
sidebar_position: 17
---


>  **SMTLIB2** standard: [Page 62](http://smtlib.cs.uiowa.edu/papers/smt-lib-reference-v2.6-r2021-05-12.pdf)


You can define recursive functions

```z3
(define-fun-rec length ((ls (List Int))) Int
   (if ((_ is nil) ls) 0 (+ 1 (length (tail ls)))))

(define-fun-rec nat-list ((ls (List Int))) Bool 
   (if ((_ is nil) ls)
       true
       (and (>= (head ls) 0) (nat-list (tail ls)))))

(declare-const list1 (List Int))
(declare-const list2 (List Int))
(assert (> (length list1) (length list2)))
(assert (not (nat-list list2)))
(assert (nat-list list1))
(check-sat)
(get-model)
```

Z3 unfolds the definition of recursive functions incrementally by iterative deepening:
it attempts first to establish satisfiabiltiy modulo a fixed bound on number of unfoldings; 
if the resulting formula is unsatisfiable _and_ the reason for unsatisfiability is due to the 
bound restriction, it increases the fixed bound incrementally. Note that this approach does not 
involve reasoning by induction that is often required to prove deeper properties of recursive functions.
This scheme allows to decide satisfiability and unsatisfiability for a limited, but often useful,
class of formulas.