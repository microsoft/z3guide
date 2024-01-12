---
title: Goals
sidebar_position: 2
---

Z3 implements a methodology for orchestrating reasoning engines where "big" symbolic reasoning steps are represented as functions known as *tactics*, and tactics are composed using combinators known as *tacticals*. Tactics process sets of formulas called Goals.

When a tactic is applied to some goal G, four different outcomes are possible. In SMT 2.0, the goal is the conjunction of all assertions. The tactic succeeds in showing G to be satisfiable (i.e., feasible); succeeds in showing G to be unsatisfiable (i.e., infeasible); produces a sequence of subgoals; or fails. When reducing a goal G to a sequence of subgoals G1, ..., Gn, we face the problem of model conversion. A model converter constructs a model for G using a model for some subgoal Gi.

In the following example, we use the command `apply` to execute a tactic composed of two built-in tactics: `simplify` and `solve-eqs`. The tactic `simplify` applies transformations equivalent to the ones found in the `simplify` command.
The tactic `solve-eqs` eliminates variables using Gaussian elimination.
Actually, `solve-eqs` is not restricted linear arithmetic, but can also eliminate arbitrary variables. The combinator `then` applies `simplify` to the input goal and `solve-eqs` to each subgoal produced by `simplify`. In this example, only one subgoal is produced.

```z3 
(declare-const x Real)
(declare-const y Real)

(assert (> x 0.0))
(assert (> y 0.0))
(assert (= x (+ y 2.0)))

(apply (then simplify solve-eqs))
```

In the example above, variable x is eliminated, and is not present in the resultant goal.

In Z3, a *clause* is any constraint of the form `(or f_1 ... f_n)`.
The tactic `split-clause` will select a clause `(or f_1 ... f_n)` in the input goal, and split it into n subgoals, one for each subformula `f_i`.

```z3 
(declare-const x Real)
(declare-const y Real)

(assert (or (< x 0.0) (> x 0.0)))
(assert (= x (+ y 1.0)))
(assert (< y 0.0))

(apply split-clause)
```

