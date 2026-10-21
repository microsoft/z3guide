---
title: Simplifiers
sidebar_position: 5
---

A subset of tactics can be applied in incremental mode as pre-processing
simplification to solvers.
The SMTLIB interface provides a way to specialize solvers using a
sequence of pre-processing simplification steps. 

You can list the set of available simplifiers with information about 
their parameters using the command.

```
(help-simplifier)
```

To create a specialized solver use the command `set-simplifier`.

```
(set-simplifier (then simplify solve-eqs elim-unconstrained propagate-values simplify qe-light simplify qe-light))
```

Simplifiers are a special case of tactics. Not all tactics can be used as a simplifier. 
The tactic language for composing simplifiers is also more rudimentary. The only operations are
sequential composition and parameter adjustment.
You can sequence simplifiers using `then` (or `and-then`) similar to tactics. You can also set parameters on 
simplifiers using the same syntax as for tactics. 

## Recursive and Higher-Order Definitions

:::info Z3 5.3 and later

The simplifiers in this section were added in Z3 5.3. These examples are
non-interactive because the guide's embedded solver uses Z3 5.0; run them with
Z3 5.3 or later.

:::

The named passes below can be composed with existing passes using
`set-simplifier`. Select the pipeline before asserting the formulas it should
process. Use `help-simplifier` on your executable to inspect available passes
and their parameters.

### Recursive Function Definitions

`recfun-finder` detects recursive and mutually recursive definitions encoded as
universally quantified equations of the form `(forall X (= (f X) body))`.
It registers the recognized definitions with the recursive-function machinery
and rewrites uses of the original symbols.

```lisp
(set-simplifier (then simplify recfun-finder simplify))
(declare-fun f (Int) Int)
(assert
  (forall ((x Int))
    (= (f x) (ite (<= x 0) 0 (+ 1 (f (- x 1)))))))
(assert (not (= (f 3) 3)))
(check-sat)
```

The result is `unsat`. With the default solver pipeline, the opt-in setting
`(set-option :smt.recfun_finder true)` enables the same recognition pass.
The pass does not infer an induction principle or make arbitrary quantified
axioms into recursive definitions. See
[Recursive Functions](../01%20-%20logic/07%20-%20Recursive%20Functions.md)
for the unfolding-based solver and its limitations.

### Higher-Order Preprocessing

`lambda-macros` unfolds constants defined by equalities to lambda expressions.
For example, when an array constant `twice` is equated to a lambda, inlining the
definition makes applications of `twice` available for ordinary beta reduction.

```lisp
(set-simplifier (then simplify lambda-macros simplify))
(declare-const twice (Array Int Int))
(assert (= twice (lambda ((x Int)) (* 2 x))))
(assert (not (= (select twice 3) 6)))
(check-sat)
```

The result is `unsat`. This complements ordinary function-macro recognition:
the definition here equates a constant to a function value, rather than equating
`(f x)` to a body. The pass limits inlining of widely shared definitions to
avoid duplicating large terms; its `lambda_macros_max_occs` parameter defaults
to 16 formulas.

`leibniz-instantiation` synthesizes predicate instances that can expose equality.
If every predicate that holds of `a` also holds of `b`, then choosing the
predicate `(lambda ((x A)) (= x a))` establishes `a = b`.

```lisp
(set-simplifier (then simplify leibniz-instantiation simplify))
(declare-sort A 0)
(declare-const a A)
(declare-const b A)
(assert
  (forall ((P (Array A Bool)))
    (=> (select P a) (select P b))))
(assert (distinct a b))
(check-sat)
```

The result is `unsat`. This pass adds instances of the original quantifier; it
does not introduce an unrestricted equality axiom. Its
`leibniz_max_witnesses` parameter defaults to 4, bounding the witness terms used
per candidate predicate variable.
These preprocessing passes are not complete higher-order solvers. See
[Lambdas](../01%20-%20logic/06%20-%20Lambdas.md#higher-order-matching-and-term-enumeration)
for higher-order matching and term enumeration during solving.
