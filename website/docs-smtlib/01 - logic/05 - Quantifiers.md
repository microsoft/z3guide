---
title: Quantifiers
sidebar_position: 5
---
Z3 is a _decision procedure_ for the combination of the previous quantifier-free theories. That is, it can answer whether a quantifier-free formula, modulo the theories referenced by the formula, is satisfiable or whether it is unsatisfiable. Z3 also accepts and can work with formulas that use quantifiers. It is no longer a decision procedure for such formulas in general (and for good reasons, as there can be no decision procedure for first-order logic).

Nevertheless, Z3 is often able to handle formulas involving quantifiers. It uses several approaches to handle quantifiers. The most prolific approach is using _pattern-based_ quantifier instantiation. This approach allows instantiating quantified formulas with ground terms that appear in the current search context based on _pattern annotations_ on quantifiers. The pattern-based instantiation method is quite effective, even though it is inherently incomplete. 

Z3 also contains a model-based quantifier instantiation component that uses a model construction to find good terms to instantiate quantifiers with; and Z3 also handles many decidable fragments.

### Modeling with Quantifiers

Suppose we want to model an object oriented type system with single inheritance. We would need a predicate for sub-typing. Sub-typing should be a partial order, and respect single inheritance. For some built-in type constructors, such as for array-of, sub-typing should be monotone.

```z3
(declare-sort Type)
(declare-fun subtype (Type Type) Bool)
(declare-fun array-of (Type) Type)
(assert (forall ((x Type)) (subtype x x)))
(assert (forall ((x Type) (y Type) (z Type))
          (= (and (subtype x y) (subtype y z)) 
              (subtype x z)))) 
(assert (forall ((x Type) (y Type))
          (= (and (subtype x y) (subtype y x)) 
              (= x y))))
(assert (forall ((x Type) (y Type) (z Type))
          (= (and (subtype x y) (subtype x z)) 
              (or (subtype y z) (subtype z y))))) 
(assert (forall ((x Type) (y Type))
          (= (subtype x y) 
              (subtype (array-of x) (array-of y)))))
(declare-const root-type Type)
(assert (forall ((x Type)) (subtype x root-type)))
(check-sat)
```



Raymond Smullyan's puzzles are famous logical brain teasers. You can use predicate logic to encode and solve these.
On a fictional island, all inhabitants are either knights, who always tell the truth, or knaves, who always lie.
John and Bill are residents of the island of knights and knaves.

```z3
(declare-sort Inhabitant)
(declare-datatype Statement (truth falsity))
(declare-datatype Identity (Knave Knight))
(declare-const John Inhabitant)
(declare-const Bill Inhabitant)
(declare-fun Is (Inhabitant Identity) Statement)
(declare-fun Says (Inhabitant Statement) Bool)
(declare-fun Holds (Statement) Bool)
(assert (Holds truth))
(assert (not (Holds falsity)))
(assert (forall ((x Inhabitant)) (xor (Holds (Is x Knave)) (Holds (Is x Knight)))))
(assert (forall ((x Inhabitant) (y Statement)) (=> (Holds (Is x Knave)) (Says x y) (not (Holds y)))))
(assert (forall ((x Inhabitant) (y Statement)) (=> (Holds (Is x Knight)) (Says x y) (Holds y))))

; Question 1
; John says: We are both knaves
; Who is what?

(push)
(declare-fun And (Statement Statement) Statement)
(assert (forall ((x Statement) (y Statement)) (= (Holds (And x y)) (and (Holds x) (Holds y)))))
(assert (Says John (And (Is John Knave) (Is Bill Knave))))
(check-sat)
(eval (Holds (Is John Knight)))
(eval (Holds (Is Bill Knight)))
(pop)


; Question 2
; John: If (and only if) Bill is a knave, then I am a knave.
; Bill: We are of different kinds.
; Who is who?

(push)

(declare-fun Not (Statement) Statement)
(declare-fun Iff (Statement Statement) Statement)
(assert (forall ((x Statement)) (= (Holds (Not x)) (not (Holds x)))))
(assert (forall ((x Statement) (y Statement)) (= (Holds (Iff x y)) (= (Holds x) (Holds y)))))

(assert (Says John (Iff (Is Bill Knave) (Is John Knave))))
(assert (Says Bill (Not (Iff (Is Bill Knave) (Is John Knave)))))
(check-sat)
(eval (Holds (Is John Knight)))
(eval (Holds (Is Bill Knight)))
(pop)

```

Another related Smullyan puzzle asks
John and Bill are standing at a fork in the road. You know that one of
them is a knight and the other a knave, but you don't know which.
You also know that one road leads to Death, and the other leads to Freedom.
By asking one yes/no question, can you determine the road to Freedom?
We leave solving this puzzle as an exercise. You can either provide a direct answer and check it,
or create a search space of abstract syntax, create an interpreter for the syntax and have z3
search for the question.


### Patterns

The Stanford Pascal verifier and the subsequent Simplify theorem prover pioneered the use of pattern-based quantifier instantiation. The basic idea behind pattern-based quantifier instantiation is in a sense straight-forward Annotate a quantified formula using a _pattern_ that contains all the bound variables. So a pattern is an expression (that does not contain binding operations, such as quantifiers) that contains variables bound by a quantifier. Then instantiate the quantifier whenever a term that matches the pattern is created during search. This is a conceptually easy starting point, but there are several subtleties that are important.

In the following example, the first two options make sure that Model-based quantifier instantiation and saturation engines are disabled. We also annotate the quantified formula with the pattern (f (g x)). Since there is no ground instance of this pattern, the quantifier is not instantiated, and Z3 fails to show that the formula is unsatisfiable.

```z3
(set-option :smt.auto-config false) ; disable automatic self configuration
(set-option :smt.mbqi false) ; disable model-based quantifier instantiation
(declare-fun f (Int) Int)
(declare-fun g (Int) Int)
(declare-const a Int)
(declare-const b Int)
(declare-const c Int)
(assert (forall ((x Int))
                (! (= (f (g x)) x)
                   :pattern ((f (g x))))))
(assert (= (g a) c))
(assert (= (g b) c))
(assert (not (= a b)))
(check-sat)
```

When the more permissive pattern (g x) is used. Z3 proves the formula to be unsatisfiable. More restrictive patterns minimize the number of instantiations (and potentially improve performance), but they may also make Z3 less complete.

```z3
(set-option :smt.auto-config false) ; disable automatic self configuration
(set-option :smt.mbqi false) ; disable model-based quantifier instantiation
(declare-fun f (Int) Int)
(declare-fun g (Int) Int)
(declare-const a Int)
(declare-const b Int)
(declare-const c Int)
(assert (forall ((x Int))
                (! (= (f (g x)) x)
                   :pattern ((g x)))))
(assert (= (g a) c))
(assert (= (g b) c))
(assert (not (= a b)))
(check-sat)
```

Some patterns may also create long instantiation chains. Consider the following assertion.

> (assert (forall (x Type) (y Type) 
>  (! (= (subtype x y) (subtype (array-of x) (array-of y)))
>     :pattern ((subtype x y))
>  ))


The axiom gets instantiated whenever there is some ground term of the form (subtype s t). The instantiation causes a fresh ground term (subtype (array-of s) (array-of t)), which enables a new instantiation. This undesirable situation is called a matching loop. Z3 uses many heuristics to break matching loops.

Before elaborating on the subtleties, we should address an important first question. What defines the terms that are created during search In the context of most SMT solvers, and of the Simplify theorem prover, terms exist as part of the input formula, they are of course also created by instantiating quantifiers, but terms are also implicitly created when equalities are asserted. The last point means that terms are considered up to congruence and pattern matching takes place modulo ground equalities. We call the matching problem E-matching. For example, if we have the following equalities

```z3
(set-option :smt.auto-config false) ; disable automatic self configuration
(set-option :smt.mbqi false) ; disable model-based quantifier instantiation
(declare-fun f (Int) Int)
(declare-fun g (Int) Int)
(declare-const a Int)
(declare-const b Int)
(declare-const c Int)
(assert (forall ((x Int))
                (! (= (f (g x)) x)
                   :pattern ((f (g x))))))
(assert (= a (g b)))
(assert (= b c))
(assert (not (= (f a) c)))
(check-sat)
```

The terms (f a) and (f (g b)) are equal modulo the equalities. The pattern (f (g x)) can be matched and x bound to b (and the equality (= (f (g b)) b) is deduced.

While E-matching is an NP-complete problem, the main sources of overhead in larger verification problems comes from matching thousands of patterns in the context of an evolving set of terms and equalities. Z3 integrates an efficient E-matching engine using term indexing techniques.

### Multi-patterns

In some cases, there is no pattern that contains all bound variables and does not contain interpreted symbols. In these cases, we use multi-patterns. In the following example, the quantified formula states that f is injective. This quantified formula is annotated with the multi-pattern (f x) (f y)

```z3
(declare-sort A)
(declare-sort B)
(declare-fun f (A) B)
(assert (forall ((x A) (y A))
                (! (= (= (f x) (f y)) (= x y))
                   :pattern ((f x) (f y))
                   )))
(declare-const a1 A)
(declare-const a2 A)
(declare-const b B)
(assert (not (= a1 a2)))
(assert (= (f a1) b))
(assert (= (f a2) b))
(check-sat)
```

The quantified formula is instantiated for every pair of occurrences of f. A simple trick allows formulating injectivity of f in such a way that only a linear number of instantiations is required. The trick is to realize that f is injective if and only if it has a partial inverse.

```z3
(declare-sort A)
(declare-sort B)
(declare-fun f (A) B)
(declare-fun f-inv (B) A)
(assert (forall ((x A))
                (! (= (f-inv (f x)) x)
                   :pattern ((f x))
                   )))
(declare-const a1 A)
(declare-const a2 A)
(declare-const b B)
(assert (not (= a1 a2)))
(assert (= (f a1) b))
(assert (= (f a2) b))
(check-sat)
```

### No patterns

The annotation no-pattern can be used to instrument Z3 not to use a certain sub-expression as a pattern. The pattern inference engine may otherwise choose arbitrary sub-expressions as patterns to direct quantifier instantiation.

### Model-based Quantifier Instantiation

The model-based quantifier instantiation (MBQI) is essentially a counter-example based refinement loop, where candidate models are built and checked. When the model checking step fails, it creates new quantifier instantiations. The models are returned as simple functional programs. In the following example, the model provides an interpretation for function f and constants a and b. One can easily check that the returned model does indeed satisfy the quantifier.

```z3
(set-option :smt.mbqi true)
(declare-fun f (Int Int) Int)
(declare-const a Int)
(declare-const b Int)

(assert (forall ((x Int)) (= (f x x) (+ x a))))

(assert (< (f a b) a))
(assert (< a 0))
(check-sat)
(get-model)

(echo "evaluating (f (+ a 10) 20)...")
(eval (f (+ a 10) 20))
```

The command eval evaluates an expression in the last model produced by Z3. It is essentially executing the function program produced by Z3.

MBQI is a decision procedure for several useful fragments. It may find models even for formulas that are not in any of these fragments. We describe some of these fragments.

#### Effectively Propositional

The effectively propositional class of formulas (aka The Bernays-Schonfinkel class) is a decidable fragment of first-order logic formulas. It corresponds to formulas which, when written in prenex normal form contain only constants, universal quantifiers, and functions that return Boolean values (aka predicates).

Problems arising from program verification often involve establishing facts of quantifier-free formulas, but the facts themselves use relations and functions that are conveniently axiomatized using a background theory that uses quantified formulas. One set of examples of this situation comprise of formulas involving partial-orders. The following example axiomatizes a subtype partial order relation that has the tree property. That is, if x and y are subtypes of z, then x is a subtype of y or y is a subtype of x. The option (set-option :model.compact true) instructs Z3 to eliminate trivial redundancies from the generated model. In this example, Z3 also creates a finite interpretation for the uninterpreted sort T.

```z3
(set-option :smt.mbqi true)
(set-option :model.compact true)

;; T is an uninterpreted sort
(declare-sort T) 

(declare-fun subtype (T T) Bool)

;; subtype is reflexive
(assert (forall ((x T)) (subtype x x)))

;; subtype is antisymmetric
(assert (forall ((x T) (y T)) (=> (and (subtype x y)
                                       (subtype y x))
                                       (= x y))))
;; subtype is transitive
(assert (forall ((x T) (y T) (z T)) (=> (and (subtype x y)
                                             (subtype y z))
                                             (subtype x z))))
;; subtype has the tree-property
(assert (forall ((x T) (y T) (z T)) (=> (and (subtype x z)
                                             (subtype y z))
                                        (or (subtype x y)
                                            (subtype y x)))))

;; now we define a simple example using the axiomatization above.
(declare-const obj-type T)
(declare-const int-type T)
(declare-const real-type T)
(declare-const complex-type T)
(declare-const string-type T)

;; we have an additional axiom: every type is a subtype of obj-type
(assert (forall ((x T)) (subtype x obj-type)))

(assert (subtype int-type real-type))
(assert (subtype real-type complex-type))
(assert (not (subtype string-type real-type)))
(declare-const root-type T)
(assert (subtype obj-type root-type))
(check-sat)
(get-model)

(echo "Is int-type a subtype of complex-type?")
(eval (subtype int-type complex-type))
(echo "Is int-type = obj-type?")
(eval (= int-type obj-type))
(echo "Is int-type a subtype of root-type?")
(eval (subtype int-type root-type))
(echo "Is root-type = obj-type?")
(eval (= root-type obj-type))
```

Note that it uses two auxiliary functions (subtype!25 and k!24) that were not part of your formula. They are auxiliary definitions created by Z3 during the model construction procedure. We can also ask questions by using the eval command. For example,

> (eval (subtype int-type complex-type))

executes (evaluates) the given expression using the produced functional program (model).

Constraints over sets (Boolean Algebras) can be encoded into this fragment by treating sets as unary predicates and lifting equalities between sets as formula equivalence.

```z3
(set-option :smt.mbqi true)
(set-option :model.compact true)

;; A, B, C and D are sets of Int
(declare-fun A (Int) Bool)
(declare-fun B (Int) Bool)
(declare-fun C (Int) Bool)
(declare-fun D (Int) Bool)

;; A union B is a subset of C
(assert (forall ((x Int)) (=> (or (A x) (B x)) (C x))))

;; B minus A is not empty
;; That is, there exists an integer e that is B but not in A
(declare-const e Int)
(assert (and (B e) (not (A e))))

;; D is equal to C
(assert (forall ((x Int)) (iff (D x) (C x))))

;; 0, 1 and 2 are in B
(assert (B 0))
(assert (B 1))
(assert (B 2))

(check-sat)
(get-model)
(echo "Is e an element of D?")
(eval (D e))

(echo "Now proving that A is a strict subset of D")
;; This is true if the negation is unsatisfiable
(push)
(assert (not (and 
              ;; A is a subset of D
              (forall ((x Int)) (=> (A x) (D x)))
              ;; but, D has an element that is not in A.
              (exists ((x Int)) (and (D x) (not (A x)))))))
(check-sat)
(pop)
```

#### Stratified Sorts Fragment

The stratified sorts fragment is another decidable fragment of many sorted first-order logic formulas. It corresponds to formulas which, when written in prenex normal form, there is a function level from sorts to naturals, and for every function

> declare-fun f (S_1 ... S_n) R)
>
> level(R)  level(S_i).

#### Array Property Fragment

The array property fragment can encode properties about uni-dimensional, and is strong enough to say an array is sorted. More information about this fragment can be found in the paper [What's Decidable About Arrays](httpacademic.research.microsoft.comPaper1843442.aspx).

(set-option :smt.mbqi true)
(set-option :model.compact true)

```z3
(set-option :smt.mbqi true)
(set-option :model.compact true)

;; A0, A1, A2, A3, A4 are "arrays" from Integers to Integers.
(declare-fun A0 (Int) Int) (declare-fun A1 (Int) Int)
(declare-fun A2 (Int) Int) (declare-fun A3 (Int) Int)
(declare-fun A4 (Int) Int) 
(declare-const n Int) (declare-const l Int)
(declare-const k Int) (declare-const x Int)
(declare-const y Int) (declare-const w Int)
(declare-const z Int)

;; A1 = A0[k <- w]
(assert (= (A1 k) w))
(assert (forall ((x Int)) (or (= x k) (= (A1 x) (A0 x)))))

;; A2 = A1[l <- x] = A0[k <- w][l <- x]
(assert (= (A2 l) x))
(assert (forall ((x Int)) (or (= x l) (= (A2 x) (A1 x)))))

;; A3 = A0[k <- y]
(assert (= (A3 k) y))
(assert (forall ((x Int)) (or (= x k) (= (A3 x) (A0 x)))))

;; A4 = A3[l <- z] = A0[k <- y][l <- z] 
(assert (= (A3 l) z))
(assert (forall ((x Int)) (or (= x l) (= (A4 x) (A3 x)))))

(assert (and (< w x) (< x y) (< y z)))
(assert (and (< 0 k) (< k l) (< l n)))
(assert (> (- l k) 1))

;; A2 is sorted in the interval [0,n-1]
(assert (forall ((i Int) (j Int))
                (=> (and (<= 0 i) (<= i j) (<= j (- n 1)))
                    (<= (A2 i) (A2 j)))))

(check-sat)
(get-model)

;; A4 is sorted in the interval [0,n-1]
(assert (forall ((i Int) (j Int))
                (=> (and (<= 0 i) (<= i j) (<= j (- n 1)))
                    (<= (A4 i) (A4 j)))))

(check-sat)
```

#### List Fragment

The list fragment can encode properties about data-structures such as lists. For each quantified axiom q in this fragment, there is an easy way to satisfy q. More information about this fragment can be found in the paper [Data Structure Specifications via Local Equality Axioms](httpw://ww.cs.berkeley.edu/~necula/Papers/verifier-cav05.pdf).

```z3
(set-option :smt.mbqi true)
;; Ptr is the pointer sort.
(declare-sort Ptr)
;; (next p) represents p.next
;; The pointer reached by following the field next of p.
(declare-fun next  (Ptr) Ptr)
(declare-fun prev  (Ptr) Ptr)
(declare-fun state (Ptr) Int)
(declare-fun prio  (Ptr) Int)
(declare-const null Ptr)
(declare-const RUN  Int)
(declare-const SLP  Int)
(assert (distinct RUN SLP))

;; Asserting data-structure invariants in the current state.

;; p != null && p.next != null = p.next.prev = p
(assert (forall ((p Ptr))
                (= (and (not (= p null))
                         (not (= (next p) null)))
                    (= (prev (next p)) p))))

;; p != null && p.prev != null = p.prev.next = p
(assert (forall ((p Ptr))
                (= (and (not (= p null))
                         (not (= (prev p) null)))
                    (= (next (prev p)) p))))

;;  p != null && p.prev != null = p.state = p.next.state
(assert (forall ((p Ptr))
                (= (and (not (= p null))
                         (not (= (next p) null)))
                    (= (state p) (state (next p))))))

;;  p != null && p.prev != null && p.state = RUN = p.prio = p.next.prio
(assert (forall ((p Ptr))
                (= (and (not (= p null))
                         (not (= (next p) null))
                         (= (state p) RUN))
                    (= (prio p) (prio (next p))))))

;; Verifying Verification Conditions (VCs) for remove procdure
(declare-const x Ptr)
;; new-state, new-next, new-prev and new-prio represent the state 
;; of the system after executing the remove procedure.
(declare-fun new-state (Ptr) Int)
(declare-fun new-next  (Ptr) Ptr)
(declare-fun new-prev  (Ptr) Ptr)
(declare-fun new-prio  (Ptr) Int)
;; pre-conditions
(assert (not (= x null)))
(assert (not (= (prev x) null)))
(assert (= (state x) RUN))
;; updates
;; --- new-prev = prev
(assert (forall ((p Ptr)) (= (new-prev p) (prev p))))
;; --- new-prio = prio
(assert (forall ((p Ptr)) (= (new-prio p) (prio p))))
;; --- new-state = state[x - SLP]
(assert (= (new-state x) SLP))
(assert (forall ((p Ptr)) (or (= p x) (= (new-state p) (state p)))))
;; ----
;; --- new-next  = next[(prev x) - (next x); x - null]
(assert (= (new-next x) null))
(assert (= (new-next (prev x)) (next x)))
(assert (forall ((p Ptr)) (or (= p x) (= p (prev x)) (= (new-next p) (next p)))))
;; ---

;; Proving the data-structure invariants in the new state.

(push)
(assert (not (forall ((p Ptr))
                     (= (and (not (= p null))
                              (not (= (new-next p) null)))
                         (= (new-prev (new-next p)) p)))))
(check-sat)
(get-model)
(pop)
(echo "Why it is not valid")
(echo "Trying again using a fresh constant bad-ptr as an witness for the failure...")
(push)
(declare-const bad-ptr Ptr)
(assert (not (= (and (not (= bad-ptr null))
                      (not (= (new-next bad-ptr) null)))
                 (= (new-prev (new-next bad-ptr)) bad-ptr))))
(check-sat)
(get-model)
(echo "null is")
(eval null)
(echo "bad-ptr is")
(eval bad-ptr)
(echo "In the new state, bad-ptr.next is")
(eval (new-next bad-ptr))
(echo "In the new state, bad-ptr.next.prev is")
(eval (new-prev (new-next bad-ptr)))
(pop)
```

#### Essentially (Almost) Uninterpreted Fragment

The essentially almost uninterpreted fragment subsumes the previous fragments, and uses a more relaxed notion of stratification. More information about this fragment can be found in the paper [Complete instantiation for quantified formulas in Satisfiabiliby Modulo Theories.](httpresearch.microsoft.comen-usumpeopleleonardoci.pdf) The model based quantifier instantiation approach used in Z3 is also described in this paper. Stratified data-structures (such as arrays of pointers) can be encoded in this fragment.

```z3
(set-option :smt.mbqi true)
;; Ptr is the pointer sort.
(declare-sort Ptr)
;; (next p) represents p.next
;; The pointer reached by following the field "next" of p.
(declare-fun next  (Ptr) Ptr)
(declare-fun prev  (Ptr) Ptr)
(declare-fun state (Ptr) Int)
(declare-fun prio  (Ptr) Int)
(declare-const null Ptr)
(declare-const RUN  Int)
(declare-const SLP  Int)
(assert (distinct RUN SLP))

;; Asserting data-structure invariants in the current state.

;; p != null && p.next != null => p.next.prev = p
(assert (forall ((p Ptr))
                (=> (and (not (= p null))
                         (not (= (next p) null)))
                    (= (prev (next p)) p))))

;; p != null && p.prev != null => p.prev.next = p
(assert (forall ((p Ptr))
                (=> (and (not (= p null))
                         (not (= (prev p) null)))
                    (= (next (prev p)) p))))

;;  p != null && p.prev != null => p.state = p.next.state
(assert (forall ((p Ptr))
                (=> (and (not (= p null))
                         (not (= (next p) null)))
                    (= (state p) (state (next p))))))

;;  p != null && p.prev != null && p.state = RUN => p.prio >= p.next.prio
(assert (forall ((p Ptr))
                (=> (and (not (= p null))
                         (not (= (next p) null))
                         (= (state p) RUN))
                    (>= (prio p) (prio (next p))))))

;; Verifying Verification Conditions (VCs) for remove procdure
(declare-const x Ptr)
;; new-state, new-next, new-prev and new-prio represent the state 
;; of the system after executing the remove procedure.
(declare-fun new-state (Ptr) Int)
(declare-fun new-next  (Ptr) Ptr)
(declare-fun new-prev  (Ptr) Ptr)
(declare-fun new-prio  (Ptr) Int)
;; pre-conditions
(assert (not (= x null)))
(assert (not (= (prev x) null)))
(assert (= (state x) RUN))
;; updates
;; --- new-prev = prev
(assert (forall ((p Ptr)) (= (new-prev p) (prev p))))
;; --- new-prio = prio
(assert (forall ((p Ptr)) (= (new-prio p) (prio p))))
;; --- new-state = state[x -> SLP]
(assert (= (new-state x) SLP))
(assert (forall ((p Ptr)) (or (= p x) (= (new-state p) (state p)))))
;; ----
;; --- new-next  = next[(prev x) -> (next x); x -> null]
(assert (= (new-next x) null))
(assert (= (new-next (prev x)) (next x)))
(assert (forall ((p Ptr)) (or (= p x) (= p (prev x)) (= (new-next p) (next p)))))
;; ---

;; Proving the data-structure invariants in the new state.

(push)
(assert (not (forall ((p Ptr))
                     (=> (and (not (= p null))
                              (not (= (new-next p) null)))
                         (= (new-prev (new-next p)) p)))))
(check-sat)
(get-model)
(pop)
(echo "Why it is not valid?")
(echo "Trying again using a fresh constant bad-ptr as an witness for the failure...")
(push)
(declare-const bad-ptr Ptr)
(assert (not (=> (and (not (= bad-ptr null))
                      (not (= (new-next bad-ptr) null)))
                 (= (new-prev (new-next bad-ptr)) bad-ptr))))
(check-sat)
(get-model)
(echo "null is")
(eval null)
(echo "bad-ptr is")
(eval bad-ptr)
(echo "In the new state, bad-ptr.next is")
(eval (new-next bad-ptr))
(echo "In the new state, bad-ptr.next.prev is")
(eval (new-prev (new-next bad-ptr)))
(pop)

``` 

Shifts on streams (or arrays) can also be encoded.

```z3
(set-option :smt.mbqi true)
;; f an g are "streams"
(declare-fun f (Int) Int)
(declare-fun g (Int) Int)

;; the segment [a, n + a] of stream f is equal to the segment [0, n] of stream g.
(declare-const n Int)
(declare-const a Int)
(assert (forall ((x Int)) (=> (and (<= 0 x) (<= x n))
                              (= (f (+ x a)) (g x)))))

;; adding some constraints to a
(assert (> a 10))
(assert (>= (f a) 2))
(assert (<= (g 3) (- 10)))

(check-sat)
(get-model)
```
#### Quantified Bit-Vector Formulas

A quantified bit-Vector formula (QBVF) is a many sorted first-order logic formula where the sort of every variable is a bit-vector sort. The QBVF satisfiability problem, is the problem of deciding whether a QBVF is satisfiable modulo the theory of bit-vectors. This problem is decidable because every universal (existential) quantifier can be expanded into a conjunction (disjunction) of potentially exponential, but finite size. A distinguishing feature in QBVF is the support for uninterpreted function and predicate symbols. More information about this fragment can be found in the paper [Efficiently Solving Quantified Bit-Vector Formulas](httpresearch.microsoft.comen-usumpeopleleonardofmcad10.pdf).

```z3
(set-option :smt.mbqi true)
(define-sort AsciiChar () (_ BitVec 8))

(declare-fun f  (AsciiChar) AsciiChar)
(declare-fun f1 (AsciiChar) AsciiChar)
(declare-const a AsciiChar)

(assert (bvugt a #x00))
(assert (= (f1 (bvadd a #x01)) #x00))
(assert (forall ((x AsciiChar)) (or (= x (bvadd a #x01)) (= (f1 x) (f x)))))

(check-sat)
(get-model)
```
#### Conditional (and Pseudo) Macros

Quantifiers defining macros are also automatically detected by the Model Finder. In the following example, the first three quantifiers are defining f by cases.
```z3
(set-option :smt.mbqi true)
(declare-fun f (Int) Int)
(declare-fun p (Int) Bool)
(declare-fun p2 (Int) Bool)
(declare-const a Int)
(declare-const b Int)
(declare-const c Int)
(assert (forall ((x Int)) 
                (=> (not (p x)) (= (f x) (+ x 1)))))
(assert (forall ((x Int)) 
                (=> (and (p x) (not (p2 x))) (= (f x) x))))
(assert (forall ((x Int)) 
                (=> (p2 x) (= (f x) (- x 1)))))
(assert (p b))
(assert (p c))
(assert (p2 a))
(assert (> (f a) b))
(check-sat)
(get-model)
```
#### My formula is not in any of the fragments above

Even if your formula is not in any of the fragments above. Z3 may still find a model for it. For example, The following simple example is not in the fragments described above.
```z3
(set-option :smt.mbqi true)
(declare-fun n () Int)
(declare-fun a_1 () Int)
(declare-fun f (Int) Int)
(declare-fun g_1 (Int) Int)
(assert (> n 0))
(assert (forall ((i Int))
        (=> (and (<= 0 i) (<= i n))
            (and (= (f 0) 0)
                 (= (f 2) 2)
                 (<= 0 (f i))
                 (<= (f i) 2)
                 (=> (= (f i) 2) (= i n))
                 (=> (= (f i) 0)
                     (or (= (f (+ i 1)) 1) (= (f (+ i 1)) 2)))
                 (=> (= (f i) 1)
                     (or (= (f (+ i 1)) 1) (= (f (+ i 1)) 2)))
                 (= (g_1 0) 0)
                 (=> (= (f i) 0) (= (g_1 (+ i 1)) 0))
                 (=> (= (f i) 1) (= (g_1 (+ i 1)) (+ (g_1 i) 1)))
                 (=> (= (f i) 2)
                     (= (g_1 (+ i 1)) (g_1 i)))
                 (=> (= (f i) 1) (< (g_1 i) a_1))
                 (=> (= (f i) 2) 
                     (and (>= (g_1 i) a_1) (> (g_1 i) 2)))))))
(check-sat)
(get-model)

(echo "Property does not hold for n > 1")
(assert (> n 1))
(check-sat)
```
The Z3 preprocessor has many options that may improve the performance of the model finder. In the following example, macro-finder will expand quantifiers representing macros at preprocessing time.
```z3
(set-option :smt.mbqi true)
(set-option :smt.macro-finder true)

(declare-sort Action)
(declare-sort Role)
(declare-sort Permission)
(declare-sort Id)

(declare-fun Client () Role)  
(declare-fun FinAdmin () Role)
(declare-fun FinClerk () Role)
(declare-fun Manager () Role)
(declare-fun POAdmin () Role)
(declare-fun POClerk () Role)
(declare-fun action2int (Action) Int)
(declare-fun id1 () Id)
(declare-fun id2 () Id)
(declare-fun id2int (Id) Int)
(declare-fun id3 () Id)
(declare-fun id4 () Id)
(declare-fun id5 () Id)
(declare-fun id6 () Id)
(declare-fun id7 () Id)
(declare-fun p1 () Permission)
(declare-fun p2 () Permission)
(declare-fun p3 () Permission)
(declare-fun p4 () Permission)
(declare-fun p5 () Permission)
(declare-fun p6 () Permission)
(declare-fun permission2int (Permission) Int)
(declare-fun role2int (Role) Int)
(declare-fun role_level (Role) Int)
(declare-fun t1_receive () Action)
(declare-fun t2_invoke () Action)
(declare-fun t3_split () Action)
(declare-fun t4_join () Action)
(declare-fun t5_invoke () Action)
(declare-fun t6_invoke () Action)
(declare-fun t7_invokeO () Action)
(declare-fun t8_invokeI () Action)
(declare-fun t9_invoke () Action)
(declare-fun in_creator_ctrPay_0 () Int)
(declare-fun in_creator_ctrPay_1 () Int)
(declare-fun in_customer_crtPO_0 () Int)
(declare-fun in_customer_crtPO_1 () Int)
(declare-fun out_approverPOPayment_apprPay_0 () Int)
(declare-fun out_approverPOPayment_apprPay_1 () Int)
(declare-fun out_approverPO_apprPO_0 () Int)
(declare-fun out_approverPO_apprPO_1 () Int)
(declare-fun out_creator_ctrPay_0 () Int)
(declare-fun out_creator_ctrPay_1 () Int)
(declare-fun out_signerGRN_ctrsignGRN_0 () Int)
(declare-fun out_signerGRN_ctrsignGRN_1 () Int)
(declare-fun out_signerGRN_signGRN_0 () Int)
(declare-fun out_signerGRN_signGRN_1 () Int)
(declare-fun p10_final_0 () Int)
(declare-fun p10_final_1 () Int)
(declare-fun p11_final_0 () Int)
(declare-fun p11_final_1 () Int)
(declare-fun p1_final_0 () Int)
(declare-fun p1_final_1 () Int)
(declare-fun p2_final_0 () Int)
(declare-fun p2_final_1 () Int)
(declare-fun p3_running_0 () Int)
(declare-fun p3_running_1 () Int)
(declare-fun p4_final_0 () Int)
(declare-fun p4_final_1 () Int)
(declare-fun p5_final_0 () Int)
(declare-fun p5_final_1 () Int)
(declare-fun p6_initial_0 () Int)
(declare-fun p6_initial_1 () Int)
(declare-fun p7_final_0 () Int)
(declare-fun p7_final_1 () Int)
(declare-fun p8_initial_0 () Int)
(declare-fun p8_initial_1 () Int)
(declare-fun p9_initial_0 () Int)
(declare-fun p9_initial_1 () Int)


;PREDICATES

(declare-fun has_permission (Id Action) Bool)
(declare-fun permission (Permission Action) Bool)
(declare-fun role (Role) Bool)
(declare-fun role_le (Role Role) Bool)
(declare-fun role_permission_assign (Role Permission) Bool)
(declare-fun user (Id) Bool)
(declare-fun user_role_assign (Id Role) Bool)
(declare-fun can_exec_0 (Id Action) Bool)
(declare-fun can_exec_1 (Id Action) Bool)
(declare-fun executed_0 (Id Action) Bool) 
(declare-fun executed_1 (Id Action) Bool)
(declare-fun initial_pm_0 () Bool)
(declare-fun initial_wf_0 () Bool)
(declare-fun t1_receive_0_1 (Id) Bool)
(declare-fun t2_invoke_0_1 (Id) Bool)
(declare-fun t3_split_0_1 (Id) Bool)
(declare-fun t4_join_0_1 (Id) Bool)
(declare-fun t5_invoke_0_1 (Id) Bool)
(declare-fun t6_invoke_0_1 (Id) Bool)
(declare-fun t7_invokeO_0_1 (Id) Bool)
(declare-fun t8_invokeI_0_1 (Id) Bool)
(declare-fun t9_invoke_0_1 (Id) Bool)

(assert
(forall ((?U Action) (?V Action)) (implies (= (action2int ?U) (action2int ?V)) (= ?U ?V))))
 

;assumption 2
(assert
(forall ((?U Action)) (and (<= 1 (action2int ?U)) (<= (action2int ?U) 9))))
 

;assumption 3
(assert
(= (action2int t1_receive) 1))

;assumption 4
(assert
(= (action2int t2_invoke) 2))

;assumption 5
(assert
(= (action2int t3_split) 3))

;assumption 6
(assert
(= (action2int t4_join) 4))

;assumption 7
(assert
(= (action2int t5_invoke) 5))

;assumption 8
(assert
(= (action2int t6_invoke) 6))

;assumption 9
(assert
(= (action2int t7_invokeO) 7))

;assumption 10
(assert
(= (action2int t8_invokeI) 8))

;assumption 11
(assert
(= (action2int t9_invoke) 9))

;assumption 12
(assert
(forall ((?U Role) (?V Role)) (implies (= (role2int ?U) (role2int ?V)) (= ?U ?V))))
 

;assumption 13
(assert
(forall ((?U Role)) (and (<= 1 (role2int ?U)) (<= (role2int ?U) 6))))
 

;assumption 14
(assert
(= (role2int Manager) 1))

;assumption 15
(assert
(= (role2int FinAdmin) 2))

;assumption 16
(assert
(= (role2int FinClerk) 3))

;assumption 17
(assert
(= (role2int POAdmin) 4))

;assumption 18
(assert
(= (role2int POClerk) 5))

;assumption 19
(assert
(= (role2int Client) 6))

;assumption 20
(assert
(forall ((?U Permission) (?V Permission)) (implies (= (permission2int ?U) (permission2int ?V)) (= ?U ?V))))
 

;assumption 21
(assert
(forall ((?U Permission)) (and (<= 1 (permission2int ?U)) (<= (permission2int ?U) 6))))
 

;assumption 22
(assert
(= (permission2int p1) 1))

;assumption 23
(assert
(= (permission2int p2) 2))

;assumption 24
(assert
(= (permission2int p3) 3))

;assumption 25
(assert
(= (permission2int p4) 4))

;assumption 26
(assert
(= (permission2int p5) 5))

;assumption 27
(assert
(= (permission2int p6) 6))

;assumption 28
(assert
(forall ((?U Permission) (?V Action)) (iff (permission ?U ?V) (or (and (= ?U p1) (= ?V t2_invoke)) (or (and (= ?U p2) (= ?V t5_invoke)) (or (and (= ?U p3) (= ?V t6_invoke)) (or (and (= ?U p4) (or (= ?V t7_invokeO) (= ?V t8_invokeI))) (or (and (= ?U p5) (= ?V t9_invoke)) (and (= ?U p6) (= ?V t1_receive))))))))))
 

;assumption 29
(assert
(forall ((?U Id) (?V Role)) (iff (user_role_assign ?U ?V) (or (and (= ?U id7) (= ?V Manager)) (or (and (= ?U id1) (= ?V Manager)) (or (and (= ?U id2) (= ?V FinAdmin)) (or (and (= ?U id3) (= ?V FinClerk)) (or (and (= ?U id4) (= ?V POAdmin)) (or (and (= ?U id5) (= ?V POClerk)) (and (= ?U id6) (= ?V Client)))))))))))
 

;assumption 30
(assert
(forall ((?U Role) (?V Permission)) (iff (role_permission_assign ?U ?V) (or (and (= ?U POClerk) (= ?V p3)) (or (and (= ?U FinClerk) (= ?V p4)) (or (and (= ?U POAdmin) (or (= ?V p1) (= ?V p3))) (or (and (= ?U FinAdmin) (or (= ?V p5) (= ?V p4))) (or (and (= ?U Client) (or (= ?V p6) (= ?V p2))) (and (= ?U Manager) (or (= ?V p1) (or (= ?V p3) (or (= ?V p4) (= ?V p5)))))))))))))
 

;assumption 31
(assert
(forall ((?U Id) (?V Action)) (iff (has_permission ?U ?V) (or (and (user_role_assign ?U Manager) (and (role_permission_assign Manager p1) (permission p1 ?V))) (or (and (user_role_assign ?U Manager) (and (role_permission_assign Manager p2) (permission p2 ?V))) (or (and (user_role_assign ?U Manager) (and (role_permission_assign Manager p3) (permission p3 ?V))) (or (and (user_role_assign ?U Manager) (and (role_permission_assign Manager p4) (permission p4 ?V))) (or (and (user_role_assign ?U Manager) (and (role_permission_assign Manager p5) (permission p5 ?V))) (or (and (user_role_assign ?U Manager) (and (role_permission_assign Manager p6) (permission p6 ?V))) (or (and (user_role_assign ?U POClerk) (and (role_permission_assign POClerk p1) (permission p1 ?V))) (or (and (user_role_assign ?U POClerk) (and (role_permission_assign POClerk p2) (permission p2 ?V))) (or (and (user_role_assign ?U POClerk) (and (role_permission_assign POClerk p3) (permission p3 ?V))) (or (and (user_role_assign ?U POClerk) (and (role_permission_assign POClerk p4) (permission p4 ?V))) (or (and (user_role_assign ?U POClerk) (and (role_permission_assign POClerk p5) (permission p5 ?V))) (or (and (user_role_assign ?U POClerk) (and (role_permission_assign POClerk p6) (permission p6 ?V))) (or (and (user_role_assign ?U FinClerk) (and (role_permission_assign FinClerk p1) (permission p1 ?V))) (or (and (user_role_assign ?U FinClerk) (and (role_permission_assign FinClerk p2) (permission p2 ?V))) (or (and (user_role_assign ?U FinClerk) (and (role_permission_assign FinClerk p3) (permission p3 ?V))) (or (and (user_role_assign ?U FinClerk) (and (role_permission_assign FinClerk p4) (permission p4 ?V))) (or (and (user_role_assign ?U FinClerk) (and (role_permission_assign FinClerk p5) (permission p5 ?V))) (or (and (user_role_assign ?U FinClerk) (and (role_permission_assign FinClerk p6) (permission p6 ?V))) (or (and (user_role_assign ?U FinAdmin) (and (role_permission_assign FinAdmin p1) (permission p1 ?V))) (or (and (user_role_assign ?U FinAdmin) (and (role_permission_assign FinAdmin p2) (permission p2 ?V))) (or (and (user_role_assign ?U FinAdmin) (and (role_permission_assign FinAdmin p3) (permission p3 ?V))) (or (and (user_role_assign ?U FinAdmin) (and (role_permission_assign FinAdmin p4) (permission p4 ?V))) (or (and (user_role_assign ?U FinAdmin) (and (role_permission_assign FinAdmin p5) (permission p5 ?V))) (or (and (user_role_assign ?U FinAdmin) (and (role_permission_assign FinAdmin p6) (permission p6 ?V))) (or (and (user_role_assign ?U POAdmin) (and (role_permission_assign POAdmin p1) (permission p1 ?V))) (or (and (user_role_assign ?U POAdmin) (and (role_permission_assign POAdmin p2) (permission p2 ?V))) (or (and (user_role_assign ?U POAdmin) (and (role_permission_assign POAdmin p3) (permission p3 ?V))) (or (and (user_role_assign ?U POAdmin) (and (role_permission_assign POAdmin p4) (permission p4 ?V))) (or (and (user_role_assign ?U POAdmin) (and (role_permission_assign POAdmin p5) (permission p5 ?V))) (or (and (user_role_assign ?U POAdmin) (and (role_permission_assign POAdmin p6) (permission p6 ?V))) (or (and (user_role_assign ?U Client) (and (role_permission_assign Client p1) (permission p1 ?V))) (or (and (user_role_assign ?U Client) (and (role_permission_assign Client p2) (permission p2 ?V))) (or (and (user_role_assign ?U Client) (and (role_permission_assign Client p3) (permission p3 ?V))) (or (and (user_role_assign ?U Client) (and (role_permission_assign Client p4) (permission p4 ?V))) (or (and (user_role_assign ?U Client) (and (role_permission_assign Client p5) (permission p5 ?V))) (and (user_role_assign ?U Client) (and (role_permission_assign Client p6) (permission p6 ?V)))))))))))))))))))))))))))))))))))))))))
 

;assumption 32
(assert
(forall ((?U Role) (?V Role)) (iff (role_le ?U ?V) (< (role_level ?U) (role_level ?V)))))
 

;assumption 33
(assert
(= (role_level Manager) 3))

;assumption 34
(assert
(= (role_level FinAdmin) 2))

;assumption 35
(assert
(= (role_level FinClerk) 1))

;assumption 36
(assert
(= (role_level POAdmin) 2))

;assumption 37
(assert
(= (role_level POClerk) 1))

;assumption 38
(assert
(= (role_level Client) 0))

;assumption 39
(assert
(forall ((?U Id) (?V Id)) (implies (= (id2int ?U) (id2int ?V)) (= ?U ?V))))
 

;assumption 40
(assert
(forall ((?U Id)) (and (<= 1 (id2int ?U)) (<= (id2int ?U) 7))))
 

;assumption 41
(assert
(= (id2int id1) 1))

;assumption 42
(assert
(= (id2int id2) 2))

;assumption 43
(assert
(= (id2int id3) 3))

;assumption 44
(assert
(= (id2int id4) 4))

;assumption 45
(assert
(= (id2int id5) 5))

;assumption 46
(assert
(= (id2int id6) 6))

;assumption 47
(assert
(= (id2int id7) 7))

;assumption 48
(assert
(iff initial_wf_0 (and (= p1_final_0 0) (and (= p2_final_0 0) (and (= p3_running_0 0) (and (= p4_final_0 0) (and (= p5_final_0 0) (and (= p6_initial_0 0) (and (= p7_final_0 0) (and (= p8_initial_0 0) (and (= p9_initial_0 1) (and (= p10_final_0 0) (and (= p11_final_0 0) (and (= in_customer_crtPO_0 1) (and (= in_creator_ctrPay_0 1) (and (= out_approverPO_apprPO_0 0) (and (= out_approverPOPayment_apprPay_0 0) (and (= out_creator_ctrPay_0 0) (and (= out_signerGRN_ctrsignGRN_0 0) (= out_signerGRN_signGRN_0 0))))))))))))))))))))

;assumption 49
(assert
(iff initial_pm_0 (forall ((?U Id) (?V Action)) (iff (executed_0 ?U ?V) false))
 ))

;assumption 50
(assert
(forall ((?U Id) (?V Action)) (iff (can_exec_0 ?U ?V) (or (and (= ?V t5_invoke) (and (has_permission ?U t5_invoke) (or (and (not (= ?U id1)) (executed_0 id1 t2_invoke)) (or (and (not (= ?U id2)) (executed_0 id2 t2_invoke)) (or (and (not (= ?U id3)) (executed_0 id3 t2_invoke)) (or (and (not (= ?U id4)) (executed_0 id4 t2_invoke)) (or (and (not (= ?U id5)) (executed_0 id5 t2_invoke)) (or (and (not (= ?U id6)) (executed_0 id6 t2_invoke)) (and (not (= ?U id7)) (executed_0 id7 t2_invoke)))))))))) (or (and (= ?V t6_invoke) (and (and (has_permission ?U t6_invoke) (or (and (not (= ?U id1)) (executed_0 id1 t2_invoke)) (or (and (not (= ?U id2)) (executed_0 id2 t2_invoke)) (or (and (not (= ?U id3)) (executed_0 id3 t2_invoke)) (or (and (not (= ?U id4)) (executed_0 id4 t2_invoke)) (or (and (not (= ?U id5)) (executed_0 id5 t2_invoke)) (or (and (not (= ?U id6)) (executed_0 id6 t2_invoke)) (and (not (= ?U id7)) (executed_0 id7 t2_invoke))))))))) (and (has_permission ?U t6_invoke) (or (and (not (= ?U id1)) (executed_0 id1 t5_invoke)) (or (and (not (= ?U id2)) (executed_0 id2 t5_invoke)) (or (and (not (= ?U id3)) (executed_0 id3 t5_invoke)) (or (and (not (= ?U id4)) (executed_0 id4 t5_invoke)) (or (and (not (= ?U id5)) (executed_0 id5 t5_invoke)) (or (and (not (= ?U id6)) (executed_0 id6 t5_invoke)) (and (not (= ?U id7)) (executed_0 id7 t5_invoke))))))))))) (or (and (= ?V t9_invoke) (and (has_permission ?U t9_invoke) (exists ((?W Role))  (and (user_role_assign ?U ?W) (and (or (and (user_role_assign id1 Manager) (and (role_le Manager ?W) (executed_0 id1 t7_invokeO))) (or (and (user_role_assign id2 Manager) (and (role_le Manager ?W) (executed_0 id2 t7_invokeO))) (or (and (user_role_assign id3 Manager) (and (role_le Manager ?W) (executed_0 id3 t7_invokeO))) (or (and (user_role_assign id4 Manager) (and (role_le Manager ?W) (executed_0 id4 t7_invokeO))) (or (and (user_role_assign id5 Manager) (and (role_le Manager ?W) (executed_0 id5 t7_invokeO))) (or (and (user_role_assign id6 Manager) (and (role_le Manager ?W) (executed_0 id6 t7_invokeO))) (or (and (user_role_assign id7 Manager) (and (role_le Manager ?W) (executed_0 id7 t7_invokeO))) (or (and (user_role_assign id1 POClerk) (and (role_le POClerk ?W) (executed_0 id1 t7_invokeO))) (or (and (user_role_assign id2 POClerk) (and (role_le POClerk ?W) (executed_0 id2 t7_invokeO))) (or (and (user_role_assign id3 POClerk) (and (role_le POClerk ?W) (executed_0 id3 t7_invokeO))) (or (and (user_role_assign id4 POClerk) (and (role_le POClerk ?W) (executed_0 id4 t7_invokeO))) (or (and (user_role_assign id5 POClerk) (and (role_le POClerk ?W) (executed_0 id5 t7_invokeO))) (or (and (user_role_assign id6 POClerk) (and (role_le POClerk ?W) (executed_0 id6 t7_invokeO))) (or (and (user_role_assign id7 POClerk) (and (role_le POClerk ?W) (executed_0 id7 t7_invokeO))) (or (and (user_role_assign id1 FinClerk) (and (role_le FinClerk ?W) (executed_0 id1 t7_invokeO))) (or (and (user_role_assign id2 FinClerk) (and (role_le FinClerk ?W) (executed_0 id2 t7_invokeO))) (or (and (user_role_assign id3 FinClerk) (and (role_le FinClerk ?W) (executed_0 id3 t7_invokeO))) (or (and (user_role_assign id4 FinClerk) (and (role_le FinClerk ?W) (executed_0 id4 t7_invokeO))) (or (and (user_role_assign id5 FinClerk) (and (role_le FinClerk ?W) (executed_0 id5 t7_invokeO))) (or (and (user_role_assign id6 FinClerk) (and (role_le FinClerk ?W) (executed_0 id6 t7_invokeO))) (or (and (user_role_assign id7 FinClerk) (and (role_le FinClerk ?W) (executed_0 id7 t7_invokeO))) (or (and (user_role_assign id1 FinAdmin) (and (role_le FinAdmin ?W) (executed_0 id1 t7_invokeO))) (or (and (user_role_assign id2 FinAdmin) (and (role_le FinAdmin ?W) (executed_0 id2 t7_invokeO))) (or (and (user_role_assign id3 FinAdmin) (and (role_le FinAdmin ?W) (executed_0 id3 t7_invokeO))) (or (and (user_role_assign id4 FinAdmin) (and (role_le FinAdmin ?W) (executed_0 id4 t7_invokeO))) (or (and (user_role_assign id5 FinAdmin) (and (role_le FinAdmin ?W) (executed_0 id5 t7_invokeO))) (or (and (user_role_assign id6 FinAdmin) (and (role_le FinAdmin ?W) (executed_0 id6 t7_invokeO))) (or (and (user_role_assign id7 FinAdmin) (and (role_le FinAdmin ?W) (executed_0 id7 t7_invokeO))) (or (and (user_role_assign id1 POAdmin) (and (role_le POAdmin ?W) (executed_0 id1 t7_invokeO))) (or (and (user_role_assign id2 POAdmin) (and (role_le POAdmin ?W) (executed_0 id2 t7_invokeO))) (or (and (user_role_assign id3 POAdmin) (and (role_le POAdmin ?W) (executed_0 id3 t7_invokeO))) (or (and (user_role_assign id4 POAdmin) (and (role_le POAdmin ?W) (executed_0 id4 t7_invokeO))) (or (and (user_role_assign id5 POAdmin) (and (role_le POAdmin ?W) (executed_0 id5 t7_invokeO))) (or (and (user_role_assign id6 POAdmin) (and (role_le POAdmin ?W) (executed_0 id6 t7_invokeO))) (or (and (user_role_assign id7 POAdmin) (and (role_le POAdmin ?W) (executed_0 id7 t7_invokeO))) (or (and (user_role_assign id1 Client) (and (role_le Client ?W) (executed_0 id1 t7_invokeO))) (or (and (user_role_assign id2 Client) (and (role_le Client ?W) (executed_0 id2 t7_invokeO))) (or (and (user_role_assign id3 Client) (and (role_le Client ?W) (executed_0 id3 t7_invokeO))) (or (and (user_role_assign id4 Client) (and (role_le Client ?W) (executed_0 id4 t7_invokeO))) (or (and (user_role_assign id5 Client) (and (role_le Client ?W) (executed_0 id5 t7_invokeO))) (or (and (user_role_assign id6 Client) (and (role_le Client ?W) (executed_0 id6 t7_invokeO))) (and (user_role_assign id7 Client) (and (role_le Client ?W) (executed_0 id7 t7_invokeO)))))))))))))))))))))))))))))))))))))))))))) (or (and (user_role_assign id1 Manager) (and (role_le Manager ?W) (executed_0 id1 t8_invokeI))) (or (and (user_role_assign id2 Manager) (and (role_le Manager ?W) (executed_0 id2 t8_invokeI))) (or (and (user_role_assign id3 Manager) (and (role_le Manager ?W) (executed_0 id3 t8_invokeI))) (or (and (user_role_assign id4 Manager) (and (role_le Manager ?W) (executed_0 id4 t8_invokeI))) (or (and (user_role_assign id5 Manager) (and (role_le Manager ?W) (executed_0 id5 t8_invokeI))) (or (and (user_role_assign id6 Manager) (and (role_le Manager ?W) (executed_0 id6 t8_invokeI))) (or (and (user_role_assign id7 Manager) (and (role_le Manager ?W) (executed_0 id7 t8_invokeI))) (or (and (user_role_assign id1 POClerk) (and (role_le POClerk ?W) (executed_0 id1 t8_invokeI))) (or (and (user_role_assign id2 POClerk) (and (role_le POClerk ?W) (executed_0 id2 t8_invokeI))) (or (and (user_role_assign id3 POClerk) (and (role_le POClerk ?W) (executed_0 id3 t8_invokeI))) (or (and (user_role_assign id4 POClerk) (and (role_le POClerk ?W) (executed_0 id4 t8_invokeI))) (or (and (user_role_assign id5 POClerk) (and (role_le POClerk ?W) (executed_0 id5 t8_invokeI))) (or (and (user_role_assign id6 POClerk) (and (role_le POClerk ?W) (executed_0 id6 t8_invokeI))) (or (and (user_role_assign id7 POClerk) (and (role_le POClerk ?W) (executed_0 id7 t8_invokeI))) (or (and (user_role_assign id1 FinClerk) (and (role_le FinClerk ?W) (executed_0 id1 t8_invokeI))) (or (and (user_role_assign id2 FinClerk) (and (role_le FinClerk ?W) (executed_0 id2 t8_invokeI))) (or (and (user_role_assign id3 FinClerk) (and (role_le FinClerk ?W) (executed_0 id3 t8_invokeI))) (or (and (user_role_assign id4 FinClerk) (and (role_le FinClerk ?W) (executed_0 id4 t8_invokeI))) (or (and (user_role_assign id5 FinClerk) (and (role_le FinClerk ?W) (executed_0 id5 t8_invokeI))) (or (and (user_role_assign id6 FinClerk) (and (role_le FinClerk ?W) (executed_0 id6 t8_invokeI))) (or (and (user_role_assign id7 FinClerk) (and (role_le FinClerk ?W) (executed_0 id7 t8_invokeI))) (or (and (user_role_assign id1 FinAdmin) (and (role_le FinAdmin ?W) (executed_0 id1 t8_invokeI))) (or (and (user_role_assign id2 FinAdmin) (and (role_le FinAdmin ?W) (executed_0 id2 t8_invokeI))) (or (and (user_role_assign id3 FinAdmin) (and (role_le FinAdmin ?W) (executed_0 id3 t8_invokeI))) (or (and (user_role_assign id4 FinAdmin) (and (role_le FinAdmin ?W) (executed_0 id4 t8_invokeI))) (or (and (user_role_assign id5 FinAdmin) (and (role_le FinAdmin ?W) (executed_0 id5 t8_invokeI))) (or (and (user_role_assign id6 FinAdmin) (and (role_le FinAdmin ?W) (executed_0 id6 t8_invokeI))) (or (and (user_role_assign id7 FinAdmin) (and (role_le FinAdmin ?W) (executed_0 id7 t8_invokeI))) (or (and (user_role_assign id1 POAdmin) (and (role_le POAdmin ?W) (executed_0 id1 t8_invokeI))) (or (and (user_role_assign id2 POAdmin) (and (role_le POAdmin ?W) (executed_0 id2 t8_invokeI))) (or (and (user_role_assign id3 POAdmin) (and (role_le POAdmin ?W) (executed_0 id3 t8_invokeI))) (or (and (user_role_assign id4 POAdmin) (and (role_le POAdmin ?W) (executed_0 id4 t8_invokeI))) (or (and (user_role_assign id5 POAdmin) (and (role_le POAdmin ?W) (executed_0 id5 t8_invokeI))) (or (and (user_role_assign id6 POAdmin) (and (role_le POAdmin ?W) (executed_0 id6 t8_invokeI))) (or (and (user_role_assign id7 POAdmin) (and (role_le POAdmin ?W) (executed_0 id7 t8_invokeI))) (or (and (user_role_assign id1 Client) (and (role_le Client ?W) (executed_0 id1 t8_invokeI))) (or (and (user_role_assign id2 Client) (and (role_le Client ?W) (executed_0 id2 t8_invokeI))) (or (and (user_role_assign id3 Client) (and (role_le Client ?W) (executed_0 id3 t8_invokeI))) (or (and (user_role_assign id4 Client) (and (role_le Client ?W) (executed_0 id4 t8_invokeI))) (or (and (user_role_assign id5 Client) (and (role_le Client ?W) (executed_0 id5 t8_invokeI))) (or (and (user_role_assign id6 Client) (and (role_le Client ?W) (executed_0 id6 t8_invokeI))) (and (user_role_assign id7 Client) (and (role_le Client ?W) (executed_0 id7 t8_invokeI))))))))))))))))))))))))))))))))))))))))))))) )) )) (or (and (= ?V t1_receive) (has_permission ?U t1_receive)) (or (and (= ?V t2_invoke) (has_permission ?U t2_invoke)) (or (and (= ?V t7_invokeO) (has_permission ?U t7_invokeO)) (and (= ?V t8_invokeI) (has_permission ?U t8_invokeI)))))))))))
 

;assumption 51
(assert
(forall ((?U Id) (?V Action)) (iff (can_exec_1 ?U ?V) (or (and (= ?V t5_invoke) (and (has_permission ?U t5_invoke) (or (and (not (= ?U id1)) (executed_1 id1 t2_invoke)) (or (and (not (= ?U id2)) (executed_1 id2 t2_invoke)) (or (and (not (= ?U id3)) (executed_1 id3 t2_invoke)) (or (and (not (= ?U id4)) (executed_1 id4 t2_invoke)) (or (and (not (= ?U id5)) (executed_1 id5 t2_invoke)) (or (and (not (= ?U id6)) (executed_1 id6 t2_invoke)) (and (not (= ?U id7)) (executed_1 id7 t2_invoke)))))))))) (or (and (= ?V t6_invoke) (and (and (has_permission ?U t6_invoke) (or (and (not (= ?U id1)) (executed_1 id1 t2_invoke)) (or (and (not (= ?U id2)) (executed_1 id2 t2_invoke)) (or (and (not (= ?U id3)) (executed_1 id3 t2_invoke)) (or (and (not (= ?U id4)) (executed_1 id4 t2_invoke)) (or (and (not (= ?U id5)) (executed_1 id5 t2_invoke)) (or (and (not (= ?U id6)) (executed_1 id6 t2_invoke)) (and (not (= ?U id7)) (executed_1 id7 t2_invoke))))))))) (and (has_permission ?U t6_invoke) (or (and (not (= ?U id1)) (executed_1 id1 t5_invoke)) (or (and (not (= ?U id2)) (executed_1 id2 t5_invoke)) (or (and (not (= ?U id3)) (executed_1 id3 t5_invoke)) (or (and (not (= ?U id4)) (executed_1 id4 t5_invoke)) (or (and (not (= ?U id5)) (executed_1 id5 t5_invoke)) (or (and (not (= ?U id6)) (executed_1 id6 t5_invoke)) (and (not (= ?U id7)) (executed_1 id7 t5_invoke))))))))))) (or (and (= ?V t9_invoke) (and (has_permission ?U t9_invoke) (exists ((?W Role))  (and (user_role_assign ?U ?W) (and (or (and (user_role_assign id1 Manager) (and (role_le Manager ?W) (executed_1 id1 t7_invokeO))) (or (and (user_role_assign id2 Manager) (and (role_le Manager ?W) (executed_1 id2 t7_invokeO))) (or (and (user_role_assign id3 Manager) (and (role_le Manager ?W) (executed_1 id3 t7_invokeO))) (or (and (user_role_assign id4 Manager) (and (role_le Manager ?W) (executed_1 id4 t7_invokeO))) (or (and (user_role_assign id5 Manager) (and (role_le Manager ?W) (executed_1 id5 t7_invokeO))) (or (and (user_role_assign id6 Manager) (and (role_le Manager ?W) (executed_1 id6 t7_invokeO))) (or (and (user_role_assign id7 Manager) (and (role_le Manager ?W) (executed_1 id7 t7_invokeO))) (or (and (user_role_assign id1 POClerk) (and (role_le POClerk ?W) (executed_1 id1 t7_invokeO))) (or (and (user_role_assign id2 POClerk) (and (role_le POClerk ?W) (executed_1 id2 t7_invokeO))) (or (and (user_role_assign id3 POClerk) (and (role_le POClerk ?W) (executed_1 id3 t7_invokeO))) (or (and (user_role_assign id4 POClerk) (and (role_le POClerk ?W) (executed_1 id4 t7_invokeO))) (or (and (user_role_assign id5 POClerk) (and (role_le POClerk ?W) (executed_1 id5 t7_invokeO))) (or (and (user_role_assign id6 POClerk) (and (role_le POClerk ?W) (executed_1 id6 t7_invokeO))) (or (and (user_role_assign id7 POClerk) (and (role_le POClerk ?W) (executed_1 id7 t7_invokeO))) (or (and (user_role_assign id1 FinClerk) (and (role_le FinClerk ?W) (executed_1 id1 t7_invokeO))) (or (and (user_role_assign id2 FinClerk) (and (role_le FinClerk ?W) (executed_1 id2 t7_invokeO))) (or (and (user_role_assign id3 FinClerk) (and (role_le FinClerk ?W) (executed_1 id3 t7_invokeO))) (or (and (user_role_assign id4 FinClerk) (and (role_le FinClerk ?W) (executed_1 id4 t7_invokeO))) (or (and (user_role_assign id5 FinClerk) (and (role_le FinClerk ?W) (executed_1 id5 t7_invokeO))) (or (and (user_role_assign id6 FinClerk) (and (role_le FinClerk ?W) (executed_1 id6 t7_invokeO))) (or (and (user_role_assign id7 FinClerk) (and (role_le FinClerk ?W) (executed_1 id7 t7_invokeO))) (or (and (user_role_assign id1 FinAdmin) (and (role_le FinAdmin ?W) (executed_1 id1 t7_invokeO))) (or (and (user_role_assign id2 FinAdmin) (and (role_le FinAdmin ?W) (executed_1 id2 t7_invokeO))) (or (and (user_role_assign id3 FinAdmin) (and (role_le FinAdmin ?W) (executed_1 id3 t7_invokeO))) (or (and (user_role_assign id4 FinAdmin) (and (role_le FinAdmin ?W) (executed_1 id4 t7_invokeO))) (or (and (user_role_assign id5 FinAdmin) (and (role_le FinAdmin ?W) (executed_1 id5 t7_invokeO))) (or (and (user_role_assign id6 FinAdmin) (and (role_le FinAdmin ?W) (executed_1 id6 t7_invokeO))) (or (and (user_role_assign id7 FinAdmin) (and (role_le FinAdmin ?W) (executed_1 id7 t7_invokeO))) (or (and (user_role_assign id1 POAdmin) (and (role_le POAdmin ?W) (executed_1 id1 t7_invokeO))) (or (and (user_role_assign id2 POAdmin) (and (role_le POAdmin ?W) (executed_1 id2 t7_invokeO))) (or (and (user_role_assign id3 POAdmin) (and (role_le POAdmin ?W) (executed_1 id3 t7_invokeO))) (or (and (user_role_assign id4 POAdmin) (and (role_le POAdmin ?W) (executed_1 id4 t7_invokeO))) (or (and (user_role_assign id5 POAdmin) (and (role_le POAdmin ?W) (executed_1 id5 t7_invokeO))) (or (and (user_role_assign id6 POAdmin) (and (role_le POAdmin ?W) (executed_1 id6 t7_invokeO))) (or (and (user_role_assign id7 POAdmin) (and (role_le POAdmin ?W) (executed_1 id7 t7_invokeO))) (or (and (user_role_assign id1 Client) (and (role_le Client ?W) (executed_1 id1 t7_invokeO))) (or (and (user_role_assign id2 Client) (and (role_le Client ?W) (executed_1 id2 t7_invokeO))) (or (and (user_role_assign id3 Client) (and (role_le Client ?W) (executed_1 id3 t7_invokeO))) (or (and (user_role_assign id4 Client) (and (role_le Client ?W) (executed_1 id4 t7_invokeO))) (or (and (user_role_assign id5 Client) (and (role_le Client ?W) (executed_1 id5 t7_invokeO))) (or (and (user_role_assign id6 Client) (and (role_le Client ?W) (executed_1 id6 t7_invokeO))) (and (user_role_assign id7 Client) (and (role_le Client ?W) (executed_1 id7 t7_invokeO)))))))))))))))))))))))))))))))))))))))))))) (or (and (user_role_assign id1 Manager) (and (role_le Manager ?W) (executed_1 id1 t8_invokeI))) (or (and (user_role_assign id2 Manager) (and (role_le Manager ?W) (executed_1 id2 t8_invokeI))) (or (and (user_role_assign id3 Manager) (and (role_le Manager ?W) (executed_1 id3 t8_invokeI))) (or (and (user_role_assign id4 Manager) (and (role_le Manager ?W) (executed_1 id4 t8_invokeI))) (or (and (user_role_assign id5 Manager) (and (role_le Manager ?W) (executed_1 id5 t8_invokeI))) (or (and (user_role_assign id6 Manager) (and (role_le Manager ?W) (executed_1 id6 t8_invokeI))) (or (and (user_role_assign id7 Manager) (and (role_le Manager ?W) (executed_1 id7 t8_invokeI))) (or (and (user_role_assign id1 POClerk) (and (role_le POClerk ?W) (executed_1 id1 t8_invokeI))) (or (and (user_role_assign id2 POClerk) (and (role_le POClerk ?W) (executed_1 id2 t8_invokeI))) (or (and (user_role_assign id3 POClerk) (and (role_le POClerk ?W) (executed_1 id3 t8_invokeI))) (or (and (user_role_assign id4 POClerk) (and (role_le POClerk ?W) (executed_1 id4 t8_invokeI))) (or (and (user_role_assign id5 POClerk) (and (role_le POClerk ?W) (executed_1 id5 t8_invokeI))) (or (and (user_role_assign id6 POClerk) (and (role_le POClerk ?W) (executed_1 id6 t8_invokeI))) (or (and (user_role_assign id7 POClerk) (and (role_le POClerk ?W) (executed_1 id7 t8_invokeI))) (or (and (user_role_assign id1 FinClerk) (and (role_le FinClerk ?W) (executed_1 id1 t8_invokeI))) (or (and (user_role_assign id2 FinClerk) (and (role_le FinClerk ?W) (executed_1 id2 t8_invokeI))) (or (and (user_role_assign id3 FinClerk) (and (role_le FinClerk ?W) (executed_1 id3 t8_invokeI))) (or (and (user_role_assign id4 FinClerk) (and (role_le FinClerk ?W) (executed_1 id4 t8_invokeI))) (or (and (user_role_assign id5 FinClerk) (and (role_le FinClerk ?W) (executed_1 id5 t8_invokeI))) (or (and (user_role_assign id6 FinClerk) (and (role_le FinClerk ?W) (executed_1 id6 t8_invokeI))) (or (and (user_role_assign id7 FinClerk) (and (role_le FinClerk ?W) (executed_1 id7 t8_invokeI))) (or (and (user_role_assign id1 FinAdmin) (and (role_le FinAdmin ?W) (executed_1 id1 t8_invokeI))) (or (and (user_role_assign id2 FinAdmin) (and (role_le FinAdmin ?W) (executed_1 id2 t8_invokeI))) (or (and (user_role_assign id3 FinAdmin) (and (role_le FinAdmin ?W) (executed_1 id3 t8_invokeI))) (or (and (user_role_assign id4 FinAdmin) (and (role_le FinAdmin ?W) (executed_1 id4 t8_invokeI))) (or (and (user_role_assign id5 FinAdmin) (and (role_le FinAdmin ?W) (executed_1 id5 t8_invokeI))) (or (and (user_role_assign id6 FinAdmin) (and (role_le FinAdmin ?W) (executed_1 id6 t8_invokeI))) (or (and (user_role_assign id7 FinAdmin) (and (role_le FinAdmin ?W) (executed_1 id7 t8_invokeI))) (or (and (user_role_assign id1 POAdmin) (and (role_le POAdmin ?W) (executed_1 id1 t8_invokeI))) (or (and (user_role_assign id2 POAdmin) (and (role_le POAdmin ?W) (executed_1 id2 t8_invokeI))) (or (and (user_role_assign id3 POAdmin) (and (role_le POAdmin ?W) (executed_1 id3 t8_invokeI))) (or (and (user_role_assign id4 POAdmin) (and (role_le POAdmin ?W) (executed_1 id4 t8_invokeI))) (or (and (user_role_assign id5 POAdmin) (and (role_le POAdmin ?W) (executed_1 id5 t8_invokeI))) (or (and (user_role_assign id6 POAdmin) (and (role_le POAdmin ?W) (executed_1 id6 t8_invokeI))) (or (and (user_role_assign id7 POAdmin) (and (role_le POAdmin ?W) (executed_1 id7 t8_invokeI))) (or (and (user_role_assign id1 Client) (and (role_le Client ?W) (executed_1 id1 t8_invokeI))) (or (and (user_role_assign id2 Client) (and (role_le Client ?W) (executed_1 id2 t8_invokeI))) (or (and (user_role_assign id3 Client) (and (role_le Client ?W) (executed_1 id3 t8_invokeI))) (or (and (user_role_assign id4 Client) (and (role_le Client ?W) (executed_1 id4 t8_invokeI))) (or (and (user_role_assign id5 Client) (and (role_le Client ?W) (executed_1 id5 t8_invokeI))) (or (and (user_role_assign id6 Client) (and (role_le Client ?W) (executed_1 id6 t8_invokeI))) (and (user_role_assign id7 Client) (and (role_le Client ?W) (executed_1 id7 t8_invokeI))))))))))))))))))))))))))))))))))))))))))))) )) )) (or (and (= ?V t1_receive) (has_permission ?U t1_receive)) (or (and (= ?V t2_invoke) (has_permission ?U t2_invoke)) (or (and (= ?V t7_invokeO) (has_permission ?U t7_invokeO)) (and (= ?V t8_invokeI) (has_permission ?U t8_invokeI)))))))))))
 

;assumption 52
(assert
(forall ((?U Id)) (iff (t1_receive_0_1 ?U)
   (and (and (can_exec_0 ?U t1_receive) (and (<= 1 in_customer_crtPO_0) (<= 1 p9_initial_0)))
  (and (and (= p1_final_1 p1_final_0) (and (= p2_final_1 p2_final_0) (and (= p3_running_1 p3_running_0) (and (= p4_final_1 p4_final_0) (and (= p5_final_1 p5_final_0) (and (= p6_initial_1 p6_initial_0) (and (= p7_final_1 p7_final_0) (and (= p8_initial_1 p8_initial_0) (and (= p9_initial_1 (+ (~ 1) p9_initial_0)) (and (= p10_final_1 (+ 1 p10_final_0)) (and (= p11_final_1 p11_final_0) (and (= in_customer_crtPO_1 (+ (~ 1) in_customer_crtPO_0)) (and (= in_creator_ctrPay_1 in_creator_ctrPay_0) (and (= out_creator_ctrPay_1 out_creator_ctrPay_0) (and (= out_approverPOPayment_apprPay_1 out_approverPOPayment_apprPay_0) (and (= out_approverPO_apprPO_1 out_approverPO_apprPO_0) (and (= out_signerGRN_signGRN_1 out_signerGRN_signGRN_0) (and (= out_signerGRN_ctrsignGRN_1 out_signerGRN_ctrsignGRN_0) true))))))))))))))))))
  (forall ((?V Id) (?W Action)) (iff (executed_1 ?V ?W) (or (and (= ?V ?U) (= ?W t1_receive)) (executed_0 ?V ?W))))
  )
  )
   )))
 

;assumption 53
(assert 
 (not (and initial_wf_0 (and initial_pm_0 (t1_receive_0_1 id6))))
 )

(set-info :status sat)
(check-sat)
(get-model)
```
It is very effective in this benchmark since it contains many quantifiers of the form

> forall x.  p(x) = ....

The Z3 model finder is more effective if the input formula does not contain nested quantifiers. If that is not the case for your formula, you can use the option

> (set-option :smt.pull-nested-quantifiers true)

The following challenge problem from the paper [SEM a system for enumerating models](https://www.ijcai.org/Proceedings/95-1/Papers/039.pdf) is proved to be unsatisfiable in less than one second by Z3.

```z3
(set-option :smt.mbqi true)
(declare-sort S)
(declare-fun g (S S) S)
(declare-fun f (S S) S)
(declare-const a S)
(declare-const b S)

(assert (forall ((x S) (y S))
                (= (g (f x y) (f x x)) x)))
(assert (forall ((x S) (y S))
                (= (f (g x y) (g x x)) x)))
(assert (forall ((x S) (y S) (z S))
                (= (g (g x y) z) (g (g y z) x))))
(assert (forall ((x S) (y S) (z S))
                (= (f (f x y) z) (f (f y z) x))))
(assert (distinct (g a (f b a)) (f a (g b a))))
(check-sat)
```

:::warn
Quantifier reasoning is undecidable. Z3 attempts to find a refutation or a finite model
of quantified formulas. When formulas are satisfiable but have no finite models, z3 will
likely diverge. The following example illustrates a formula that only has infinite models.
:::

```z3 no-build
(set-option :smt.mbqi true)
(declare-sort S)
(declare-fun g (S) S)
(declare-fun f (S) S)
(declare-const a S)
(assert (forall ((x S)) (= (g (f x)) x)))
(assert (forall ((x S)) (not (= a (f x)))))
(check-sat)
(get-model)
```
