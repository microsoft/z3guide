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
The default solver for unweighted MaxSAT problems (when all weights of the soft constraints are set to 1) is the Fu-Malik algorithm. The default solver used for weighted MaxSAT problems is called wmax. It uses a simple decision procedure that bounds weights. Several alternatives are available and they may scale better for your application. For weighted MaxSAT problems you can select the following engines wpm2 (use an implementation of the WPM2 algorithm by Ans�tegui et.al.), bcd2 (use an implementation of the bincd algorithm by Heras et.al.), pbmax (refine bounds iteratively based on Pseudo-Boolean inequalities), hsmax (use separation into solving hitting sets by Davies et.al.). To select the hsmax engine, set the option

```z3
  (set-option :opt.wmaxsat_engine hsmax)
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
