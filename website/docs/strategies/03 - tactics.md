---
title: Tactics
sidebar_position: 3
---

Z3 comes equipped with many built-in tactics. The command (help-tactic) provides a short description of all built-in tactics.

```z3
(help-tactic)
```

Z3 comes equipped with the following tactic combinators (aka tacticals):

- `(then t s)` applies /t to the input goal and /s to every subgoal produced by /t.
- `(par-then t s)` applies /t to the input goal and /s to every subgoal produced by /t in parallel.
- `(or-else t s)` first applies /t to the given goal, if it fails then returns the result of /s applied to the given goal.
- `(par-or t s)` applies /t and /s in parallel until one of them succeed. The tractic fails if /t and /s fails.
- `(repeat t)` Keep applying the given tactic until no subgoal is modified by it.
- `(repeat t n)` Keep applying the given tactic until no subgoal is modified by it, or the number of iterations is greater than /n.
- `(try-for t ms)` Apply tactic /t to the input goal, if it does not return in /ms millisenconds, it fails.
(using-params t params) Apply the given tactic using the given parameters. `(! t params)` is a shorthand for `(using-params t params)`.

The combinators `then`, `par-then`, `or-else` and `par-or` accept arbitrary number of arguments. The following example demonstrate how to use these combinators.

```z3 
(declare-const x Real)
(declare-const y Real)
(declare-const z Real)

(assert (or (= x 0.0) (= x 1.0)))
(assert (or (= y 0.0) (= y 1.0)))
(assert (or (= z 0.0) (= z 1.0)))
(assert (> (+ x y z) 2.0))

(echo "split all...")
(apply (repeat (or-else split-clause skip)))

(echo "split at most 2...")
(apply (repeat (or-else split-clause skip) 1))

(echo "split and solve-eqs...")
(apply (then (repeat (or-else split-clause skip)) solve-eqs))
```

In the last apply command, the tactic `solve-eqs` discharges all but one goal. Note that, this tactic generates one goal: the empty goal which is trivially satisfiable (i.e., feasible)

A tactic can be used to decide whether a set of assertions has a solution (i.e., is satisfiable) or not. The command `check-sat-using` is similar to `check-sat`, but uses the given tactic instead of the Z3 default solver for solving the current set of assertions. If the tactic produces the empty goal, then check-sat-using returns sat. If the tactic produces a single goal containing `False`, then `check-sat-using` returns `unsat`. Otherwise, it returns `unknown`.

```z3
(declare-const x (_ BitVec 16))
(declare-const y (_ BitVec 16))

(assert (= (bvor x y) (_ bv13 16)))
(assert (bvslt x y))

(check-sat-using (then simplify solve-eqs bit-blast sat))
(get-model)
```

In the example above, the tactic used implements a basic bit-vector solver using equation solving, bit-blasting, and a propositional SAT solver.

In the following example, we use the combinator using-params to configure our little solver. We also include the tactic aig which tries to compress Boolean formulas using And-Inverted Graphs.

```z3
(declare-const x (_ BitVec 16))
(declare-const y (_ BitVec 16))

(assert (= (bvadd (bvmul (_ bv32 16) x) y) (_ bv13 16)))
(assert (bvslt (bvand x y) (_ bv10 16)))
(assert (bvsgt y (bvneg (_ bv100 16))))

(check-sat-using (then (using-params simplify :mul2concat true)
                       solve-eqs 
                       bit-blast 
                       aig
                       sat))
(get-model)
(get-value ((bvand x y)))
```

The tactic `smt` wraps the main solver in Z3 as a tactic.

```z3
(declare-const x Int)
(declare-const y Int)

(assert (> x (+ y 1)))

(check-sat-using smt)
(get-model)
```

Now, we show how to implement a solver for integer arithmetic using SAT. The solver is complete only for problems where every variable has a lower and upper bound.

```z3
(declare-const x Int)
(declare-const y Int)
(declare-const z Int)

(assert (and (> x 0) (< x 10)))
(assert (and (> y 0) (< y 10)))
(assert (and (> z 0) (< z 10)))
(assert (= (+ (* 3 y) (* 2 x)) z))

(check-sat-using (then (using-params simplify :arith-lhs true :som true)
                       normalize-bounds
                       lia2pb
                       pb2bv
                       bit-blast
                       sat))
(get-model)

(reset)

(declare-const x Int)
(declare-const y Int)
(declare-const z Int)

(assert (= (+ (* 3 y) (* 2 x)) z))

;; The next command will fail since x, y and z are not bounded.
(check-sat-using (then (using-params simplify :arith-lhs true :som true)
                       normalize-bounds
                       lia2pb
                       pb2bv
                       bit-blast
                       sat))
(get-info :reason-unknown)
```

The next example demonstrates how to run different strategies in parallel using the combinator `par-or`. It also shows how to run different instances of the `smt` tactic using different random seeds.

```z3
(declare-const x (_ BitVec 64))
(declare-const y (_ BitVec 64))
(declare-const z (_ BitVec 64))

(assert (bvsgt x (_ bv10 64)))
(assert (= x y))
(assert (= y (bvadd z z)))

(check-sat-using 
 (par-or
  ;; Strategy 1: use bit-blasting
  (then simplify bit-blast sat)
  ;; Strategy 2: use default solver
  smt))

(get-model)

(echo "using different random seeds...")

(check-sat-using
 (par-or
  ;; Strategy 1: using seed 1
  (using-params smt :random-seed 1)
  ;; Strategy 1: using seed 2
  (using-params smt :random-seed 2)
  ;; Strategy 1: using seed 3
  (using-params smt :random-seed 3)))

(get-model)
```




