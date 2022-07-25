---
title: Basic Datalog
sidebar_position: 2
---

The default fixed-point engine is a bottom-up Datalog engine. It works with finite relations and uses finite table representations as hash tables as the default way to represent finite relations.

## Relations, rules and queries
The first example illustrates how to declare relations, rules and how to pose queries.

```z3
(declare-rel a ())
(declare-rel b ())
(declare-rel c ())
(rule (=> b a))
(rule (=> c b))

;(set-option :fixedpoint.engine datalog)
(query a)

(rule c)
(query a
 :print-answer true)
```

The example illustrates some of the basic constructs.

```
 (declare-rel a ())
```

declares a 0-ary relation a.

```
  (rule (=> b a))
```
Create the rule that a follows from b. In general you can create a rule with multiple premises and a name using the format

```
   (rule (=> (and b c) a) name)
```
The name is optional. It is used for tracking the rule in derivation proofs. Continuing with the example, a is false unless b is established.

```
 (query r)
```

Asks if relation `a` can be derived. The rules so far say that a follows if `b` is established and that `b` follows if `c` is established. But nothing establishes `c` and `b` is also not established, so `a` cannot be derived.


```
 (rule c)
```

Now it is the case that a can be derived.


## Relations with arguments

Relations can take arguments. We illustrate relations with arguments using edges and paths in a graph.

```z3
;(set-option :fixedpoint.engine datalog)
(define-sort s () (_ BitVec 3))
(declare-rel edge (s s))
(declare-rel path (s s))
(declare-var a s)
(declare-var b s)
(declare-var c s)

(rule (=> (edge a b) (path a b)))
(rule (=> (and (path a b) (path b c)) (path a c)))

(rule (edge #b001 #b010))
(rule (edge #b001 #b011))
(rule (edge #b010 #b100))

(declare-rel q1 ())
(declare-rel q2 ())
(declare-rel q3 (s))
(rule (=> (path #b001 #b100) q1))
(rule (=> (path #b011 #b100) q2))
(rule (=> (path #b001 b) (q3 b)))

(query q1)
(query q2)
(query q3 :print-answer true)
```

The example uses the declaration

```
 (declare-var a s)
```

to instrument the fixed-point engine that a should be treated as a variable appearing in rules.



