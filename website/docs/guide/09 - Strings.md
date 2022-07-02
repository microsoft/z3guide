--- 
title: Strings
sidebar_position: 9
---

## Introduction

This section describes Z3's handling of strings.
Strings are represented as a sequence of Characters where the default character sort is Unicode.
You can reason about regular expressions of sequences. 
Sequences over elements other than Unicode characters and regular expressions are described in separate sections.
Z3 offers built-in support for 
using string constants and dedicated solvers for checking
satisfiability over constraints using strings and sequences.
Note that the (current) specialized solver is able to establish
satisfiability for a non-trivial class of formulas, but is far from 
a decision procedure even for fragments of string equalities that can be decided: 
Z3 only solves string equalities using an incomplete 
heuristic solver
and the full combination of lengths and sequences 
(and regular expressions) is not decidable anyway.
In Z3, strings are a special case of sequences, and for the case of Unicode strings,
and regular expressions over Unicode strings seeks to implement the [SMTLIB2 standard](http://smtlib.cs.uiowa.edu/theories-UnicodeStrings.shtml).

You can configure z3 to use one of two backends for solving strings.
The default backend is called the `seq` solver. It solves constraints over both sequences and strings.
The other backend is [z3str3](https://z3string.github.io/), which applies to strings and regular expressions over strings. 
Extensions to sequences operations are not supported in z3str3.

```z3
(set-option :smt.string_solver z3str3) ; set the string solver to be the z3str3 solver
(set-option :smt.string_solver seq)    ; set the string solver to be the seq solver (default)
```


## Creating Strings

###  Built-in types and constants
The name `String` is a built-in name for the String sort. 
String literals can furthermore be entered directly as literals 
delimited by quotes. The following example asks whether there are
strings `a` and `b` that concatenate to `"abc"` 
followed by `b`.

```z3
(declare-const a String)
(declare-const b String)
(assert (= (str.++ b a) (str.++ "abc" b)))
(check-sat)
(get-model)
```

### String literals

To represent non-ASCII characters the SMTLIB2 standard uses unicode escape sequences.
The escape sequences are of the form `\u{d₀}`, `\u{d₁d₀}`, `\u{d₂d₁d₀}`, `\u{d₃d₂d₁d₀}`, `\u{d₄d₃d₂d₁d₀}`, `\ud₃d₂d₁d₀` 
where `d` is a hexidecimal digit. Other 
characters are treated as part of the string. For example, a newline within a string 
is treated as a new-line character. 

The following example shows
three ways to enter the newline character.

```z3
(define-const a String "\u{a}")
(define-const b String "
")
(define-const c String "\n")   ; this is not a newline character but \ followed by n
(simplify (= a b))
(simplify (= a c))
(simplify (str.++ a b c))
```

## String Operations by example

### `(str.++ a b c)` - String concatenation 

A string cannot overlap with two different characters.
```z3
(declare-const a String)
(assert (= (str.++ a "b") (str.++ "a" a)))
(check-sat)
```

### `(str.len s)` - the lenght of string `s`

There is a solution to `a` of length at most 2.

```z3
(declare-const a String)
(declare-const b String)
(assert (= (str.++ "abc" a) (str.++ b "cef")))
(assert (<= (str.len a) 2))
(check-sat)
```

### `(str.at s offset)` - character substring at offset

The substring is of length 1 if `offset` is within the bounds of `s`, otherwise the result is the empty string.

```z3
(simplify (str.++ (str.at "abc" 1) (str.at "abc" 0)))
(simplify (str.at "abcd" 4))
```

Note that `str.at` does not result in a character but a string of length one.
You can use `(seq.nth "abc" 1)` to access the character at offset 1. 
The function `seq.nth` is not part of the SMTLIB2 format for strings. 

###  `(str.indexof s sub [offset])` - first position of substring

The result is the first position of `sub` in `s`, -1 if there are no occurrence. 
The offset argument is optional. No offset corresponds to the offset 0.

```z3
(simplify (str.indexof "abcabc" "a"))
(simplify (str.indexof "abcabc" "a" 1))
(simplify (str.indexof "abcabc" "a" 4))
```

### `(str.substr s offset length)` - substring at a given offset

```z3
(simplify (str.substr "xxabcyy" 2 3))
(simplify (str.substr "xxabcyy" 2 10))  ; there are only 5 characters left to return
(simplify (str.substr "xxabcyy" 10 2))  ; offset is out of bounds, so return the empty string
```  

### `(str.contains a b)` - string containment

Contains is transitive.

```z3
(declare-const a String)
(declare-const b String)
(declare-const c String)
(assert (str.contains a b))
(assert (str.contains b c))
(assert (not (str.contains a c)))
(check-sat)
```

But containment is not a linear order.

```z3
(declare-const a String)
(declare-const b String)
(declare-const c String)
(assert (str.contains a b))
(assert (str.contains a c))
(assert (not (str.contains b c)))
(assert (not (str.contains c b)))
(check-sat)
(get-model)
```

### `(str.prefixof a b)` `(str.suffixof a b)` - prefix and suffix checks

Every string is equal to the prefix and suffix that add up to a its length.

```z3
(declare-const a String)
(declare-const b String)
(declare-const c String)
(assert (str.prefixof b a))
(assert (str.suffixof c a))
(assert (= (str.len a) (+ (str.len b) (str.len c))))
(assert (not (= a (str.++ b c))))
(check-sat)
```

### `(str.from_int i)` `(str.to_int s)` - convert to and from non-negative integers


```z3
(simplify (str.from_int 10))
(simplify (str.from_int -1))  ; results in the empty string because -1 is not non-negative
(simplify (str.to_int "10"))
(simplify (str.to_int "010")) ; leading 0s are ignored
(simplify (str.to_int "000"))
(simplify (str.to_int "-10")) ; results in -1 because -10 is not non-negative
```

### `(str.< s t)` `(str.<= s t)` - lexicographic string comparison

```z3
(simplify (str.< "alex" "andra"))
(simplify (str.<= "nate" "anthony"))
```

### `(str.is_digit s)` - test if string represents a digit

```z3
(simplify (str.is_digit "1"))   ; true
(simplify (str.is_digit "10"))  ; false - it is not a single character
(simplify (str.is_digit "a"))   ; false - there aren't even any digits
```

### `(str.to_code s)` `(str.from_code i)` - character codes

```z3
(simplify (str.to_code "a"))
(simplify (str.from_code 1214))
```

### `(_ char n)` - string from a character code

```z3
(simplify (_ char 1000))
(simplify (_ char 100000000)) ; out of bounds
```

Note that after `(_ char 54)` is the same as `(simplify (str.from_code 54))`.

## Other String Examples

Strings <tt>a, b, c</tt> can have a non-trivial overlap.
```z3
(declare-const a String)
(declare-const b String)
(declare-const c String)
(assert (= (str.++ a b) "abcd"))
(assert (= (str.++ b c) "cdef"))
(assert (not (= b "")))
(check-sat)
```

There is a solution to `a` that is not a sequence of "a"'s.

```z3
(declare-const a String)
(declare-const b String)
(declare-const c String)
(assert (= (str.++ a "ab" b) (str.++ b "ba" c)))
(assert (= c (str.++ a b)))
(assert (not (= (str.++ a "a") (str.++ "a" a))))
(check-sat)
(get-model)
```


## Summary of Operations

  Operation                 | Brief description          
|---------------------------|----------------------------|
| `(str.++ a b c)`          | String concatenation of one or more strings |
| `(str.len s)`             | String length. Returns an integer |
| `(str.substr s offset length)` | Retrieves substring of <tt>s</tt> at <tt>offset</tt> |
| `(str.indexof s sub)`          | Retrieves first position of <tt>sub</tt> in <tt>s</tt>, -1 if there are no occurrences |
| `(str.indexof s sub offset)`   | Retrieves first position of <tt>sub</tt> at or after <tt>offset</tt> in <tt>s</tt>, -1 if there are no occurrences |
| `(str.at s offset)`            | Substring of length 1 at <tt>offset</tt> in <tt>s</tt> |
| `(str.contains s sub)`         | Does <tt>s</tt> contain the substring <tt>sub</tt>? |
| `(str.prefixof pre s)`         | Is <tt>pre</tt> a prefix of <tt>s</tt>?|
| `(str.suffixof suf s)`         | Is <tt>suf</tt> a suffix of <tt>s</tt>?|
| `(str.replace s src dst)`      | Replace the first occurrence of <tt>src</tt> by <tt>dst</tt> in <tt>s</tt>|
| `(str.to_int s)`               | Retrieve integer encoded by string <tt>s</tt> |
| `(str.from_int i)`             | Retrieve string encoding of integer <tt>i</tt> |
| `(str.< s1 s2)`                | Lexicographic string less than |
| `(str.<= s1 s2)`               | Lexicographic string less or equal to |
| `(_ char ch)`                  | Unit string from unicode character code |
| `(str.is_digit s)`             | A predicate whether string is a one of the digits 0 to 9 |
| `(str.to_code s)`              | Convert string of length one to the character code (an integer). Produce -1 if the string is not of length 1 |
| `(str.from_code i)`            |Convert an integer in the range of valid unicodes to a string of length one |



Note that `(str.indexof s offset)` is shorthand for `(str.indexof s offset 0)`.
Also, note that  `(str.at s i)` is the empty string or sequence for indices that are either negative or beyond
`(- (str.len s) 1)`. Furthermore `(str.substr s offset length)` is empty
when the offset is outside the range of positions in `s` or `length` is negative or 
`offset+length` exceeds the length of `s`. 


