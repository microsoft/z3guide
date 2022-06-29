---
title: Basic Commands

---

The Z3 input format is an extension of the one defined by the [SMT-LIB 2.0 standard](httpwww.smtlib.org). A Z3 script is a sequence of commands. The help command displays a list of all available commands. The command echo displays a message. Internally, Z3 maintains a stack of user provided formulas and declarations. We say these are the assertions provided by the user. The command declare-const declares a constant of a given type (aka sort). The command declare-fun declares a function. In the following example, we declared a function that receives an integer and a boolean, and returns an integer.

```z3
(echo starting Z3...)
(declare-const a Int)
(declare-fun f (Int Bool) Int)
```

The command assert adds a formula into the Z3 internal stack. We say the set of formulas in the Z3 stack is satisfiable if there is an interpretation (for the user declared constants and functions) that makes all asserted formulas true.

```z3
(declare-const a Int)
(declare-fun f (Int Bool) Int)
(assert ( a 10))
(assert ( (f a true) 100))
(check-sat)
```

The first asserted formula states that the constant a must be greater than 10. The second one states that the function f applied to a and true must return a value less than 100. The command check-sat determines whether the current formulas on the Z3 stack are satisfiable or not. If the formulas are satisfiable, Z3 returns sat. If they are not satisfiable (i.e., they are unsatisfiable), Z3 returns unsat. Z3 may also return unknown when it can't determine whether a formula is satisfiable or not.

When the command check-sat returns sat, the command get-model can be used to retrieve an interpretation that makes all formulas on the Z3 internal stack true.

```z3
(declare-const a Int)
(declare-fun f (Int Bool) Int)
(assert ( a 10))
(assert ( (f a true) 100))
(check-sat)
(get-model)
```

The interpretation is provided using definitions. For example, the definition

>  define-fun a () Int [val])

states that the value of a in the model is [val]. The definition

> (define-fun f ((x!1 Int) (x!2 Bool)) Int
>    ...
> )

is very similar to a function definition used in programming languages. In this example, x1 and x2 are the arguments of the function interpretation created by Z3. For this simple example, the definition of f is based on ite's (aka if-then-elses or conditional expressions). For example, the expression

> (ite (and (= x!1 11) (= x!2 false)) 21 0)


evaluates (returns) 21 when x!1 is equal to 11, and x!2 is equal to false. Otherwise, it returns 0.