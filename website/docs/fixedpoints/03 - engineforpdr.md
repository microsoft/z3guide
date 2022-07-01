---
title: Engine for Property Directed Reachability
sidebar_position: 3
---

A different underlying engine for fixed-points is based on an algorithm for Property Directed Reachability (PDR). The PDR engine is used by default for relations over integers, reals and algebraic data-types. The version in Z3 applies to Horn clauses with arithmetic and Boolean domains. The engine also works with domains using algebraic data-types and bit-vectors, although it is currently not overly tuned for either. The PDR engine is targeted at applications from symbolic model checking of software. The systems may be infinite state. The following examples also serve a purpose of showing how software model checking problems (of safety properties) can be embedded into Horn clauses and solved using PDR.

## Procedure Calls
McCarthy's 91 function illustrates a procedure that calls itself recursively twice. The Horn clauses below encode the recursive function:

```z3
  mc(x) = if x > 100 then x - 10 else mc(mc(x+11))
```
The general scheme for encoding recursive procedures is by creating a predicate for each procedure and adding an additional output variable to the predicate. Nested calls to procedures within a body can be encoded as a conjunction of relations.

```z3
(declare-rel mc (Int Int))
(declare-var n Int)
(declare-var m Int)
(declare-var p Int)

(rule (=> (> m 100) (mc m (- m 10))))
(rule (=> (and (<= m 100) (mc (+ m 11) p) (mc p n)) (mc m n)))

(declare-rel q1 (Int Int))
(rule (=> (and (mc m n) (< n 91)) (q1 m n))) 
(query q1 :print-certificate true)

(declare-rel q2 (Int Int))
(rule (=> (and (mc m n) (not (= n 91)) (<= m 101)) (q2 m n)))
(query q2 :print-certificate true)

(declare-rel q3 (Int Int))
(rule (=> (and (mc m n) (< n 92)) (q3 m n)))
(query q3 :print-certificate true)
```