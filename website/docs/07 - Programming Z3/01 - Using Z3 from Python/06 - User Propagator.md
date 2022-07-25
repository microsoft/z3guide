---
title: User Propagators
sidebar_position: 6
---

User propagators allow implementing custom theory solvers outside of z3.
The following example illustrates using propagators for solving over the 
reflexive transitive closure (RTC) of a binary relation over a finite domain.
It is possible to axiomatize the reflexive transitive closure as a finite lookup table, 
but the representation explodes (quadratically) when the size of the finite domain is large.

We represent the relation outside of z3. For sake of simplicity the example maintains the RTC 
as a lookup table as well (so it does not scale as well as an an implicit representation of the RTC).
It also only implements a very basic set of rules for enforcing RTC over the finite domain. 
We leave optimizations as a fun project you could explore while learning User Propagators.
For example, you can implement inference rules that check that the asserted binary relations
are consistent with the rules of transitivity.

:::warning

Programming decision procedures is generally not a trivial task. The UserPropagate API attempts to enable new decision procedures and keeping a relatively low barrier of entry. Nevertheless, even a simple theory that we are going to explore exhibits its own subtleties. Program user propagators at your own risk.

:::

## A Problem Instance

We take a problem instance from a user GitHub question on how to scale reasoning with RTC.
The smaller example uses two relations `<=Sort` and `<=SortSyntax` that are reflexive and transitive
and they are defined over the finite enumeration sort `Sort`. We elide the declarations of the
two binary relations in the input and instead declare them outside of SMTLIB. 
This allows us to declare the relations such that the propagator is notified whenever a new 
predicate over `<=Sort` or `<=SortSyntax` is created.

```pyhon
from z3 import *

example = """

(declare-datatypes () ((Sort
(|SortInt| )
(|SortExp| )
(|SortKItem| )
(|SortKLabel| )
(|SortK| )
)))

;(declare-fun <=Sort (Sort Sort) Bool)
;(declare-fun <=SortSyntax (Sort Sort) Bool)


(declare-const |FreshVarSort_6_8_6_36_#KRewrite| Sort)
(declare-const |VarA| Sort)
(declare-const |VarB| Sort)
(declare-const |VarC| Sort)
(declare-datatypes() ((SolutionVariables (SolVars (|Sol_VarA| Sort) (|Sol_VarB| Sort) (|Sol_VarC| Sort) ))))
(declare-datatypes() ((Solution (Sol (vars SolutionVariables) (|Sol_FreshVarSort_6_8_6_36_#KRewrite| Sort) ))))
(define-fun theSolution () Solution (Sol (SolVars |VarA| |VarB| |VarC| ) |FreshVarSort_6_8_6_36_#KRewrite| ))
(define-fun lt ((s1 Solution) (s2 Solution)) Bool (and true (<=SortSyntax (|Sol_VarA| (vars s1)) (|Sol_VarA| (vars s2))) (<=SortSyntax (|Sol_VarB| (vars s1)) (|Sol_VarB| (vars s2))) (<=SortSyntax (|Sol_VarC| (vars s1)) (|Sol_VarC| (vars s2)))  (distinct (vars s1) (vars s2))))
(assert (and true (distinct (|Sol_FreshVarSort_6_8_6_36_#KRewrite| theSolution) |SortKLabel|) ))
(define-fun |constraint4_SortExp| ((s Solution)) Bool (and true (<=Sort (|Sol_VarA| (vars s)) |SortExp|) ))
(define-fun |constraint6_SortExp| ((s Solution)) Bool (and true (<=Sort (|Sol_VarB| (vars s)) |SortExp|) ))
(define-fun |constraint3_SortExp| ((s Solution)) Bool (and true (<=Sort |SortExp| |SortExp|) (|constraint4_SortExp| s) (|constraint6_SortExp| s) ))
(define-fun |constraint8_SortExp| ((s Solution)) Bool (and true (<=Sort (|Sol_VarC| (vars s)) |SortExp|) ))
(define-fun |constraint2_(Sol_FreshVarSort_6_8_6_36_#KRewrite s)| ((s Solution)) Bool (and true (<=Sort |SortExp| (|Sol_FreshVarSort_6_8_6_36_#KRewrite| s)) (|constraint3_SortExp| s) (|constraint8_SortExp| s) ))
(define-fun |constraint12_SortInt| ((s Solution)) Bool (and true (<=Sort (|Sol_VarA| (vars s)) |SortInt|) ))
(define-fun |constraint14_SortInt| ((s Solution)) Bool (and true (<=Sort (|Sol_VarB| (vars s)) |SortInt|) ))
(define-fun |constraint11_SortInt| ((s Solution)) Bool (and true (<=Sort |SortInt| |SortInt|) (|constraint12_SortInt| s) (|constraint14_SortInt| s) ))
(define-fun |constraint16_SortInt| ((s Solution)) Bool (and true (<=Sort (|Sol_VarC| (vars s)) |SortInt|) ))
(define-fun |constraint10_(Sol_FreshVarSort_6_8_6_36_#KRewrite s)| ((s Solution)) Bool (and true (<=Sort |SortInt| (|Sol_FreshVarSort_6_8_6_36_#KRewrite| s)) (|constraint11_SortInt| s) (|constraint16_SortInt| s) ))
(define-fun |constraint1_Sort#RuleBody| ((s Solution)) Bool (and true (= (|Sol_FreshVarSort_6_8_6_36_#KRewrite| s) |SortK|) (|constraint2_(Sol_FreshVarSort_6_8_6_36_#KRewrite s)| s) (|constraint10_(Sol_FreshVarSort_6_8_6_36_#KRewrite s)| s) ))
(define-fun |constraint0_Sort#RuleContent| ((s Solution)) Bool (and true (|constraint1_Sort#RuleBody| s) ))
(define-fun |constraint21_SortExp| ((s Solution)) Bool (and true (<=Sort |SortExp| |SortExp|) (|constraint6_SortExp| s) (|constraint8_SortExp| s) ))
(define-fun |constraint20_(Sol_FreshVarSort_6_8_6_36_#KRewrite s)| ((s Solution)) Bool (and true (<=Sort |SortExp| (|Sol_FreshVarSort_6_8_6_36_#KRewrite| s)) (|constraint4_SortExp| s) (|constraint21_SortExp| s) ))
(define-fun |constraint19_Sort#RuleBody| ((s Solution)) Bool (and true (= (|Sol_FreshVarSort_6_8_6_36_#KRewrite| s) |SortK|) (|constraint20_(Sol_FreshVarSort_6_8_6_36_#KRewrite s)| s) (|constraint10_(Sol_FreshVarSort_6_8_6_36_#KRewrite s)| s) ))
(define-fun |constraint18_Sort#RuleContent| ((s Solution)) Bool (and true (|constraint19_Sort#RuleBody| s) ))
(define-fun amb0 ((s Solution)) Bool (or (|constraint0_Sort#RuleContent| s) (|constraint18_Sort#RuleContent| s) ))

(assert (amb0 theSolution))
;(assert (not (exists ((s Solution)) (and (lt theSolution s) (amb0 s) (distinct (|Sol_FreshVarSort_6_8_6_36_#KRewrite| s) |SortKLabel|) ))))
(assert (not (exists ((var SolutionVariables) (s Sort)) (and (lt theSolution (Sol var s)) (amb0 (Sol var s)) (distinct s |SortKLabel|) ))))
(check-sat)
(get-model)
;(assert (or false (distinct |VarA| |SortInt|) (distinct |VarB| |SortInt|) (distinct |VarC| |SortInt|) ))
;(check-sat)
"""
```

## Propagate Functions

We can access the sort `Sort` from the SMTLIB input by declaring it as a `DatatypeSort`. 
Then the two functions we did not define in the SMTLIB input are declared as `PropagateFunction`.
This declaration instructs z3 to invoke callbacks whenever a new term headed by the declared
function is introduced to the solver. It could be a term that is part of the input, or it could
be a term that is created dynamically using quantifier instantiation.

```python

Sort = DatatypeSort("Sort")
leSort = PropagateFunction("<=Sort", Sort, Sort, BoolSort())
leSortSyntax = PropagateFunction("<=SortSyntax", Sort, Sort, BoolSort())
fmls = parse_smt2_string(example, decls={"<=Sort":leSort, "<=SortSyntax":leSortSyntax})

```

## Axiomatizing RTCs

```python

[SortInt, SortExp, SortKItem, SortKLabel, SortK] = [Sort.constructor(i) for i in range(Sort.num_constructors())]


leSortTable = [(SortKItem, SortK),
               (SortExp, SortKItem),
               (SortInt, SortExp)]

leSortSyntaxTable = [(SortKItem, SortK),
                     (SortExp, SortKItem),
                     (SortInt, SortExp)]

constructors = {con() for con in [SortInt, SortExp, SortKItem, SortKLabel, SortK]}


# Compute the reflexive transitive closure of a binary relation over constructors.

def rtc(constructors, bin):
    step = { k : set([]) for k in constructors }
    for k, v in bin:
        step[k()] |= { v() }
    t = { k : {k} for k in constructors }
    change = True
    while change:
        change = False
        for k, vs in t.items():
            sz0 = len(vs)
            vs |= { w for v in vs for w in step[v] }
            if len(vs) > sz0:
                change = True
    print(t)
    return t

```

## Union Find

We use a simple union find with support for tracking values.

```python
class Node:
    def __init__(self, a):
        self.term = a
        self.id = a.get_id()
        self.root = self
        self.size = 1
        self.value = None

    def __eq__(self, other):
        return self.id == other.id

    def __ne__(self, other):
        return self.id != other.id
    
    def to_string(self):
        return f"{self.term} -> r:{self.root.term}"

    def __str__(self):
        return self.to_string()

class UnionFind:
    def __init__(self, trail):
        self._nodes = {}
        self.trail = trail

    def node(self, a):
        if a in self._nodes:
            return self._nodes[a]
        n = Node(a)
        self._nodes[a] = n
        def undo():
            del self._nodes[a]
        self.trail.append(undo)
        return n

    def merge(self, a, b):
        a = self.node(a)
        b = self.node(b)
        a = self.find(a)
        b = self.find(b)
        if a == b:
            return
        if a.size < b.size:
            a, b = b, a
        if a.value is not None and b.value is not None:
            print("Merging two values", a, a.value, b, b.value)
            os._exit()
        value = a.value
        if b.value is not None:
            value = b.value        
        old_root = b.root
        old_asize = a.size
        old_bvalue = b.value
        old_avalue = a.value
        b.root = a.root
        b.value = value
        a.value = value
        a.size += b.size
        def undo():
            b.root = old_root
            a.size = old_asize
            b.value = old_bvalue
            a.value = old_avalue
        self.trail.append(undo)

    # skip path compression to keep the example basic
    def find(self, a):
        assert isinstance(a, Node)
        root = a.root
        while root != root.root:
            root = root.root
        return root

    def set_value(self, a):
        n = self.find(self.node(a))
        if n.value is not None:
            return
        def undo():
            n.value = None
        n.value = a
        self.trail.append(undo)

    def get_value(self, a):
        return self.find(self.node(a)).value        

    def root_term(self, a):
        return self.find(self.node(a)).term

    def __str__(self):
        return self.to_string()

    def __repr__(self):
        return self.to_string()

    def to_string(self):
        return "\n".join([n.to_string() for t, n in self._nodes.items()])
        
```

## Finally, the propagator

It uses a good set of features exposed for user propagators.
It illustrates 

* Instantiation of basic methods for backtracking and cloning
* Registering terms to be tracked in callbacks
* Callbacks for when terms are assigned fixed values
* Callbacks for new equalities are detected by z3
* Callbacks when new terms are created using `PropagateFunction`
* Callbacks when z3's search is done case splitting

### TC as a subclass

The `TC` solver is instantiated as a subclass of `UserPropagateBase`. 
The subclass implements three virtual methods `push`, `pop`, and `fresh`.
It adds other optional callbacks for `fixed`, `final`, `eq` `created` and
initializes data-structures for tracking the reflexive transitive closure of
 relations `<=Sort` and `<=SortSyntax`.

The push/pop callbacks are invoked when z3's CDCL-based solver case splits and backtracks.
State changes within the scope of a push have to be reverted to an equivalent state.
It is not a requirement that the state be exactly the same, but it should preserve
satisfiability relative to the previous time it was in the same scope.
We restore state using functions that are pushed on a trail whenever some side-effect occurs within a scope.


```python
class TC(UserPropagateBase):
    def __init__(self, s=None, ctx=None):
        UserPropagateBase.__init__(self, s, ctx)
        self.trail = []
        self.lim   = []
        self.add_fixed(lambda x, v : self._fixed(x, v))
        self.add_final(lambda : self._final())
        self.add_eq(lambda x, y : self._eq(x, y))
        self.add_created(lambda t : self._created(t))
        self.uf = UnionFind(self.trail)
        for v in constructors:
            self.uf.set_value(v)
        self.first = True
        self._fixed_le = []
        self._fixed_le_syntax = []
        self._fixed_le_table = rtc(constructors, leSortTable)
        self._fixed_le_syntax_table = rtc(constructors, leSortSyntaxTable)

    def push(self):
        self.lim += [len(self.trail)]

    def pop(self, n):
        head = self.lim[len(self.lim) - n]
        while len(self.trail) > head:
            self.trail[-1]()
            self.trail.pop(-1)
        self.lim = self.lim[0:len(self.lim)-n]

    def fresh(self, new_ctx):
        return TC(ctx=new_ctx)
```

### Handling assignments to fixed values

    
When `x` is fixed to value `v`, we check if it immediately
triggers a conflict. If it doesn't we add it to a trail
that is checked on final. It is assumed that during final
`check_conflict` is conclusive (returns True) as all equatlities
are known between arguments to <=Sort and <=SortSyntax.
    

```python
    def _fixed(self, x, v):        
        print("fixed: ", x, " := ", v)
        if x.decl().eq(leSort):
            self._fixed_trail(x, v, self._fixed_le_table, self._fixed_le)
        elif x.decl().eq(leSortSyntax):
            self._fixed_trail(x, v, self._fixed_le_syntax_table, self._fixed_le_syntax)

    def _fixed_trail(self, x, v, table, trail):
        if self.check_conflict(x, v, table):
            return
        trail.append((x,v))
        def undo():
            trail.pop(-1)
        self.trail.append(undo)

```

### New Terms

When a new term `t` is created using one of the `PropagateFunction` declarations we receive a callback.
It allows register `t` and its two arguments with z3. In return for registering these terms, z3 will
invoke `fixed` and `eq` callbacks when z3 infers a fixed value assignment or a new equality between
tracked terms.

```python
    def _created(self, t):
        print("Created", t)
        self.add(t)
        x, y = t.arg(0), t.arg(1)
        self.add(x)
        self.add(y)
        if self.first:
            self.first = False
            for v in constructors:
                self.add(v)
```

There is a subtle component in this callback: We need to register all constructors with the solver
otherwise, it could be that a constructor does not occur as argument of any
of the tracked predicates, but gets used by the solver and merged with
one of the arguments during search. If the constructor isn't registered
`final()` cannot resolve the value associated with a `x` or `y`.

### Equality callbacks

Terms that have been registered using `self.add` are tracked by the solver. 
The solver issues the equality callback when two registered terms are equated.
The number of equality callbacks for _N_ terms that are equal is _N-1_, corresponding
to a spanning tree. So not all equalities are presented in callbacks and the client 
can track equivalence classes by using a union-find data-structure as we are doing.

```python

    def _eq(self, x, y):
        print(x, " = ", y)
        self.uf.merge(x, y)

```

### Final check

```python
    def _final(self):
        print("Final")
        self.check_rtc(self._fixed_le, self._fixed_le_table)
        self.check_rtc(self._fixed_le_syntax, self._fixed_le_syntax_table)

    #
    # Check if assignment f := v triggers a conflict with respect
    # to reflexive, transitive closure relation, <=Sort or <=SortSyntax
    # Look up the values of the two arguments a, b in the
    # union-find structure.
    # For
    #  <=Sort(a,b) := True, check that b is reachable from a
    #  <=Sort(a,b) := False, check that b is _not_ reachable from a
    # The process is similar for <=SortSyntax
    # 
    def check_conflict(self, f, v, rtc, is_final = False):
        a, b = f.arg(0), f.arg(1)
        va, vb = self.uf.get_value(a), self.uf.get_value(b)
        if va is None or vb is None:
            if is_final:
                print("Unassigned", a, va, b, vb)
                os._exit(1)
            return False
        if is_true(v):
            if vb not in rtc[va]:
                print("Conflict not included in TC", f, v, a, va, b, vb)
                self.conflict(deps = [f], eqs = [(a, va), (b, vb)])
                return True
            else:
                return False
        elif is_false(v):
            if vb in rtc[va]:
                print("Conflict negated but included in TC", f, v, a, va, b, vb)
                self.conflict(deps = [f], eqs = [(a, va), (b, vb)])
                return True
            else:
                return False
        else:
            print("Unrecognized value", v)
            assert(False)
        
    def check_rtc(self, asserted, rtc):
        for (f, v) in asserted:            
            if self.check_conflict(f, v, rtc, is_final = True):
                return

```

## Using the User Propagator

```python
s = Solver()
b = TC(s)

for (a,b) in leSortTable:
    s.add(leSort(a(),b()))
for (a,b) in leSortSyntaxTable:
    s.add(leSortSyntax(a(), b()))
    
s.add(fmls)
print(s.check())
```
