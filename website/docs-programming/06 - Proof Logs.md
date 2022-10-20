---
title: Proof Logs
sidebar_position: 6
---

# Inference logs and proofs

Z3 version 4.12.0 exposes new functionality to capture inferences.
There is an API extension to register a callback that is invoked
whenever the main SMT engine infers a clause. It is also possible to 
save inferred clauses together with proof _hints_ that justify them.
We use the terminology _hint_ because the justifications are _big step_ 
inferences. Some of the steps can be checked by lean self-contained
proof checkers, other steps do not contain detailed guidance that would allow
efficient validation. They require checking using general purpose SMT solving.



Proof terms have been supported from Z3 since 2008. They have been used in various settings,
including for replaying tactics in Isabelle, for generation of interpolants, and for extracting
separating hyper-planes from linear programming proofs (Farkas lemma). A separate format
is used to trace inference steps for proof mining. Proof logs allow to simplify some of the
infrastructure around proof reconstruction during search and for proof mining. The same logs
can be targetted for the different use cases. 



## Callbacks for clause inferences

The API exposes a function `Z3_solver_register_on_clause` 
that is first exposed for C, C++, .Net and Python. We here illustrate using
it from Python. The function lets a client register a callback function that is 
invoked whenever the main SMT search engine makes an inference. The main inference
steps are (1) introducing an _assumption_, that is, a clause that is entained from the
input formula (formally, the clause is satisfiability preserving when added to the input formula),
(2) _deleting_ a clause from the set of active clauses,
(3) _rup_, inferring a clause through propositional reasoning, the clause can be justified using
_reverse unit propagation_, 
(4) _smt_, or other _theory_ rule, when a clause is added as a theory tautology.


### Print inferences created during search

```z3-python
def monitor_plain():
    print("Monitor all inferred clauses")
    s = Solver()
    s.from_string(example1)
    onc = OnClause(s, lambda pr, clause : print(pr, clause))
    print(s.check())
```

### Capture just quantifier instantiations

Applications that only need to monitor quantifier instantiations can filter the stream 
based on the name of the proof hint.

```z3-python
def log_instance(pr, clause):
    if pr.decl().name() == "inst":
        q = pr.arg(0).arg(0) # first argument is Not(q)
        for ch in pr.children():
            if ch.decl().name() == "bind":
                print("Binding")
                print(q)
                print(ch.children())
                break

def monitor_instances():
    print("Monitor just quantifier bindings")
    s = Solver()
    s.from_string(example1)
    onc = OnClause(s, log_instance)
    print(s.check())
```

### Monitor clauses annotated with detailed justifications
If you set proof mode to _true_, then the inferred clauses 
are annotated by more detailed proof terms. The detailed proof terms
use a repetorire or low level inference rules.

```z3-python
def monitor_with_proofs():
    set_param(proof=True)
    s = Solver()
    s.from_string(example1)
    onc = OnClause(s, lambda pr, clause : print(pr, clause))
    print(s.check())
```    

### Monitor proof objects from the new core
An SMT core based on Z3's better tuned SAT solver is accessible if you set the option
`sat.euf=true` and force it by setting `tactic.default_tactic=sat` (or to `smt`).
Proof logs have a different format from the _legacy_ core. Many inferences in this format
can be checked efficiently by built-in validators.

```z3-python
def monitor_new_core():
    set_param("sat.euf", True)
    set_param("tactic.default_tactic", "sat")
    s = Solver()
    s.from_string(example1)
    onc = OnClause(s, lambda pr, clause : print(pr, clause))
    print(s.check())
```

## Saving and restoring inferences to and from files

Inference logging, replay, and checking is supported for
the core enabled by setting sat.euf = true.
setting the default tactic to 'sat' bypasses other tactics that could
end up using different solvers.  

```z3-python
    set_param("sat.euf", True)
    set_param("tactic.default_tactic", "sat")

    # Set a log file to trace inferences
    set_param("sat.smt.proof", "proof_log.smt2")
    s = Solver()
    s.from_string(example1)
    print(s.check())
```
### Parse the logged inferences and replay them
You can also replay inferences when parsing a previously saved inferences.

```z3-python
    # Turn off proof checking. It is on by default when parsing proof logs.
    set_param("solver.proof.check", False)      
    s = Solver()
    onc = OnClause(s, lambda pr, clause : print(pr, clause))
    s.from_file("proof_log.smt2")
```

This feature can be used when proof logs are produced using a command-line process.
Log reconstruction is decoupled form the shell process.

### Parse the logged inferences and check them

Now turn on proof checking. It invokes the self-validator.
The self-validator produces log lines of the form:
```
   (proofs +tseitin 60 +alldiff 8 +euf 3 +rup 5 +inst 6 -quant 3 -inst 2)
   (verified-smt
     (inst (forall (vars (x T) (y T) (z T)) (or (subtype (:var 2) (:var 1)) ...
```     
The 'proofs' line summarizes inferences that were self-validated.
The pair +tseitin 60 indicates that 60 inferences were validated as Tseitin
encodings.
The pair `-inst 2` indicates that two quantifier instantiations were not self-validated
They were instead validated using a call to SMT solving. A log for an smt invocation
is exemplified in the next line.
Note that the pair `+inst 6` indicates that 6 quantifier instantations were validated
using a syntactic (cheap) check. Some quantifier instantiations based on quantifier elimination
are not simple substitutions and therefore a simple syntactic check does not suffice.

```z3-python 
    s = Solver()
    set_param("solver.proof.check", True)
    s.from_file("proof_log.smt2")
```

### Verify and self-validate on the fly
Proof checking (self-validation) is on by default. In case someone turned it off we force it to be on in the following.
```z3-python
    set_param("sat.smt.proof.check", True)
    s = Solver()
    s.from_string(example1)
    print(s.check())
```

### Verify and self-validate on the fly, but don't check rup
Self-validation checks all inferences. Inferences that use theory lemmas can be checked locally without considering other inferences. Inferences that are annotated by `rup` (reverse unit propagation) are justified using global inferences (unit propagation). Checking `rup` during search can be very expensive. You can turn off `rup` checking
selectively to speed up validation for theory lemmas.

```z3-python
    set_param("sat.smt.proof.check", True)
    set_param("sat.smt.proof.check_rup", False)
    s = Solver()
    s.from_string(example1)
    print(s.check())
```

## Command line uses

From the command-line you can enable self-validation using the parameters

```
   z3 <file.smt2> sat.euf=true tactic.default_tactic=smt sat.smt.proof.check=true
```

You can disable `rup` checking 


```
   z3 <file.smt2> sat.euf=true tactic.default_tactic=smt sat.smt.proof.check=true sat.smt.proof.check_rup=false
```

To save proof logs, but not check them, use

```
z3 <file.smt2> sat.euf=true tactic.default_tactic=smt sat.smt.proof=<logfile.smt2>
```

## Inferences

Inferences are printed in a mild extension of SMTLIB2. The extension has three new commands

```
(infer clause proof_hint)
(del clause)
(assume clause)
```
where a proof hint is a proof term that is either a detailed set of inference steps or a 
generic inference that requires a proof checker that understands more than a set of simple
syntactic inferences.

### Proof Hints

The format of proof hints is set up so it can be extended when new features are added.
Common to proof hints is that every proof hint encodes a claim in the form of a clause.
A proof hint should justify the clause. 
We defer a detailed documentation of proof hints but summarize some of the main hints in use:

* _tseitin_ - The claim is justified by a Tseitin transformation.
* _euf_ - The claim follows from equality reasoning.
* _inst_ - A quantifier is instantiated using a binding given in the hint.
* _farkas_ - The negation of the claim is a conjunction of inequalities. The farkas hint contains coefficients such that the inequalities, when added modulo multiplying with coefficients, sum up to a tight and inconsistent inequality.
* _bound_ - An inequality is derived using a combination of inequalities and cuts
* _implied-eq_ - An implied inequality can be derived from a set of inequalities and equalities.

## A sample session with proof logs

We have the following formula

```
(set-option :sat.euf true)
(set-option :tactic.default_tactic smt)
(set-option :sat.smt.proof=proof_log.smt2)
(declare-fun d (Int Int) Int)
(declare-fun t (Int Int Real) (Array Int (Array Int Real)))
(assert (forall ((u Int) (v Real)) (= v (select (select (t v (d 1 0) (d 0 u)) 0) 0))))
(check-sat)
```

It produces a proof log of the form
```
(declare-fun t (Int Int Real) (Array Int (Array Int Real)))
(declare-fun d (Int Int) Int)
(define-const $33 Bool (forall ((u Int) (v Real))
  (let ((a!1 (select (t (to_int v) (d 1 0) (to_real (d 0 u))) 0)))
    (= v (select a!1 0)))))
(assume $33)
(assume true)
(define-const $63 Int (d 0 0))
(define-const $64 Real (to_real $63))
(define-const $25 Int (d 1 0))
(define-const $72 (Array Int (Array Int Real)) (t (- 1) $25 $64))
(define-const $73 (Array Int Real) (select $72 0))
(define-const $74 Real (select $73 0))
(define-const $75 Bool (= (- 1.0) $74))
(declare-fun inst (Bool Bool Proof) Proof)
(declare-fun bind (Int Real) Proof)
(define-const $61 Proof (bind 0 (- 1.0)))
(define-const $76 Bool (not $75))
(define-const $65 Proof (inst $33 $76 $61))
(infer $75 $65)
(define-const $105 Int (d 0 $63))
(define-const $106 Real (to_real $105))
(define-const $113 (Array Int (Array Int Real)) (t (- 1) $25 $106))
(define-const $114 (Array Int Real) (select $113 0))
(define-const $115 Real (select $114 0))
(define-const $116 Bool (= (- (/ 1.0 2.0)) $115))
(define-const $109 Proof (bind $63 (- (/ 1.0 2.0))))
(define-const $117 Bool (not $116))
(define-const $57 Proof (inst $33 $117 $109))
(infer $116 $57)
(define-const $123 Bool (= (- (/ 3.0 4.0)) $115))
(define-const $110 Proof (bind $63 (- (/ 3.0 4.0))))
(define-const $124 Bool (not $123))
(define-const $102 Proof (inst $33 $124 $110))
(infer $123 $102)
(declare-fun euf (Bool Bool) Proof)
(define-const $41 Proof (euf $123 $116))
(infer $41)
(declare-fun rup () Proof)
(infer rup)
```

The log is mildly speaking not human readable. But you can use scripts to read the log.

```python
from z3 import *
set_param("solver.proof.check", False)
s = Solver()
onc = OnClause(s, print)
s.from_file("proof_log.smt2")
```

The result is easier to digest
```
assumption [ForAll([u, v],
        v == t(ToInt(v), d(1, 0), ToReal(d(0, u)))[0][0])]
assumption [True]
inst(ForAll([u, v],
            v == t(ToInt(v), d(1, 0), ToReal(d(0, u)))[0][0]),
     Not(-1 == t(-1, d(1, 0), ToReal(d(0, 0)))[0][0]),
     bind(0, -1)) [-1 == t(-1, d(1, 0), ToReal(d(0, 0)))[0][0]]
inst(ForAll([u, v],
            v == t(ToInt(v), d(1, 0), ToReal(d(0, u)))[0][0]),
     Not(-(1/2) ==
         t(-1, d(1, 0), ToReal(d(0, d(0, 0))))[0][0]),
     bind(d(0, 0), -(1/2))) [-(1/2) == t(-1, d(1, 0), ToReal(d(0, d(0, 0))))[0][0]]
inst(ForAll([u, v],
            v == t(ToInt(v), d(1, 0), ToReal(d(0, u)))[0][0]),
     Not(-(3/4) ==
         t(-1, d(1, 0), ToReal(d(0, d(0, 0))))[0][0]),
     bind(d(0, 0), -(3/4))) [-(3/4) == t(-1, d(1, 0), ToReal(d(0, d(0, 0))))[0][0]]
euf(-(3/4) == t(-1, d(1, 0), ToReal(d(0, d(0, 0))))[0][0],
    -(1/2) == t(-1, d(1, 0), ToReal(d(0, d(0, 0))))[0][0]) []
rup []
```

SMT proofs are of course generally much larger.
