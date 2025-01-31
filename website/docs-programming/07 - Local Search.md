---
title: Local Search
sidebar_position: 7
---


# Local Search

* As a stand-alone incomplete local search solver that can be invoked using a tactic called _sls-smt_.


* Within a sequential integration with CDCL(T). It is enabled by setting <t>smt.sls.enable=true, smt.sls.parallel=false</t>.
  It integrates with CDCL(T) as a theory solver that invokes local search periodically. It is invoked during restarts, 
  final checks and when the solver transitions from a total assignment to the propositional abstraction of the formula being solved.

* As a parallel solver that is spawned in tandem with CDCL solving. It has an advantage over the sequential
  solver that no fine-grained resource budgeting is required to fairly divide time between local solving and CDCL.

The sequential and parallel solvers synchronize learned units, candidate value assignments,
phase and branching priorities. 
THe local search solver parameters can be fine-tuned by setting parameters in the [sls](Parameters#sls) namespace.


