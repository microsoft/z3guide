---
title: Syntax
sidebar_position: 5
--- 

Three different text-based input formats are accepted.

## 1. Basic datalog

Files with suffix .datalog are parsed using the BDDBDDB format. The format can be used for comparing benchmarks with the BDDBDDB tool.

We use an artificial program to illustrate the basic Datalog format that complies to the format used by BDDBDDB.

```
Z 64

P0(x: Z) input
Gt0(x : Z, y : Z) input
R(x : Z) printtuples
S(x : Z) printtuples
Gt(x : Z, y : Z) printtuples
Gt(x,y) :- Gt0(x,y).
Gt(x,y) :- Gt(x,z), Gt(z,y).
R(x) :- Gt(x,_).
S(x) :- Gt(x,x0), Gt0(x,y), Gt0(y,z), P0(z).
Gt0("a","b").
Gt0("b","c").
Gt0("c","d").
Gt0("a1","b").
Gt0("b","a1").
Gt0("d","d1").
Gt0("d1","d").
P0("a1").
```

## 2. SMT-LIB2 extension
The following commands are added to the SMT-LIB2 syntax:

- `(declare-var [var] [sort])` Declare a variable that is universally quantified in Horn clauses.
- `(declare-rel [relation-name] ([sorts]))` Declare relation signature. Relations are uninterpreted.
- `(rule [universal-horn-formula])` Assert a rule or a fact as a universally quantified Horn formula.
- `(query [relation-name])` Pose a query. Is the relation non-empty.
- `(set-predicate-representation [function-name] [symbol]+)` Specify the representation of a predicate.

## 3. Pure SMT-LIB2
Many problems about program safety can be reduced to pure Horn clause satisfiability modulo theories (typically of arithmetic). These problems are expressible directly in SMT-LIB2. The repository Horn clause benchmarks in SMT-LIB2 contains more than 10,000 samples taken from different benchmarks and different encodings of the same benchmarks. An assertion is Horn if it is an implication; the head of the implication is either a formula using only interpreted functions, or it is an uninterpreted predicate; the body of the implication is a formula in negation normal form where the uninterpreted predicates occur positively.

```z3
(set-logic HORN)
(declare-fun mc (Int Int) Bool)

(assert (forall ((m Int)) (=> (> m 100) (mc m (- m 10)))))
(assert (forall ((m Int) (n Int) (p Int)) 
           (=> (and (<= m 100) (mc (+ m 11) p) (mc p n)) (mc m n))))

(assert (forall ((m Int) (n Int))
       (=> (and (mc m n) (<= m 101)) (= n 91))))
(check-sat)
(get-model)
```
## Note the following:
- To ensure that the fixedpoint engine is used, specify `(set-logic HORN)`
- There is no separate query. Instead, queries correspond to Horn clause that have no positive occurrence of any uninterpreted relation.

## Programmatic API
You can interact with muZ over the programmatic API from Python, C, [C++](https://z3prover.github.io/api/html/classz3_1_1fixedpoint.html), OCaml, Java, and .NET. The APIs support adding rules and posing queries. 


