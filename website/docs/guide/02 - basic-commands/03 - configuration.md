---
title: Configuration

---

The command set-option is used to configure Z3. Z3 has several options to control its behavior. Some of these options (e.g., produce-proofs) can only be set before any declaration or assertion. We use the reset command to erase all assertions and declarations. After the reset command, all configuration options can be set.

```z3
(set-option :print-success true) 
(set-option :produce-unsat-cores true) ; enable generation of unsat cores
(set-option :produce-models true) ; enable model generation
(set-option :produce-proofs true) ; enable proof generation
(declare-const x Int)
(set-option :produce-proofs false) ; error, cannot change this option after a declaration or assertion
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
(simplify (< (+ x y) (+ x y)) som true) ; put all expressions in sum-of-monomials form.
(simplify (= x (+ y 2)) arith-lhs true)
(simplify (= (store (store a 1 2) 4 3)
             (store (store a 4 3) 1 2)))
(simplify (= (store (store a 1 2) 4 3)
             (store (store a 4 3) 1 2))
          sort-store true)
(help simplify)
```

The define-sort command defines a new sort symbol that is an abbreviation for a sort expression. The new sort symbol can be parameterized, in which case the names of the parameters are specified in the command and the sort expression uses the sort parameters. The form of the command is this

> (define-sort [symbol] ([symbol]+) [sort])

The following example defines several abbreviations for sort expressions.

```z3
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