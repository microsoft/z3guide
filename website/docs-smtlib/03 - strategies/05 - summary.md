---
title: Tactics Summary
sidebar_position: 5
---

## Tactic ackernannize_bv

### Short Description

A tactic for performing Ackermann reduction for bit-vector formulas

### Long Description

The Ackermann reduction replaces uninterpreted functions $f(t_1), f(t_2)$
by fresh variables $f_1, f_2$ and addes axioms $t_1 \simeq t_2 \implies f_1 \simeq f_2$.
The reduction has the effect of eliminating uninterpreted functions. When the reduction
produces a pure bit-vector benchmark, it allows Z3 to use a specialized SAT solver.

### Example

```z3
(declare-const x (_ BitVec 32))
(declare-const y (_ BitVec 32))
(declare-fun f ((_ BitVec 32)) (_ BitVec 8))

(assert (not (= (f x) (f y))))
(apply ackermannize_bv)
```

### Notes

* does not support proofs, does not support unsatisfiable cores



## Tactic add-bounds

### Short Description

Tactic for bounding unbounded variables.

### Long Description

The tactic creates a stronger sub-goal by adding bounds to variables.
The new goal may not be satisfiable even if the original goal is.

### Example

```z3
(declare-const x Int)
(declare-const y Int)
(assert (> (+ x y) 10))
(apply add-bounds)
```

### Parameters

 Parameter | Type | Description | Default
 ----------|------|-------------|--------
add_bound_lower | rational  |  (default: -2) lower bound to be added to unbounded variables. | 
add_bound_upper | rational  |  (default: 2) upper bound to be added to unbounded variables. | 


## Tactic aig

### Short Description

Simplify Boolean structure using AIGs (And-inverter graphs).

### Long Description

And-inverter graphs (AIGs) uses just the Boolean connectives `and` and `not` to encode Boolean
formulas. The circuit representation using AIGs first converts formulas using other connectives to this normal form, 
then performs local simplification steps to minimize the circuit representation.
Note that the simplification steps used by this tactic are heuristic, trading speed for power, 
and do not represent a high-quality circuit minimization approach.

### Example

```z3
(declare-const a Bool)
(declare-const b Bool)
(declare-const c Bool)
(assert (or (and a b) (and b a c)))
(apply aig)
```

### Parameters

 Parameter | Type | Description | Default
 ----------|------|-------------|--------
max_memory | unsigned int  |  (default: infty) maximum amount of memory in megabytes. | 4294967295


## Tactic bit-blast

### Short Description

Apply bit-blasting to a given goal.

### Example

```z3
(declare-const x (_ BitVec 8))
(declare-const y (_ BitVec 8))
(assert (bvule x y))
(apply bit-blast)
```

### Parameters

 Parameter | Type | Description | Default
 ----------|------|-------------|--------
blast_add | bool  |  bit-blast adders. | true
blast_full | bool  |  bit-blast any term with bit-vector sort, this option will make E-matching ineffective in any pattern containing bit-vector terms. | false
blast_mul | bool  |  bit-blast multipliers (and dividers, remainders). | true
blast_quant | bool  |  bit-blast quantified variables. | false
max_memory | unsigned int  |  (default: infty) maximum amount of memory in megabytes. | 4294967295
max_steps | unsigned int  |  (default: infty) maximum number of steps. | 4294967295


## Tactic blast-term-ite

### Short Description:

Blast term if-then-else by hoisting them up.
This is expensive but useful in some cases, such as
for enforcing constraints being in difference logic.
Use `elim-term-ite` elsewhere when possible.

### Example
 
```z3
(declare-fun f (Int) Int)
(declare-fun p (Int) Bool)
(declare-const c1 Bool)
(declare-const c2 Bool)
(declare-const c3 Bool)
(declare-const e1 Int) 
(declare-const e2 Int) 
(declare-const e3 Int)
(declare-const e4 Int)
(assert (p (f (if c1 (if c2 e1 (if c3 e2 e3)) e4))))
(apply blast-term-ite) 
```

### Notes



### Parameters

 Parameter | Type | Description | Default
 ----------|------|-------------|--------
max_inflation | unsigned int  |  (default: infinity) multiplicative factor of initial term size. | 4294967295
max_memory | unsigned int  |  (default: infty) maximum amount of memory in megabytes. | 4294967295
max_steps | unsigned int  |  (default: infty) maximum number of steps. | 4294967295


## Tactic bv-slice

### Short Description

Slices bit-vectors into sub-ranges to allow simplifying sub-ranges.

### Long Description

It rewrites a state using bit-vector slices. 
Slices are extracted from bit-vector equality assertions.
An equality assertion may equate a sub-range of a bit-vector
with a constant. The tactic ensures that all occurrences of the
subrange are replaced by the constants to allow additional 
simplification

### Example

```z3 ignore-errors
(declare-const x (_ BitVec 32))
(declare-const y (_ BitVec 32))
        (assert (= ((_ extract 31 16) x) (_ bv123 16)))
(assert (= ((_ extract 15 0) x) ((_ extract 16 1) y)))
(assert (= (bvadd x x) y))
(apply bv-slice)
```


## Tactic bv1-blast

### Short Description

Reduce bit-vector expressions into bit-vectors of size 1 (notes: only equality, extract and concat are supported).

### Long Description

Rewriter for "blasting" bit-vectors of size n into bit-vectors of size 1.
This rewriter only supports concat and extract operators.
This transformation is useful for handling benchmarks that contain
many BV equalities. 

_Remark_: other operators can be mapped into concat/extract by using
the simplifiers.

### Example

```z3
(declare-const x (_ BitVec 8))
(declare-const y (_ BitVec 4))
(declare-const z (_ BitVec 4))
(assert (= (concat y z) x))
    (apply bv1-blast)
```

### Parameters

 Parameter | Type | Description | Default
 ----------|------|-------------|--------
max_memory | unsigned int  |  (default: infty) maximum amount of memory in megabytes. | 4294967295
max_steps | unsigned int  |  (default: infty) maximum number of steps. | 4294967295


## Tactic bv_bound_chk

### Short Description

Attempts to detect inconsistencies of bounds on bv expressions.

### Notes 

* does not support proofs, does not support cores


## Tactic bvarray2uf

### Short Description

Tactic that rewrites bit-vector arrays into bit-vector
(uninterpreted) functions.

### Example

```z3
(declare-const a (Array (_ BitVec 32) (_ BitVec 32)))
(declare-const b (_ BitVec 32))
(declare-const c (_ BitVec 32))
(assert (= (select a b) c))
(apply bvarray2uf)
```

### Parameters

 Parameter | Type | Description | Default
 ----------|------|-------------|--------
produce_models | bool  |  model generation. | false


## Tactic card2bv

### Short Description

Tactic for converting Pseudo-Boolean constraints to bit-vectors.

### Long Description 

The tactic implements a set of standard methods for converting cardinality and Pseudo-Boolean constraints into bit-vector or propositional formulas
(using basic logical connectives, conjunction, disjunction, negation). The conversions from cardinality constraints are controlled
separately from the conversions from Pseudo-Boolean constraints using different parameters.

### Example

```z3
(declare-const a1 Bool)
(declare-const a2 Bool)
(declare-const a3 Bool)
(declare-const a4 Bool)
(declare-const a5 Bool)
(declare-const a6 Bool)
(push)
(assert ((_ at-most 1) a1 a2 a3 a4 a5 a6))
(assert ((_ at-most 2) a1 a2 a3 a4 a5 a6))
(apply (with card2bv :cardinality.encoding unate))
(apply (with card2bv :cardinality.encoding circuit))
(apply (with card2bv :cardinality.encoding ordered))
(apply (with card2bv :cardinality.encoding grouped))
(apply (with card2bv :cardinality.encoding bimander))
(pop)
(assert ((_ pbge 5 2 3 4 4 3 5) a1 a2 a3 a4 a5 a6))
(apply (with card2bv :pb.solver totalizer))
(apply (with card2bv :pb.solver sorting))
(apply (with card2bv :pb.solver binary_merge))
(apply (with card2bv :pb.solver bv))
(apply (with card2bv :pb.solver solver))
```

### Notes

* supports cores
* does not support proofs

### Parameters

 Parameter | Type | Description | Default
 ----------|------|-------------|--------
cardinality.encoding | symbol  |  encoding used for cardinality constraints: grouped, bimander, ordered, unate, circuit | none
keep_cardinality_constraints | bool  |  retain cardinality constraints for solver | true
pb.solver | symbol  |  encoding used for Pseudo-Boolean constraints: totalizer, sorting, binary_merge, bv, solver. PB constraints are retained if set to 'solver' | solver


## Tactic ctx-simplify

### Short Description:

The tactic performs simplifies sub-formulas using context built up by walking assertions and sub-formulas.

### Example
 
```z3
  (declare-const p Bool)
  (declare-const q Bool)
  (declare-const r Bool)
  (declare-fun f (Bool) Bool)
  (assert p)
  (assert (or (f p) (and r (or (not r) q))))
  (apply ctx-simplify)
```

### Notes

* supports proof terms with limited features


### Parameters

 Parameter | Type | Description | Default
 ----------|------|-------------|--------
max_depth | unsigned int  |  maximum term depth. | 1024
max_memory | unsigned int  |  (default: infty) maximum amount of memory in megabytes. | 4294967295
max_steps | unsigned int  |  (default: infty) maximum number of steps. | 4294967295
propagate_eq | bool  |  enable equality propagation from bounds. | false


## Tactic degree-shift

### Short Description

The procedure reduces the degrees of variables.

### Long Description
    
Basic idea: if goal $G$ contains a real variable $x$, $x$ occurs with degrees
$d_1, ..., d_k$ in $G$, and $n = \gcd(d_1, ..., d_k) > 1$.
Then, replace $x^n$ with a new fresh variable $y$.

### Example

```z3
(declare-const x Real)
(declare-const y Real)
(assert (> (+ (* x x x 4) (* x x 3)) 0))
(assert (= (* x x) (* y y)))
(apply degree-shift)
```

### Notes

* supports proofs and cores

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



## Tactic diff-neq

### Short Description

A specialized solver for integer problems using only constant bounds and differences to constants.

### Long Description

Solver for integer problems that contains literals of the form
```
       k <= x
       x <= k
       x - y != k
```

### Example

```z3
(declare-const x Int)
(declare-const y Int)
(assert (<= 0 x))
(assert (<= x 1))
(assert (<= 0 y))
(assert (<= y 1))
(assert (not (= (+ x (* -1 y)) -1)))
(assert (not (= (+ x (* -1 y)) 1)))
(assert (not (= (+ x (* -1 y)) 0)))
(apply diff-neq)
```

### Notes

* The tactic works only when the lower bounds are 0 and disequalities use multiplication with -1. Use normalize-bounds to ensure all lower bounds are 0.

### Parameters

 Parameter | Type | Description | Default
 ----------|------|-------------|--------
diff_neq_max_k | unsigned int  |  maximum variable upper bound for diff neq solver. | 1024


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



## Tactic dom-simplify

### Short Description

Apply dominator simplification rules

### Long Description

Dominator-based simplification is a context dependent simplification function that uses a dominator tree to control the number of paths it 
visits during simplification. The expression DAG may have an exponential number of paths, but only paths corresponding to a dominator
tree are visited. Since the paths selected by the dominator trees are limited, the simplifier may easily fail to simplify within a context. 

### Example

```z3
(declare-const a Bool)
(declare-const b Bool)
(assert (and a (or a b)))
(apply dom-simplify)
```



## Tactic dt2bv

### Short Description

Tactic that eliminates finite domain data-types.

### Example

```z3
(declare-datatypes ((Color 0)) (((Red) (Blue) (Green) (DarkBlue) (MetallicBlack) (MetallicSilver) (Silver) (Black))))
(declare-const x Color)
(declare-const y Color)
(assert (not (= x y)))
(assert (not (= x Red)))
(apply dt2bv)
```


## Tactic elim-predicates

### Short Description
Eliminates predicates and macros from a formula.

### Long Description
The tactic subsumes the functionality of `macro-finder` and `quasi-macros`.
Besides finding macros, it eliminates predicates using Davis-Putnam
resolution.

### Example

the predicate `p` occurs once positively. All negative occurrences of `p` are resolved against this positive occurrence.
The result of resolution is a set of equalities between arguments to `p`. The function `f` is replaced by a partial solution.

```
(declare-fun f (Int Int Int) Int)
(declare-fun p (Int) Bool)
(declare-const a Int)
(declare-const b Int)

(assert (forall ((x Int) (y Int)) (= (f x y (+ x y)) (* 2 x y))))
(assert (p (f 8 a (+ a 8))))
(assert (not (p (f 0 a (+ a 8)))))
(assert (not (p (f 2 a (+ a 8)))))
(assert (not (p (f 1 a (+ a b)))))
(apply elim-predicates)
```

### Notes

* support unsat cores
* does not support proofs


## Tactic elim-small-bv

### Short Description

Eliminate small, quantified bit-vectors by expansion

### Example

```z3
(declare-fun p ((_ BitVec 2)) Bool)
(assert (forall ((x (_ BitVec 2))) (p x)))
(apply elim-small-bv)
```

### Parameters

 Parameter | Type | Description | Default
 ----------|------|-------------|--------
max_bits | unsigned int  |  (default: 4) maximum bit-vector size of quantified bit-vectors to be eliminated. | 
max_memory | unsigned int  |  (default: infty) maximum amount of memory in megabytes. | 4294967295
max_steps | unsigned int  |  (default: infty) maximum number of steps. | 4294967295


## Tactic elim-term-ite

### Short Description:

Eliminate term if-then-else by adding 
new fresh auxiliary variables.


### Example
 
```z3
(declare-fun f (Int) Int)
(declare-fun p (Int) Bool)
(declare-const c1 Bool)
(declare-const c2 Bool)
(declare-const c3 Bool)
(declare-const e1 Int) 
(declare-const e2 Int) 
(declare-const e3 Int)
(declare-const e4 Int)
(assert (p (f (if c1 (if c2 e1 (if c3 e2 e3)) e4))))
(apply elim-term-ite) 
```

### Notes

* supports proof terms and unsat cores

### Parameters

 Parameter | Type | Description | Default
 ----------|------|-------------|--------
max_args | unsigned int  |  (default: 128) maximum number of arguments (per application) that will be considered by the greedy (quadratic) heuristic. | 
max_memory | unsigned int  |  (default: infty) maximum amount of memory in megabytes. | 4294967295
max_steps | unsigned int  |  (default: infty) maximum number of steps. | 4294967295


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
max_memory | unsigned int  |  (default: infty) maximum amount of memory in megabytes. | 4294967295
max_steps | unsigned int  |  (default: infty) maximum number of steps. | 4294967295


## Tactic eq2bv

### Short Description

Extract integer variables that are used as finite domain indicators.
The integer variables can only occur in equalities.

### Example

```z3
(declare-const x Int)
(declare-const y Int)
(assert (or (= x 5) (> y 3)))
(assert (or (= x 4) (= y 2)))
(apply eq2bv)
```

### Notes

* does not support proofs


## Tactic factor

### Short Description

Factor polynomials in equalities and inequalities.

### Example
```z3
(declare-const x Real)
(declare-const y Real)
(assert (> (* x x) (* x y)))
(apply factor)
```

### Parameters

 Parameter | Type | Description | Default
 ----------|------|-------------|--------
max_prime | unsigned int  |  (default: infty) Z3 polynomial factorization is composed of three steps: factorization in GF(p), lifting and search. This parameter limits the maximum prime number p to be used in the first step. | 
max_search_size | unsigned int  |  (default: infty) Z3 polynomial factorization is composed of three steps: factorization in GF(p), lifting and search. This parameter can be used to limit the search space. | 
num_primes | unsigned int  |  (default: 1) Z3 polynomial factorization is composed of three steps: factorization in GF(p), lifting and search. The search space may be reduced by factoring the polynomial in different GF(p)'s. This parameter specify the maximum number of finite factorizations to be considered, before lifiting and searching. | 
split_factors | bool  |  apply simplifications such as (= (* p1 p2) 0) --&gt; (or (= p1 0) (= p2 0)). | true


## Tactic fix-dl-var

### Short Description

Fix a difference logic variable to `0`.
If the problem is in the difference logic fragment, that is, all arithmetic terms
are of the form `(x + k)`, and the arithmetic atoms are of the
form `x - y <= k` or `x - y = k`. Then, we can set one variable to `0`.

This is useful because, many bounds can be exposed after this operation is performed.

### Example

```z3
(declare-const x Real)
(declare-const y Real)
(declare-const z Real)
(assert (<= (+ x (* -1.0 y)) 3.0))
(assert (<= (+ x (* -1.0 z)) 5.0))
(apply fix-dl-var)
```

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


## Tactic fm

### Short Description

Use Fourier-Motzkin to eliminate variables.
This strategy can handle conditional bounds
(i.e., clauses with at most one constraint).

The strategy mk_occf can be used to put the
formula in OCC form.

### Example

```z3
(declare-const x Real)
(declare-const y Real)
(declare-const z Real)
(declare-const u Real)
(declare-const v Real)
(declare-const w Real)
(declare-fun P (Real) Bool)
(assert (<= x (+ y (* 2.0 z))))
(assert (>= x (- y z)))
(assert (>= x (- y 3 (* 3 z))))
(assert (>= x 5))
(assert (<= x u))
(assert (>= x v))
(assert (P u))
(assert (P v))
(apply fm)
```

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
fm_cutoff1 | unsigned int  |  first cutoff for FM based on maximum number of lower/upper occurrences. | 8
fm_cutoff2 | unsigned int  |  second cutoff for FM based on num_lower * num_upper occurrences. | 256
fm_extra | unsigned int  |  max. increase on the number of inequalities for each FM variable elimination step. | 0
fm_limit | unsigned int  |  maximum number of constraints, monomials, clauses visited during FM. | 5000000
fm_occ | bool  |  consider inequalities occurring in clauses for FM. | false
fm_real_only | bool  |  consider only real variables for fourier-motzkin elimination. | true
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
produce_models | bool  |  model generation. | false
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
max_memory | unsigned int  |  (default: infty) maximum amount of memory in megabytes. | 4294967295
produce_models | bool  |  model generation. | false


## Tactic lia2card

### Short Description

Extract 0-1 integer variables used in 
cardinality and pseudo-Boolean constraints and replace them by Booleans.

### Example

```z3
(declare-const x Int)
(declare-const y Int)
(declare-const z Int)
(assert (<= 0 x))
(assert (<= 0 y))
(assert (<= 0 z))
(assert (>= 1 x))
(assert (>= 1 y))
(assert (>= 1 z))
(assert (>= (+ (* 5 x) (* -2 z) (* 3 y) 1) 4))
(apply lia2card)
```

### Notes

* The tactic does not (properly) support proofs or cores.

### Parameters

 Parameter | Type | Description | Default
 ----------|------|-------------|--------
compile_equality | bool  |  (default:false) compile equalities into pseudo-Boolean equality | 


## Tactic lia2pb

### Short Description

Reduce bounded LIA benchmark into 0-1 LIA benchmark.

### Example

```z3
(declare-const x Int)
(declare-const y Int)
(assert (<= 0 x))
(assert (<= x 5))
(assert (<= 0 y))
(assert (<= y 5))
(assert (>= (+ (* 2 x) y) 5))
(apply lia2pb)
```

### Parameters

 Parameter | Type | Description | Default
 ----------|------|-------------|--------
lia2pb_max_bits | unsigned int  |  (default: 32) maximum number of bits to be used (per variable) in lia2pb. | 
lia2pb_partial | bool  |  (default: false) partial lia2pb conversion. | 
lia2pb_total_bits | unsigned int  |  (default: 2048) total number of bits to be used (per problem) in lia2pb. | 


## Tactic max-bv-sharing

### Short Description

Use heuristics to maximize the sharing of bit-vector expressions such as adders and multipliers

### Long Description

Rewriter for "maximing" the number of shared terms.
The idea is to rewrite AC terms to maximize sharing.
This rewriter is particularly useful for reducing
the number of Adders and Multipliers before "bit-blasting".


## Tactic nla2bv

### Short Description

Convert quantified NIA problems to bounded bit-vector arithmetic problems.

### Example

```z3
(declare-const x Int)
(declare-const y Int)
(declare-const z Int)
(assert (= (* x x y) (*  2 z y y)))
(apply nla2bv)
```

### Notes

* The tactic creates an under-approximation (a stronger set of formulas)


### Parameters

 Parameter | Type | Description | Default
 ----------|------|-------------|--------
nla2bv_bv_size | unsigned int  |  default bit-vector size used by nla2bv tactic. | 4
nla2bv_divisor | unsigned int  |  nla2bv tactic parameter. | 2
nla2bv_max_bv_size | unsigned int  |  (default: inf) maximum bit-vector size used by nla2bv tactic | 
nla2bv_root | unsigned int  |  nla2bv tactic encodes reals into bit-vectors using expressions of the form a+b*sqrt(c), this parameter sets the value of c used in the encoding. | 2


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


## Tactic normalize-bounds

### Short Description

Replace $x$ with $x' + l$, when $l \leq x$
where $x'$ is a fresh variable.
Note that, after the transformation $0 \leq x'$.

### Example

```z3
(declare-const x Int)
(declare-const y Int)
(declare-const z Int)
(assert (<= 3 x))
(assert (<= (+ x y) z))
(apply normalize-bounds)
```

### Notes

* supports proofs and cores

### Parameters

 Parameter | Type | Description | Default
 ----------|------|-------------|--------
norm_int_only | bool  |  normalize only the bounds of integer constants. | true
produce_models | bool  |  model generation. | false


## Tactic occf

### Short Description

Put goal in one constraint per clause normal form 

### Long Description

Put clauses in the assertion set in
OOC (one constraint per clause) form.
Constraints occurring in formulas that
are not clauses are ignored.
The formula can be put into CNF by
using `mk_sat_preprocessor` strategy.

### Example

```z3
(declare-const x Int)
(declare-const y Int)

(assert (or (= x y) (> x (- y))))
(assert (or (= x y) (< x (- y))))
(apply occf)
```

### Notes

* Does not support proofs
* only clauses are considered


## Tactic pb2bv

### Short Description

Convert pseudo-boolean constraints to bit-vectors

### Example

```z3
(declare-const x Int)
(declare-const y Int)
(declare-const z Int)
(declare-const u Int)
(assert (<= 0 x))
(assert (<= 0 y))
(assert (<= 0 z))
(assert (<= 0 u))
(assert (<= x 1))
(assert (<= y 1))
(assert (<= z 1))
(assert (<= u 1))
(assert (>= (+ (* 3 x) (* 2 y) (* 2 z) (* 2 u)) 4))
(apply pb2bv)
```

### Parameters

 Parameter | Type | Description | Default
 ----------|------|-------------|--------
blast_distinct | bool  |  expand a distinct predicate into a quadratic number of disequalities | false
blast_distinct_threshold | unsigned int  |  when blast_distinct is true, only distinct expressions with less than this number of arguments are blasted | 4294967295
cardinality.encoding | symbol  |  encoding used for cardinality constraints: grouped, bimander, ordered, unate, circuit | none
elim_ite | bool  |  eliminate ite in favor of and/or | true
flat_and_or | bool  |  create nary applications for and,or | true
ite_extra_rules | bool  |  extra ite simplifications, these additional simplifications may reduce size locally but increase globally | true
keep_cardinality_constraints | bool  |  retain cardinality constraints (don't bit-blast them) and use built-in cardinality solver | false
local_ctx | bool  |  perform local (i.e., cheap) context simplifications | false
local_ctx_limit | unsigned int  |  limit for applying local context simplifier | 4294967295
max_memory | unsigned int  |  (default: infty) maximum amount of memory in megabytes. | 4294967295
pb.solver | symbol  |  encoding used for Pseudo-Boolean constraints: totalizer, sorting, binary_merge, bv, solver. PB constraints are retained if set to 'solver' | solver
pb2bv_all_clauses_limit | unsigned int  |  (default: 8) maximum number of literals for using equivalent CNF encoding of PB constraint. | 
pb2bv_cardinality_limit | unsigned int  |  (default: inf) limit for using arc-consistent cardinality constraint encoding. | 


## Tactic propagate-bv-bounds

### Short Description

Contextual bounds simplification tactic.

### Example

```z3
(declare-const x (_ BitVec 32))
(declare-const y (_ BitVec 32))
(declare-const z (_ BitVec 32))
(assert (bvule (_ bv4 32) x))
(assert (bvule x (_ bv24 32)))
(assert (or (bvule x (_ bv100 32)) (bvule (_ bv32 32) x)))
(apply propagate-bv-bounds)
```

### Notes

* assumes that bit-vector inequalities have been simplified to use bvule/bvsle

### Parameters

 Parameter | Type | Description | Default
 ----------|------|-------------|--------
max_depth | unsigned int  |  maximum term depth. | 1024
max_memory | unsigned int  |  (default: infty) maximum amount of memory in megabytes. | 4294967295
max_steps | unsigned int  |  (default: infty) maximum number of steps. | 4294967295
propagate_eq | bool  |  enable equality propagation from bounds. | false


## Tactic propagate-ineqs

### Short Description

Propagate ineqs/bounds, remove subsumed inequalities

### Long Description

This tactic performs the following tasks:

- Propagate bounds using the bound_propagator.
- Eliminate subsumed inequalities.
  - For example:
    `x - y >= 3` can be replaced with true if we know that `x >= 3` and `y <= 0`

 - Convert inequalities of the form `p <= k` and `p >= k` into `p = k`,
   where `p` is a polynomial and `k` is a constant.

This strategy assumes the input is in arith LHS mode.
This can be achieved by using option :arith-lhs true in the simplifier.

### Example
```z3
(declare-const x Int)
(declare-const y Int)
(declare-const z Int)
(declare-const u Int)
(declare-const v Int)
(declare-const w Int)
(assert (>= x 3))
(assert (<= y 0))
(assert (>= (- x y) 3))
(assert (>= (* u v w) 2))
(assert (<= (* v u w) 2))
(apply (and-then simplify propagate-ineqs))
```


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
max_rounds | unsigned int  |  maximum number of rounds. | 4
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


## Tactic purify-arith

### Short Description

Eliminate unnecessary operators: -, /, div, mod, rem, is-int, to-int, ^, root-objects.
These operators can be replaced by introcing fresh variables and using multiplication and addition.

### Example
```z3
(declare-const x Int)
(declare-const y Int)
(declare-const z Int)
(declare-const u Int)
(declare-const v Int)
(declare-const w Int)
(assert (= (div x 3) y))
(assert (= (mod z 4) u))
(assert (> (mod v w) u))
(apply purify-arith)
```

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
complete | bool  |  add constraints to make sure that any interpretation of a underspecified arithmetic operators is a function. The result will include additional uninterpreted functions/constants: /0, div0, mod0, 0^0, neg-root | true
elim_and | bool  |  conjunctions are rewritten using negation and disjunctions | false
elim_inverses | bool  |  eliminate inverse trigonometric functions (asin, acos, atan). | true
elim_ite | bool  |  eliminate ite in favor of and/or | true
elim_rem | bool  |  replace (rem x y) with (ite (&gt;= y 0) (mod x y) (- (mod x y))). | false
elim_root_objects | bool  |  eliminate root objects. | true
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
ignore_labels | bool  |  remove/ignore labels in the input formula, this option is ignored if proofs are enabled | false
ignore_patterns_on_ground_qbody | bool  |  ignores patterns on quantifiers that don't mention their bound variables. | true
ite_extra_rules | bool  |  extra ite simplifications, these additional simplifications may reduce size locally but increase globally | true
local_ctx | bool  |  perform local (i.e., cheap) context simplifications | false
local_ctx_limit | unsigned int  |  limit for applying local context simplifier | 4294967295
max_degree | unsigned int  |  max degree of algebraic numbers (and power operators) processed by simplifier. | 64
max_memory | unsigned int  |  maximum amount of memory in megabytes | 4294967295
max_steps | unsigned int  |  maximum number of steps | 4294967295
mode | symbol  |  NNF translation mode: skolem (skolem normal form), quantifiers (skolem normal form + quantifiers in NNF), full | skolem
mul2concat | bool  |  replace multiplication by a power of two into a concatenation | false
mul_to_power | bool  |  collpase (* t ... t) into (^ t k), it is ignored if expand_power is true. | false
pull_cheap_ite | bool  |  pull if-then-else terms when cheap. | false
push_ite_arith | bool  |  push if-then-else over arithmetic terms. | false
push_ite_bv | bool  |  push if-then-else over bit-vector terms. | false
push_to_real | bool  |  distribute to_real over * and +. | true
rewrite_patterns | bool  |  rewrite patterns. | false
sk_hack | bool  |  hack for VCC | false
som | bool  |  put polynomials in sum-of-monomials form | false
som_blowup | unsigned int  |  maximum increase of monomials generated when putting a polynomial in sum-of-monomials normal form | 10
sort_store | bool  |  sort nested stores when the indices are known to be different | false
sort_sums | bool  |  sort the arguments of + application. | false
split_concat_eq | bool  |  split equalities of the form (= (concat t1 t2) t3) | false


## Tactic recover-01

### Short Description

Recover 01 variables from propositional constants.

### Long Description

Search for clauses of the form

```
    p  or q or  x = 0
    ~p or q or  x = k1
    p  or ~q or x = k2
    ~p or ~q or x = k1+k2
```

Then, replaces 


* `x` with `k1*y1 + k2*y2`
* `p` with `y1 = 1`
* `q` with `y2 = 1`

where `y1` and `y2` are fresh 01 variables.

The clauses are also removed.

### Example

```z3
(declare-const p Bool)
(declare-const q Bool)
(declare-const x Int)
(assert (or p q (= x 0)))
(assert (or (not p) q (= x 3)))
(assert (or p (not q) (= x 6)))
(assert (or (not p) (not q) (= x 9)))
(apply recover-01)
```

### Notes

* does not support proofs, does not support cores

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
recover_01_max_bits | unsigned int  |  maximum number of bits to consider in a clause. | 10
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


## Tactic reduce-bv-size

### Short Description

Rry to reduce bit-vector sizes using inequalities.

### Long Description

Reduce the number of bits used to encode constants, by using signed bounds.
Example: suppose $x$ is a bit-vector of size 8, and we have
signed bounds for $x$ such that:

```
        -2 <= x <= 2
```

Then, $x$ can be replaced by  `((sign-extend 5) k)`
where `k` is a fresh bit-vector constant of size 3.

### Example

```z3
(declare-const x (_ BitVec 32))
(assert (bvsle (bvneg (_ bv2 32)) x))
(assert (bvsle x (_ bv2 32)))
(assert (= (bvmul x x) (_ bv9 32)))
(apply (and-then simplify reduce-bv-size))
```

### Notes

* does not support proofs, nor unsat cores


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

The simplifier is also exposed as a stand-alone command.
There are several options to control its behavior.

```z3
(declare-const x Int)
(declare-const y Int)
(declare-const z Int)
(declare-const u Int)
(declare-fun p (Int) Bool)
(assert (p (* (+ x y) (+ z u))))
(apply simplify)
(apply (with simplify :som true))

(simplify (* (+ x y) (+ z u)) :som false)
(simplify (* (+ x y) (+ z u)) :som true)
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
context_solve | bool  |  solve equalities under disjunctions. | false
ite_solver | bool  |  use if-then-else solver. | true
solve_eqs_max_occs | unsigned int  |  (default: infty) maximum number of occurrences for considering a variable for gaussian eliminations. | 4294967295
theory_solver | bool  |  theory solvers. | true


## Tactic symmetry-reduce

### Short Description

Apply symmetry reduction

### Long Description

The tactic applies symmetry reduction for uninterpreted functions and equalities.
It applies a straight-forward adaption of an algorithm proposed for veriT.



## Tactic tseitin-cnf

### Short Description

Convert goal into CNF using tseitin-like encoding (note: quantifiers are ignored).

### Long Description

Puts an assertion set in CNF.
Auxiliary variables are used to avoid blowup.

Features:
    
- Efficient encoding is used for commonly used patterns such as:
       `(iff a (iff b c))`
       `(or (not (or a b)) (not (or a c)) (not (or b c)))`

- Efficient encoding is used for chains of if-then-elses 

- Distributivity is applied to non-shared nodes if the blowup is acceptable.
    
- The features above can be disabled/enabled using parameters.

- The assertion-set is only modified if the resultant set of clauses is "acceptable".

Notes: 
    
- Term-if-then-else expressions are not handled by this strategy. 
This kind of expression should be processed by other strategies.

- Quantifiers are treated as "theory" atoms. They are viewed
as propositional variables by this strategy.
    
- The assertion set may contain free variables. 

- This strategy assumes the assertion_set_rewriter was used before invoking it.
In particular, it is more effective when "and" operators
were eliminated.

### Example

```z3
(declare-const a Bool)
(declare-const b Bool)
(declare-const c Bool)

(assert (= a (= b c)))
(apply tseitin-cnf)
```

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
common_patterns | bool  |  (default: true) minimize the number of auxiliary variables during CNF encoding by identifing commonly used patterns | 
distributivity | bool  |  (default: true) minimize the number of auxiliary variables during CNF encoding by applying distributivity over unshared subformulas | 
distributivity_blowup | unsigned int  |  (default: 32) maximum overhead for applying distributivity during CNF encoding | 
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
ite_chaing | bool  |  (default: true) minimize the number of auxiliary variables during CNF encoding by identifing if-then-else chains | 
ite_extra | bool  |  (default: true) add redundant clauses (that improve unit propagation) when encoding if-then-else formulas | 
ite_extra_rules | bool  |  extra ite simplifications, these additional simplifications may reduce size locally but increase globally | true
local_ctx | bool  |  perform local (i.e., cheap) context simplifications | false
local_ctx_limit | unsigned int  |  limit for applying local context simplifier | 4294967295
max_degree | unsigned int  |  max degree of algebraic numbers (and power operators) processed by simplifier. | 64
max_memory | unsigned int  |  (default: infty) maximum amount of memory in megabytes. | 4294967295
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

