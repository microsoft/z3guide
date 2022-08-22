---
title: Formula Simplification
sidebar_position: 4
---

Different applications vary in the requirements for formula simplification.
Z3 exposes a few built-in methods that can be used for simple algebraic simplification.
There are no methods based on z3 that ensure that expressions are simplified to a unique canonical form
(which is a characteristic of simplifying propositional formulas using BDDs), but you can use z3
to simplify subformulas using different criteria. 

## Built-in simplification

Z3 exposes some built-in methods for formula simplification

 Method from SMTLIB               | Method from Python                            | Description
----------------------------------|-----------------------------------------------|----------------------------------------
 `simplify`                       | `simplify(..)`                                | performs rewriting simplification
`(apply ctx-simplify)`            |  `Tactic('ctx-simplify').apply(..)`           | maintains Boolean skeleton of formula but removes sub-formulas that are subsumed by context. It uses a syntactic equality check on expressions to determine subsumption.
`(apply ctx-solver-simplify)`     |  `Tactic('ctx-solver-simplify').apply(..)`    | uses solver calls to determine context subsumption.


## Developing simplification using Z3

In the following we outline a procedure for extracting a simplified
CNF representation of a formula.

```python

from z3 import *

def is_atom(t):
    if not is_bool(t):
        return False
    if not is_app(t):
        return False
    k = t.decl().kind()
    if k == Z3_OP_AND or k == Z3_OP_OR or k == Z3_OP_IMPLIES:
        return False
    if k == Z3_OP_EQ and t.arg(0).is_bool():
        return False
    if k == Z3_OP_TRUE or k == Z3_OP_FALSE or k == Z3_OP_XOR or k == Z3_OP_NOT:
        return False
    return True

def atoms(fml):
    visited = set([])
    atms = set([])
    def atoms_rec(t, visited, atms):
        if t in visited:
            return
        visited |= { t }
        if is_atom(t):
            atms |= { t }
        for s in t.children():
            atoms_rec(s, visited, atms)
    atoms_rec(fml, visited, atms)
    return atms

def atom2literal(m, a):
    if is_true(m.eval(a)):
        return a
    return Not(a)

```

Extract subset of atoms used to satisfy the negation
of a formula.

* snot is a solver for Not(fml)
* s    is a solver for fml
* m    is a model for Not(fml)

evaluate each atom in `fml` using `m` and create
literals corresponding to the sign of the evaluation.
If the model evaluates atoms to false, the literal is
negated.


```python
def implicant(atoms, s, snot):
    m = snot.model()
    lits = [atom2literal(m, a) for a in atoms]
    is_sat = s.check(lits)
    assert is_sat == unsat
    core = s.unsat_core()
    return Or([mk_not(c) for c in core])

```


Extract a CNF representation of `fml`
The procedure uses two solvers
Enumerate models for `Not(fml)`
Use the enumerated model to identify literals
that imply `Not(fml)`
The CNF of `fml` is a conjunction of the
negation of these literals.



```python

def to_cnf(fml):
    atms = atoms(fml)
    s = Solver()
    snot = Solver()
    snot.add(Not(fml))
    s.add(fml)

    while sat == snot.check():
        clause = implicant(atms, s, snot)
        yield clause
        snot.add(clause)

        
a, b, c, = Bools('a b c')
fml = Or(And(a, b), And(Not(a), c))

for clause in to_cnf(fml):
    print(clause)
    
```

## Subterm simplification

The simplification routine exposed by Z3 performs only 
rudimentary algebraic simplifications. It also does not 
use contextual information into account. In the following
example we develop a custom simplifier `simplify`
that uses the current context to find subterms that are
equal to the term being considered. In the example below,
the term $4 + 4((H-1)/2/2)$ is equal to $H$.

```python
H = Int('H')
s = Solver()
t = 4 + 4 * (((H - 1) / 2) / 2)
s.add(H % 4 == 0)
s.check()
m = s.model()
print(t, "-->", simplify(s, m, t))
```

To extract set of subterms it is useful to avoid traversing
the same term twice.

```python

def subterms(t):
    seen = {}
    def subterms_rec(t):
        if is_app(t):
            for ch in t.children():
                if ch in seen:
                    continue
                seen[ch] = True
                yield ch
                yield from subterms_rec(ch)
    return { s for s in subterms_rec(t) }
```

We can then define the simplification routine:

```python
def are_equal(s, t1, t2):
    s.push()
    s.add(t1 != t2)
    r = s.check()
    s.pop()
    return r == unsat

def simplify(slv, mdl, t):
    subs = subterms(t)
    values = { s : mdl.eval(s) for s in subs }
    values[t] = mdl.eval(t)
    def simplify_rec(t):        
        subs = subterms(t)
        for s in subs:
            if s.sort().eq(t.sort()) and values[s].eq(values[t]) and are_equal(slv, s, t):
                return simplify_rec(s)
        chs = [simplify_rec(ch) for ch in t.children()]
        return t.decl()(chs)
    return simplify_rec(t)
```
