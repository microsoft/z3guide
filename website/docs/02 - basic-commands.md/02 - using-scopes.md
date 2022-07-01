---
title: Using Scopes

---

In some applications, we want to explore several similar problems that share several definitions and assertions. We can use the commands push and pop for doing that. Z3 maintains a global stack of declarations and assertions. The command push creates a new scope by saving the current stack size. The command pop removes any assertion or declaration performed between it and the matching push. The check-sat and get-assertions commands always operate on the content of the global stack.

In the following example, the command (assert p) signs an error because the pop command removed the declaration for p. If the last pop command is removed, then the error is corrected.

```z3
(declare-const x Int)
(declare-const y Int)
(declare-const z Int)
(push)
(assert (= (+ x y) 10))
(assert (= (+ x ( 2 y)) 20))
(check-sat)
(pop) ; remove the two assertions
(push) 
(assert (= (+ ( 3 x) y) 10))
(assert (= (+ ( 2 x) ( 2 y)) 21))
(check-sat)
(declare-const p Bool)
(pop)
(assert p) ; error, since declaration of p was removed from the stack
```
The push and pop commands can optionally receive a numeral argument as specifed by the SMT 2 language.
