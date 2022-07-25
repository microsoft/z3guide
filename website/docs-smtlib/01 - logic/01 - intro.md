---
title: Introduction
sidebar_position: 1
# displayed_sidebar: LogicSidebar
---


Z3 is a state-of-the art theorem prover from Microsoft Research. It can be used to check the satisfiability of logical formulas over one or more theories. Z3 offers a compelling match for software analysis and verification tools, since several common software constructs map directly into supported theories.

The main objective of the tutorial is to introduce the reader on how to use Z3 effectively for logical modeling and solving. The tutorial provides some general background on logical modeling, but we have to defer a full introduction to first-order logic and decision procedures to text-books in order to develop an in depth understanding of the underlying concepts. To clarify: a deep understanding of logical modeling is not necessarily required to understand this tutorial and modeling with Z3, but it is necessary to understand for writing complex models.

:::info
 
 > For an understanding of computational logic from the foundations of first-order logic to state-of-the-art decision procedures for arithmetic, data structures, and combination theories, refer to  [The Calculus of Computation by Aaron Bradley and Zohar Manna](https://theory.stanford.edu/~arbrad/book.html)

 > For an understanding decision procedures, algorithms that, given a decision problem, terminate with a correct yes or no answer, refer to [Decision Procedures by Daniel Kroening and Ofer Strichman](http://www.decision-procedures.org/)
 
 > For an overview of Satisfiability modulo theories (SMT) and Boolean satisfiability problem (SAT) solvers, examples of their theoretical application, and questions to work through, refer to [SAT/SMT by Example by Dennis Yurichev](https://sat-smt.codes/SAT_SMT_by_example.pdf) 

:::

Z3 is a low level tool. It is best used as a component in the context of other tools that require solving logical formulas. Consequently, Z3 exposes a number of API facilities to make it convenient for tools to map into Z3, but there are no stand-alone editors or user-centric facilities for interacting with Z3. The language syntax used in the front ends favor simplicity in contrast to linguistic convenience.

## SMTLIB Format

> This tutorial uses Z3's frontend for the [SMTLIB format](http://smtlib.cs.uiowa.edu/).

The format is a community standard used by several SMT solvers. 
It uses LISP like syntax to make it easy for tools to serialize and de-serialize models. 
On the flip-side it is not optimized for human readability. 
The SMTLIB initiative defines several theories and z3 supports all main theories in the SMTLIB2 format.
This tutorial cross-references the definitions of theories in relevant sections.

:::tip
 Be sure to follow along with the examples by clicking the edit link in the corner. See what the tool says, try your own formulas, and experiment!
:::