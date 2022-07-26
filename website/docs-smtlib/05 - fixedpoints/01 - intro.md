---
title: Introduction
sidebar_position: 1
---

Z3 contains an extension called muZ for reasoning about Constrained Horn Clauses and Datalog programs. 
Constrained Horn Clauses allow formulating symbolic model checking problems for push-down systems. 
Datalog programs are special cases of Horn Clauses where the domains of variables is finite, 
but extend Horn Clauses by supporting stratified negation.
This tutorial includes some examples that demonstrate features of this engine. The following papers μZ - An Efficient Engine for Fixed-Points with Constraints. ([CAV 2011](https://link.springer.com/chapter/10.1007/978-3-642-22110-1_36)) and Generalized Property Directed Reachability, IC3/PDR, ([SAT 2012](https://link.springer.com/chapter/10.1007/978-3-642-31612-8_13)) describe some of the main features of the engine. 
The IC3 engine for Constrained Horn Clauses is now based on advances in [SPACER](https://spacer.bitbucket.io/).
Be sure to follow along with the examples by clicking the "edit" link in the corner. See what the tool says, try your own formulas, and experiment! 
