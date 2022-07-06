---
title: Probes
sidebar_position: 4
---

Probes (aka formula measures) are evaluated over goals. Boolean expressions over them can be built using relational operators and Boolean connectives. The tactic `(fail-if cond)` fails if the given goal does not satisfy the condition `cond`. Many numeric and Boolean measures are available in Z3. The command `(help-tactic)` provides the list of all built-in probes.

```z3 no-build
(help-tactic)
```

In the following example, we build a simple tactic using `fail-if`. It also shows that `echo` can be used to display the value returned by a probe. The `echo` tactic is mainly used for debugging purposes.

```z3
(declare-const x Real)
(declare-const y Real)
(declare-const z Real)

(push)
(assert (> (+ x y z) 0.0))

(apply (echo "num consts: " num-consts))

(apply (fail-if (> num-consts 2)))
(pop)

(echo "trying again...")
(assert (> (+ x y) 0.0))
(apply (fail-if (> num-consts 2)))
```

Z3 also provides the combinator (tactical) `(if p t1 t2)` which is a shorthand for:

```
(or-else (then (fail-if (not p)) t1) t2)
```

The combinator `(when p t)` is a shorthand for:

```
(if p t skip)
```

The tactic skip just returns the input goal. The following example demonstrates how to use the if combinator.

```z3
(declare-const x Real)
(declare-const y Real)
(declare-const z Real)

(assert (>= (- (^ x 2.0) (^ y 2.0)) 0.0))

(apply (if (> num-consts 2) simplify factor))

(assert (>= (+ x x y z) 0.0))

(apply (if (> num-consts 2) simplify factor))
```



