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

