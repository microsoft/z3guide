---
title: Propositional Logic 
sidebar_position: 3
---

The pre-defined sort Bool is the sort (type) of all Boolean propositional expressions. Z3 supports the usual Boolean operators and, or, xor, not, => (implication), ite (if-then-else). Bi-implications are represented using equality =. The following example shows how to prove that if p implies q and q implies r, then p implies r. We accomplish that by showing that the negation is unsatisfiable. The command define-fun is used to define a macro (aka alias). In this example, conjecture is an alias for the conjecture we want to prove.

```z3
(declare-const p Bool)
(declare-const q Bool)
(declare-const r Bool)
(define-fun conjecture () Bool
	(=> (and (=> p q) (=> q r))
		(=> p r)))
(assert (not conjecture))
(check-sat)
``` 

### Satisfiability and Validity

A formula F is valid if F always evaluates to true for any assignment of appropriate values to its uninterpreted function and constant symbols. A formula F is satisfiable if there is some assignment of appropriate values to its uninterpreted function and constant symbols under which F evaluates to true. Validity is about finding a proof of a statement; satisfiability is about finding a solution to a set of constraints. Consider a formula F with some uninterpreted constants, say a and b. We can ask whether F is valid, that is whether it is always true for any combination of values for a and b. If F is always true, then not F is always false, and then not F will not have any satisfying assignment; that is, not F is unsatisfiable. That is, F is valid precisely when not F is not satisfiable (is unsatisfiable). Alternately, F is satisfiable if and only if not F is not valid (is invalid). Z3 finds satisfying assignments (or report that there are none). To determine whether a formula F is valid, we ask Z3 whether not F is satisfiable. Thus, to check the deMorgan's law is valid (i.e., to prove it), we show its negation to be unsatisfiable.

```z3
(declare-const a Bool)
(declare-const b Bool)
(define-fun demorgan () Bool
    (= (and a b) (not (or (not a) (not b)))))
(assert (not demorgan))
(check-sat)
```
