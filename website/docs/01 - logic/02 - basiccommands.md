---
title: Basic Commands
sidebar_position: 2
---

The Z3 input format is an extension of the one defined by the [SMT-LIB format](http://www.smtlib.org). A Z3 script is a sequence of commands. The help command displays a list of all available commands. The command echo displays a message. Internally, Z3 maintains a stack of user provided formulas and declarations. We say these are the assertions provided by the user. The command declare-const declares a constant of a given type (aka sort). The command declare-fun declares a function. In the following example, we declared a function that receives an integer and a Boolean and returns an integer.

```z3
(echo "starting Z3...")
(declare-const a Int)
(declare-fun f (Int Bool) Int)
```

The command assert adds a formula into the Z3 internal stack. We say the set of formulas in the Z3 stack is satisfiable if there is an interpretation (for the user declared constants and functions) that makes all asserted formulas true.

```z3
(declare-const a Int)
(declare-fun f (Int Bool) Int)
(assert (< a 10))
(assert (< (f a true) 100))
(check-sat)
```

The first asserted formula states that the constant a must be greater than 10. The second one states that the function f applied to a and true must return a value less than 100. The command check-sat determines whether the current formulas on the Z3 stack are satisfiable or not. If the formulas are satisfiable, Z3 returns sat. If they are not satisfiable (i.e., they are unsatisfiable), Z3 returns unsat. Z3 may also return unknown when it can't determine whether a formula is satisfiable or not.

When the command check-sat returns sat, the command get-model can be used to retrieve an interpretation that makes all formulas on the Z3 internal stack true.

```z3
(declare-const a Int)
(declare-fun f (Int Bool) Int)
(assert (< a 10))
(assert (< (f a true) 100))
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

## Using Scopes
In some applications, we want to explore several similar problems that share several definitions and assertions. We can use the commands push and pop for doing that. Z3 maintains a global stack of declarations and assertions. The command push creates a new scope by saving the current stack size. The command pop removes any assertion or declaration performed between it and the matching push. The check-sat and get-assertions commands always operate on the content of the global stack.

In the following example, the command (assert p) signs an error because the pop command removed the declaration for p. If the last pop command is removed, then the error is corrected.

```z3 ignore-errors
(declare-const x Int)
(declare-const y Int)
(declare-const z Int)
(push)
(assert (= (+ x y) 10))
(assert (= (+ x (* 2 y)) 20))
(check-sat)
(pop) ; remove the two assertions
(push) 
(assert (= (+ (* 3 x) y) 10))
(assert (= (+ (* 2 x) (* 2 y)) 21))
(check-sat)
(declare-const p Bool)
(pop)
(assert p) ; error, since declaration of p was removed from the stack
```
The push and pop commands can optionally receive a numeral argument as specified by the SMT 2 language.

## Configuration 
The command set-option is used to configure Z3. Z3 has several options to control its behavior. Some of these options (e.g., produce-proofs) can only be set before any declaration or assertion. We use the reset command to erase all assertions and declarations. After the reset command, all configuration options can be set.

```z3 ignore-errors
(set-option :print-success true)
(set-option :produce-unsat-cores true) ; enable generation of unsat cores
(set-option :produce-models true) ; enable model generation
(set-option :produce-proofs true) ; enable proof generation
(declare-const x Int)
(assert (= x 1))
(set-option :produce-proofs false) ; error, cannot change this option after an assertion
(echo "before reset")
(reset)
(set-option :produce-proofs false) ; ok
```

The option print-success true is particularly useful when Z3 is being controlled by another application using pipes. In this mode, commands, that otherwise would not print any output, will print success.

### Additional commands

The command (display t) just applies the Z3 pretty printer to the given expression. The command (simplify t) displays a possibly simpler expression equivalent to t. This command accepts many different options, (help simplify) will display all available options.

```z3
(declare-const a (Array Int Int))
(declare-const x Int)
(declare-const y Int)
(display (+ x 2 x 1))
(simplify (+ x 2 x 1))
(simplify (< (+ x y) (+ x y)))
(simplify (< (+ x y) (+ x y)) :som true) ; put all expressions in sum-of-monomials form.
(simplify (= x (+ y 2)) :arith-lhs true)
(simplify (= (store (store a 1 2) 4 3)
             (store (store a 4 3) 1 2)))
(simplify (= (store (store a 1 2) 4 3)
             (store (store a 4 3) 1 2))
          :sort-store true)
(help simplify)
```

The define-sort command defines a new sort symbol that is an abbreviation for a sort expression. The new sort symbol can be parameterized, in which case the names of the parameters are specified in the command and the sort expression uses the sort parameters. The form of the command is this

> (define-sort [symbol] ([symbol]+) [sort])

The following example defines several abbreviations for sort expressions.

```z2 no-build
(define-sort IList () (List Int))
(define-sort List-Set (T) (Array (List T) Bool))
(define-sort I () Int)

(declare-const s1 (Set I))
(declare-const s2 (List-Set Int))
(declare-const a I)
(declare-const l IList)

(assert (= (select s1 a) true))
(assert (= (select s2 l) false))
(check-sat)
(get-model)
```
