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

## Cardinality Constraints

Logical disjunction `(or p q r)` is true when at least one of the arguments `p`, `q`, `r` is true. If you want to express that at least two of the arguments hold, then
it is possible to encode using formulas such as `(or (and p q) (and p r) (and q r))`. However, you can also express the constraint directly using a _cardinality_ constraint.

```z3
(declare-const p Bool)
(declare-const q Bool)
(declare-const r Bool)
(assert ((_ at-least 2) p q r))
(check-sat)
(get-model)
```

Dually, if at most one of the arguments should be true, you can express it as
```z3
(declare-const p Bool)
(declare-const q Bool)
(declare-const r Bool)
(assert ((_ at-most 1) p q r))
(check-sat)
(get-model)
```

## Pseudo Boolean Constraints

A generalization of cardinality constraints are Pseudo-Boolean formulas where
the sum of Boolean variables with coefficients are bounded.

The sum `2p + q + 3r + 3s + 2t` as at least `4`.
```z3
(declare-const p Bool)
(declare-const q Bool)
(declare-const r Bool)
(declare-const s Bool)
(declare-const t Bool)
(assert ((_ pbge 4 2 1 3 3 2) p q r s t))
(check-sat)
(get-model)
```

The sum `2p + q + 3r + 3s + 2t` as at most `5`.
```z3
(declare-const p Bool)
(declare-const q Bool)
(declare-const r Bool)
(declare-const s Bool)
(declare-const t Bool)
(assert ((_ pble 5 2 1 3 3 2) p q r s t))
(check-sat)
(get-model)
```

The sum `2p + q + 3r + 3s + 2t` equals `5`.
```z3
(declare-const p Bool)
(declare-const q Bool)
(declare-const r Bool)
(declare-const s Bool)
(declare-const t Bool)
(assert ((_ pbeq 5 2 1 3 3 2) p q r s t))
(check-sat)
(get-model)
```
