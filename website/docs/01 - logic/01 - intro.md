---
title: Introduction
sidebar_position: 1
---


Z3 is a state-of-the art theorem prover from Microsoft Research. It can be used to check the satisfiability of logical formulas over one or more theories. Z3 offers a compelling match for software analysis and verification tools, since several common software constructs map directly into supported theories.

:::info
 The main objective of the tutorial is to introduce the reader on how to use Z3 effectively for logical modeling and solving. The tutorial provides some general background on logical modeling, but we have to defer a full introduction to first-order logic and decision procedures to text-books in order to develop an **in depth** understanding of the underlying concepts. To clarify: a deep understanding of logical modeling is not necessarily required to understand this tutorial and model logic with Z3, but it is necessary to understand for writing complex programs. 
 > For an understanding of computational logic from the foundations of first-order logic to state-of-the-art decision procedures for arithmetic, data structures, and combination theories, refer to  [The Calculus of Computation by Aaron Bradley and Zohar Manna](https://theory.stanford.edu/~arbrad/book.html)

 > For an understanding **decision procedures**, or an algorithm that, given a decision problem, terminates with a correct yes or no answer, refer to [Decision Procedures by Daniel Kroening and Ofer Strichman](http://www.decision-procedures.org/)
 
 > For an overview of Satisfiability modulo theories (SMT) and Boolean satisfiability problem (SAT) solvers, examples of their theoretical application, and questions to work through, refer to [SAT/SMT
by Example by Dennis Yurichev](https://sat-smt.codes/SAT_SMT_by_example.pdf) 

> This tutorial uses Z3's frontend for the [SMTLIB format](http://smtlib.cs.uiowa.edu/).
:::

Z3 is a low level tool. It is best used as a component in the context of other tools that require solving logical formulas. Consequently, Z3 exposes a number of API facilities to make it convenient for tools to map into Z3, but there are no stand-alone editors or user-centric facilities for interacting with Z3. The language syntax used in the front ends favor simplicity in contrast to linguistic convenience.

:::tip
 Be sure to follow along with the examples by clicking the edit link in the corner. See what the tool says, try your own formulas, and experiment!
:::