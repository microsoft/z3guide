---
title: Advanced Topics
sidebar_position: 7
---

## Difference Logic

By default, Z3 uses dual Simplex to solve feasibility, and primal Simplex for optimality.
For arithmetical constraints that only have differences between variables, known as *difference logic*, Z3 contains alternative decision procedures tuned for this domain. These have to be configured explicitly. There is a choice between a solver tuned for sparse constraints (where the ratio of variables is high compared to number of inequalities) and a solver tuned for dense constraints.

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

## Nonlinear Real Optimization Controls

Starting with Z3 5.3, the optimizer can certify algebraic optima and open bounds
over nlsat cells for polynomial real problems. The main controls are:

| Option | Default | Purpose |
|--------|---------|---------|
| `:opt.optsmt_nlsat` | `true` | Enable optimization over nlsat cells for real objectives under nonlinear constraints |
| `:opt.optsmt_nlsat_supremum_rlimit` | `100000` | Resource allowance for certifying finite open suprema; zero disables this extra check |
| `:opt.optsmt_bisect_rounds` | `64` | Bound the refinement calls between a feasible real objective value and a refuted bound |
| `:opt.pareto_nlsat` | `true` | Use an nlsat-backed solver for Pareto search on pure nonlinear real problems |
| `:opt.pareto_nlsat_reuse` | `true` | Reuse learned nlsat clauses across Pareto checks |
| `:opt.optsmt_lex_after_unbounded` | `true` | Continue analyzing later arithmetic objectives after an unbounded lexicographic objective, using limiting optima |

These settings use the existing `set-option` command. Disabling an additional
bound-certification check does not prove that an objective is unbounded.
Likewise, exhausting a refinement budget may leave an interval and an `unknown`
result rather than a certified optimum. A feasible model is not, by itself,
an optimality certificate.

When a lexicographic objective is unbounded, later limiting optima describe
behavior along improving values of earlier objectives; no finite model attains
an infinite earlier objective. Setting `:opt.optsmt_lex_after_unbounded` to
`false` leaves later objectives as unrestricted intervals instead.

See [Arithmetical Optimization](03%20-%20arithmeticaloptimization.md#nonlinear-real-objectives)
for exact algebraic and open-bound examples, and
[Combining Objectives](05%20-%20combiningobjectives.md#nonlinear-pareto-fronts)
for a finite nonlinear Pareto front. These features concern polynomial real
arithmetic; they are not a completeness guarantee for mixed-integer, quantified,
or transcendental optimization.

## Weighted Max-SAT solvers, a portfolio

The default solver for MaxSAT problems is the MaxRes algorithm.
Several alternative solvers are available. The default solver
is chosen based on benchmarking against MaxSAT competition benchmarks, but other solver combinations, such as `wmax`, may work well for some domains.
When the objectives have weights such as 1, 2, 4, 8, 16, such that the sum of weights in every prefix is lower than the next weight, the solver
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

are rewritten internally to a problem of the form

```z3
(declare-const x Bool)
(assert-soft (not x))
(check-sat)
```
You can disable this transformation by setting

```z3 
  (set-option :opt.elim_01 false)
```

For problems that are already bit-vector or Boolean, or can be rewritten to this form, the engine uses a core solver based on a tuned SAT solver.
You can turn off the use of the SAT solver by setting:

```z3
  (set-option :opt.enable_sat false)
```


