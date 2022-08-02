---
title: Advanced Topics
sidebar_position: 2
---


## Expressions, Sorts and Declarations

In Z3, expressions, sorts and declarations are called _ASTs_.
ASTs are directed acyclic graphs. Every expression has a sort (aka type).
The method <tt>sort()</tt> retrieves the sort of an expression.

```z3-python
x = Int('x')
y = Real('y')
print ((x + 1).sort())
print ((y + 1).sort())
print ((x >= 2).sort())
```

The function <tt>eq(n1, n2)</tt> returns <tt>True</tt> if <tt>n1</tt>
and <tt>n2</tt> are the same AST. This is a structural test. 


```z3-python
x, y = Ints('x y')
print (eq(x + y, x + y))
print (eq(x + y, y + x))
n = x + y
print (eq(n, x + y))
# x2 is eq to x
x2 = Int('x') 
print (eq(x, x2))
# the integer variable x is not equal to 
# the real variable x
print (eq(Int('x'), Real('x')))
```

The method <tt>hash()</tt> returns a hashcode for an AST node.
If <tt>eq(n1, n2)</tt> returns <tt>True</tt>, then <tt>n1.hash()</tt>
is equal to <tt>n2.hash()</tt>. 


```z3-python
x = Int('x')
print (x + 1).hash()
print (1 + x).hash()
print x.sort().hash()
```

Z3 expressions can be divided in three basic groups: **applications**,
**quantifiers** and **bounded/free variables**.
Applications are all you need if your problems do not contain 
universal/existential quantifiers. Although we say <tt>Int('x')</tt> is an
integer "variable", it is technically an integer constant, and internally
is represented as a function application with <tt>0</tt> arguments.
Every application is associated with a **declaration** and contains 
<tt>0</tt> or more arguments. The method <tt>decl()</tt> returns 
the declaration associated with an application. The method <tt>num_args()</tt>
returns the number of arguments of an application, and <tt>arg(i)</tt> one of the arguments.
The function <tt>is_expr(n)</tt> returns <tt>True</tt>
if <tt>n</tt> is an expression. Similarly <tt>is_app(n)</tt> (<tt>is_func_decl(n)</tt>)
returns <tt>True</tt> if <tt>n</tt> is an application (declaration). 

```z3-python
x = Int('x')
print ("is expression: ", is_expr(x))
n = x + 1
print ("is application:", is_app(n))
print ("decl:          ", n.decl())
print ("num args:      ", n.num_args())
for i in range(n.num_args()):
    print ("arg(", i, ") ->", n.arg(i))
```

Declarations have names, they are retrieved using the method <tt>name()</tt>.
A (function) declaration has an arity, a domain and range sorts.

```z3-python
x   = Int('x')
x_d = x.decl()
print ("is_expr(x_d):     ", is_expr(x_d))
print ("is_func_decl(x_d):", is_func_decl(x_d))
print ("x_d.name():       ", x_d.name())
print ("x_d.range():      ", x_d.range())
print ("x_d.arity():      ", x_d.arity())
# x_d() creates an application with 0 arguments using x_d.
print ("eq(x_d(), x):     ", eq(x_d(), x))
print ("\n")
# f is a function from (Int, Real) to Bool
f   = Function('f', IntSort(), RealSort(), BoolSort())
print ("f.name():         ", f.name())
print "f.range():        ", f.range()
print ("f.arity():        ", f.arity())
for i in range(f.arity()):
    print ("domain(", i, "): ", f.domain(i))
# f(x, x) creates an application with 2 arguments using f.
print (f(x, x))
print (eq(f(x, x).decl(), f))
```


The built-in declarations are identified using their **kind**. The kind
is retrieved using the method <tt>kind()</tt>. The complete list of built-in declarations
can be found in the file <tt>z3consts.py</tt> (<tt>z3_api.h</tt>) in the Z3 distribution.

```z3-python
x, y = Ints('x y')
print ((x + y).decl().kind() == Z3_OP_ADD)
print ((x + y).decl().kind() == Z3_OP_SUB)
```


The following example demonstrates how to substitute sub-expressions in Z3 expressions.

```z3-python
x, y = Ints('x y')
f    = Function('f', IntSort(), IntSort(), IntSort())
g    = Function('g', IntSort(), IntSort())
n    = f(f(g(x), g(g(x))), g(g(y)))
print (n)
# substitute g(g(x)) with y and g(y) with x + 1
print (substitute(n, (g(g(x)), y), (g(y), x + 1)))
```

The function <tt>Const(name, sort)</tt> declares a constant (aka variable) of the given sort.
For example, the functions <tt>Int(name)</tt> and <tt>Real(name)</tt> are shorthands for
<tt>Const(name, IntSort())</tt> and <tt>Const(name, RealSort())</tt>.

```z3-python
x = Const('x', IntSort())
print (eq(x, Int('x')))

a, b = Consts('a b', BoolSort())
print (And(a, b))
```

## Arrays

As part of formulating a programme of a mathematical theory of computation
McCarthy proposed a _basic_ theory of arrays as characterized by
the select-store axioms. The expression <tt>Select(a, i)</tt> returns
the value stored at position <tt>i</tt> of the array <tt>a</tt>;
and <tt>Store(a, i, v)</tt> returns a new array identical to <tt>a</tt>,
but on position <tt>i</tt> it contains the value <tt>v</tt>.
In Z3Py, we can also write <tt>Select(a, i)</tt> as <tt>a[i]</tt>.

```z3-python
# Use I as an alias for IntSort()
I = IntSort()
# A is an array from integer to integer
A = Array('A', I, I)
x = Int('x')
print (A[x])
print (Select(A, x))
print (Store(A, x, 10))
print (simplify(Select(Store(A, 2, x+1), 2)))
```


By default, Z3 assumes that arrays are extensional over select. 
In other words, Z3 also enforces that if two arrays agree on all positions, 
then the arrays are equal.



Z3 also contains various extensions 
for operations on arrays that remain decidable and amenable
to efficient saturation procedures (here efficient means, 
with an NP-complete satisfiability complexity).
We describe these extensions in the following using a collection of examples.
Additional background on these extensions is available in the 
paper [Generalized and Efficient Array Decision Procedures](http://research.microsoft.com/en-us/um/people/leonardo/fmcad09.pdf)



Arrays in Z3 are used to model unbounded or very large arrays.
Arrays should not be used to model small finite collections of values.
It is usually much more efficient to create different variables using list comprehensions.

```z3-python
# We want an array with 3 elements.
# 1. Bad solution
X = Array('x', IntSort(), IntSort())
# Example using the array
print (X[0] + X[1] + X[2] >=0)

# 2. More efficient solution
X = IntVector('x', 3)
print (X[0] + X[1] + X[2] >= 0)
print (Sum(X) >= 0)
```

## Select and Store


Let us first check a basic property of arrays.
Suppose <tt>A</tt> is an array of integers, then the constraints
<tt>A[x] == x, Store(A, x, y) == A</tt>
are satisfiable for an array that contains an index <tt>x</tt> that maps to <tt>x</tt>,
and when <tt>x == y</tt>.
We can solve these constraints.

```z3-python
A = Array('A', IntSort(), IntSort())
x, y = Ints('x y')
solve(A[x] == x, Store(A, x, y) == A)
```

The interpretation/solution for array variables is very similar to the one used for functions.

The problem becomes unsatisfiable/infeasible if we add the constraint <tt>x != y</tt>.

```z3-python
A = Array('A', IntSort(), IntSort())
x, y = Ints('x y')
solve(A[x] == x, Store(A, x, y) == A, x != y)
```


### Constant arrays


The array that maps all indices to some fixed value can be specified in Z3Py using the
<tt>K(s, v)</tt> construct where <tt>s</tt> is a sort/type and <tt>v</tt> is an expression.
<tt>K(s, v)</tt> returns a array that maps any value of <tt>s</tt> into <tt>v</tt>.
The following example defines a constant array containing only ones.

```z3-python
AllOne = K(IntSort(), 1)
a, i = Ints('a i')
solve(a == AllOne[i])
# The following constraints do not have a solution
solve(a == AllOne[i], a != 1)
```

## Datatypes

Algebraic datatypes, known from programming languages such as ML,
offer a convenient way for specifying common data structures. Records
and tuples are special cases of algebraic datatypes, and so are
scalars (enumeration types). But algebraic datatypes are more
general. They can be used to specify finite lists, trees and other
recursive structures.


The following example demonstrates how to declare a List in Z3Py. It is
more verbose than using the SMT 2.0 front-end, but much simpler than using
the Z3 C API. It consists of two phases.
First, we have to declare the new datatype, its constructors and accessors.
The function <tt>Datatype('List')</tt> declares a "placeholder" that will
contain the constructors and accessors declarations. The method
<tt>declare(cname, (aname, sort)+)</tt> declares a constructor named
<tt>cname</tt> with the given accessors. Each accessor has an associated <tt>sort</tt>
or a reference to the datatypes being declared.
For example, <tt>declare('cons', ('car', IntSort()), ('cdr', List))</tt>
declares the constructor named <tt>cons</tt> that builds a new <tt>List</tt>
using an integer and a <tt>List</tt>. It also declares the accessors <tt>car</tt> and
<tt>cdr</tt>. The accessor <tt>car</tt> extracts the integer of a <tt>cons</tt>
cell, and <tt>cdr</tt> the list of a <tt>cons</tt> cell.
After all constructors were declared, we use the method <tt>create()</tt> to
create the actual datatype in Z3. Z3Py makes the new Z3 declarations and constants
available as slots of the new object. 

```z3-python
# Declare a List of integers
List = Datatype('List')
# Constructor cons: (Int, List) -> List
List.declare('cons', ('car', IntSort()), ('cdr', List))
# Constructor nil: List
List.declare('nil')
# Create the datatype
List = List.create()
print is_sort(List)
cons = List.cons
car  = List.car
cdr  = List.cdr
nil  = List.nil
# cons, car and cdr are function declarations, and nil a constant
print (is_func_decl(cons))
print (is_expr(nil))

l1 = cons(10, cons(20, nil))
print (l1)
print (simplify(cdr(l1)))
print (simplify(car(l1)))
print (simplify(l1 == nil))
```


The following example demonstrates how to define a Python function that 
given a sort creates a list of the given sort. 

```z3-python
def DeclareList(sort):
    List = Datatype('List_of_%s' % sort.name())
    List.declare('cons', ('car', sort), ('cdr', List))
    List.declare('nil')
    return List.create()

IntList     = DeclareList(IntSort())
RealList    = DeclareList(RealSort())
IntListList = DeclareList(IntList)

l1 = IntList.cons(10, IntList.nil)
print (l1)
print (IntListList.cons(l1, IntListList.cons(l1, IntListList.nil)))
print (RealList.cons("1/3", RealList.nil))

print (l1.sort())
```

The example above demonstrates that Z3 supports operator overloading.
There are several functions named <tt>cons</tt>, but they are different since they receive and/or
return values of different sorts.
Note that it is not necessary to use a different sort name for each instance of the sort
list. That is, the expression <tt>'List_of_%s' % sort.name()</tt> is not necessary, we
use it just to provide more meaningful names.



As described above enumeration types are a special case of algebraic datatypes.
The following example declares an enumeration type consisting of three values:
<tt>red</tt>, <tt>green</tt> and <tt>blue</tt>.

```z3-python
Color = Datatype('Color')
Color.declare('red')
Color.declare('green')
Color.declare('blue')
Color = Color.create()

print (is_expr(Color.green))
print (Color.green == Color.blue)
print (simplify(Color.green == Color.blue))

# Let c be a constant of sort Color
c = Const('c', Color)
# Then, c must be red, green or blue
prove(Or(c == Color.green, 
         c == Color.blue,
         c == Color.red))
```


Z3Py also provides the following shorthand for declaring enumeration sorts.

```z3-python
Color, (red, green, blue) = EnumSort('Color', ('red', 'green', 'blue'))

print (green == blue)
print (simplify(green == blue))

c = Const('c', Color)
solve(c != green, c != blue)
```


Mutually recursive datatypes can also be declared. The only difference is that we use
the function <tt>CreateDatatypes</tt> instead of the method <tt>create()</tt> to create
the mutually recursive datatypes.

```z3-python
TreeList = Datatype('TreeList')
Tree     = Datatype('Tree')
Tree.declare('leaf', ('val', IntSort()))
Tree.declare('node', ('left', TreeList), ('right', TreeList))
TreeList.declare('nil')
TreeList.declare('cons', ('car', Tree), ('cdr', TreeList))

Tree, TreeList = CreateDatatypes(Tree, TreeList)

t1  = Tree.leaf(10)
tl1 = TreeList.cons(t1, TreeList.nil)
t2  = Tree.node(tl1, TreeList.nil)
print (t2)
print (simplify(Tree.val(t1)))

t1, t2, t3 = Consts('t1 t2 t3', TreeList)

solve(Distinct(t1, t2, t3))
```

## Uninterpreted Sorts


Function and constant symbols in pure first-order logic are uninterpreted or free, 
which means that no a priori interpretation is attached. 
This is in contrast to arithmetic operators such as <tt>+</tt> and <tt>-</tt> 
that have a fixed standard interpretation. 
Uninterpreted functions and constants are maximally flexible; 
they allow any interpretation that is consistent with the constraints over the function or constant.



To illustrate uninterpreted functions and constants let us introduce an (uninterpreted) sort <tt>A</tt>, 
and the constants <tt>x</tt>, <tt>y</tt> ranging over <tt>A</tt>. 
Finally let <tt>f</tt> be an uninterpreted function that takes one
argument of sort <tt>A</tt> and results in a value of sort <tt>A</tt>. 
The example illustrates how one can force an interpretation where <tt>f</tt> applied twice to <tt>x</tt> results in <tt>x</tt> again, 
but <tt>f</tt> applied once to <tt>x</tt> is different from <tt>x</tt>.

```z3-python
A    = DeclareSort('A')
x, y = Consts('x y', A)
f    = Function('f', A, A)

s    = Solver()
s.add(f(f(x)) == x, f(x) == y, x != y)

print (s.check())
m = s.model()
print (m)
print ("interpretation assigned to A:")
print (m[A])
```


The resulting model introduces abstract values for the elements in <tt>A</tt>,
because the sort <tt>A</tt> is uninterpreted. The interpretation for <tt>f</tt> in the
model toggles between the two values for <tt>x</tt> and <tt>y</tt>, which are different.
The expression <tt>m[A]</tt> returns the interpretation (universe) for the uninterpreted sort <tt>A</tt>
in the model <tt>m</tt>. 

## Quantifiers


Z3 is can solve quantifier-free problems containing arithmetic, bit-vector, Booleans,
arrays, functions and datatypes. Z3 also accepts and can work with formulas
that use quantifiers. It is no longer a decision procedure for 
such formulas in general (and for good reasons, as there can be
no decision procedure for first-order logic).

```z3-python
f = Function('f', IntSort(), IntSort(), IntSort())
x, y = Ints('x y')
f = ForAll([x, y], f(x, y) == 0)
print (f.body())
v1 = f.body().arg(0).arg(0)
print (v1)
print (eq(v1, Var(1, IntSort())))
```


Nevertheless, Z3 is often able to handle formulas involving
quantifiers. It uses several approaches to handle quantifiers.
The most prolific approach is using _pattern-based_ quantifier
instantiation. This approach allows instantiating quantified formulas
with ground terms that appear in the current search context based
on _pattern annotations_ on quantifiers. 
Z3 also contains a model-based quantifier instantiation 
component that uses a model construction to find good terms to instantiate
quantifiers with; and Z3 also handles many decidable fragments.


Note that in the previous example the constants <tt>x</tt> 
and <tt>y</tt> were used to create quantified formulas.
This is a "trick" for simplifying the construction of quantified
formulas in Z3Py. Internally, these constants are replaced by
bounded variables. The next example demonstrates that. The method
<tt>body()</tt> retrives the quantified expression.
In the resultant formula the bounded variables are free.
The function <tt>Var(index, sort)</tt> creates a bounded/free variable
with the given index and sort.
 
```z3-python
f = Function('f', IntSort(), IntSort(), IntSort())
x, y = Ints('x y')
f = ForAll([x, y], f(x, y) == 0)
print (f.body())
v1 = f.body().arg(0).arg(0)
print (v1)
print (eq(v1, Var(1, IntSort())))
```

### Modeling with Quantifiers


Suppose we want to model an object oriented type system with single inheritance. 
We would need a predicate for sub-typing. Sub-typing should be a partial order, 
and respect single inheritance. For some built-in type constructors, 
such as for <tt>array_of</tt>, sub-typing should be monotone.

```z3-python
Type     = DeclareSort('Type')
subtype  = Function('subtype', Type, Type, BoolSort())
array_of = Function('array_of', Type, Type)
root     = Const('root', Type)

x, y, z  = Consts('x y z', Type)

axioms = [ ForAll(x, subtype(x, x)),
           ForAll([x, y, z], Implies(And(subtype(x, y), subtype(y, z)),
                                     subtype(x, z))),
           ForAll([x, y], Implies(And(subtype(x, y), subtype(y, x)),
                                  x == y)),
           ForAll([x, y, z], Implies(And(subtype(x, y), subtype(x, z)),
                                     Or(subtype(y, z), subtype(z, y)))),
           ForAll([x, y], Implies(subtype(x, y),
                                  subtype(array_of(x), array_of(y)))),
           
           ForAll(x, subtype(root, x))
           ]
s = Solver()
s.add(axioms)
print (s)
print (s.check())
print ("Interpretation for Type:")
print (s.model()[Type])
print ("Model:")
print (s.model())
```


### Patterns


The Stanford Pascal verifier and the subsequent Simplify theorem prover pioneered 
the use of pattern-based quantifier instantiation. 
The basic idea behind pattern-based quantifier instantiation is in a sense straight-forward: 
Annotate a quantified formula using a pattern that contains all the bound variables. 
So a pattern is an expression (that does not contain binding operations, such as quantifiers) 
that contains variables bound by a quantifier. Then instantiate the quantifier whenever a term
 that matches the pattern is created during search. This is a conceptually easy starting point, 
but there are several subtleties that are important.



In the following example, the first two options make sure that Model-based quantifier instantiation engine is disabled. 
We also annotate the quantified formula with the pattern <tt>f(g(x))</tt>. 
Since there is no ground instance of this pattern, the quantifier is not instantiated, and 
Z3 fails to show that the formula is unsatisfiable.

```z3-python
f = Function('f', IntSort(), IntSort())
g = Function('g', IntSort(), IntSort())
a, b, c = Ints('a b c')
x = Int('x')

s = Solver()
s.set(auto_config=False, mbqi=False)

s.add( ForAll(x, f(g(x)) == x, patterns = [f(g(x))]),
       g(a) == c,
       g(b) == c,
       a != b )

# Display solver state using internal format
print (s.sexpr())
print (s.check())
```

When the more permissive pattern <tt>g(x)</tt> is used. Z3 proves the formula
to be unsatisfiable. More restrive patterns minimize the number of
instantiations (and potentially improve performance), but they may
also make Z3 "less complete".

```z3-python
f = Function('f', IntSort(), IntSort())
g = Function('g', IntSort(), IntSort())
a, b, c = Ints('a b c')
x = Int('x')

s = Solver()
s.set(auto_config=False, mbqi=False)

s.add( ForAll(x, f(g(x)) == x, patterns = [g(x)]),
       g(a) == c,
       g(b) == c,
       a != b )

# Display solver state using internal format
print (s.sexpr())
print (s.check())
```


Some patterns may also create long instantiation chains. Consider the following assertion.


```
ForAll([x, y], Implies(subtype(x, y),
                       subtype(array_of(x), array_of(y))),
       patterns=[subtype(x, y)])
```


The axiom gets instantiated whenever there is some ground term of the
form <tt>subtype(s, t)</tt>. The instantiation causes a fresh ground term
<tt>subtype(array_of(s), array_of(t))</tt>, which enables a new
instantiation. This undesirable situation is called a matching
loop. Z3 uses many heuristics to break matching loops.



Before elaborating on the subtleties, we should address an important
first question. What defines the terms that are created during search?
In the context of most SMT solvers, and of the Simplify theorem
prover, terms exist as part of the input formula, they are of course
also created by instantiating quantifiers, but terms are also
implicitly created when equalities are asserted. The last point means
that terms are considered up to congruence and pattern matching takes
place modulo ground equalities. We call the matching problem
**E-matching**. For example, if we have the following equalities:

```z3-python
f = Function('f', IntSort(), IntSort())
g = Function('g', IntSort(), IntSort())
a, b, c = Ints('a b c')
x = Int('x')

s = Solver()
s.set(auto_config=False, mbqi=False)

s.add( ForAll(x, f(g(x)) == x, patterns = [f(g(x))]),
       a == g(b),
       b == c,
       f(a) != c )

print (s.check())
```


The terms <tt>f(a)</tt> and <tt>f(g(b))</tt> are equal modulo the
equalities. The pattern <tt>f(g(x))</tt> can be matched and <tt>x</tt> bound to <tt>b</tt>
and the equality <tt>f(g(b)) ==  b</tt> is deduced.



While E-matching is an NP-complete problem, the main sources of overhead in larger verification
problems comes from matching thousands of patterns in the context of an evolving set of terms and
equalities. Z3 integrates an efficient E-matching engine using term indexing techniques.


### Multi-patterns


In some cases, there is no pattern that contains all bound variables
and does not contain interpreted symbols. In these cases, we use
multi-patterns. In the following example, the quantified formula
states that <tt>f</tt> is injective. This quantified formula is annotated with
the multi-pattern <tt>MultiPattern(f(x), f(y))</tt>.  

```z3-python
A = DeclareSort('A')
B = DeclareSort('B')
f = Function('f', A, B)
a1, a2 = Consts('a1 a2', A)
b      = Const('b', B)
x,  y  = Consts('x y', A)

s = Solver()
s.add(a1 != a2,
      f(a1) == b,
      f(a2) == b,
      ForAll([x, y], Implies(f(x) == f(y), x == y),
             patterns=[MultiPattern(f(x), f(y))])
      )
print (s.check())
```


The quantified formula is instantiated for every pair of occurrences
of <tt>f</tt>. A simple trick allows formulating injectivity of <tt>f</tt> in such a way
that only a linear number of instantiations is required. The trick is
to realize that <tt>f</tt> is injective if and only if it has a partial
inverse.

```z3-python
A = DeclareSort('A')
B = DeclareSort('B')
f = Function('f', A, B)
finv = Function('finv', B, A)
a1, a2 = Consts('a1 a2', A)
b      = Const('b', B)
x,  y  = Consts('x y', A)

s = Solver()
s.add(a1 != a2,
      f(a1) == b,
      f(a2) == b,
      ForAll(x, finv(f(x)) == x)
      )
print (s.check())
```

### Other attributes


In Z3Py, the following additional attributes are supported: **qid** (quantifier identifier
for debugging), **weight** (hint to the quantifier instantiation module: "more weight equals less instances"), 
**no_patterns** (expressions that should not be used as patterns, **skid** (identifier
prefix used to create skolem constants/functions.


## Multiple Solvers

In Z3Py and Z3 multiple solvers can be simultaneously used.
It is also very easy to copy assertions/formulas from one solver to another.

```z3-python
x, y = Ints('x y')
s1 = Solver()
s1.add(x > 10, y > 10)
s2 = Solver()
# solver s2 is empty
print (s2)
# copy assertions from s1 to s2
s2.add(s1.assertions())
print (s2)
```

## Unsat Cores and Soft Constraints

Z3Py also supports _unsat core extraction_. The basic idea is to use
_assumptions_, that is, auxiliary propositional variables that we want to track.
Assumptions are also available in the Z3 SMT 2.0 frontend, and in other Z3 front-ends.
They are used to extract unsatisfiable cores. They may be also used to "retract"
constraints. Note that, assumptions are not really _soft constraints_, but they can be used to implement them. 

```z3-python
p1, p2, p3 = Bools('p1 p2 p3')
x, y = Ints('x y')
# We assert Implies(p, C) to track constraint C using p
s = Solver()
s.add(Implies(p1, x > 10),
      Implies(p1, y > x),
      Implies(p2, y < 5),
      Implies(p3, y > 0))
print s
# Check satisfiability assuming p1, p2, p3 are true
print (s.check(p1, p2, p3))
print (s.unsat_core())

# Try again retracting p2
print s.check(p1, p3)
print s.model()
```

The example above also shows that a Boolean variable (<tt>p1</tt>) can be used to track
more than one constraint. Note that Z3 does not guarantee that the unsat cores are minimal.



## Formatter


Z3Py uses a formatter (aka pretty printer) for displaying formulas, expressions, solvers, and other
Z3 objects. The formatter supports many configuration options. 
The command <tt>set_option(html_mode=False)</tt> makes all formulas and expressions to be
displayed in Z3Py notation.

```z3-python
x = Int('x')
y = Int('y')
print (x**2 + y**2 >= 1)
set_option(html_mode=False)
print (x**2 + y**2 >= 1)
```

By default, Z3Py will truncate the output if the object being displayed is too big.
Z3Py uses &hellip; to denote the output is truncated.
The following configuration options can be set to control the behavior of Z3Py's formatter:


 Parameter              | Description
 -----------------------|--------------------------------------------------------------------------------
 max_depth              | Maximal expression depth. Deep expressions are replaced with &hellip;. 
 max_args               | Maximal number of arguments to display per node. 
 rational_to_decimal    | Display rationals as decimals if True. 
 precision              | Maximal number of decimal places for numbers being displayed in decimal notation. 
 max_lines              | Maximal number of lines to be displayed. 
 max_width              | Maximal line width (this is a suggestion to Z3Py). 
 max_indent             | Maximal indentation.




