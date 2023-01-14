---
title: MBQI
sidebar_position: 5
---

In the following example we code a custom model-based quantifier instantiation procedure.
The customized procedure uses models that prefer to set the
fewest number of bits in bit-vector variables to 1.
The case study is described in [Z3 internals](https://z3prover.github.io/slides/z3internals.pptx) as a running example.

We start with importing the formula from a text string.
```python
from z3 import *

s = Solver()
s.from_string("""
(define-fun s4 () (_ BitVec 1) #b0)
(declare-fun s0 () (_ BitVec 64))
(declare-fun s1 () (_ BitVec 64))
(assert (forall ((s2 (_ BitVec 64)))
            (let ((s3 ((_ extract 7 7) s2)))
            (let ((s5 (distinct s3 s4)))
            (let ((s6 (bvand s0 s2)))
            (let ((s7 (bvmul s1 s6)))
            (let ((s8 ((_ extract 56 56) s7)))
            (let ((s9 (distinct s4 s8)))
            (let ((s10 (= s5 s9)))
            (let ((s11 ((_ extract 15 15) s2)))
            (let ((s12 (distinct s4 s11)))
            (let ((s13 ((_ extract 57 57) s7)))
            (let ((s14 (distinct s4 s13)))
            (let ((s15 (= s12 s14)))
            (let ((s16 ((_ extract 23 23) s2)))
            (let ((s17 (distinct s4 s16)))
            (let ((s18 ((_ extract 58 58) s7)))
            (let ((s19 (distinct s4 s18)))
            (let ((s20 (= s17 s19)))
            (let ((s21 ((_ extract 31 31) s2)))
            (let ((s22 (distinct s4 s21)))
            (let ((s23 ((_ extract 59 59) s7)))
            (let ((s24 (distinct s4 s23)))
            (let ((s25 (= s22 s24)))
            (let ((s26 ((_ extract 39 39) s2)))
            (let ((s27 (distinct s4 s26)))
            (let ((s28 ((_ extract 60 60) s7)))
            (let ((s29 (distinct s4 s28)))
            (let ((s30 (= s27 s29)))
            (let ((s31 ((_ extract 47 47) s2)))
            (let ((s32 (distinct s4 s31)))
            (let ((s33 ((_ extract 61 61) s7)))
            (let ((s34 (distinct s4 s33)))
            (let ((s35 (= s32 s34)))
            (let ((s36 ((_ extract 55 55) s2)))
            (let ((s37 (distinct s4 s36)))
            (let ((s38 ((_ extract 62 62) s7)))
            (let ((s39 (distinct s4 s38)))
            (let ((s40 (= s37 s39)))
            (let ((s41 ((_ extract 63 63) s2)))
            (let ((s42 (distinct s4 s41)))
            (let ((s43 ((_ extract 63 63) s7)))
            (let ((s44 (distinct s4 s43)))
            (let ((s45 (= s42 s44)))
            (let ((s46 (and s40 s45)))
            (let ((s47 (and s35 s46)))
            (let ((s48 (and s30 s47)))
            (let ((s49 (and s25 s48)))
            (let ((s50 (and s20 s49)))
            (let ((s51 (and s15 s50)))
            (let ((s52 (and s10 s51)))
            s52)))))))))))))))))))))))))))))))))))))))))))))))))))

""")

```

Let us first create a version of the formula that is bit-blasted.
For this purpose we pre-process the formula with simplification and then invoke
the `bit-blast` tactic. We have to set an option `blast_quant` to `True` in order
to convert a quantified bit-vector variable to a set of quantified Booleans.

```python

t = Then(Tactic('simplify'), With(Tactic('bit-blast'), blast_quant=True))

g = Goal()
g.add(s.assertions())
r = t(g)
fml = r[0].as_expr()

```

The formula `fml` is a bit-blasted version of the original formula.             
We collect the free atomic Boolean variables in the bit-blasted formulas.

```python

def is_uninterp(t):
    return is_app(t) and t.decl().kind() == Z3_OP_UNINTERPRETED

def subterms(t):
    def sub(t, ids, terms):
        if t.get_id() in ids:
            return
        ids |= { t.get_id() }
        terms += [ t ]
        for s in t.children():
            sub(s, ids, terms)
        return terms
    return sub(t, set([]), [])

def get_bits(fml):
    return { t for t in subterms(fml) if is_uninterp(t) }

```

Z3 introduces fresh _internal_ uninterpreted constants in the process of bit-blasting.
The fresh _internal_ uninterpreted constants are hidden from models, so to
be able to retrieve model values for the fresh constants, we
rename them back to _external_ constants. The function `substitute` is used to replace sub-terms.
It required a list of pairs as input.

```python
orig_bits = get_bits(fml.body())
orig2bit = { b : Bool(f"x{b}") for b in orig_bits }
bits = list(orig2bit.values())
fml = substitute(fml, list(orig2bit.items()))
```

We also create atomic constants for the bound variables.
The function `substitute_vars` replaces free de-Bruijn index variables by the terms supplied
as the second argument.

```python
vars = Bools([f"x{i}" for i in range(fml.num_vars())])
fml = fml.body()
fml = substitute_vars(fml, *vars)
```

We are now ready for an MBQI loop that uses optimization to
always find a model that sets the fewest bits to true.
This is both for models of the outer constraints and
for models of the negated body.

```python
fmls = []
while True:
    opt = Optimize()
    opt.add(fmls)
    for b in bits:
        opt.add_soft(Not(b))
    if unsat == opt.check():
        print("Unsat")
        break
    M = opt.model()
    checker = Optimize()
    sub = [(bit, M.eval(bit)) for bit in bits]
    print(sub)
    inst = simplify(substitute(fml, sub))
    checker.add(Not(inst))
    for b in vars:
        checker.add_soft(Not(b))
    if unsat == checker.check():
        print("Sat", M)
        break
    M = checker.model()
    fml1 = simplify(substitute(fml, [(b, M.eval(b)) for b in vars]))
    print(fml1)
    fmls += [fml1]
```