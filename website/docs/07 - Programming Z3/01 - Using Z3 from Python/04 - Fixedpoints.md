---
title: Fixedpoints
sidebar_position: 4
---


<h1>Fixedpoints</h1>



This tutorial illustrates uses of Z3's fixedpoint engine.
The following papers
<a href="http://research.microsoft.com/en-us/people/nbjorner/z3fix.pdf">
&mu;Z - An Efficient Engine for Fixed-Points with Constraints.</a>
(CAV 2011) and
<a href="http://research.microsoft.com/en-us/people/nbjorner/z3pdr.pdf">
Generalized Property Directed Reachability</a> (SAT 2012)
describe some of the main features of the engine.


## Introduction



This tutorial covers some of the fixedpoint utilities available with Z3.
The main features are a basic Datalog engine, an engine with relational
algebra and an engine based on a generalization of the Property
Directed Reachability algorithm.



## Basic Datalog 

The default fixed-point engine is a bottom-up Datalog engine. 
It works with finite relations and uses finite table representations
as hash tables as the default way to represent finite relations.


### Relations, rules and queries

The first example illustrates how to declare relations, rules and
how to pose queries.

<pre pref="fixedpoint.1" />

The example illustrates some of the basic constructs.
```
  fp = Fixedpoint()
```
creates a context for fixed-point computation.
```
 fp.register_relation(a.decl(), b.decl(), c.decl())
```
Register the relations <tt>a, b, c</tt> as recursively defined.
```
 fp.rule(a,b)
```
Create the rule that <tt>a</tt> follows from <tt>b</tt>. 
In general you can create a rule with multiple premises and a name using 
the format
```
 fp.rule(_head_,[_body1,...,bodyN_],_name_)
```
The _name_ is optional. It is used for tracking the rule in derivation proofs.

Continuing with the example, <tt>a</tt> is false unless <tt>b</tt> is established.
```
 fp.query(a)
```
Asks if <tt>a</tt> can be derived. The rules so far say that <tt>a</tt> 
follows if <tt>b</tt> is established and that <tt>b</tt> follows if <tt>c</tt> 
is established. But nothing establishes <tt>c</tt> and <tt>b</tt> is also not
established, so <tt>a</tt> cannot be derived.
```
 fp.fact(c)
```
Add a fact (shorthand for <tt>fp.rule(c,True)</tt>).
Now it is the case that <tt>a</tt> can be derived.

### Explanations

It is also possible to get an explanation for a derived query.
For the finite Datalog engine, an explanation is a trace that
provides information of how a fact was derived. The explanation
is an expression whose function symbols are Horn rules and facts used
in the derivation.

<pre pref="fixedpoint.2" />

### Relations with arguments

Relations can take arguments. We illustrate relations with arguments
using edges and paths in a graph.

<pre pref="fixedpoint.3" />

The example uses the declaration
```
 fp.declare_var(a,b,c)
```
to instrument the fixed-point engine that <tt>a, b, c</tt> 
should be treated as variables
when they appear in rules. Think of the convention as they way bound variables are
passed to quantifiers in Z3Py.

### Procedure Calls

McCarthy's 91 function illustrates a procedure that calls itself recursively
twice. The Horn clauses below encode the recursive function:

```
  mc(x) = if x > 100 then x - 10 else mc(mc(x+11))
```

The general scheme for encoding recursive procedures is by creating a predicate
for each procedure and adding an additional output variable to the predicate.
Nested calls to procedures within a body can be encoded as a conjunction
of relations.


<pre pref="fixedpoint.8" />

The first two queries are unsatisfiable. The PDR engine produces the same proof of unsatisfiability.
The proof is an inductive invariant for each recursive predicate. The PDR engine introduces a
special query predicate for the query.

### Bakery


We can also prove invariants of reactive systems. It is convenient to encode reactive systems
as guarded transition systems. It is perhaps for some not as convenient to directly encode 
guarded transitions as recursive Horn clauses. But it is fairly easy to write a translator
from guarded transition systems to recursive Horn clauses. We illustrate a translator
and Lamport's two process Bakery algorithm in the next example.


<pre pref="fixedpoint.9" />
The rather verbose (and in no way minimal) inductive invariants are produced as answers.

### Functional Programs
We can also verify some properties of functional programs using Z3's 
generalized PDR. Let us here consider an example from 
<a href="http://www.kb.is.s.u-tokyo.ac.jp/~uhiro/">
_Predicate Abstraction and CEGAR for Higher-Order Model 
Checking, Kobayashi et.al. PLDI 2011_</a>.
We encode functional programs by taking a suitable operational
semantics and encoding an evaluator that is specialized to
the program being verified (we don't encode a general purpose
evaluator, you should partial evaluate it to help verification).
We use algebraic data-types to encode the current closure that is
being evaluated.

<pre pref="fixedpoint.10" />

