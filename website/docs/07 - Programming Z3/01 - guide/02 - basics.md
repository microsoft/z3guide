---
title: Z3 API in Python
sidebar_position: 1
---


Z3 is a high performance theorem prover developed at Microsoft Research.

Z3 is used in many applications such as: software/hardware verification and testing, constraint solving, analysis of hybrid systems, 
security, biology (in silico analysis), and geometrical problems.
This tutorial demonstrates the main capabilities of Z3Py: the Z3 API in [Python](http://www.python.org). 
No Python background is needed to read this tutorial. However, it is useful to learn Python (a fun language!) at some point, and 
there are many excellent free resources for doing so [Python Tutorial](http://docs.python.org/tutorial/).


The Z3 distribution also contains the **C**, **.Net** and **OCaml** APIs. The source code of Z3Py is available in 
the Z3 distribution, feel free to modify it to meet your needs. 

Be sure to follow along with the examples by clicking the <b>load in editor</b> link in the
corner. See what Z3Py says, try your own scripts, and experiment!



## Getting Started

Let us start with the following simple example:

```python
x = Int('x')
y = Int('y')
solve(x > 2, y < 10, x + 2*y == 7)
```

The function `Int('x')` creates an integer variable in Z3 named `x`.
The `solve` function solves a system of constraints. The example above uses
two variables `x` and `y`, and three constraints.
Z3Py like Python uses <b class="pre">=</b> for assignment. The operators `<`,
`<=`,
`>`,
`>=`,
`==` and
`!=` for comparison.
In the example above, the expression `x + 2*y  == 7` is a Z3 constraint.
Z3 can solve and crunch formulas.



The next examples show how to use the Z3 formula/expression simplifier.

```python
x = Int('x')
y = Int('y')
print (simplify(x + y + 2*x + 3))
print (simplify(x < y + x + 2))
print (simplify(And(x + 1 >= 3, x**2 + x**2 + y**2 + 2 >= 5)))
```

By default, Z3Py (for the web) displays formulas and expressions using mathematical notation.
As usual, $\wedge$ is the logical and, $\vee$ is the logical or, and so on.
The command `set_option(html_mode=False)` makes all formulas and expressions to be
displayed in Z3Py notation. This is also the default mode for the offline version of Z3Py that
comes with the Z3 distribution.


<pre pref="printer" />


Z3 provides functions for traversing expressions.


<pre pref="z3py.3" />


Z3 provides all basic mathematical operations. Z3Py uses the same operator precedence of the Python language.
Like Python, `**` is the power operator. Z3 can solve nonlinear <i>polynomial</i> constraints.


<pre pref="z3py.4" />


The procedure `Real('x')` creates the real variable `x`. 
Z3Py can represent arbitrarily large integers, rational numbers (like in the example above),
and irrational algebraic numbers. An irrational algebraic number is a root of a polynomial with integer coefficients. 
Internally, Z3 represents all these numbers precisely. 
The irrational numbers are displayed in decimal notation for making it easy to read the results.


<pre pref="z3py.5" />


The procedure `set_option` is used to configure the Z3 environment. It is used to set global configuration options
such as how the result is displayed. The option `set_option(precision=30)` sets the number of decimal places used when displaying results.
The `?` mark in `1.2599210498?` indicates the output is truncated.



The following example demonstrates a common mistake. The expression `3/2` is a Python integer and not a Z3 rational number.
The example also shows different ways to create rational numbers in Z3Py. The procedure `Q(num, den)` creates a
Z3 rational where `num` is the numerator and `den` is the denominator. The `RealVal(1)` creates a Z3 real number
representing the number `1`.

<pre pref="z3py.6" />


Rational numbers can also be displayed in decimal notation.


<pre pref="z3py.6aa" />


A system of constraints may not have a solution. In this case, we say the system is <b>unsatisfiable</b>.


<pre pref="z3py.6a" />


Like in Python, comments begin with the hash character `#` and are terminated by the end of line. 
Z3Py does not support comments that span more than one line.


<pre pref="comment" />

## Boolean Logic


Z3 supports Boolean operators: `And`, `Or`, `Not`, `Implies` (implication),
`If` (if-then-else). Bi-implications are represented using equality `==`.
The following example shows how to solve a simple set of Boolean constraints.


<pre pref="z3py.7" />


The Python Boolean constants `True` and `False` can be used to build Z3 Boolean expressions.


<pre pref="z3py.8" />

The following example uses a combination of polynomial and Boolean constraints. 


<pre pref="z3py.9" />

## Solvers

Z3 provides different solvers. The command `solve`, used in the previous examples, is implemented using the Z3 solver API.
The implementation can be found in the file `z3.py` in the Z3 distribution.
The following example demonstrates the basic Solver API.

<pre pref="z3py.10" />

The command `Solver()` creates a general purpose solver. Constraints can be added using the method `add`.
We say the constraints have been <b>asserted</b> in the solver. The method `check()` solves the asserted constraints.
The result is `sat` (satisfiable) if a solution was found. The result is `unsat` (unsatisfiable) if 
no solution exists. We may also say the system of asserted constraints is <b>infeasible</b>. Finally, a solver may fail
to solve a system of constraints and `unknown` is returned.   


In some applications, we want to explore several similar problems that share several constraints. 
We can use the commands `push` and `pop` for doing that. 
Each solver maintains a stack of assertions. The command `push` creates a new scope by 
saving the current stack size. 
The command `pop` removes any assertion performed between it and the matching `push`. 
The `check` method always operates on the content of solver assertion stack.

The following example shows an example that Z3 cannot solve. The solver returns `unknown` in this case.
Recall that Z3 can solve nonlinear polynomial constraints, but `2**x` is not a polynomial.

<pre pref="z3py.11" />

The following example shows how to traverse the constraints asserted into a solver, and how to collect performance statistics for
the `check` method.


<pre pref="z3py.12" />

The command `check` returns `sat` when Z3 finds a solution for the set of asserted constraints.
We say Z3 <b>satisfied</b> the set of constraints. We say the solution is a <b>model</b> for the set of asserted
constraints. A model is an <b>interpretation</b> that makes each asserted constraint <b>true</b>.
The following example shows the basic methods for inspecting models. 


<pre pref="z3py.13" />

In the example above, the function `Reals('x y z')` creates the variables. `x`, `y` and `z`.
It is shorthand for:

```python
x = Real('x')
y = Real('y')
z = Real('z')
```


The expression `m[x]` returns the interpretation of `x` in the model `m`.
The expression `"%s = %s" % (d.name(), m[d])` returns a string where the first `%s` is replaced with 
the name of `d` (i.e., `d.name()`), and the second `%s` with a textual representation of the
interpretation of `d` (i.e., `m[d]`). Z3Py automatically converts Z3 objects into a textual representation
when needed.


## Arithmetic

Z3 supports real and integer variables. They can be mixed in a single problem.
Like most programming languages, Z3Py will automatically add coercions converting integer expressions to real ones when needed.
The following example demonstrates different ways to declare integer and real variables.


<pre pref="arith.1" />

The function `ToReal` casts an integer expression into a real expression.

Z3Py supports all basic arithmetic operations.

<pre pref="arith.2" />

The command `simplify` applies simple transformations on Z3 expressions.

<pre pref="arith.3" />

The command `help_simplify()` prints all available options.
Z3Py allows users to write option in two styles. The Z3 internal option names start with `:` and words are separated by `-`.
These options can be used in Z3Py. Z3Py also supports Python-like names, 
where `:` is suppressed and `-` is replaced with `_`.
The following example demonstrates how to use both styles.


<pre pref="arith.4" />

Z3Py supports arbitrarily large numbers. The following example demonstrates how to perform basic arithmetic using larger integer, rational and irrational numbers.
Z3Py only supports [algebraic irrational numbers](http://en.wikipedia.org/wiki/Algebraic_number). Algebraic irrational numbers are sufficient for presenting the solutions of systems of polynomial constraints.
Z3Py will always display irrational numbers in decimal notation since it  is more convenient to read. The internal representation can be extracted using the method `sexpr()`.
It displays Z3 internal representation for mathematical formulas and expressions in [s-expression](http://en.wikipedia.org/wiki/S-expression) (Lisp-like) notation.

<pre pref="arith.5" />

## Machine Arithmetic

Modern CPUs and main-stream programming languages use 
arithmetic over fixed-size bit-vectors.
Machine arithmetic is available in Z3Py as <i>Bit-Vectors</i>.
They implement the 
precise semantics of unsigned and of 
signed [two-complements arithmetic](http://en.wikipedia.org/wiki/Two's_complement). 


The following example demonstrates how to create bit-vector variables and constants.
The function `BitVec('x', 16)` creates a bit-vector variable in Z3 named `x` with `16` bits.
For convenience, integer constants can be used to create bit-vector expressions in Z3Py.
The function `BitVecVal(10, 32)` creates a bit-vector of size `32` containing the value `10`.

<pre pref="bitvec.1" />

In contrast to programming languages, such as C, C++, C#, Java, 
there is no distinction between signed and unsigned bit-vectors
as numbers. Instead, Z3 provides special signed versions of arithmetical operations
where it makes a difference whether the bit-vector is treated as signed or unsigned.
In Z3Py, the operators 
`&lt;`,
`&lt;=`,
`&gt;`,
`&gt;=`, `/`, `%` and `&gt;&gt;` correspond to the signed versions.
The corresponding unsigned operators are
`ULT`,
`ULE`,
`UGT`,
`UGE`, `UDiv`, `URem` and `LShR`.

<pre pref="bitvec.2" />

The operator `&gt;&gt;` is the arithmetic shift right, and 
`&lt;&lt;` is the shift left. The logical shift right is the operator `LShR`.

<pre pref="bitvec.3" />

## Functions

Unlike programming languages, where functions have side-effects, can throw exceptions, 
or never return, functions in Z3 have no side-effects and are <b>total</b>.
That is, they are defined on all input values. This includes functions, such
as division. Z3 is based on [first-order logic](http://en.wikipedia.org/wiki/First-order_logic).

Given a constraints such as `x + y > 3`, we have been saying that `x` and `y`
are variables. In many textbooks, `x` and `y` are called uninterpreted constants.
That is, they allow any interpretation that is consistent with the constraint `x + y > 3`.

More precisely, function and constant symbols in pure first-order logic are <i>uninterpreted</i> or <i>free</i>, 
which means that no a priori interpretation is attached.
This is in contrast to functions belonging to the signature of theories,
such as arithmetic where the function `+` has a fixed standard interpretation
(it adds two numbers). Uninterpreted functions and constants are maximally flexible;
they allow any interpretation that is consistent with the constraints over the function or constant.

To illustrate uninterpreted functions and constants let us the uninterpreted integer constants (aka variables)
`x`, `y`. Finally let `f` be an uninterpreted function that takes one argument of type (aka sort) integer
and results in an integer value.
The example illustrates how one can force an interpretation where `f`
applied twice to `x` results in `x` again, but `f` applied once to `x` is different from `x`.

<pre pref="z3py.14" />

The solution (interpretation) for `f` should be read as `f(0)` is `1`, `f(1)` is `0`, and `f(a)`
is `1` for all `a` different from `0` and `1`.

In Z3, we can also evaluate expressions in the model for a system of constraints. The following example shows how to 
use the `evaluate` method.

<pre pref="z3py.15" />

## Satisfiability and Validity

A formula/constraint `F` is <b>valid</b> if `F` always evaluates to true for any assignment of appropriate values to its
uninterpreted symbols. 
A formula/constraint `F` is <b>satisfiable</b> if there is some assignment of appropriate values
to its uninterpreted  symbols under which `F` evaluates to true. 
Validity is about finding a proof of a statement; satisfiability is about finding a solution to a set of constraints.
Consider a formula `F` containing `a` and `b`. 
We can ask whether `F` is valid, that is whether it is always true for any combination of values for 
`a` and `b`. If `F` is always
true, then `Not(F)` is always false, and then `Not(F)` will not have any satisfying assignment (i.e., solution); that is, 
`Not(F)` is unsatisfiable. That is, 
`F` is valid precisely when `Not(F)` is not satisfiable (is unsatisfiable).
Alternately,
`F` is satisfiable if and only if `Not(F)` is not valid (is invalid).
The following example proves the deMorgan's law.

The following example redefines the Z3Py function `prove` that receives a formula as a parameter.
This function creates a solver, adds/asserts the negation of the formula, and check if the negation is unsatisfiable.
The implementation of this function is a simpler version of the Z3Py command `prove`.

<pre pref="z3py.16" />

## List Comprehensions

Python supports [list comprehensions](http://docs.python.org/tutorial/datastructures.html#list-comprehensions)
List comprehensions provide a concise way to create lists. They can be used to create Z3 expressions and problems in Z3Py.
The following example demonstrates how to use Python list comprehensions in Z3Py.

<pre pref="list.1" />

In the example above, the expression `"x%s" % i` returns a string where `%s` is replaced with the value of `i`.

The command `pp` is similar to `print`, but it uses Z3Py formatter for lists and tuples instead of Python's formatter.

Z3Py also provides functions for creating vectors of Boolean, Integer and Real variables. These functions
are implemented using list comprehensions. 
 

<pre pref="list.2" />

## Kinematic Equations


In high school, students learn the kinematic equations.
These equations describe the mathematical relationship between <b>displacement</b> (`d`),
<b>time</b> (`t`), <b>acceleration</b> (`a`), <b>initial velocity</b> (`v_i`) and <b>final velocity</b> (`v_f`).
In Z3Py notation, we can write these equations as:

```
   d == v_i * t + (a*t**2)/2,
   v_f == v_i + a*t
```

### Problem 1

Ima Hurryin is approaching a stoplight moving with a velocity of `30.0` m/s. 
The light turns yellow, and Ima applies the brakes and skids to a stop. 
If Ima's acceleration is `-8.00` m/s<sup>2</sup>, then determine the displacement of the
car during the skidding process. 


<pre pref="k.1" />


### Problem 2

Ben Rushin is waiting at a stoplight. When it finally turns green, Ben accelerated from rest at a rate of
a `6.00` m/s<sup>2</sup> for a time of `4.10` seconds. Determine the displacement of Ben's car during this time period.

<pre pref="k.2" />

## Bit Tricks

Some low level [hacks](http://graphics.stanford.edu/~seander/bithacks.html) are very popular with C programmers.
We use some of these hacks in the Z3 implementation.


### Power of two

This hack is frequently used in C programs (Z3 included) to test whether a machine integer is a power of two.
We can use Z3 to prove it really works. The claim is that `x != 0 && !(x & (x - 1))` is true if and only if `x`
is a power of two.


<pre pref="bit.1" />

### Opposite signs

The following simple hack can be used to test whether two machine integers have opposite signs.

<pre pref="bit.2" />

## Puzzles

### Dog, Cat and Mouse

Consider the following puzzle. Spend exactly 100 dollars and buy exactly 100 animals.
Dogs cost 15 dollars, cats cost 1 dollar, and mice cost 25 cents each.
You have to buy at least one of each.
How many of each should you buy?


<pre pref="puzzle.1" />

### Sudoku

[Sudoku](http://www.dailysudoku.com/sudoku/) is a very popular puzzle.
The goal is to insert the numbers in the boxes to satisfy only one condition: each row, column and 
`3x3` box must contain the digits `1` through `9` exactly once. 


http://research.microsoft.com/en-us/um/redmond/projects/z3/sudoku.png


The following example encodes the suduko problem in Z3. Different sukudo instances can be solved
by modifying the matrix `instance`. This example makes heavy use of 
[list comprehensions](http://docs.python.org/tutorial/datastructures.html#list-comprehensions)
available in the Python programming language.


<pre pref="puzzle.2" />

### Eight Queens

The eight queens puzzle is the problem of placing eight chess queens on an 8x8 chessboard so that no two queens attack each other. 
Thus, a solution requires that no two queens share the same row, column, or diagonal.

http://research.microsoft.com/en-us/um/redmond/projects/z3/queens.png


<pre pref="puzzle.3" />

## Application: Install Problem

The <b>install problem</b> consists of determining whether a new set of packages can be installed in a system.
This application is based on the article
[OPIUM: Optimal Package Install/Uninstall Manager](http://cseweb.ucsd.edu/~rjhala/papers/opium.pdf).
Many packages depend on other packages to provide some functionality. 
Each distribution contains a meta-data file that
explicates the requirements of each package of the distribution
The meta-data contains details like the name, version, etc. More importantly, it contains 
<b>depends</b> and <b>conflicts</b>
clauses that stipulate which other packages should be on the
system. The depends clauses stipulate which other packages must be present.
The conflicts clauses stipulate which other packages must not be present.


The install problem can be easily solved using Z3. The idea is to define a Boolean variable for each
package. This variable is true if the package must be in the system. If package `a` depends on
packages `b`, `c` and `z`, we write:


```python
DependsOn(a, [b, c, z])
```

`DependsOn` is a simple Python function that creates Z3 constraints that capture the 
depends clause semantics.


```python
def DependsOn(pack, deps):
   return And([ Implies(pack, dep) for dep in deps ])
```


Thus, `Depends(a, [b, c, z])` generates the constraint


<pre>
And(Implies(a, b), Implies(a, c), Implies(a, z))
</pre>

That is, if users install package `a`, they must also install packages 
`b`, `c` and `z`. 



If package `d` conflicts with package `e`, we write `Conflict(d, e)`. 
`Conflict` is also a simple Python function.


<pre>
def Conflict(p1, p2):
    return Or(Not(p1), Not(p2))
</pre>

`Conflict(d, e)` generates the constraint `Or(Not(d), Not(e))`.
With these two functions, we can easily encode the example in the 
[Opium article](http://cseweb.ucsd.edu/~rjhala/papers/opium.pdf) (Section 2) in Z3Py as:


<pre pref="install.1" />


Note that the example contains the constraint


<pre>
DependsOn(c, [Or(d, e), Or(f, g)]),
</pre>


The meaning is: to install `c`, we must install `d` or `e`, and `f` or `g`


Now, we refine the previous example. First, we modify `DependsOn` to allow
us to write `DependsOn(b, d)` instead of `DependsOn(b, [d])`. We also
write a function `install_check` that returns a list of packages that must be installed
in the system. The function `Conflict` is also modified. It can now receive multiple
arguments.


<pre pref="install.2" />

## Using Z3Py Locally

Z3Py is part of the Z3 distribution. It is located in the `python` subdirectory.
To use it locally, you have to include the following command in your Python script.
<pre>
from Z3 import *
</pre>

The Z3 Python frontend directory must be in your `PYTHONPATH` environment variable.
Z3Py will automatically search for the Z3 library (`z3.dll` (Windows), `libz3.so` (Linux), or `libz3.dylib` (OSX)).
You may also initialize Z3Py manually using the command:

<pre>
init("z3.dll")
</pre>
