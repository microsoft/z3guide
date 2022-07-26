---
title: Advanced Topics
sidebar_position: 7
---

## Difference Logic

Z3 uses by default an implementation of dual Simplex to solve feasibility and primal Simplex for optimality. For arithmetical constraints that only have differences between variables, known as difference logic, Z3 furthermore contains alternative decision procedures tuned for this domain. These have to be configured explicitly. There is a choice between a solver tuned for sparse constraints (where the ratio of variables is high compared to number of inequalities) and a solver tuned for dense constraints.

```z3
(set-option :smt.arith.solver 1) ; enables difference logic solver for sparse constraints
(set-option :smt.arith.solver 3) ; enables difference logic solver for dense constraints
(declare-const x Int)
(declare-const y Int)
(assert (>= 10 x))
(assert (>= x (+ y 7)))
(maximize (+ x y))
(check-sat)
(get-objectives)
```

## Weighted Max-SAT solvers, a portfolio

The default solver for MaxSAT problems is the MaxRes algorithm. Several other alternative solvers are available. The default solver
is chosen based on benchmarking against MaxSAT competition benchmarks, but other solver combinations, such as wmax, may work well for some domains.
When the objectives are weighted by weights such as 1, 2, 4, 8, 16, such that the sum of weights in every prefix is lower than the next weight, the solver
uses a lexicographic optimization algorithm that attempts to first solve for the highest weight before continuing with lower weights.

The other main MaxSAT algorithms available are

```z3
  (set-option :opt.maxsat_engine rc2)
  (set-option :opt.maxsat_engine maxresbin)
  (set-option :opt.maxsat_engine wmax)
```

Pre-processing within the optimization solver will attempt to eliminate bounded arithmetical variables.
For example, the constraints
```z3
(declare-fun x () Int)
(assert (<= x 1))
(assert (>= x 0))
(minimize x)
(check-sat)
```

get rewritten internally to a problem of the form

```z3
(declare-const x Bool)
(assert-soft (not x))
(check-sat)
```
You can disable this transformation by setting

```z3 
  (set-option :opt.elim_01 false)
```

For problems that are either already bit-vector or Boolean or can be rewritten to this form, the engine uses a core solver based on a tuned SAT solver.
You can turn off the use of the SAT solver by setting:

```z3
  (set-option :opt.enable_sat false)
```


