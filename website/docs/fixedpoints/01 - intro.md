---
title: Introduction
sidebar_position: 1
---

Z3 contains an extension called muZ with fixed-point constraints. This tutorial includes some examples that demonstrate features of this engine. The following papers μZ - An Efficient Engine for Fixed-Points with Constraints. ([CAV 2011](https://link.springer.com/chapter/10.1007/978-3-642-22110-1_36)) and Generalized Property Directed Reachability, IC3/PDR, ([SAT 2012](https://link.springer.com/chapter/10.1007/978-3-642-31612-8_13)) describe some of the main features of the engine. The IC3 engine is now based on [SPACER](https://spacer.bitbucket.io/).
Be sure to follow along with the examples by clicking the "edit" link in the corner. See what the tool says, try your own formulas, and experiment! 

This tutorial covers some of the fixedpoint utilities available with Z3. The main features are a basic Datalog engine, an engine with relational algebra and an engine based on a generalization of the Property Directed Reachability algorithm, as well as the Duality engine.