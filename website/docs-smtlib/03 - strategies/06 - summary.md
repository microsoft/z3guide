---
title: Tactics Summary
sidebar_position: 6
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


## Tactic cofactor-term-ite

### Short Description
Eliminate (ground) term if-then-else's using cofactors.
It hoists nested if-then-else expressions inside terms into the top level of the formula.

### Notes

* does not support proofs, does not support cores

### Parameters

 Parameter | Type | Description | Default
 ----------|------|-------------|--------
cofactor_equalities | bool  |  (default: true) use equalities to rewrite bodies of ite-expressions. This is potentially expensive. | 


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


## Tactic ctx-solver-simplify

### Short Description

A heavy handed version of `ctx-simplify`. It applies SMT checks on sub-formulas to check
if they can be simplified to `true` or `false` within their context.
Note that a sub-formula may occur within multiple contexts due to shared sub-terms.
In this case the tactic is partial and simplifies a limited number of context occurrences.


### Parameters

 Parameter | Type | Description | Default
 ----------|------|-------------|--------
arith.auto_config_simplex | bool  |  force simplex solver in auto_config | false
arith.bprop_on_pivoted_rows | bool  |  propagate bounds on rows changed by the pivot operation | true
arith.branch_cut_ratio | unsigned int  |  branch/cut ratio for linear integer arithmetic | 2
arith.dump_lemmas | bool  |  dump arithmetic theory lemmas to files | false
arith.eager_eq_axioms | bool  |  eager equality axioms | true
arith.enable_hnf | bool  |  enable hnf (Hermite Normal Form) cuts | true
arith.greatest_error_pivot | bool  |  Pivoting strategy | false
arith.ignore_int | bool  |  treat integer variables as real | false
arith.int_eq_branch | bool  |  branching using derived integer equations | false
arith.min | bool  |  minimize cost | false
arith.nl | bool  |  (incomplete) nonlinear arithmetic support based on Groebner basis and interval propagation, relevant only if smt.arith.solver=2 | true
arith.nl.branching | bool  |  branching on integer variables in non linear clusters, relevant only if smt.arith.solver=2 | true
arith.nl.delay | unsigned int  |  number of calls to final check before invoking bounded nlsat check | 500
arith.nl.expp | bool  |  expensive patching | false
arith.nl.gr_q | unsigned int  |  grobner's quota | 10
arith.nl.grobner | bool  |  run grobner's basis heuristic | true
arith.nl.grobner_cnfl_to_report | unsigned int  |  grobner's maximum number of conflicts to report | 1
arith.nl.grobner_eqs_growth | unsigned int  |  grobner's number of equalities growth  | 10
arith.nl.grobner_expr_degree_growth | unsigned int  |  grobner's maximum expr degree growth | 2
arith.nl.grobner_expr_size_growth | unsigned int  |  grobner's maximum expr size growth | 2
arith.nl.grobner_frequency | unsigned int  |  grobner's call frequency | 4
arith.nl.grobner_max_simplified | unsigned int  |  grobner's maximum number of simplifications | 10000
arith.nl.grobner_subs_fixed | unsigned int  |  0 - no subs, 1 - substitute, 2 - substitute fixed zeros only | 1
arith.nl.horner | bool  |  run horner's heuristic | true
arith.nl.horner_frequency | unsigned int  |  horner's call frequency | 4
arith.nl.horner_row_length_limit | unsigned int  |  row is disregarded by the heuristic if its length is longer than the value | 10
arith.nl.horner_subs_fixed | unsigned int  |  0 - no subs, 1 - substitute, 2 - substitute fixed zeros only | 2
arith.nl.nra | bool  |  call nra_solver when incremental linearization does not produce a lemma, this option is ignored when arith.nl=false, relevant only if smt.arith.solver=6 | true
arith.nl.order | bool  |  run order lemmas | true
arith.nl.rounds | unsigned int  |  threshold for number of (nested) final checks for non linear arithmetic, relevant only if smt.arith.solver=2 | 1024
arith.nl.tangents | bool  |  run tangent lemmas | true
arith.print_ext_var_names | bool  |  print external variable names | false
arith.print_stats | bool  |  print statistic | false
arith.propagate_eqs | bool  |  propagate (cheap) equalities | true
arith.propagation_mode | unsigned int  |  0 - no propagation, 1 - propagate existing literals, 2 - refine finite bounds | 1
arith.random_initial_value | bool  |  use random initial values in the simplex-based procedure for linear arithmetic | false
arith.rep_freq | unsigned int  |  the report frequency, in how many iterations print the cost and other info | 0
arith.simplex_strategy | unsigned int  |  simplex strategy for the solver | 0
arith.solver | unsigned int  |  arithmetic solver: 0 - no solver, 1 - bellman-ford based solver (diff. logic only), 2 - simplex based solver, 3 - floyd-warshall based solver (diff. logic only) and no theory combination 4 - utvpi, 5 - infinitary lra, 6 - lra solver | 6
array.extensional | bool  |  extensional array theory | true
array.weak | bool  |  weak array theory | false
auto_config | bool  |  automatically configure solver | true
bound_simplifier | bool  |  apply bounds simplification during pre-processing | true
bv.delay | bool  |  delay internalize expensive bit-vector operations | false
bv.enable_int2bv | bool  |  enable support for int2bv and bv2int operators | true
bv.eq_axioms | bool  |  enable redundant equality axioms for bit-vectors | true
bv.reflect | bool  |  create enode for every bit-vector term | true
bv.size_reduce | bool  |  pre-processing; turn assertions that set the upper bits of a bit-vector to constants into a substitution that replaces the bit-vector with constant bits. Useful for minimizing circuits as many input bits to circuits are constant | false
bv.watch_diseq | bool  |  use watch lists instead of eager axioms for bit-vectors | false
candidate_models | bool  |  create candidate models even when quantifier or theory reasoning is incomplete | false
case_split | unsigned int  |  0 - case split based on variable activity, 1 - similar to 0, but delay case splits created during the search, 2 - similar to 0, but cache the relevancy, 3 - case split based on relevancy (structural splitting), 4 - case split on relevancy and activity, 5 - case split on relevancy and current goal, 6 - activity-based case split with theory-aware branching activity | 1
clause_proof | bool  |  record a clausal proof | false
core.extend_nonlocal_patterns | bool  |  extend unsat cores with literals that have quantifiers with patterns that contain symbols which are not in the quantifier's body | false
core.extend_patterns | bool  |  extend unsat core with literals that trigger (potential) quantifier instances | false
core.extend_patterns.max_distance | unsigned int  |  limits the distance of a pattern-extended unsat core | 4294967295
core.minimize | bool  |  minimize unsat core produced by SMT context | false
core.validate | bool  |  [internal] validate unsat core produced by SMT context. This option is intended for debugging | false
cube_depth | unsigned int  |  cube depth. | 1
dack | unsigned int  |  0 - disable dynamic ackermannization, 1 - expand Leibniz's axiom if a congruence is the root of a conflict, 2 - expand Leibniz's axiom if a congruence is used during conflict resolution | 1
dack.eq | bool  |  enable dynamic ackermannization for transtivity of equalities | false
dack.factor | double  |  number of instance per conflict | 0.1
dack.gc | unsigned int  |  Dynamic ackermannization garbage collection frequency (per conflict) | 2000
dack.gc_inv_decay | double  |  Dynamic ackermannization garbage collection decay | 0.8
dack.threshold | unsigned int  |   number of times the congruence rule must be used before Leibniz's axiom is expanded | 10
delay_units | bool  |  if true then z3 will not restart when a unit clause is learned | false
delay_units_threshold | unsigned int  |  maximum number of learned unit clauses before restarting, ignored if delay_units is false | 32
dt_lazy_splits | unsigned int  |  How lazy datatype splits are performed: 0- eager, 1- lazy for infinite types, 2- lazy | 1
elim_unconstrained | bool  |  pre-processing: eliminate unconstrained subterms | true
ematching | bool  |  E-Matching based quantifier instantiation | true
induction | bool  |  enable generation of induction lemmas | false
lemma_gc_strategy | unsigned int  |  lemma garbage collection strategy: 0 - fixed, 1 - geometric, 2 - at restart, 3 - none | 0
logic | symbol  |  logic used to setup the SMT solver | 
macro_finder | bool  |  try to find universally quantified formulas that can be viewed as macros | false
max_conflicts | unsigned int  |  maximum number of conflicts before giving up. | 4294967295
mbqi | bool  |  model based quantifier instantiation (MBQI) | true
mbqi.force_template | unsigned int  |  some quantifiers can be used as templates for building interpretations for functions. Z3 uses heuristics to decide whether a quantifier will be used as a template or not. Quantifiers with weight &gt;= mbqi.force_template are forced to be used as a template | 10
mbqi.id | string  |  Only use model-based instantiation for quantifiers with id's beginning with string | 
mbqi.max_cexs | unsigned int  |  initial maximal number of counterexamples used in MBQI, each counterexample generates a quantifier instantiation | 1
mbqi.max_cexs_incr | unsigned int  |  increment for MBQI_MAX_CEXS, the increment is performed after each round of MBQI | 0
mbqi.max_iterations | unsigned int  |  maximum number of rounds of MBQI | 1000
mbqi.trace | bool  |  generate tracing messages for Model Based Quantifier Instantiation (MBQI). It will display a message before every round of MBQI, and the quantifiers that were not satisfied | false
pb.conflict_frequency | unsigned int  |  conflict frequency for Pseudo-Boolean theory | 1000
pb.learn_complements | bool  |  learn complement literals for Pseudo-Boolean theory | true
phase_caching_off | unsigned int  |  number of conflicts while phase caching is off | 100
phase_caching_on | unsigned int  |  number of conflicts while phase caching is on | 400
phase_selection | unsigned int  |  phase selection heuristic: 0 - always false, 1 - always true, 2 - phase caching, 3 - phase caching conservative, 4 - phase caching conservative 2, 5 - random, 6 - number of occurrences, 7 - theory | 3
propagate_values | bool  |  pre-processing: propagate values | true
pull_nested_quantifiers | bool  |  pre-processing: pull nested quantifiers | false
q.lift_ite | unsigned int  |  0 - don not lift non-ground if-then-else, 1 - use conservative ite lifting, 2 - use full lifting of if-then-else under quantifiers | 0
q.lite | bool  |  Use cheap quantifier elimination during pre-processing | false
qi.cost | string  |  expression specifying what is the cost of a given quantifier instantiation | (+ weight generation)
qi.eager_threshold | double  |  threshold for eager quantifier instantiation | 10.0
qi.lazy_threshold | double  |  threshold for lazy quantifier instantiation | 20.0
qi.max_instances | unsigned int  |  maximum number of quantifier instantiations | 4294967295
qi.max_multi_patterns | unsigned int  |  specify the number of extra multi patterns | 0
qi.profile | bool  |  profile quantifier instantiation | false
qi.profile_freq | unsigned int  |  how frequent results are reported by qi.profile | 4294967295
qi.quick_checker | unsigned int  |  specify quick checker mode, 0 - no quick checker, 1 - using unsat instances, 2 - using both unsat and no-sat instances | 0
quasi_macros | bool  |  try to find universally quantified formulas that are quasi-macros | false
random_seed | unsigned int  |  random seed for the smt solver | 0
refine_inj_axioms | bool  |  pre-processing: refine injectivity axioms | true
relevancy | unsigned int  |  relevancy propagation heuristic: 0 - disabled, 1 - relevancy is tracked by only affects quantifier instantiation, 2 - relevancy is tracked, and an atom is only asserted if it is relevant | 2
restart.max | unsigned int  |  maximal number of restarts. | 4294967295
restart_factor | double  |  when using geometric (or inner-outer-geometric) progression of restarts, it specifies the constant used to multiply the current restart threshold | 1.1
restart_strategy | unsigned int  |  0 - geometric, 1 - inner-outer-geometric, 2 - luby, 3 - fixed, 4 - arithmetic | 1
restricted_quasi_macros | bool  |  try to find universally quantified formulas that are restricted quasi-macros | false
seq.max_unfolding | unsigned int  |  maximal unfolding depth for checking string equations and regular expressions | 1000000000
seq.min_unfolding | unsigned int  |  initial bound for strings whose lengths are bounded by iterative deepening. Set this to a higher value if there are only models with larger string lengths | 1
seq.split_w_len | bool  |  enable splitting guided by length constraints | true
seq.validate | bool  |  enable self-validation of theory axioms created by seq theory | false
solve_eqs | bool  |  pre-processing: solve equalities | true
str.aggressive_length_testing | bool  |  prioritize testing concrete length values over generating more options | false
str.aggressive_unroll_testing | bool  |  prioritize testing concrete regex unroll counts over generating more options | true
str.aggressive_value_testing | bool  |  prioritize testing concrete string constant values over generating more options | false
str.fast_length_tester_cache | bool  |  cache length tester constants instead of regenerating them | false
str.fast_value_tester_cache | bool  |  cache value tester constants instead of regenerating them | true
str.fixed_length_naive_cex | bool  |  construct naive counterexamples when fixed-length model construction fails for a given length assignment (Z3str3 only) | true
str.fixed_length_refinement | bool  |  use abstraction refinement in fixed-length equation solver (Z3str3 only) | false
str.overlap_priority | double  |  theory-aware priority for overlapping variable cases; use smt.theory_aware_branching=true | -0.1
str.regex_automata_difficulty_threshold | unsigned int  |  difficulty threshold for regex automata heuristics | 1000
str.regex_automata_failed_automaton_threshold | unsigned int  |  number of failed automaton construction attempts after which a full automaton is automatically built | 10
str.regex_automata_failed_intersection_threshold | unsigned int  |  number of failed automaton intersection attempts after which intersection is always computed | 10
str.regex_automata_intersection_difficulty_threshold | unsigned int  |  difficulty threshold for regex intersection heuristics | 1000
str.regex_automata_length_attempt_threshold | unsigned int  |  number of length/path constraint attempts before checking unsatisfiability of regex terms | 10
str.string_constant_cache | bool  |  cache all generated string constants generated from anywhere in theory_str | true
str.strong_arrangements | bool  |  assert equivalences instead of implications when generating string arrangement axioms | true
string_solver | symbol  |  solver for string/sequence theories. options are: 'z3str3' (specialized string solver), 'seq' (sequence solver), 'auto' (use static features to choose best solver), 'empty' (a no-op solver that forces an answer unknown if strings were used), 'none' (no solver) | seq
theory_aware_branching | bool  |  Allow the context to use extra information from theory solvers regarding literal branching prioritization. | false
theory_case_split | bool  |  Allow the context to use heuristics involving theory case splits, which are a set of literals of which exactly one can be assigned True. If this option is false, the context will generate extra axioms to enforce this instead. | false
threads | unsigned int  |  maximal number of parallel threads. | 1
threads.cube_frequency | unsigned int  |  frequency for using cubing | 2
threads.max_conflicts | unsigned int  |  maximal number of conflicts between rounds of cubing for parallel SMT | 400


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

```z3
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


## Tactic euf-completion

### Short Description

Uses the ground equalities as a rewrite system. The formulas are simplified
using the rewrite system. 

### Long Description

The tactic uses congruence closure to represent and orient the rewrite system. Equalities from the formula
are inserted in the an E-graph (congruence closure structure) and then a representative that is most shallow
is extracted.



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

The tactic occf can be used to put the
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


## Tactic fpa2bv

### Short Description
Converts floating points to bit-vector representation.


## Tactic horn

### Short Description

Solve a set of Horn clauses using the SPACER engine.

### Long Description

The SPACER engine is specialized to solving Constrained Horn Clauses.
This tactic instructs 

## Tactic horn-simplify

### Short Description

Apply pre-processing simplification rules to a set of Horn clauses

### Long Description
This tactic exposes pre-processing simplification rules for Constrained Horn Clauses.
They include a repertoire of simplification options that can be controlled by toggling
the `fp` parameters.

### Parameters

 Parameter | Type | Description | Default
 ----------|------|-------------|--------
bmc.linear_unrolling_depth | unsigned int  |  Maximal level to explore | 4294967295
ctrl_c | bool  |  enable interrupts from ctrl-c | true
datalog.all_or_nothing_deltas | bool  |  compile rules so that it is enough for the delta relation in union and widening operations to determine only whether the updated relation was modified or not | false
datalog.check_relation | symbol  |  name of default relation to check. operations on the default relation will be verified using SMT solving | null
datalog.compile_with_widening | bool  |  widening will be used to compile recursive rules | false
datalog.dbg_fpr_nonempty_relation_signature | bool  |  if true, finite_product_relation will attempt to avoid creating inner relation with empty signature by putting in half of the table columns, if it would have been empty otherwise | false
datalog.default_relation | symbol  |  default relation implementation: external_relation, pentagon | pentagon
datalog.default_table | symbol  |  default table implementation: sparse, hashtable, bitvector, interval | sparse
datalog.default_table_checked | bool  |  if true, the default table will be default_table inside a wrapper that checks that its results are the same as of default_table_checker table | false
datalog.default_table_checker | symbol  |  see default_table_checked | null
datalog.explanations_on_relation_level | bool  |  if true, explanations are generated as history of each relation, rather than per fact (generate_explanations must be set to true for this option to have any effect) | false
datalog.generate_explanations | bool  |  produce explanations for produced facts when using the datalog engine | false
datalog.initial_restart_timeout | unsigned int  |  length of saturation run before the first restart (in ms), zero means no restarts | 0
datalog.magic_sets_for_queries | bool  |  magic set transformation will be used for queries | false
datalog.output_profile | bool  |  determines whether profile information should be output when outputting Datalog rules or instructions | false
datalog.print.tuples | bool  |  determines whether tuples for output predicates should be output | true
datalog.profile_timeout_milliseconds | unsigned int  |  instructions and rules that took less than the threshold will not be printed when printed the instruction/rule list | 0
datalog.similarity_compressor | bool  |  rules that differ only in values of constants will be merged into a single rule | true
datalog.similarity_compressor_threshold | unsigned int  |  if similarity_compressor is on, this value determines how many similar rules there must be in order for them to be merged | 11
datalog.subsumption | bool  |  if true, removes/filters predicates with total transitions | true
datalog.timeout | unsigned int  |  Time limit used for saturation | 0
datalog.unbound_compressor | bool  |  auxiliary relations will be introduced to avoid unbound variables in rule heads | true
datalog.use_map_names | bool  |  use names from map files when displaying tuples | true
engine | symbol  |  Select: auto-config, datalog, bmc, spacer | auto-config
generate_proof_trace | bool  |  trace for 'sat' answer as proof object | false
print_aig | symbol  |  Dump clauses in AIG text format (AAG) to the given file name | 
print_answer | bool  |  print answer instance(s) to query | false
print_boogie_certificate | bool  |  print certificate for reachability or non-reachability using a format understood by Boogie | false
print_certificate | bool  |  print certificate for reachability or non-reachability | false
print_fixedpoint_extensions | bool  |  use SMT-LIB2 fixedpoint extensions, instead of pure SMT2, when printing rules | true
print_low_level_smt2 | bool  |  use (faster) low-level SMT2 printer (the printer is scalable but the result may not be as readable) | false
print_statistics | bool  |  print statistics | false
print_with_variable_declarations | bool  |  use variable declarations when displaying rules (instead of attempting to use original names) | true
spacer.arith.solver | unsigned int  |  arithmetic solver: 0 - no solver, 1 - bellman-ford based solver (diff. logic only), 2 - simplex based solver, 3 - floyd-warshall based solver (diff. logic only) and no theory combination 4 - utvpi, 5 - infinitary lra, 6 - lra solver | 2
spacer.blast_term_ite_inflation | unsigned int  |  Maximum inflation for non-Boolean ite-terms expansion: 0 (none), k (multiplicative) | 3
spacer.ctp | bool  |  Enable counterexample-to-pushing | true
spacer.dump_benchmarks | bool  |  Dump SMT queries as benchmarks | false
spacer.dump_threshold | double  |  Threshold in seconds on dumping benchmarks | 5.0
spacer.elim_aux | bool  |  Eliminate auxiliary variables in reachability facts | true
spacer.eq_prop | bool  |  Enable equality and bound propagation in arithmetic | true
spacer.expand_bnd | bool  |  Enable expand-bound lemma generalization | false
spacer.gg.concretize | bool  |  Enable global guidance concretize | true
spacer.gg.conjecture | bool  |  Enable global guidance conjecture | true
spacer.gg.subsume | bool  |  Enable global guidance subsume | true
spacer.global | bool  |  Enable global guidance | false
spacer.gpdr | bool  |  Use GPDR solving strategy for non-linear CHC | false
spacer.gpdr.bfs | bool  |  Use BFS exploration strategy for expanding model search | true
spacer.ground_pobs | bool  |  Ground pobs by using values from a model | true
spacer.iuc | unsigned int  |  0 = use old implementation of unsat-core-generation, 1 = use new implementation of IUC generation, 2 = use new implementation of IUC + min-cut optimization | 1
spacer.iuc.arith | unsigned int  |  0 = use simple Farkas plugin, 1 = use simple Farkas plugin with constant from other partition (like old unsat-core-generation),2 = use Gaussian elimination optimization (broken), 3 = use additive IUC plugin | 1
spacer.iuc.debug_proof | bool  |  prints proof used by unsat-core-learner for debugging purposes (debugging) | false
spacer.iuc.old_hyp_reducer | bool  |  use old hyp reducer instead of new implementation, for debugging only | false
spacer.iuc.print_farkas_stats | bool  |  prints for each proof how many Farkas lemmas it contains and how many of these participate in the cut (for debugging) | false
spacer.iuc.split_farkas_literals | bool  |  Split Farkas literals | false
spacer.keep_proxy | bool  |  keep proxy variables (internal parameter) | true
spacer.logic | symbol  |  SMT-LIB logic to configure internal SMT solvers | 
spacer.max_level | unsigned int  |  Maximum level to explore | 4294967295
spacer.max_num_contexts | unsigned int  |  maximal number of contexts to create | 500
spacer.mbqi | bool  |  Enable mbqi | true
spacer.min_level | unsigned int  |  Minimal level to explore | 0
spacer.native_mbp | bool  |  Use native mbp of Z3 | true
spacer.order_children | unsigned int  |  SPACER: order of enqueuing children in non-linear rules : 0 (original), 1 (reverse), 2 (random) | 0
spacer.p3.share_invariants | bool  |  Share invariants lemmas | false
spacer.p3.share_lemmas | bool  |  Share frame lemmas | false
spacer.propagate | bool  |  Enable propagate/pushing phase | true
spacer.push_pob | bool  |  push blocked pobs to higher level | false
spacer.push_pob_max_depth | unsigned int  |  Maximum depth at which push_pob is enabled | 4294967295
spacer.q3 | bool  |  Allow quantified lemmas in frames | true
spacer.q3.instantiate | bool  |  Instantiate quantified lemmas | true
spacer.q3.qgen.normalize | bool  |  normalize cube before quantified generalization | true
spacer.q3.use_qgen | bool  |  use quantified lemma generalizer | false
spacer.random_seed | unsigned int  |  Random seed to be used by SMT solver | 0
spacer.reach_dnf | bool  |  Restrict reachability facts to DNF | true
spacer.reset_pob_queue | bool  |  SPACER: reset pob obligation queue when entering a new level | true
spacer.restart_initial_threshold | unsigned int  |  Initial threshold for restarts | 10
spacer.restarts | bool  |  Enable resetting obligation queue | false
spacer.simplify_lemmas_post | bool  |  simplify derived lemmas after inductive propagation | false
spacer.simplify_lemmas_pre | bool  |  simplify derived lemmas before inductive propagation | false
spacer.simplify_pob | bool  |  simplify pobs by removing redundant constraints | false
spacer.trace_file | symbol  |  Log file for progress events | 
spacer.use_array_eq_generalizer | bool  |  SPACER: attempt to generalize lemmas with array equalities | true
spacer.use_bg_invs | bool  |  Enable external background invariants | false
spacer.use_derivations | bool  |  SPACER: using derivation mechanism to cache intermediate results for non-linear rules | true
spacer.use_euf_gen | bool  |  Generalize lemmas and pobs using implied equalities | false
spacer.use_inc_clause | bool  |  Use incremental clause to represent trans | true
spacer.use_inductive_generalizer | bool  |  generalize lemmas using induction strengthening | true
spacer.use_iuc | bool  |  Enable Interpolating Unsat Core(IUC) for lemma generalization | true
spacer.use_lemma_as_cti | bool  |  SPACER: use a lemma instead of a CTI in flexible_trace | false
spacer.use_lim_num_gen | bool  |  Enable limit numbers generalizer to get smaller numbers | false
spacer.validate_lemmas | bool  |  Validate each lemma after generalization | false
spacer.weak_abs | bool  |  Weak abstraction | true
tab.selection | symbol  |  selection method for tabular strategy: weight (default), first, var-use | weight
timeout | unsigned int  |  (default: infty) timeout in milliseconds. | 4294967295
validate | bool  |  validate result (by proof checking or model checking) | false
xform.array_blast | bool  |  try to eliminate local array terms using Ackermannization -- some array terms may remain | false
xform.array_blast_full | bool  |  eliminate all local array variables by QE | false
xform.bit_blast | bool  |  bit-blast bit-vectors | false
xform.coalesce_rules | bool  |  coalesce rules | false
xform.coi | bool  |  use cone of influence simplification | true
xform.compress_unbound | bool  |  compress tails with unbound variables | true
xform.elim_term_ite | bool  |  Eliminate term-ite expressions | false
xform.elim_term_ite.inflation | unsigned int  |  Maximum inflation for non-Boolean ite-terms blasting: 0 (none), k (multiplicative) | 3
xform.fix_unbound_vars | bool  |  fix unbound variables in tail | false
xform.inline_eager | bool  |  try eager inlining of rules | true
xform.inline_linear | bool  |  try linear inlining method | true
xform.inline_linear_branch | bool  |  try linear inlining method with potential expansion | false
xform.instantiate_arrays | bool  |  Transforms P(a) into P(i, a[i] a) | false
xform.instantiate_arrays.enforce | bool  |  Transforms P(a) into P(i, a[i]), discards a from predicate | false
xform.instantiate_arrays.nb_quantifier | unsigned int  |  Gives the number of quantifiers per array | 1
xform.instantiate_arrays.slice_technique | symbol  |  &lt;no-slicing&gt;=&gt; GetId(i) = i, &lt;smash&gt; =&gt; GetId(i) = true | no-slicing
xform.instantiate_quantifiers | bool  |  instantiate quantified Horn clauses using E-matching heuristic | false
xform.magic | bool  |  perform symbolic magic set transformation | false
xform.quantify_arrays | bool  |  create quantified Horn clauses from clauses with arrays | false
xform.scale | bool  |  add scaling variable to linear real arithmetic clauses | false
xform.slice | bool  |  simplify clause set using slicing | true
xform.subsumption_checker | bool  |  Enable subsumption checker (no support for model conversion) | true
xform.tail_simplifier_pve | bool  |  propagate_variable_equivalences | true
xform.transform_arrays | bool  |  Rewrites arrays equalities and applies select over store | false
xform.unfold_rules | unsigned int  |  unfold rules statically using iterative squaring | 0


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


## Tactic macro-finder

### Short Description 

Identifies and applies macros.

### Long Description

It finds implicit macro definitions in quantifiers. 
A main instance of a macro an equality that defines a function `f` using some term `t` that does not contain `f`.
Other instances of macros are also recognized by the macro finder.

* `(forall (x) (= (f x) t))`

* `not (= (p x) t)` is recognized as `(p x) = (not t)`

* `(iff (= (f x) t) cond)`  rewrites to `(f x) = (if cond t else (k x))`
   * add clause `(not (= (k x) t))`

* `(= (+ (f x) s) t)` becomes `(= (f x) (- t s))`

* `(= (+ (* -1 (f x)) x) t)`  becomes `(= (f x) (- (- t s)))`

### Example

```z3
(declare-fun f (Int) Int)
(declare-fun p (Int) Bool)

(assert (forall ((x Int)) (= (+ (f x) x) 3)))
(assert (p (f 8)))
(apply macro-finder)
```

### Notes

* Supports proofs, unsat cores, but not goals with recursive function definitions.

### Parameters

 Parameter | Type | Description | Default
 ----------|------|-------------|--------
elim_and | bool  |  (default: false) eliminate conjunctions during (internal) calls to the simplifier. | 
max_memory | unsigned int  |  (default: infty) maximum amount of memory in megabytes. | 4294967295
produce_models | bool  |  model generation. | false
produce_proofs | bool  |  proof generation. | false


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


## Tactic nlsat

### Short Description

(try to) solve goal using a nonlinear arithmetic solver

### Example

```z3
(declare-const x Real)
(declare-const y Real)
(assert (> (* x x) (* y x)))
(assert (> x 0))
(assert (< y 1))
(apply (then simplify purify-arith nlsat))
```

### Parameters

 Parameter | Type | Description | Default
 ----------|------|-------------|--------
check_lemmas | bool  |  check lemmas on the fly using an independent nlsat solver | false
factor | bool  |  (default: true) factor polynomials. | 
factor_max_prime | unsigned int  |  parameter for the polynomial factorization procedure in the algebraic number module. Z3 polynomial factorization is composed of three steps: factorization in GF(p), lifting and search. This parameter limits the maximum prime number p to be used in the first step | 31
factor_num_primes | unsigned int  |  parameter for the polynomial factorization procedure in the algebraic number module. Z3 polynomial factorization is composed of three steps: factorization in GF(p), lifting and search. The search space may be reduced by factoring the polynomial in different GF(p)'s. This parameter specify the maximum number of finite factorizations to be considered, before lifiting and searching | 1
factor_search_size | unsigned int  |  parameter for the polynomial factorization procedure in the algebraic number module. Z3 polynomial factorization is composed of three steps: factorization in GF(p), lifting and search. This parameter can be used to limit the search space | 5000
inline_vars | bool  |  inline variables that can be isolated from equations (not supported in incremental mode) | false
lazy | unsigned int  |  how lazy the solver is. | 0
log_lemmas | bool  |  display lemmas as self-contained SMT formulas | false
max_conflicts | unsigned int  |  maximum number of conflicts. | 4294967295
max_memory | unsigned int  |  (default: infty) maximum amount of memory in megabytes. | 4294967295
max_prime | unsigned int  |  (default: infty) Z3 polynomial factorization is composed of three steps: factorization in GF(p), lifting and search. This parameter limits the maximum prime number p to be used in the first step. | 
max_search_size | unsigned int  |  (default: infty) Z3 polynomial factorization is composed of three steps: factorization in GF(p), lifting and search. This parameter can be used to limit the search space. | 
min_mag | unsigned int  |  Z3 represents algebraic numbers using a (square-free) polynomial p and an isolating interval (which contains one and only one root of p). This interval may be refined during the computations. This parameter specifies whether to cache the value of a refined interval or not. It says the minimal size of an interval for caching purposes is 1/2^16 | 16
minimize_conflicts | bool  |  minimize conflicts | false
num_primes | unsigned int  |  (default: 1) Z3 polynomial factorization is composed of three steps: factorization in GF(p), lifting and search. The search space may be reduced by factoring the polynomial in different GF(p)'s. This parameter specify the maximum number of finite factorizations to be considered, before lifiting and searching. | 
randomize | bool  |  randomize selection of a witness in nlsat. | true
reorder | bool  |  reorder variables. | true
seed | unsigned int  |  random seed. | 0
shuffle_vars | bool  |  use a random variable order. | false
simplify_conflicts | bool  |  simplify conflicts using equalities before resolving them in nlsat solver. | true
zero_accuracy | unsigned int  |  one of the most time-consuming operations in the real algebraic number module is determining the sign of a polynomial evaluated at a sample point with non-rational algebraic number values. Let k be the value of this option. If k is 0, Z3 uses precise computation. Otherwise, the result of a polynomial evaluation is considered to be 0 if Z3 can show it is inside the interval (-1/2^k, 1/2^k) | 0


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

### Parameters

 Parameter | Type | Description | Default
 ----------|------|-------------|--------
bound_max_refinements | unsigned int  |  (default: 16) maximum number of bound refinements (per round) for unbounded variables. | 
bound_threshold | double  |  (default: 0.05) bound propagation improvement threshold ratio. | 


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


## Tactic qe

### Short Description

Apply quantifier elimination on quantified sub-formulas.

### Long Description

The tactic applies quantifier elimination procedures on quantified sub-formulas.
It relies on theory plugins that can perform quanifier elimination for selected theories.
These plugins include Booleans, bit-vectors, arithmetic (linear), arrays, and data-types (term algebra).
It performs feasibility checks on cases to throttle the set of sub-formulas where quantifier elimination
is applied.

### Example

```z3
(declare-const x Int)
(declare-const y Int)
(assert (exists ((z Int)) (and (<= x (* 2 z)) (<= (* 3 z) y))))
(apply qe)
```

### Parameters

 Parameter | Type | Description | Default
 ----------|------|-------------|--------
eliminate_variables_as_block | bool  |  (default: true) eliminate variables as a block (true) or one at a time (false) | 
qe_nonlinear | bool  |  (default: false) enable virtual term substitution. | 


## Tactic qffp

### Short Description 
Tactic for QF_FP formulas

## Tactic qffpbv

### Short Description 
Tactic for QF_FPBV formulas

### Parameters

 Parameter | Type | Description | Default
 ----------|------|-------------|--------
abce | bool  |  eliminate blocked clauses using asymmetric literals | false
acce | bool  |  eliminate covered clauses using asymmetric added literals | false
algebraic_number_evaluator | bool  |  simplify/evaluate expressions containing (algebraic) irrational numbers. | true
anf | bool  |  enable ANF based simplification in-processing | false
anf.delay | unsigned int  |  delay ANF simplification by in-processing round | 2
anf.exlin | bool  |  enable extended linear simplification | false
arith.auto_config_simplex | bool  |  force simplex solver in auto_config | false
arith.bprop_on_pivoted_rows | bool  |  propagate bounds on rows changed by the pivot operation | true
arith.branch_cut_ratio | unsigned int  |  branch/cut ratio for linear integer arithmetic | 2
arith.dump_lemmas | bool  |  dump arithmetic theory lemmas to files | false
arith.eager_eq_axioms | bool  |  eager equality axioms | true
arith.enable_hnf | bool  |  enable hnf (Hermite Normal Form) cuts | true
arith.greatest_error_pivot | bool  |  Pivoting strategy | false
arith.ignore_int | bool  |  treat integer variables as real | false
arith.int_eq_branch | bool  |  branching using derived integer equations | false
arith.min | bool  |  minimize cost | false
arith.nl | bool  |  (incomplete) nonlinear arithmetic support based on Groebner basis and interval propagation, relevant only if smt.arith.solver=2 | true
arith.nl.branching | bool  |  branching on integer variables in non linear clusters, relevant only if smt.arith.solver=2 | true
arith.nl.delay | unsigned int  |  number of calls to final check before invoking bounded nlsat check | 500
arith.nl.expp | bool  |  expensive patching | false
arith.nl.gr_q | unsigned int  |  grobner's quota | 10
arith.nl.grobner | bool  |  run grobner's basis heuristic | true
arith.nl.grobner_cnfl_to_report | unsigned int  |  grobner's maximum number of conflicts to report | 1
arith.nl.grobner_eqs_growth | unsigned int  |  grobner's number of equalities growth  | 10
arith.nl.grobner_expr_degree_growth | unsigned int  |  grobner's maximum expr degree growth | 2
arith.nl.grobner_expr_size_growth | unsigned int  |  grobner's maximum expr size growth | 2
arith.nl.grobner_frequency | unsigned int  |  grobner's call frequency | 4
arith.nl.grobner_max_simplified | unsigned int  |  grobner's maximum number of simplifications | 10000
arith.nl.grobner_subs_fixed | unsigned int  |  0 - no subs, 1 - substitute, 2 - substitute fixed zeros only | 1
arith.nl.horner | bool  |  run horner's heuristic | true
arith.nl.horner_frequency | unsigned int  |  horner's call frequency | 4
arith.nl.horner_row_length_limit | unsigned int  |  row is disregarded by the heuristic if its length is longer than the value | 10
arith.nl.horner_subs_fixed | unsigned int  |  0 - no subs, 1 - substitute, 2 - substitute fixed zeros only | 2
arith.nl.nra | bool  |  call nra_solver when incremental linearization does not produce a lemma, this option is ignored when arith.nl=false, relevant only if smt.arith.solver=6 | true
arith.nl.order | bool  |  run order lemmas | true
arith.nl.rounds | unsigned int  |  threshold for number of (nested) final checks for non linear arithmetic, relevant only if smt.arith.solver=2 | 1024
arith.nl.tangents | bool  |  run tangent lemmas | true
arith.print_ext_var_names | bool  |  print external variable names | false
arith.print_stats | bool  |  print statistic | false
arith.propagate_eqs | bool  |  propagate (cheap) equalities | true
arith.propagation_mode | unsigned int  |  0 - no propagation, 1 - propagate existing literals, 2 - refine finite bounds | 1
arith.random_initial_value | bool  |  use random initial values in the simplex-based procedure for linear arithmetic | false
arith.rep_freq | unsigned int  |  the report frequency, in how many iterations print the cost and other info | 0
arith.simplex_strategy | unsigned int  |  simplex strategy for the solver | 0
arith.solver | unsigned int  |  arithmetic solver: 0 - no solver, 1 - bellman-ford based solver (diff. logic only), 2 - simplex based solver, 3 - floyd-warshall based solver (diff. logic only) and no theory combination 4 - utvpi, 5 - infinitary lra, 6 - lra solver | 6
arith_ineq_lhs | bool  |  rewrite inequalities so that right-hand-side is a constant. | false
arith_lhs | bool  |  all monomials are moved to the left-hand-side, and the right-hand-side is just a constant. | false
array.extensional | bool  |  extensional array theory | true
array.weak | bool  |  weak array theory | false
asymm_branch | bool  |  asymmetric branching | true
asymm_branch.all | bool  |  asymmetric branching on all literals per clause | false
asymm_branch.delay | unsigned int  |  number of simplification rounds to wait until invoking asymmetric branch simplification | 1
asymm_branch.limit | unsigned int  |  approx. maximum number of literals visited during asymmetric branching | 100000000
asymm_branch.rounds | unsigned int  |  maximal number of rounds to run asymmetric branch simplifications if progress is made | 2
asymm_branch.sampled | bool  |  use sampling based asymmetric branching based on binary implication graph | true
ate | bool  |  asymmetric tautology elimination | true
auto_config | bool  |  automatically configure solver | true
backtrack.conflicts | unsigned int  |  number of conflicts before enabling chronological backtracking | 4000
backtrack.scopes | unsigned int  |  number of scopes to enable chronological backtracking | 100
bca | bool  |  blocked clause addition - add blocked binary clauses | false
bce | bool  |  eliminate blocked clauses | false
bce_at | unsigned int  |  eliminate blocked clauses only once at the given simplification round | 2
bce_delay | unsigned int  |  delay eliminate blocked clauses until simplification round | 2
binspr | bool  |  enable SPR inferences of binary propagation redundant clauses. This inprocessing step eliminates models | false
bit2bool | bool  |  try to convert bit-vector terms of size 1 into Boolean terms | true
blast_add | bool  |  bit-blast adders. | true
blast_distinct | bool  |  expand a distinct predicate into a quadratic number of disequalities | false
blast_distinct_threshold | unsigned int  |  when blast_distinct is true, only distinct expressions with less than this number of arguments are blasted | 4294967295
blast_eq_value | bool  |  blast (some) Bit-vector equalities into bits | false
blast_full | bool  |  bit-blast any term with bit-vector sort, this option will make E-matching ineffective in any pattern containing bit-vector terms. | false
blast_mul | bool  |  bit-blast multipliers (and dividers, remainders). | true
blast_quant | bool  |  bit-blast quantified variables. | false
blast_select_store | bool  |  eagerly replace all (select (store ..) ..) term by an if-then-else term | false
blocked_clause_limit | unsigned int  |  maximum number of literals visited during blocked clause elimination | 100000000
bound_simplifier | bool  |  apply bounds simplification during pre-processing | true
branching.anti_exploration | bool  |  apply anti-exploration heuristic for branch selection | false
branching.heuristic | symbol  |  branching heuristic vsids, chb | vsids
burst_search | unsigned int  |  number of conflicts before first global simplification | 100
bv.delay | bool  |  delay internalize expensive bit-vector operations | false
bv.enable_int2bv | bool  |  enable support for int2bv and bv2int operators | true
bv.eq_axioms | bool  |  enable redundant equality axioms for bit-vectors | true
bv.reflect | bool  |  create enode for every bit-vector term | true
bv.size_reduce | bool  |  pre-processing; turn assertions that set the upper bits of a bit-vector to constants into a substitution that replaces the bit-vector with constant bits. Useful for minimizing circuits as many input bits to circuits are constant | false
bv.watch_diseq | bool  |  use watch lists instead of eager axioms for bit-vectors | false
bv_extract_prop | bool  |  attempt to partially propagate extraction inwards | false
bv_ineq_consistency_test_max | unsigned int  |  max size of conjunctions on which to perform consistency test based on inequalities on bitvectors. | 0
bv_ite2id | bool  |  rewrite ite that can be simplified to identity | false
bv_le2extract | bool  |  disassemble bvule to extract | true
bv_le_extra | bool  |  additional bu_(u/s)le simplifications | false
bv_not_simpl | bool  |  apply simplifications for bvnot | false
bv_sort_ac | bool  |  sort the arguments of all AC operators | false
cache_all | bool  |  cache all intermediate results. | false
candidate_models | bool  |  create candidate models even when quantifier or theory reasoning is incomplete | false
cardinality.encoding | symbol  |  encoding used for at-most-k constraints: grouped, bimander, ordered, unate, circuit | grouped
cardinality.solver | bool  |  use cardinality solver | true
case_split | unsigned int  |  0 - case split based on variable activity, 1 - similar to 0, but delay case splits created during the search, 2 - similar to 0, but cache the relevancy, 3 - case split based on relevancy (structural splitting), 4 - case split on relevancy and activity, 5 - case split on relevancy and current goal, 6 - activity-based case split with theory-aware branching activity | 1
cce | bool  |  eliminate covered clauses | false
check_lemmas | bool  |  check lemmas on the fly using an independent nlsat solver | false
clause_proof | bool  |  record a clausal proof | false
common_patterns | bool  |  minimize the number of auxiliary variables during CNF encoding by identifing commonly used patterns | true
complete | bool  |  add constraints to make sure that any interpretation of a underspecified arithmetic operators is a function. The result will include additional uninterpreted functions/constants: /0, div0, mod0, 0^0, neg-root | true
context_solve | bool  |  solve equalities under disjunctions. | false
core.extend_nonlocal_patterns | bool  |  extend unsat cores with literals that have quantifiers with patterns that contain symbols which are not in the quantifier's body | false
core.extend_patterns | bool  |  extend unsat core with literals that trigger (potential) quantifier instances | false
core.extend_patterns.max_distance | unsigned int  |  limits the distance of a pattern-extended unsat core | 4294967295
core.minimize | bool  |  minimize unsat core produced by SMT context | false
core.minimize_partial | bool  |  apply partial (cheap) core minimization | false
core.validate | bool  |  [internal] validate unsat core produced by SMT context. This option is intended for debugging | false
cube_depth | unsigned int  |  cube depth. | 1
cut | bool  |  enable AIG based simplification in-processing | false
cut.aig | bool  |  extract aigs (and ites) from cluases for cut simplification | false
cut.delay | unsigned int  |  delay cut simplification by in-processing round | 2
cut.dont_cares | bool  |  integrate dont cares with cuts | true
cut.force | bool  |  force redoing cut-enumeration until a fixed-point | false
cut.lut | bool  |  extract luts from clauses for cut simplification | false
cut.npn3 | bool  |  extract 3 input functions from clauses for cut simplification | false
cut.redundancies | bool  |  integrate redundancy checking of cuts | true
cut.xor | bool  |  extract xors from clauses for cut simplification | false
dack | unsigned int  |  0 - disable dynamic ackermannization, 1 - expand Leibniz's axiom if a congruence is the root of a conflict, 2 - expand Leibniz's axiom if a congruence is used during conflict resolution | 1
dack.eq | bool  |  enable dynamic ackermannization for transtivity of equalities | false
dack.factor | double  |  number of instance per conflict | 0.1
dack.gc | unsigned int  |  Dynamic ackermannization garbage collection frequency (per conflict) | 2000
dack.gc_inv_decay | double  |  Dynamic ackermannization garbage collection decay | 0.8
dack.threshold | unsigned int  |   number of times the congruence rule must be used before Leibniz's axiom is expanded | 10
ddfw.init_clause_weight | unsigned int  |  initial clause weight for DDFW local search | 8
ddfw.reinit_base | unsigned int  |  increment basis for geometric backoff scheme of re-initialization of weights | 10000
ddfw.restart_base | unsigned int  |  number of flips used a starting point for hessitant restart backoff | 100000
ddfw.threads | unsigned int  |  number of ddfw threads to run in parallel with sat solver | 0
ddfw.use_reward_pct | unsigned int  |  percentage to pick highest reward variable when it has reward 0 | 15
ddfw_search | bool  |  use ddfw local search instead of CDCL | false
delay_units | bool  |  if true then z3 will not restart when a unit clause is learned | false
delay_units_threshold | unsigned int  |  maximum number of learned unit clauses before restarting, ignored if delay_units is false | 32
dimacs.core | bool  |  extract core from DIMACS benchmarks | false
distributivity | bool  |  minimize the number of auxiliary variables during CNF encoding by applying distributivity over unshared subformulas | true
distributivity_blowup | unsigned int  |  maximum overhead for applying distributivity during CNF encoding | 32
div0_ackermann_limit | unsigned int  |  a bound for number of congruence Ackermann lemmas for div0 modelling | 1000
drat.activity | bool  |  dump variable activities | false
drat.binary | bool  |  use Binary DRAT output format | false
drat.check_sat | bool  |  build up internal trace, check satisfying model | false
drat.check_unsat | bool  |  build up internal proof and check | false
drat.disable | bool  |  override anything that enables DRAT | false
drat.file | symbol  |  file to dump DRAT proofs | 
dt_lazy_splits | unsigned int  |  How lazy datatype splits are performed: 0- eager, 1- lazy for infinite types, 2- lazy | 1
dyn_sub_res | bool  |  dynamic subsumption resolution for minimizing learned clauses | true
elim_and | bool  |  conjunctions are rewritten using negation and disjunctions | false
elim_inverses | bool  |  eliminate inverse trigonometric functions (asin, acos, atan). | true
elim_ite | bool  |  eliminate ite in favor of and/or | true
elim_rem | bool  |  replace (rem x y) with (ite (&gt;= y 0) (mod x y) (- (mod x y))). | false
elim_root_objects | bool  |  eliminate root objects. | true
elim_sign_ext | bool  |  expand sign-ext operator using concat and extract | true
elim_to_real | bool  |  eliminate to_real from arithmetic predicates that contain only integers. | false
elim_unconstrained | bool  |  pre-processing: eliminate unconstrained subterms | true
elim_vars | bool  |  enable variable elimination using resolution during simplification | true
elim_vars_bdd | bool  |  enable variable elimination using BDD recompilation during simplification | true
elim_vars_bdd_delay | unsigned int  |  delay elimination of variables using BDDs until after simplification round | 3
eliminate_mod | bool  |  eliminate modulus from equations | true
ematching | bool  |  E-Matching based quantifier instantiation | true
enable_pre_simplify | bool  |  enable pre simplifications before the bounded search | false
eq2ineq | bool  |  expand equalities into two inequalities | false
euf | bool  |  enable euf solver (this feature is preliminary and not ready for general consumption) | false
expand_nested_stores | bool  |  replace nested stores by a lambda expression | false
expand_power | bool  |  expand (^ t k) into (* t ... t) if  1 &lt; k &lt;= max_degree. | false
expand_select_ite | bool  |  expand select over ite expressions | false
expand_select_store | bool  |  conservatively replace a (select (store ...) ...) term by an if-then-else term | false
expand_store_eq | bool  |  reduce (store ...) = (store ...) with a common base into selects | false
expand_tan | bool  |  replace (tan x) with (/ (sin x) (cos x)). | false
factor | bool  |  (default: true) factor polynomials. | 
factor_max_prime | unsigned int  |  parameter for the polynomial factorization procedure in the algebraic number module. Z3 polynomial factorization is composed of three steps: factorization in GF(p), lifting and search. This parameter limits the maximum prime number p to be used in the first step | 31
factor_num_primes | unsigned int  |  parameter for the polynomial factorization procedure in the algebraic number module. Z3 polynomial factorization is composed of three steps: factorization in GF(p), lifting and search. The search space may be reduced by factoring the polynomial in different GF(p)'s. This parameter specify the maximum number of finite factorizations to be considered, before lifiting and searching | 1
factor_search_size | unsigned int  |  parameter for the polynomial factorization procedure in the algebraic number module. Z3 polynomial factorization is composed of three steps: factorization in GF(p), lifting and search. This parameter can be used to limit the search space | 5000
fail_if_inconclusive | bool  |  (default: true) fail if found unsat (sat) for under (over) approximated goal. | 
flat | bool  |  create nary applications for +,*,bvadd,bvmul,bvand,bvor,bvxor | true
flat_and_or | bool  |  create nary applications for and,or | true
force_cleanup | bool  |  force cleanup to remove tautologies and simplify clauses | false
gc | symbol  |  garbage collection strategy: psm, glue, glue_psm, dyn_psm | glue_psm
gc.burst | bool  |  perform eager garbage collection during initialization | false
gc.defrag | bool  |  defragment clauses when garbage collecting | true
gc.increment | unsigned int  |  increment to the garbage collection threshold | 500
gc.initial | unsigned int  |  learned clauses garbage collection frequency | 20000
gc.k | unsigned int  |  learned clauses that are inactive for k gc rounds are permanently deleted (only used in dyn_psm) | 7
gc.small_lbd | unsigned int  |  learned clauses with small LBD are never deleted (only used in dyn_psm) | 3
gcd_rounding | bool  |  use gcd rounding on integer arithmetic atoms. | false
hi_div0 | bool  |  use the 'hardware interpretation' for division by zero (for bit-vector terms) | true
hoist_ite | bool  |  hoist shared summands under ite expressions | false
hoist_mul | bool  |  hoist multiplication over summation to minimize number of multiplications | false
ignore_labels | bool  |  remove/ignore labels in the input formula, this option is ignored if proofs are enabled | false
ignore_patterns_on_ground_qbody | bool  |  ignores patterns on quantifiers that don't mention their bound variables. | true
induction | bool  |  enable generation of induction lemmas | false
inline_vars | bool  |  inline variables that can be isolated from equations (not supported in incremental mode) | false
inprocess.max | unsigned int  |  maximal number of inprocessing passes | 4294967295
inprocess.out | symbol  |  file to dump result of the first inprocessing step and exit | 
ite_chaing | bool  |  minimize the number of auxiliary variables during CNF encoding by identifing if-then-else chains | true
ite_extra | bool  |  (default: true) add redundant clauses (that improve unit propagation) when encoding if-then-else formulas | 
ite_extra_rules | bool  |  extra ite simplifications, these additional simplifications may reduce size locally but increase globally | true
ite_solver | bool  |  use if-then-else solver. | true
lazy | unsigned int  |  how lazy the solver is. | 0
learned | bool  |  (default: false) collect also learned clauses. | 
lemma_gc_strategy | unsigned int  |  lemma garbage collection strategy: 0 - fixed, 1 - geometric, 2 - at restart, 3 - none | 0
local_ctx | bool  |  perform local (i.e., cheap) context simplifications | false
local_ctx_limit | unsigned int  |  limit for applying local context simplifier | 4294967295
local_search | bool  |  use local search instead of CDCL | false
local_search_dbg_flips | bool  |  write debug information for number of flips | false
local_search_mode | symbol  |  local search algorithm, either default wsat or qsat | wsat
local_search_threads | unsigned int  |  number of local search threads to find satisfiable solution | 0
log_lemmas | bool  |  display lemmas as self-contained SMT formulas | false
logic | symbol  |  logic used to setup the SMT solver | 
lookahead.cube.cutoff | symbol  |  cutoff type used to create lookahead cubes: depth, freevars, psat, adaptive_freevars, adaptive_psat | depth
lookahead.cube.depth | unsigned int  |  cut-off depth to create cubes. Used when lookahead.cube.cutoff is depth. | 1
lookahead.cube.fraction | double  |  adaptive fraction to create lookahead cubes. Used when lookahead.cube.cutoff is adaptive_freevars or adaptive_psat | 0.4
lookahead.cube.freevars | double  |  cube free variable fraction. Used when lookahead.cube.cutoff is freevars | 0.8
lookahead.cube.psat.clause_base | double  |  clause base for PSAT cutoff | 2
lookahead.cube.psat.trigger | double  |  trigger value to create lookahead cubes for PSAT cutoff. Used when lookahead.cube.cutoff is psat | 5
lookahead.cube.psat.var_exp | double  |  free variable exponent for PSAT cutoff | 1
lookahead.delta_fraction | double  |  number between 0 and 1, the smaller the more literals are selected for double lookahead | 1.0
lookahead.double | bool  |  enable doubld lookahead | true
lookahead.global_autarky | bool  |  prefer to branch on variables that occur in clauses that are reduced | false
lookahead.preselect | bool  |  use pre-selection of subset of variables for branching | false
lookahead.reward | symbol  |  select lookahead heuristic: ternary, heule_schur (Heule Schur), heuleu (Heule Unit), unit, or march_cu | march_cu
lookahead.use_learned | bool  |  use learned clauses when selecting lookahead literal | false
lookahead_scores | bool  |  extract lookahead scores. A utility that can only be used from the DIMACS front-end | false
lookahead_simplify | bool  |  use lookahead solver during simplification | false
lookahead_simplify.bca | bool  |  add learned binary clauses as part of lookahead simplification | true
macro_finder | bool  |  try to find universally quantified formulas that can be viewed as macros | false
max_args | unsigned int  |  (default: 128) maximum number of arguments (per application) that will be considered by the greedy (quadratic) heuristic. | 
max_conflicts | unsigned int  |  maximum number of conflicts before giving up. | 4294967295
max_degree | unsigned int  |  max degree of algebraic numbers (and power operators) processed by simplifier. | 64
max_memory | unsigned int  |  maximum amount of memory in megabytes | 4294967295
max_prime | unsigned int  |  (default: infty) Z3 polynomial factorization is composed of three steps: factorization in GF(p), lifting and search. This parameter limits the maximum prime number p to be used in the first step. | 
max_rounds | unsigned int  |  maximum number of rounds. | 4
max_search_size | unsigned int  |  (default: infty) Z3 polynomial factorization is composed of three steps: factorization in GF(p), lifting and search. This parameter can be used to limit the search space. | 
max_steps | unsigned int  |  maximum number of steps | 4294967295
mbqi | bool  |  model based quantifier instantiation (MBQI) | true
mbqi.force_template | unsigned int  |  some quantifiers can be used as templates for building interpretations for functions. Z3 uses heuristics to decide whether a quantifier will be used as a template or not. Quantifiers with weight &gt;= mbqi.force_template are forced to be used as a template | 10
mbqi.id | string  |  Only use model-based instantiation for quantifiers with id's beginning with string | 
mbqi.max_cexs | unsigned int  |  initial maximal number of counterexamples used in MBQI, each counterexample generates a quantifier instantiation | 1
mbqi.max_cexs_incr | unsigned int  |  increment for MBQI_MAX_CEXS, the increment is performed after each round of MBQI | 0
mbqi.max_iterations | unsigned int  |  maximum number of rounds of MBQI | 1000
mbqi.trace | bool  |  generate tracing messages for Model Based Quantifier Instantiation (MBQI). It will display a message before every round of MBQI, and the quantifiers that were not satisfied | false
min_mag | unsigned int  |  Z3 represents algebraic numbers using a (square-free) polynomial p and an isolating interval (which contains one and only one root of p). This interval may be refined during the computations. This parameter specifies whether to cache the value of a refined interval or not. It says the minimal size of an interval for caching purposes is 1/2^16 | 16
minimize_conflicts | bool  |  minimize conflicts | false
minimize_lemmas | bool  |  minimize learned clauses | true
mode | symbol  |  NNF translation mode: skolem (skolem normal form), quantifiers (skolem normal form + quantifiers in NNF), full | skolem
mul2concat | bool  |  replace multiplication by a power of two into a concatenation | false
mul_to_power | bool  |  collpase (* t ... t) into (^ t k), it is ignored if expand_power is true. | false
nla2bv_bv_size | unsigned int  |  default bit-vector size used by nla2bv tactic. | 4
nla2bv_divisor | unsigned int  |  nla2bv tactic parameter. | 2
nla2bv_max_bv_size | unsigned int  |  (default: inf) maximum bit-vector size used by nla2bv tactic | 
nla2bv_root | unsigned int  |  nla2bv tactic encodes reals into bit-vectors using expressions of the form a+b*sqrt(c), this parameter sets the value of c used in the encoding. | 2
num_primes | unsigned int  |  (default: 1) Z3 polynomial factorization is composed of three steps: factorization in GF(p), lifting and search. The search space may be reduced by factoring the polynomial in different GF(p)'s. This parameter specify the maximum number of finite factorizations to be considered, before lifiting and searching. | 
override_incremental | bool  |  override incremental safety gaps. Enable elimination of blocked clauses and variables even if solver is reused | false
pb.conflict_frequency | unsigned int  |  conflict frequency for Pseudo-Boolean theory | 1000
pb.learn_complements | bool  |  learn complement literals for Pseudo-Boolean theory | true
pb.lemma_format | symbol  |  generate either cardinality or pb lemmas | cardinality
pb.min_arity | unsigned int  |  minimal arity to compile pb/cardinality constraints to CNF | 9
pb.resolve | symbol  |  resolution strategy for boolean algebra solver: cardinality, rounding | cardinality
pb.solver | symbol  |  method for handling Pseudo-Boolean constraints: circuit (arithmetical circuit), sorting (sorting circuit), totalizer (use totalizer encoding), binary_merge, segmented, solver (use native solver) | solver
phase | symbol  |  phase selection strategy: always_false, always_true, basic_caching, random, caching, local_search | caching
phase.sticky | bool  |  use sticky phase caching | true
phase_caching_off | unsigned int  |  number of conflicts while phase caching is off | 100
phase_caching_on | unsigned int  |  number of conflicts while phase caching is on | 400
phase_selection | unsigned int  |  phase selection heuristic: 0 - always false, 1 - always true, 2 - phase caching, 3 - phase caching conservative, 4 - phase caching conservative 2, 5 - random, 6 - number of occurrences, 7 - theory | 3
prob_search | bool  |  use probsat local search instead of CDCL | false
probing | bool  |  apply failed literal detection during simplification | true
probing_binary | bool  |  probe binary clauses | true
probing_cache | bool  |  add binary literals as lemmas | true
probing_cache_limit | unsigned int  |  cache binaries unless overall memory usage exceeds cache limit | 1024
probing_limit | unsigned int  |  limit to the number of probe calls | 5000000
propagate.prefetch | bool  |  prefetch watch lists for assigned literals | true
propagate_values | bool  |  pre-processing: propagate values | true
pull_cheap_ite | bool  |  pull if-then-else terms when cheap. | false
pull_nested_quantifiers | bool  |  pre-processing: pull nested quantifiers | false
push_ite_arith | bool  |  push if-then-else over arithmetic terms. | false
push_ite_bv | bool  |  push if-then-else over bit-vector terms. | false
push_to_real | bool  |  distribute to_real over * and +. | true
q.lift_ite | unsigned int  |  0 - don not lift non-ground if-then-else, 1 - use conservative ite lifting, 2 - use full lifting of if-then-else under quantifiers | 0
q.lite | bool  |  Use cheap quantifier elimination during pre-processing | false
qi.cost | string  |  expression specifying what is the cost of a given quantifier instantiation | (+ weight generation)
qi.eager_threshold | double  |  threshold for eager quantifier instantiation | 10.0
qi.lazy_threshold | double  |  threshold for lazy quantifier instantiation | 20.0
qi.max_instances | unsigned int  |  maximum number of quantifier instantiations | 4294967295
qi.max_multi_patterns | unsigned int  |  specify the number of extra multi patterns | 0
qi.profile | bool  |  profile quantifier instantiation | false
qi.profile_freq | unsigned int  |  how frequent results are reported by qi.profile | 4294967295
qi.quick_checker | unsigned int  |  specify quick checker mode, 0 - no quick checker, 1 - using unsat instances, 2 - using both unsat and no-sat instances | 0
quasi_macros | bool  |  try to find universally quantified formulas that are quasi-macros | false
random_freq | double  |  frequency of random case splits | 0.01
random_seed | unsigned int  |  random seed for the smt solver | 0
randomize | bool  |  randomize selection of a witness in nlsat. | true
refine_inj_axioms | bool  |  pre-processing: refine injectivity axioms | true
relevancy | unsigned int  |  relevancy propagation heuristic: 0 - disabled, 1 - relevancy is tracked by only affects quantifier instantiation, 2 - relevancy is tracked, and an atom is only asserted if it is relevant | 2
reorder | bool  |  reorder variables. | true
reorder.activity_scale | unsigned int  |  scaling factor for activity update | 100
reorder.base | unsigned int  |  number of conflicts per random reorder  | 4294967295
reorder.itau | double  |  inverse temperature for softmax | 4.0
rephase.base | unsigned int  |  number of conflicts per rephase  | 1000
resolution.cls_cutoff1 | unsigned int  |  limit1 - total number of problems clauses for the second cutoff of Boolean variable elimination | 100000000
resolution.cls_cutoff2 | unsigned int  |  limit2 - total number of problems clauses for the second cutoff of Boolean variable elimination | 700000000
resolution.limit | unsigned int  |  approx. maximum number of literals visited during variable elimination | 500000000
resolution.lit_cutoff_range1 | unsigned int  |  second cutoff (total number of literals) for Boolean variable elimination, for problems containing less than res_cls_cutoff1 clauses | 700
resolution.lit_cutoff_range2 | unsigned int  |  second cutoff (total number of literals) for Boolean variable elimination, for problems containing more than res_cls_cutoff1 and less than res_cls_cutoff2 | 400
resolution.lit_cutoff_range3 | unsigned int  |  second cutoff (total number of literals) for Boolean variable elimination, for problems containing more than res_cls_cutoff2 | 300
resolution.occ_cutoff | unsigned int  |  first cutoff (on number of positive/negative occurrences) for Boolean variable elimination | 10
resolution.occ_cutoff_range1 | unsigned int  |  second cutoff (number of positive/negative occurrences) for Boolean variable elimination, for problems containing less than res_cls_cutoff1 clauses | 8
resolution.occ_cutoff_range2 | unsigned int  |  second cutoff (number of positive/negative occurrences) for Boolean variable elimination, for problems containing more than res_cls_cutoff1 and less than res_cls_cutoff2 | 5
resolution.occ_cutoff_range3 | unsigned int  |  second cutoff (number of positive/negative occurrences) for Boolean variable elimination, for problems containing more than res_cls_cutoff2 | 3
restart | symbol  |  restart strategy: static, luby, ema or geometric | ema
restart.emafastglue | double  |  ema alpha factor for fast moving average | 0.03
restart.emaslowglue | double  |  ema alpha factor for slow moving average | 1e-05
restart.factor | double  |  restart increment factor for geometric strategy | 1.5
restart.fast | bool  |  use fast restart approach only removing less active literals. | true
restart.initial | unsigned int  |  initial restart (number of conflicts) | 2
restart.margin | double  |  margin between fast and slow restart factors. For ema | 1.1
restart.max | unsigned int  |  maximal number of restarts. | 4294967295
restart_factor | double  |  when using geometric (or inner-outer-geometric) progression of restarts, it specifies the constant used to multiply the current restart threshold | 1.1
restart_strategy | unsigned int  |  0 - geometric, 1 - inner-outer-geometric, 2 - luby, 3 - fixed, 4 - arithmetic | 1
restricted_quasi_macros | bool  |  try to find universally quantified formulas that are restricted quasi-macros | false
retain_blocked_clauses | bool  |  retain blocked clauses as lemmas | true
rewrite_patterns | bool  |  rewrite patterns. | false
scc | bool  |  eliminate Boolean variables by computing strongly connected components | true
scc.tr | bool  |  apply transitive reduction, eliminate redundant binary clauses | true
search.sat.conflicts | unsigned int  |  period for solving for sat (in number of conflicts) | 400
search.unsat.conflicts | unsigned int  |  period for solving for unsat (in number of conflicts) | 400
seed | unsigned int  |  random seed. | 0
seq.max_unfolding | unsigned int  |  maximal unfolding depth for checking string equations and regular expressions | 1000000000
seq.min_unfolding | unsigned int  |  initial bound for strings whose lengths are bounded by iterative deepening. Set this to a higher value if there are only models with larger string lengths | 1
seq.split_w_len | bool  |  enable splitting guided by length constraints | true
seq.validate | bool  |  enable self-validation of theory axioms created by seq theory | false
shuffle_vars | bool  |  use a random variable order. | false
simplify.delay | unsigned int  |  set initial delay of simplification by a conflict count | 0
simplify_conflicts | bool  |  simplify conflicts using equalities before resolving them in nlsat solver. | true
sk_hack | bool  |  hack for VCC | false
smt | bool  |  use the SAT solver based incremental SMT core | false
smt.proof.check | bool  |  check proofs on the fly during SMT search | false
solve_eqs | bool  |  pre-processing: solve equalities | true
solve_eqs_max_occs | unsigned int  |  (default: infty) maximum number of occurrences for considering a variable for gaussian eliminations. | 4294967295
som | bool  |  put polynomials in sum-of-monomials form | false
som_blowup | unsigned int  |  maximum increase of monomials generated when putting a polynomial in sum-of-monomials normal form | 10
sort_store | bool  |  sort nested stores when the indices are known to be different | false
sort_sums | bool  |  sort the arguments of + application. | false
split_concat_eq | bool  |  split equalities of the form (= (concat t1 t2) t3) | false
split_factors | bool  |  apply simplifications such as (= (* p1 p2) 0) --&gt; (or (= p1 0) (= p2 0)). | true
str.aggressive_length_testing | bool  |  prioritize testing concrete length values over generating more options | false
str.aggressive_unroll_testing | bool  |  prioritize testing concrete regex unroll counts over generating more options | true
str.aggressive_value_testing | bool  |  prioritize testing concrete string constant values over generating more options | false
str.fast_length_tester_cache | bool  |  cache length tester constants instead of regenerating them | false
str.fast_value_tester_cache | bool  |  cache value tester constants instead of regenerating them | true
str.fixed_length_naive_cex | bool  |  construct naive counterexamples when fixed-length model construction fails for a given length assignment (Z3str3 only) | true
str.fixed_length_refinement | bool  |  use abstraction refinement in fixed-length equation solver (Z3str3 only) | false
str.overlap_priority | double  |  theory-aware priority for overlapping variable cases; use smt.theory_aware_branching=true | -0.1
str.regex_automata_difficulty_threshold | unsigned int  |  difficulty threshold for regex automata heuristics | 1000
str.regex_automata_failed_automaton_threshold | unsigned int  |  number of failed automaton construction attempts after which a full automaton is automatically built | 10
str.regex_automata_failed_intersection_threshold | unsigned int  |  number of failed automaton intersection attempts after which intersection is always computed | 10
str.regex_automata_intersection_difficulty_threshold | unsigned int  |  difficulty threshold for regex intersection heuristics | 1000
str.regex_automata_length_attempt_threshold | unsigned int  |  number of length/path constraint attempts before checking unsatisfiability of regex terms | 10
str.string_constant_cache | bool  |  cache all generated string constants generated from anywhere in theory_str | true
str.strong_arrangements | bool  |  assert equivalences instead of implications when generating string arrangement axioms | true
string_solver | symbol  |  solver for string/sequence theories. options are: 'z3str3' (specialized string solver), 'seq' (sequence solver), 'auto' (use static features to choose best solver), 'empty' (a no-op solver that forces an answer unknown if strings were used), 'none' (no solver) | seq
subsumption | bool  |  eliminate subsumed clauses | true
subsumption.limit | unsigned int  |  approx. maximum number of literals visited during subsumption (and subsumption resolution) | 100000000
theory_aware_branching | bool  |  Allow the context to use extra information from theory solvers regarding literal branching prioritization. | false
theory_case_split | bool  |  Allow the context to use heuristics involving theory case splits, which are a set of literals of which exactly one can be assigned True. If this option is false, the context will generate extra axioms to enforce this instead. | false
theory_solver | bool  |  theory solvers. | true
threads | unsigned int  |  maximal number of parallel threads. | 1
threads.cube_frequency | unsigned int  |  frequency for using cubing | 2
threads.max_conflicts | unsigned int  |  maximal number of conflicts between rounds of cubing for parallel SMT | 400
variable_decay | unsigned int  |  multiplier (divided by 100) for the VSIDS activity increment | 110
zero_accuracy | unsigned int  |  one of the most time-consuming operations in the real algebraic number module is determining the sign of a polynomial evaluated at a sample point with non-rational algebraic number values. Let k be the value of this option. If k is 0, Z3 uses precise computation. Otherwise, the result of a polynomial evaluation is considered to be 0 if Z3 can show it is inside the interval (-1/2^k, 1/2^k) | 0


## Tactic qfnra-nlsat

### Short Description

Self-contained tactic that attempts to solve goal using a nonlinear arithmetic solver.
It first applies tactics, such as `purify-arith` to convert the goal into a format
where the `nlsat` tactic applies.

### Example

```z3
(declare-const x Real)
(declare-const y Real)
(assert (> (* x x) (* y x)))
(assert (> x 0))
(assert (< y 1))
(apply qfnra-nlsat)
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
check_lemmas | bool  |  check lemmas on the fly using an independent nlsat solver | false
common_patterns | bool  |  minimize the number of auxiliary variables during CNF encoding by identifing commonly used patterns | true
complete | bool  |  add constraints to make sure that any interpretation of a underspecified arithmetic operators is a function. The result will include additional uninterpreted functions/constants: /0, div0, mod0, 0^0, neg-root | true
context_solve | bool  |  solve equalities under disjunctions. | false
distributivity | bool  |  minimize the number of auxiliary variables during CNF encoding by applying distributivity over unshared subformulas | true
distributivity_blowup | unsigned int  |  maximum overhead for applying distributivity during CNF encoding | 32
elim_and | bool  |  conjunctions are rewritten using negation and disjunctions | false
elim_inverses | bool  |  eliminate inverse trigonometric functions (asin, acos, atan). | true
elim_ite | bool  |  eliminate ite in favor of and/or | true
elim_rem | bool  |  replace (rem x y) with (ite (&gt;= y 0) (mod x y) (- (mod x y))). | false
elim_root_objects | bool  |  eliminate root objects. | true
elim_sign_ext | bool  |  expand sign-ext operator using concat and extract | true
elim_to_real | bool  |  eliminate to_real from arithmetic predicates that contain only integers. | false
eliminate_mod | bool  |  eliminate modulus from equations | true
eq2ineq | bool  |  expand equalities into two inequalities | false
expand_nested_stores | bool  |  replace nested stores by a lambda expression | false
expand_power | bool  |  expand (^ t k) into (* t ... t) if  1 &lt; k &lt;= max_degree. | false
expand_select_ite | bool  |  expand select over ite expressions | false
expand_select_store | bool  |  conservatively replace a (select (store ...) ...) term by an if-then-else term | false
expand_store_eq | bool  |  reduce (store ...) = (store ...) with a common base into selects | false
expand_tan | bool  |  replace (tan x) with (/ (sin x) (cos x)). | false
factor | bool  |  (default: true) factor polynomials. | 
factor_max_prime | unsigned int  |  parameter for the polynomial factorization procedure in the algebraic number module. Z3 polynomial factorization is composed of three steps: factorization in GF(p), lifting and search. This parameter limits the maximum prime number p to be used in the first step | 31
factor_num_primes | unsigned int  |  parameter for the polynomial factorization procedure in the algebraic number module. Z3 polynomial factorization is composed of three steps: factorization in GF(p), lifting and search. The search space may be reduced by factoring the polynomial in different GF(p)'s. This parameter specify the maximum number of finite factorizations to be considered, before lifiting and searching | 1
factor_search_size | unsigned int  |  parameter for the polynomial factorization procedure in the algebraic number module. Z3 polynomial factorization is composed of three steps: factorization in GF(p), lifting and search. This parameter can be used to limit the search space | 5000
flat | bool  |  create nary applications for +,*,bvadd,bvmul,bvand,bvor,bvxor | true
flat_and_or | bool  |  create nary applications for and,or | true
gcd_rounding | bool  |  use gcd rounding on integer arithmetic atoms. | false
hi_div0 | bool  |  use the 'hardware interpretation' for division by zero (for bit-vector terms) | true
hoist_ite | bool  |  hoist shared summands under ite expressions | false
hoist_mul | bool  |  hoist multiplication over summation to minimize number of multiplications | false
ignore_labels | bool  |  remove/ignore labels in the input formula, this option is ignored if proofs are enabled | false
ignore_patterns_on_ground_qbody | bool  |  ignores patterns on quantifiers that don't mention their bound variables. | true
inline_vars | bool  |  inline variables that can be isolated from equations (not supported in incremental mode) | false
ite_chaing | bool  |  minimize the number of auxiliary variables during CNF encoding by identifing if-then-else chains | true
ite_extra | bool  |  add redundant clauses (that improve unit propagation) when encoding if-then-else formulas | true
ite_extra_rules | bool  |  extra ite simplifications, these additional simplifications may reduce size locally but increase globally | true
ite_solver | bool  |  use if-then-else solver. | true
lazy | unsigned int  |  how lazy the solver is. | 0
local_ctx | bool  |  perform local (i.e., cheap) context simplifications | false
local_ctx_limit | unsigned int  |  limit for applying local context simplifier | 4294967295
log_lemmas | bool  |  display lemmas as self-contained SMT formulas | false
max_args | unsigned int  |  (default: 128) maximum number of arguments (per application) that will be considered by the greedy (quadratic) heuristic. | 
max_conflicts | unsigned int  |  maximum number of conflicts. | 4294967295
max_degree | unsigned int  |  max degree of algebraic numbers (and power operators) processed by simplifier. | 64
max_memory | unsigned int  |  maximum amount of memory in megabytes | 4294967295
max_prime | unsigned int  |  (default: infty) Z3 polynomial factorization is composed of three steps: factorization in GF(p), lifting and search. This parameter limits the maximum prime number p to be used in the first step. | 
max_rounds | unsigned int  |  maximum number of rounds. | 4
max_search_size | unsigned int  |  (default: infty) Z3 polynomial factorization is composed of three steps: factorization in GF(p), lifting and search. This parameter can be used to limit the search space. | 
max_steps | unsigned int  |  maximum number of steps | 4294967295
min_mag | unsigned int  |  Z3 represents algebraic numbers using a (square-free) polynomial p and an isolating interval (which contains one and only one root of p). This interval may be refined during the computations. This parameter specifies whether to cache the value of a refined interval or not. It says the minimal size of an interval for caching purposes is 1/2^16 | 16
minimize_conflicts | bool  |  minimize conflicts | false
mode | symbol  |  NNF translation mode: skolem (skolem normal form), quantifiers (skolem normal form + quantifiers in NNF), full | skolem
mul2concat | bool  |  replace multiplication by a power of two into a concatenation | false
mul_to_power | bool  |  collpase (* t ... t) into (^ t k), it is ignored if expand_power is true. | false
num_primes | unsigned int  |  (default: 1) Z3 polynomial factorization is composed of three steps: factorization in GF(p), lifting and search. The search space may be reduced by factoring the polynomial in different GF(p)'s. This parameter specify the maximum number of finite factorizations to be considered, before lifiting and searching. | 
pull_cheap_ite | bool  |  pull if-then-else terms when cheap. | false
push_ite_arith | bool  |  push if-then-else over arithmetic terms. | false
push_ite_bv | bool  |  push if-then-else over bit-vector terms. | false
push_to_real | bool  |  distribute to_real over * and +. | true
randomize | bool  |  randomize selection of a witness in nlsat. | true
reorder | bool  |  reorder variables. | true
rewrite_patterns | bool  |  rewrite patterns. | false
seed | unsigned int  |  random seed. | 0
shuffle_vars | bool  |  use a random variable order. | false
simplify_conflicts | bool  |  simplify conflicts using equalities before resolving them in nlsat solver. | true
sk_hack | bool  |  hack for VCC | false
solve_eqs_max_occs | unsigned int  |  (default: infty) maximum number of occurrences for considering a variable for gaussian eliminations. | 4294967295
som | bool  |  put polynomials in sum-of-monomials form | false
som_blowup | unsigned int  |  maximum increase of monomials generated when putting a polynomial in sum-of-monomials normal form | 10
sort_store | bool  |  sort nested stores when the indices are known to be different | false
sort_sums | bool  |  sort the arguments of + application. | false
split_concat_eq | bool  |  split equalities of the form (= (concat t1 t2) t3) | false
split_factors | bool  |  apply simplifications such as (= (* p1 p2) 0) --&gt; (or (= p1 0) (= p2 0)). | true
theory_solver | bool  |  theory solvers. | true
zero_accuracy | unsigned int  |  one of the most time-consuming operations in the real algebraic number module is determining the sign of a polynomial evaluated at a sample point with non-rational algebraic number values. Let k be the value of this option. If k is 0, Z3 uses precise computation. Otherwise, the result of a polynomial evaluation is considered to be 0 if Z3 can show it is inside the interval (-1/2^k, 1/2^k) | 0


## Tactic quasi-macro-finder

### Short Description
dentifies and applies quasi-macros.

### Long Description

A quasi macro defines a function symbol that contains more arguments than the number of bound variables it defines.
The additional arguments are functions of the bound variables.
 
### Example

```z3
(declare-fun f (Int Int Int) Int)
(declare-fun p (Int) Bool)
(declare-const a Int)

(assert (forall ((x Int) (y Int)) (= (f x y 1) (* 2 x y))))
(assert (p (f 8 a (+ a 8))))
(apply quasi-macros)
```

### Notes

* Supports proofs and cores



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
For each function `f` and argument position of `f` it checks if all occurrences of `f` uses a value at position `i`.
The values may be different, but all occurrences have to be values for the reduction to be applicable. 
It creates a fresh function for each of the different values at position `i`.


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


## Tactic sat

### Short Description

Try to solve goal using a SAT solver

## Tactic sat-preprocess

### Short Description 

Apply SAT solver preprocessing procedures (bounded resolution, Boolean constant propagation, 2-SAT, subsumption, subsumption resolution).

### Example

```z3
(declare-const a Bool)
(declare-const b Bool)
(declare-const c Bool)
(declare-const d Bool)
(declare-const e Bool)
(declare-const f Bool)
(declare-fun p (Bool) Bool)
(assert (=> a b))
(assert (=> b c))
(assert a)
(assert (not c))
(apply sat-preprocess)
```

### Parameters

 Parameter | Type | Description | Default
 ----------|------|-------------|--------
abce | bool  |  eliminate blocked clauses using asymmetric literals | false
acce | bool  |  eliminate covered clauses using asymmetric added literals | false
anf | bool  |  enable ANF based simplification in-processing | false
anf.delay | unsigned int  |  delay ANF simplification by in-processing round | 2
anf.exlin | bool  |  enable extended linear simplification | false
asymm_branch | bool  |  asymmetric branching | true
asymm_branch.all | bool  |  asymmetric branching on all literals per clause | false
asymm_branch.delay | unsigned int  |  number of simplification rounds to wait until invoking asymmetric branch simplification | 1
asymm_branch.limit | unsigned int  |  approx. maximum number of literals visited during asymmetric branching | 100000000
asymm_branch.rounds | unsigned int  |  maximal number of rounds to run asymmetric branch simplifications if progress is made | 2
asymm_branch.sampled | bool  |  use sampling based asymmetric branching based on binary implication graph | true
ate | bool  |  asymmetric tautology elimination | true
backtrack.conflicts | unsigned int  |  number of conflicts before enabling chronological backtracking | 4000
backtrack.scopes | unsigned int  |  number of scopes to enable chronological backtracking | 100
bca | bool  |  blocked clause addition - add blocked binary clauses | false
bce | bool  |  eliminate blocked clauses | false
bce_at | unsigned int  |  eliminate blocked clauses only once at the given simplification round | 2
bce_delay | unsigned int  |  delay eliminate blocked clauses until simplification round | 2
binspr | bool  |  enable SPR inferences of binary propagation redundant clauses. This inprocessing step eliminates models | false
blocked_clause_limit | unsigned int  |  maximum number of literals visited during blocked clause elimination | 100000000
branching.anti_exploration | bool  |  apply anti-exploration heuristic for branch selection | false
branching.heuristic | symbol  |  branching heuristic vsids, chb | vsids
burst_search | unsigned int  |  number of conflicts before first global simplification | 100
cardinality.encoding | symbol  |  encoding used for at-most-k constraints: grouped, bimander, ordered, unate, circuit | grouped
cardinality.solver | bool  |  use cardinality solver | true
cce | bool  |  eliminate covered clauses | false
core.minimize | bool  |  minimize computed core | false
core.minimize_partial | bool  |  apply partial (cheap) core minimization | false
cut | bool  |  enable AIG based simplification in-processing | false
cut.aig | bool  |  extract aigs (and ites) from cluases for cut simplification | false
cut.delay | unsigned int  |  delay cut simplification by in-processing round | 2
cut.dont_cares | bool  |  integrate dont cares with cuts | true
cut.force | bool  |  force redoing cut-enumeration until a fixed-point | false
cut.lut | bool  |  extract luts from clauses for cut simplification | false
cut.npn3 | bool  |  extract 3 input functions from clauses for cut simplification | false
cut.redundancies | bool  |  integrate redundancy checking of cuts | true
cut.xor | bool  |  extract xors from clauses for cut simplification | false
ddfw.init_clause_weight | unsigned int  |  initial clause weight for DDFW local search | 8
ddfw.reinit_base | unsigned int  |  increment basis for geometric backoff scheme of re-initialization of weights | 10000
ddfw.restart_base | unsigned int  |  number of flips used a starting point for hessitant restart backoff | 100000
ddfw.threads | unsigned int  |  number of ddfw threads to run in parallel with sat solver | 0
ddfw.use_reward_pct | unsigned int  |  percentage to pick highest reward variable when it has reward 0 | 15
ddfw_search | bool  |  use ddfw local search instead of CDCL | false
dimacs.core | bool  |  extract core from DIMACS benchmarks | false
drat.activity | bool  |  dump variable activities | false
drat.binary | bool  |  use Binary DRAT output format | false
drat.check_sat | bool  |  build up internal trace, check satisfying model | false
drat.check_unsat | bool  |  build up internal proof and check | false
drat.disable | bool  |  override anything that enables DRAT | false
drat.file | symbol  |  file to dump DRAT proofs | 
dyn_sub_res | bool  |  dynamic subsumption resolution for minimizing learned clauses | true
elim_vars | bool  |  enable variable elimination using resolution during simplification | true
elim_vars_bdd | bool  |  enable variable elimination using BDD recompilation during simplification | true
elim_vars_bdd_delay | unsigned int  |  delay elimination of variables using BDDs until after simplification round | 3
enable_pre_simplify | bool  |  enable pre simplifications before the bounded search | false
euf | bool  |  enable euf solver (this feature is preliminary and not ready for general consumption) | false
force_cleanup | bool  |  force cleanup to remove tautologies and simplify clauses | false
gc | symbol  |  garbage collection strategy: psm, glue, glue_psm, dyn_psm | glue_psm
gc.burst | bool  |  perform eager garbage collection during initialization | false
gc.defrag | bool  |  defragment clauses when garbage collecting | true
gc.increment | unsigned int  |  increment to the garbage collection threshold | 500
gc.initial | unsigned int  |  learned clauses garbage collection frequency | 20000
gc.k | unsigned int  |  learned clauses that are inactive for k gc rounds are permanently deleted (only used in dyn_psm) | 7
gc.small_lbd | unsigned int  |  learned clauses with small LBD are never deleted (only used in dyn_psm) | 3
inprocess.max | unsigned int  |  maximal number of inprocessing passes | 4294967295
inprocess.out | symbol  |  file to dump result of the first inprocessing step and exit | 
ite_extra | bool  |  (default: true) add redundant clauses (that improve unit propagation) when encoding if-then-else formulas | 
learned | bool  |  (default: false) collect also learned clauses. | 
local_search | bool  |  use local search instead of CDCL | false
local_search_dbg_flips | bool  |  write debug information for number of flips | false
local_search_mode | symbol  |  local search algorithm, either default wsat or qsat | wsat
local_search_threads | unsigned int  |  number of local search threads to find satisfiable solution | 0
lookahead.cube.cutoff | symbol  |  cutoff type used to create lookahead cubes: depth, freevars, psat, adaptive_freevars, adaptive_psat | depth
lookahead.cube.depth | unsigned int  |  cut-off depth to create cubes. Used when lookahead.cube.cutoff is depth. | 1
lookahead.cube.fraction | double  |  adaptive fraction to create lookahead cubes. Used when lookahead.cube.cutoff is adaptive_freevars or adaptive_psat | 0.4
lookahead.cube.freevars | double  |  cube free variable fraction. Used when lookahead.cube.cutoff is freevars | 0.8
lookahead.cube.psat.clause_base | double  |  clause base for PSAT cutoff | 2
lookahead.cube.psat.trigger | double  |  trigger value to create lookahead cubes for PSAT cutoff. Used when lookahead.cube.cutoff is psat | 5
lookahead.cube.psat.var_exp | double  |  free variable exponent for PSAT cutoff | 1
lookahead.delta_fraction | double  |  number between 0 and 1, the smaller the more literals are selected for double lookahead | 1.0
lookahead.double | bool  |  enable doubld lookahead | true
lookahead.global_autarky | bool  |  prefer to branch on variables that occur in clauses that are reduced | false
lookahead.preselect | bool  |  use pre-selection of subset of variables for branching | false
lookahead.reward | symbol  |  select lookahead heuristic: ternary, heule_schur (Heule Schur), heuleu (Heule Unit), unit, or march_cu | march_cu
lookahead.use_learned | bool  |  use learned clauses when selecting lookahead literal | false
lookahead_scores | bool  |  extract lookahead scores. A utility that can only be used from the DIMACS front-end | false
lookahead_simplify | bool  |  use lookahead solver during simplification | false
lookahead_simplify.bca | bool  |  add learned binary clauses as part of lookahead simplification | true
max_conflicts | unsigned int  |  maximum number of conflicts | 4294967295
max_memory | unsigned int  |  (default: infty) maximum amount of memory in megabytes. | 4294967295
minimize_lemmas | bool  |  minimize learned clauses | true
override_incremental | bool  |  override incremental safety gaps. Enable elimination of blocked clauses and variables even if solver is reused | false
pb.lemma_format | symbol  |  generate either cardinality or pb lemmas | cardinality
pb.min_arity | unsigned int  |  minimal arity to compile pb/cardinality constraints to CNF | 9
pb.resolve | symbol  |  resolution strategy for boolean algebra solver: cardinality, rounding | cardinality
pb.solver | symbol  |  method for handling Pseudo-Boolean constraints: circuit (arithmetical circuit), sorting (sorting circuit), totalizer (use totalizer encoding), binary_merge, segmented, solver (use native solver) | solver
phase | symbol  |  phase selection strategy: always_false, always_true, basic_caching, random, caching, local_search | caching
phase.sticky | bool  |  use sticky phase caching | true
prob_search | bool  |  use probsat local search instead of CDCL | false
probing | bool  |  apply failed literal detection during simplification | true
probing_binary | bool  |  probe binary clauses | true
probing_cache | bool  |  add binary literals as lemmas | true
probing_cache_limit | unsigned int  |  cache binaries unless overall memory usage exceeds cache limit | 1024
probing_limit | unsigned int  |  limit to the number of probe calls | 5000000
propagate.prefetch | bool  |  prefetch watch lists for assigned literals | true
random_freq | double  |  frequency of random case splits | 0.01
random_seed | unsigned int  |  random seed | 0
reorder.activity_scale | unsigned int  |  scaling factor for activity update | 100
reorder.base | unsigned int  |  number of conflicts per random reorder  | 4294967295
reorder.itau | double  |  inverse temperature for softmax | 4.0
rephase.base | unsigned int  |  number of conflicts per rephase  | 1000
resolution.cls_cutoff1 | unsigned int  |  limit1 - total number of problems clauses for the second cutoff of Boolean variable elimination | 100000000
resolution.cls_cutoff2 | unsigned int  |  limit2 - total number of problems clauses for the second cutoff of Boolean variable elimination | 700000000
resolution.limit | unsigned int  |  approx. maximum number of literals visited during variable elimination | 500000000
resolution.lit_cutoff_range1 | unsigned int  |  second cutoff (total number of literals) for Boolean variable elimination, for problems containing less than res_cls_cutoff1 clauses | 700
resolution.lit_cutoff_range2 | unsigned int  |  second cutoff (total number of literals) for Boolean variable elimination, for problems containing more than res_cls_cutoff1 and less than res_cls_cutoff2 | 400
resolution.lit_cutoff_range3 | unsigned int  |  second cutoff (total number of literals) for Boolean variable elimination, for problems containing more than res_cls_cutoff2 | 300
resolution.occ_cutoff | unsigned int  |  first cutoff (on number of positive/negative occurrences) for Boolean variable elimination | 10
resolution.occ_cutoff_range1 | unsigned int  |  second cutoff (number of positive/negative occurrences) for Boolean variable elimination, for problems containing less than res_cls_cutoff1 clauses | 8
resolution.occ_cutoff_range2 | unsigned int  |  second cutoff (number of positive/negative occurrences) for Boolean variable elimination, for problems containing more than res_cls_cutoff1 and less than res_cls_cutoff2 | 5
resolution.occ_cutoff_range3 | unsigned int  |  second cutoff (number of positive/negative occurrences) for Boolean variable elimination, for problems containing more than res_cls_cutoff2 | 3
restart | symbol  |  restart strategy: static, luby, ema or geometric | ema
restart.emafastglue | double  |  ema alpha factor for fast moving average | 0.03
restart.emaslowglue | double  |  ema alpha factor for slow moving average | 1e-05
restart.factor | double  |  restart increment factor for geometric strategy | 1.5
restart.fast | bool  |  use fast restart approach only removing less active literals. | true
restart.initial | unsigned int  |  initial restart (number of conflicts) | 2
restart.margin | double  |  margin between fast and slow restart factors. For ema | 1.1
restart.max | unsigned int  |  maximal number of restarts. | 4294967295
retain_blocked_clauses | bool  |  retain blocked clauses as lemmas | true
scc | bool  |  eliminate Boolean variables by computing strongly connected components | true
scc.tr | bool  |  apply transitive reduction, eliminate redundant binary clauses | true
search.sat.conflicts | unsigned int  |  period for solving for sat (in number of conflicts) | 400
search.unsat.conflicts | unsigned int  |  period for solving for unsat (in number of conflicts) | 400
simplify.delay | unsigned int  |  set initial delay of simplification by a conflict count | 0
smt | bool  |  use the SAT solver based incremental SMT core | false
smt.proof.check | bool  |  check proofs on the fly during SMT search | false
subsumption | bool  |  eliminate subsumed clauses | true
subsumption.limit | unsigned int  |  approx. maximum number of literals visited during subsumption (and subsumption resolution) | 100000000
threads | unsigned int  |  number of parallel threads to use | 1
variable_decay | unsigned int  |  multiplier (divided by 100) for the VSIDS activity increment | 110


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
eliminate_mod | bool  |  eliminate modulus from equations | true
ite_solver | bool  |  use if-then-else solver. | true
solve_eqs_max_occs | unsigned int  |  (default: infty) maximum number of occurrences for considering a variable for gaussian eliminations. | 4294967295
theory_solver | bool  |  theory solvers. | true


## Tactic split-clause

### Short Description

Tactic that creates a subgoal for each literal in a clause `(l_1 or ... or l_n)`.
The tactic fails if the main goal does not contain any clause.

### Example

```z3
(declare-const p Bool)
(declare-const q Bool)
(assert (or p q))
(apply split-clause)
```


### Parameters

 Parameter | Type | Description | Default
 ----------|------|-------------|--------
split_largest_clause | bool  |  (default: false) split the largest clause in the goal. | 


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
common_patterns | bool  |  minimize the number of auxiliary variables during CNF encoding by identifing commonly used patterns | true
distributivity | bool  |  minimize the number of auxiliary variables during CNF encoding by applying distributivity over unshared subformulas | true
distributivity_blowup | unsigned int  |  maximum overhead for applying distributivity during CNF encoding | 32
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
ite_chaing | bool  |  minimize the number of auxiliary variables during CNF encoding by identifing if-then-else chains | true
ite_extra | bool  |  add redundant clauses (that improve unit propagation) when encoding if-then-else formulas | true
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


## Tactic unit-subsume-simplify

### Short Description

implify goal using subsumption based on unit propagation

### Long Description

Background: PDR generates several clauses that subsume each-other.
Simplify a goal assuming it is a conjunction of clauses.
Subsumed clauses are simplified by using unit-propagation 
It uses the default SMT solver.

