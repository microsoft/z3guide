# Testing Page for Code Snippets

A typical SMTLIB snippet

```z3
(declare-const s (Seq Int))
(declare-const t (Seq Int))
(declare-const j Int)
(declare-const b Int)

(assert (<= 10 (seq.len s)))
(assert (<= 8 j))
(assert (< j (seq.len s)))
(assert (= t (seq.++ (seq.extract s 0 j) (seq.unit b) (seq.extract s (+ j 1) (- (seq.len s) j 1)))))
(push)
(assert (not (= (seq.unit b) (seq.at t j))))
(check-sat)
(pop)
(push)
(assert (not (= (seq.len s) (seq.len t))))
(check-sat)
(pop)
(push)
(assert (not (= (seq.at s 8) (seq.at t 8))))
(assert (not (= (seq.at s 9) (seq.at t 9))))
(check-sat)
(pop)
```

A typical z3-js snippet
```z3-js
const solver = new Z3.Solver();
const sort = Z3.Int.sort();
const x = Z3.Int.const('x');
const y = Z3.Int.const('y');
const g = Z3.Function.declare('g', sort, sort);
const conjecture = Z3.Implies(x.eq(y), g.call(g.call(x)).eq(g.call(y)));
solver.add(Z3.Not(conjecture));
await solver.check()
solver.model()
```

A typical game snippet
```z3-duo
(declare-const x (_ BitVec 32))
------
(declare-const x (_ BitVec 32))
(assert (= (bvand x (bvsub x (_ bv1 32))) (_ bv0 32)))

```

An always editable snippet

```z3 always-editable
(echo "I am editable")
```