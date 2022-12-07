---
title: Tactics Summary
sidebar_position: 5
---

## Tactic demodulator

### Short Description:

Extracts equalities from quantifiers and applies them for simplification

### Long Description

In first-order theorem proving (FOTP), a demodulator is a universally quantified formula of the form:

`Forall X1, ..., Xn.  L[X1, ..., Xn] = R[X1, ..., Xn]`
Where `L[X1, ..., Xn]` contains all variables in `R[X1, ..., Xn]`, and 
`L[X1, ..., Xn]` is "bigger" than `R[X1, ...,Xn]`.

The idea is to replace something big `L[X1, ..., Xn]` with something smaller `R[X1, ..., Xn]`.

After selecting the demodulators, we traverse the rest of the formula looking for instances of `L[X1, ..., Xn]`.
Whenever we find an instance, we replace it with the associated instance of `R[X1, ..., Xn]`.

For example, suppose we have

```
Forall x, y.  f(x+y, y) = y
and
f(g(b) + h(c), h(c)) <= 0
```

The term `f(g(b) + h(c), h(c))` is an instance of `f(x+y, y)` if we replace `x <- g(b)` and `y <- h(c)`.
So, we can replace it with `y` which is bound to `h(c)` in this example. So, the result of the transformation is:

```
Forall x, y.  f(x+y, y) = y
and
h(c) <= 0
```

### Example
 
```
  (declare-sort S 0)
  (declare-sort S1 0)
  (declare-sort S2 0)
  (declare-fun f () S)
  (declare-fun f1 () S)
  (declare-fun f2 (S1 S) S)
  (declare-fun f3 (S2 S) S1)
  (declare-fun f4 () S)
  (declare-fun f5 () S2)
  (assert (not (= f1 (f2 (f3 f5 f4) f))))
  (assert (forall ((q S) (v S)) (or (= q v) (= f1 (f2 (f3 f5 q) v)) (= (f2 (f3 f5 v) q) f1))))
  (assert (forall ((q S) (x S)) (not (= (f2 (f3 f5 q) x) f1))))
  (apply demodulator)
```

It generates

```
  (goals
  (goal
    (forall ((q S) (v S)) (= q v))
    (forall ((q S) (x S)) (not (= (f2 (f3 f5 q) x) f1)))
    :precision precise :depth 1)
  )
```

### Notes

* supports unsat cores
* does not support fine-grained proofs


## Tactic der

### Short Description:

The tactic performs _destructive equality resolution_.

### Long Description

Destructive equality resolution replaces bound variables that are
_solved_ by their solutions in formulas. In short, the destructive
equality resolution rule takes the form:

```
   (forall (X Y) (or X /= s C[X])) --> (forall (Y) C[Y])
```


### Example
 
```z3
  (declare-fun f (Int) Int)
  (declare-fun p (Int Int) Bool)
  (assert (forall ((x Int) (y Int)) (or (not (= x (f y))) (p x y))))
  (apply der)
```

### Notes

* supports unsat cores, proof terms



## Tactic distribute-forall

### Short Description:

Distribute $\forall$ over conjunctions (and distribute $\exists$ over disjunctions)

### Example
 
```z3
  (declare-const x Int)
  (declare-fun p (Int) Bool)
  (declare-fun q (Int) Bool)
  (assert (forall ((x Int)) (and (p x) (q x))))
  (apply distribute-forall)
```

### Notes

* supports unsat cores, proof terms



## Tactic elim-uncnstr

### Short Description

Eliminate Unconstrained uninterpreted constants

### Long Description

The tactic eliminates uninterpreted constants that occur only once in a goal and such that the immediate context
where they occur can be replaced by a fresh constant. We call these occurrences invertible.
It relies on a series of theory specific invertibility transformations.
In the following assume `x` and `x'` occur in a unique subterm and `y` is a fresh uninterpreted constant.

#### Boolean Connectives

| Original Context | New Term | Updated solution        |
|------------------|----------|------------------------ |
`(if c x x')`      | `y`      | `x = x' = y`            |
`(if x x' e)`      |  `y`     | `x = true, x' = y`      |
`(if x t x')`      | `y`      | `x = false, x' = y`     |
`(not x)`          | `y`      | `x = (not y)`           |
`(and x x')`       | `y`      | `x = y, x' = true`      |
`(or  x x')`       | `y`      | `x = y, x' = false`     |
`(= x t)`          | `y`      | `x = (if y t (diff t))` |

where diff is a diagnonalization function available in domains of size `>` 1.

#### Arithmetic

| Original Context | New Term | Updated solution        |
|------------------|----------|------------------------ |
`(+ x t)`          | `y`      | `x = y - t`             |
`(* x x')`         | `y`      | `x = y, x' = 1`         |
`(* -1 x)`         | `y`      | `x = -y`                | 
`(<= x t)`         | `y`      | `x = (if y t (+ t 1))`  |
`(<= t x)`         | `y`      | `x = (if y t (- t 1))`  |

#### Bit-vectors

| Original Context | New Term | Updated solution         |
|------------------|----------|--------------------------|
`(bvadd x t)`      | `y`      | `x = y - t`              |
`(bvmul x x')`     | `y`      | `x = y, x' = 1`          |
`(bvmul odd x)`    | `y`      | `x = inv(odd)*y`         | 
`((extract sz-1 0) x)` | `y`  | `x = y`                  |
`((extract hi lo) x)`  | `y`  | `x = (concat y1 y y2)`   |
`(udiv x x')`      | `y`      | `x = y, x' = 1`          |
`(concat x x')`    | `y`      | `x = (extract hi1 lo1 y)` |
`(bvule x t)`      | `(or y (= t MAX))` | `x = (if y t (bvadd t 1))` |
`(bvule t x)`      | `(or y (= t MIN))` | `x = (if y t (bvsub t 1))` | 
`(bvnot x)`        | `y`                | `x = (bvnot y)`            |
`(bvand x x')`     | `y`                | `x = y, x' = MAX`          |

In addition there are conversions for shift and bit-wise or and signed comparison.

#### Arrays

| Original Context | New Term | Updated solution         |
|------------------|----------|--------------------------|
`(select x t)`     | `y`      | `x = (const y)`          |
`(store x x1 x2)`  | `y`      | `x2 = (select x x1), x = y, x1 = arb` | 

#### Algebraic Datatypes

| Original Context | New Term | Updated solution         |
|------------------|----------|--------------------------|
`(head x)`         | `y`      | `x = (cons y arb)`       |



### Example

```z3
(declare-const x Int)
(declare-const y Int)
(declare-fun p (Int) Bool)    
(assert (>= (+ y (+ x y)) y))
(assert (p y))
(apply elim-uncnstr)
(assert (p (+ x y)))
(apply elim-uncnstr)
```

### Notes

* supports unsat cores
* does not support fine-grained proofs

### Parameters

 Parameter | Type | Description | Default
 ----------|------|-------------|--------
max_memory | unsigned int  |  (default: infty) maximum amount of memory in megabytes. | 
max_steps | unsigned int  |  (default: infty) maximum number of steps. | 


## Tactic injectivity

### Short Description:

- Discover axioms of the form `forall x. (= (g (f x)) x`
  Mark `f` as injective

- Rewrite (sub)terms of the form `(= (f x) (f y))` to `(= x y)` whenever `f` is injective.

### Example
 
```z3
  (declare-fun f (Int) Int)
  (declare-fun g (Int) Int)
  (declare-const x Int)
  (declare-const y Int)
  (assert (forall ((x Int)) (= (g (f x)) x)))
  (assert (not (= (f x) (f (f y)))))
  (apply injectivity)
```

### Notes

* does not support cores nor proofs

### Parameters

 Parameter | Type | Description | Default
 ----------|------|-------------|--------
max_memory | unsigned int  |  (default: infty) maximum amount of memory in megabytes. | 
produce_models | bool  |  (default: false) model generation. | 


## Tactic nnf

### Short Description:

The tactic converts formulas to negation normal form (NNF)

### Long Description

In NNF, negations only appear in front of atomic formulas. 

Standard rules for conversion into negation normal form are:
- `(not (and p q))` is converted to `(or (not p) (not q))`
- `(not (or p q))` is converted to `(and (not p) (not q))`
- `(not (not p))` is converted to `p`
- `(not (exists x. p))` is converted to `(forall x. (not p))`
- `(not (forall x. p))` is converted to `(exists x. (not p))`


Once all negations are pushed inside, the resulting formula is in NNF.

### Example

```z3
  (declare-const x Int)
  (assert (not (or (> x 0) (< x 0))))
  (apply nnf)
```


### Notes

* supports unsat cores, proof terms



### Parameters

 Parameter | Type | Description | Default
 ----------|------|-------------|--------
ignore_labels | bool  |  remove/ignore labels in the input formula, this option is ignored if proofs are enabled | false
max_memory | unsigned int  |  maximum amount of memory in megabytes | 4294967295
mode | symbol  |  NNF translation mode: skolem (skolem normal form), quantifiers (skolem normal form + quantifiers in NNF), full | skolem
sk_hack | bool  |  hack for VCC | false


## Tactic propagate-values

### Short Description:

Tactic for propagating equalities `(= t v)` where `v` is a value

### Long Description

In a context where terms are equated to constants it is invariably beneficial to 
replace terms, that can be compound, with the constants and then simplify the resulting formulas.
The propagate-values tactic accomplishes the task of replacing such terms.

### Example
 
```z3
(declare-const x Int)
(declare-const y Int)
(declare-fun f (Int) Int)
(assert (= 1 (f (+ x y))))
(assert (= 2 x))
(assert (> (f (+ 2 y)) y))
(apply propagate-values)
```

### Notes

* supports unsat cores


### Parameters

 Parameter | Type | Description | Default
 ----------|------|-------------|--------
algebraic_number_evaluator | bool  |  simplify/evaluate expressions containing (algebraic) irrational numbers. | true
arith_ineq_lhs | bool  |  rewrite inequalities so that right-hand-side is a constant. | false
arith_lhs | bool  |  all monomials are moved to the left-hand-side, and the right-hand-side is just a constant. | false
bit2bool | bool  |  try to convert bit-vector terms of size 1 into Boolean terms | true
blast_distinct | bool  |  expand a distinct predicate into a quadratic number of disequalities | false
blast_distinct_threshold | unsigned int  |  when blast_distinct is true, only distinct expressions with less than this number of arguments are blasted | 4294967295
blast_eq_value | bool  |  blast (some) Bit-vector equalities into bits | false
blast_select_store | bool  |  eagerly replace all (select (store ..) ..) term by an if-then-else term | false
bv_extract_prop | bool  |  attempt to partially propagate extraction inwards | false
bv_ineq_consistency_test_max | unsigned int  |  max size of conjunctions on which to perform consistency test based on inequalities on bitvectors. | 0
bv_ite2id | bool  |  rewrite ite that can be simplified to identity | false
bv_le2extract | bool  |  disassemble bvule to extract | true
bv_le_extra | bool  |  additional bu_(u/s)le simplifications | false
bv_not_simpl | bool  |  apply simplifications for bvnot | false
bv_sort_ac | bool  |  sort the arguments of all AC operators | false
cache_all | bool  |  cache all intermediate results. | false
elim_and | bool  |  conjunctions are rewritten using negation and disjunctions | false
elim_ite | bool  |  eliminate ite in favor of and/or | true
elim_rem | bool  |  replace (rem x y) with (ite (&gt;= y 0) (mod x y) (- (mod x y))). | false
elim_sign_ext | bool  |  expand sign-ext operator using concat and extract | true
elim_to_real | bool  |  eliminate to_real from arithmetic predicates that contain only integers. | false
eq2ineq | bool  |  expand equalities into two inequalities | false
expand_nested_stores | bool  |  replace nested stores by a lambda expression | false
expand_power | bool  |  expand (^ t k) into (* t ... t) if  1 &lt; k &lt;= max_degree. | false
expand_select_ite | bool  |  expand select over ite expressions | false
expand_select_store | bool  |  conservatively replace a (select (store ...) ...) term by an if-then-else term | false
expand_store_eq | bool  |  reduce (store ...) = (store ...) with a common base into selects | false
expand_tan | bool  |  replace (tan x) with (/ (sin x) (cos x)). | false
flat | bool  |  create nary applications for +,*,bvadd,bvmul,bvand,bvor,bvxor | true
flat_and_or | bool  |  create nary applications for and,or | true
gcd_rounding | bool  |  use gcd rounding on integer arithmetic atoms. | false
hi_div0 | bool  |  use the 'hardware interpretation' for division by zero (for bit-vector terms) | true
hoist_ite | bool  |  hoist shared summands under ite expressions | false
hoist_mul | bool  |  hoist multiplication over summation to minimize number of multiplications | false
ignore_patterns_on_ground_qbody | bool  |  ignores patterns on quantifiers that don't mention their bound variables. | true
ite_extra_rules | bool  |  extra ite simplifications, these additional simplifications may reduce size locally but increase globally | true
local_ctx | bool  |  perform local (i.e., cheap) context simplifications | false
local_ctx_limit | unsigned int  |  limit for applying local context simplifier | 4294967295
max_degree | unsigned int  |  max degree of algebraic numbers (and power operators) processed by simplifier. | 64
max_memory | unsigned int  |  maximum amount of memory in megabytes | 4294967295
max_rounds | unsigned int  |  (default: 4) maximum number of rounds. | 
max_steps | unsigned int  |  maximum number of steps | 4294967295
mul2concat | bool  |  replace multiplication by a power of two into a concatenation | false
mul_to_power | bool  |  collpase (* t ... t) into (^ t k), it is ignored if expand_power is true. | false
pull_cheap_ite | bool  |  pull if-then-else terms when cheap. | false
push_ite_arith | bool  |  push if-then-else over arithmetic terms. | false
push_ite_bv | bool  |  push if-then-else over bit-vector terms. | false
push_to_real | bool  |  distribute to_real over * and +. | true
rewrite_patterns | bool  |  rewrite patterns. | false
som | bool  |  put polynomials in sum-of-monomials form | false
som_blowup | unsigned int  |  maximum increase of monomials generated when putting a polynomial in sum-of-monomials normal form | 10
sort_store | bool  |  sort nested stores when the indices are known to be different | false
sort_sums | bool  |  sort the arguments of + application. | false
split_concat_eq | bool  |  split equalities of the form (= (concat t1 t2) t3) | false


## Tactic reduce-args

### Short Description:

Reduce the number of arguments of function applications, when for all occurrences of a function f the i-th is a value.

### Long Description

Example, suppose we have a function $f$ with 2 arguments. 
There are 1000 applications of this function, but the first argument is always $a$, $b$ or $c$.
Thus, we replace the $f(t_1, t_2)$ with 

* $f_a(t_2)$   if   $t_1 = a$
* $f_b(t_2)$   if   $t_2 = b$
* $f_c(t_2)$   if   $t_2 = c$

Since $f_a$, $f_b$, $f_c$ are new symbols, satisfiability is preserved.
   
This transformation is very similar in spirit to the Ackermman's reduction. 

This transformation should work in the following way:

```
   1- Create a mapping decl2arg_map from declarations to tuples of booleans, an entry [f -> (true, false, true)]
       means that f is a declaration with 3 arguments where the first and third arguments are always values.
   2- Traverse the formula and populate the mapping. 
        For each function application f(t1, ..., tn) do
          a) Create a boolean tuple (is_value(t1), ..., is_value(tn)) and do
             the logical-and with the tuple that is already in the mapping. If there is no such tuple
             in the mapping, we just add a new entry.

   If all entries are false-tuples, then there is nothing to be done. The transformation is not applicable.

   Now, we create a mapping decl2new_decl from (decl, val_1, ..., val_n) to decls. Note that, n may be different for each entry,
   but it is the same for the same declaration.
   For example, suppose we have [f -> (true, false, true)] in decl2arg_map, 
  and applications f(1, a, 2), f(1, b, 2), f(1, b, 3), f(2, b, 3), f(2, c, 3) in the formula.
   Then, decl2arg_map would contain
        (f, 1, 2) -> f_1_2
        (f, 1, 3) -> f_1_3
        (f, 2, 3) -> f_2_3
   where f_1_2, f_1_3 and f_2_3 are new function symbols.
   Using the new map, we can replace the occurrences of f.
```

### Example
 
```z3
(declare-fun f (Int Int) Bool)
(declare-const x Int)
(assert (f 1 2))
(assert (f 1 3))
(assert (f 2 4))
(assert (f 2 5))
(assert (f 1 6))
(assert (f 1 7))
(assert (f 1 x))
(apply reduce-args)
```

### Notes

* supports unsat cores
* does not support proof terms


## Tactic simplify

### Short Description:

The tactic performs algebraic simplifcations on formulas

### Long Description

The simplify tactic invokes z3's main rewriting engine. 
The rewriting engine contains support for theory specific simplifications.
The set of simplifications invoked is open ended. Useful algebraic simplifications
are added to the rewrite engine as they are discovered to be useful.

Note that the simplifier does not ensure that equivalent formulas are simplified to the same form.
In other words it does not guarantee canonicity. This contrasts with BDD packages where BDDs constructed
from two equivalent formulas are guaranteed to be equal.

### Example
 
```z3
  (declare-const x Int)
  (declare-const y Int)
  (assert (> x (+ x y)))
  (apply simplify)
```

### Notes

* supports unsat cores, proof terms

### Parameters

 Parameter | Type | Description | Default
 ----------|------|-------------|--------
algebraic_number_evaluator | bool  |  simplify/evaluate expressions containing (algebraic) irrational numbers. | true
arith_ineq_lhs | bool  |  rewrite inequalities so that right-hand-side is a constant. | false
arith_lhs | bool  |  all monomials are moved to the left-hand-side, and the right-hand-side is just a constant. | false
bit2bool | bool  |  try to convert bit-vector terms of size 1 into Boolean terms | true
blast_distinct | bool  |  expand a distinct predicate into a quadratic number of disequalities | false
blast_distinct_threshold | unsigned int  |  when blast_distinct is true, only distinct expressions with less than this number of arguments are blasted | 4294967295
blast_eq_value | bool  |  blast (some) Bit-vector equalities into bits | false
blast_select_store | bool  |  eagerly replace all (select (store ..) ..) term by an if-then-else term | false
bv_extract_prop | bool  |  attempt to partially propagate extraction inwards | false
bv_ineq_consistency_test_max | unsigned int  |  max size of conjunctions on which to perform consistency test based on inequalities on bitvectors. | 0
bv_ite2id | bool  |  rewrite ite that can be simplified to identity | false
bv_le2extract | bool  |  disassemble bvule to extract | true
bv_le_extra | bool  |  additional bu_(u/s)le simplifications | false
bv_not_simpl | bool  |  apply simplifications for bvnot | false
bv_sort_ac | bool  |  sort the arguments of all AC operators | false
cache_all | bool  |  cache all intermediate results. | false
elim_and | bool  |  conjunctions are rewritten using negation and disjunctions | false
elim_ite | bool  |  eliminate ite in favor of and/or | true
elim_rem | bool  |  replace (rem x y) with (ite (&gt;= y 0) (mod x y) (- (mod x y))). | false
elim_sign_ext | bool  |  expand sign-ext operator using concat and extract | true
elim_to_real | bool  |  eliminate to_real from arithmetic predicates that contain only integers. | false
eq2ineq | bool  |  expand equalities into two inequalities | false
expand_nested_stores | bool  |  replace nested stores by a lambda expression | false
expand_power | bool  |  expand (^ t k) into (* t ... t) if  1 &lt; k &lt;= max_degree. | false
expand_select_ite | bool  |  expand select over ite expressions | false
expand_select_store | bool  |  conservatively replace a (select (store ...) ...) term by an if-then-else term | false
expand_store_eq | bool  |  reduce (store ...) = (store ...) with a common base into selects | false
expand_tan | bool  |  replace (tan x) with (/ (sin x) (cos x)). | false
flat | bool  |  create nary applications for +,*,bvadd,bvmul,bvand,bvor,bvxor | true
flat_and_or | bool  |  create nary applications for and,or | true
gcd_rounding | bool  |  use gcd rounding on integer arithmetic atoms. | false
hi_div0 | bool  |  use the 'hardware interpretation' for division by zero (for bit-vector terms) | true
hoist_ite | bool  |  hoist shared summands under ite expressions | false
hoist_mul | bool  |  hoist multiplication over summation to minimize number of multiplications | false
ignore_patterns_on_ground_qbody | bool  |  ignores patterns on quantifiers that don't mention their bound variables. | true
ite_extra_rules | bool  |  extra ite simplifications, these additional simplifications may reduce size locally but increase globally | true
local_ctx | bool  |  perform local (i.e., cheap) context simplifications | false
local_ctx_limit | unsigned int  |  limit for applying local context simplifier | 4294967295
max_degree | unsigned int  |  max degree of algebraic numbers (and power operators) processed by simplifier. | 64
max_memory | unsigned int  |  maximum amount of memory in megabytes | 4294967295
max_steps | unsigned int  |  maximum number of steps | 4294967295
mul2concat | bool  |  replace multiplication by a power of two into a concatenation | false
mul_to_power | bool  |  collpase (* t ... t) into (^ t k), it is ignored if expand_power is true. | false
pull_cheap_ite | bool  |  pull if-then-else terms when cheap. | false
push_ite_arith | bool  |  push if-then-else over arithmetic terms. | false
push_ite_bv | bool  |  push if-then-else over bit-vector terms. | false
push_to_real | bool  |  distribute to_real over * and +. | true
rewrite_patterns | bool  |  rewrite patterns. | false
som | bool  |  put polynomials in sum-of-monomials form | false
som_blowup | unsigned int  |  maximum increase of monomials generated when putting a polynomial in sum-of-monomials normal form | 10
sort_store | bool  |  sort nested stores when the indices are known to be different | false
sort_sums | bool  |  sort the arguments of + application. | false
split_concat_eq | bool  |  split equalities of the form (= (concat t1 t2) t3) | false


## Tactic solve-eqs

### Short Description

Solve for variables

### Long Description

The tactic eliminates variables that can be brought into solved form.
For example, the assertion `x = f(y + z)` can be solved for `x`, replacing `x`
everywhere by `f(x + y)`. It depends on a set of theory specific equality solvers

* Basic equations
  * equations between uninterpreted constants and terms. 
  * equations written as `(if p (= x t) (= x s))` are solved as `(= x (if p t s))`.
  * asserting `p` or `(not p)` where `p` is uninterpreted, causes `p` to be replaced by `true` (or `false`).

* Arithmetic equations
  * It solves `x mod k = s` to `x = k * m' + s`, where m'` is a fresh constant. 
  * It finds variables with unit coefficients in integer linear equations.
  * It solves for `x * Y = Z` under the side-condition `Y != 0` as `x = Z/Y`.
 
It also allows solving for uninterpreted constants that only appear in a single disjuction. For example, 
`(or (= x (+ 5 y)) (= y (+ u z)))` allows solving for `x`. 

### Example

```
(declare-const x Int)
(declare-const y Int)
(declare-const z Int)
(declare-const u Int)
(assert (or (and (= x (+ 5 y)) (> u z)) (= y (+ u z))))
(apply solve-eqs)
```

It produces the goal
```
(goal
  (or (not (<= u z)) (= y (+ u z)))
  :precision precise :depth 1)
```
where `x` was solved as `(+ 5 y)`.

### Notes

* supports unsat cores
* does not support fine-grained proofs

### Parameters

 Parameter | Type | Description | Default
 ----------|------|-------------|--------
context_solve | bool  |  (default: false) solve equalities under disjunctions. | 
ite_solver | bool  |  (default: true) use if-then-else solver. | 
solve_eqs_max_occs | unsigned int  |  (default: infty) maximum number of occurrences for considering a variable for gaussian eliminations. | 
theory_solver | bool  |  (default: true) use theory solvers. | 

