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

The other main MaxSAT algorithms avialable are

```z3
  (set-option :opt.maxsat_engine rc2)
  (set-option :opt.maxsat_engine maxresbin)
  (set-option :opt.maxsat_engine wmax)
```

Note that our implementations of these engines do not (yet) perform as well as the default on most benchmarks we have tried. The option

```z3
  (set-option :opt.enable_sat true)
```
is made available for the pbmax solver. It causes Pseudo-Boolean constraints to be compiled into propositional logic. It uses a more efficient SAT solver if the input can be compiled directly to SAT. If not, pbmax uses a custom Pseudo-Boolean theory solver. In fact, the default behavior of the optimization engine is to detect 0-1 variables from bounds constraints and use a Pseudo-Boolean solver for these. Maximization objectives over 0-1 variables are also translated to MaxSAT form such that one of the MaxSAT engines can be used. To disable this translation use

```z3 
  (set-option :opt.elim_01 false)
```

The Pseudo-Boolean solver is in some, often pathological, cases more efficient than using a SAT solver. For example, it handles pidgeon hole problems well. Since cutting planes are expensive, they are applied infrequently. To set their frequency use:


```z3 
  (set-option :smt.pb.conflict_frequency 1)
```

The Pseudo-Boolean solver contains a few tricks. It compiles cardinality constraints and other pseudo-Boolean inequalities with small coefficients into sorting circuits. It performs this compilation on-demand, after the inequalities have been used beyond a threshold. To disable compilation use:

```z3
  (set-option :smt.pb.enable_compilation false)
```

The Pseudo-Boolean theory solver also uses dual simplex to prune infeasible branches. For constraints with many equalities and inequalities this option can be quite helpful. The option is off by default as it often incurs more overhead than benefit. To enable this option use:

```z3
  (set-option :smt.pb.enable_simplex true)
```
