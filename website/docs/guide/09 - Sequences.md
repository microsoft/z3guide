--- 
title: Strings and Sequences 
sidebar_position: 9
---

## Introduction

This section describes Z3's handling of strings and sequences.
Strings are represented as a sequence of Characters. The default character sort is Unicode.
You can reason about regular expressions of sequences. Regular expressions are described in the next secion.
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


## Strings

### Built-in types and constants
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

### `(str.< s t)` '(str.<= s t)` - lexicographic string comparison

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
(simplify (_ char 100000000)) ; out of bound
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

<table>
  <tr>
    <td>Operation</td>
    <td>Brief description</td>
  </tr>
  <tr> 
    <td><tt>(str.++ a b c)</tt></td>
    <td>String concatenation of one or more strings</td>
  </tr>
  <tr> 
    <td><tt>(str.len s)</tt></td>
    <td>String length. Returns an integer.</td>
  </tr>
  <tr> 
    <td><tt>(str.substr s offset length)</tt></td>
    <td>Retrieves substring of <tt>s</tt> at <tt>offset</tt></td>
  </tr>
  <tr> 
    <td><tt>(str.indexof s sub)</tt></td>
    <td>Retrieves first position of <tt>sub</tt> in <tt>s</tt>, -1 if there are no occurrences</td>
  </tr>
  <tr> 
    <td><tt>(str.indexof s sub offset)</tt></td>
    <td>Retrieves first position of <tt>sub</tt> at or after <tt>offset</tt> in <tt>s</tt>, -1 if there are no occurrences</td>
  </tr>
  <tr>
    <td><tt>(str.at s offset)</tt></td>
    <td>Substring of length 1 at <tt>offset</tt> in <tt>s</tt>.</td>
  </tr>
  <tr>
    <td><tt>(str.contains s sub)</tt></td>
    <td>Does <tt>s</tt> contain the substring <tt>sub</tt>?</td>
  </tr>
  <tr>
    <td><tt>(str.prefixof pre s)</tt></td>
    <td>Is <tt>pre</tt> a prefix of <tt>s</tt>?</td>
  </tr>
  <tr>
    <td><tt>(str.suffixof suf s)</tt></td>
    <td>Is <tt>suf</tt> a suffix of <tt>s</tt>?</td>
  </tr>
  <tr>
    <td><tt>(str.replace s src dst)</tt></td>
    <td>Replace the first occurrence of <tt>src</tt> by <tt>dst</tt> in <tt>s</tt>.</td>
  </tr>
  <tr>
    <td><tt>(str.to_int s)</tt></td>
    <td>Retrieve integer encoded by string <tt>s</tt> (ground rewriting only).</td>
  </tr>
  <tr>
    <td><tt>(str.from_int i)</tt></td>
    <td>Retrieve string encoding of integer <tt>i</tt> (ground rewriting only).</td>
  </tr>
  <tr>
    <td><tt>(str.&lt; s1 s2)</tt></td>
    <td>Lexicographic string less than</td>
  </tr>
  <tr>
    <td><tt>(str.&lt;= s1 s2)</tt></td>
    <td>Lexicographic string less or equal to.</td>
  </tr>  
  <tr>
  <td><tt>(_ char ch)</tt></td>
  <td>Unit string from unicode character code.</td>
  </tr>
  <tr>
  <td><tt>(str.is_digit s)</tt></td>
  <td>A predicate whether string is a one of the digits 0 to 9.</td>
  </tr>
  <tr>
  <td><tt>(str.to_code s)</tt></td>
  <td>Convert string of length one to the character code (an integer). Produce -1 if the string is not of length 1</td>
  </tr>
    <tr>
  <td><tt>(str.from_code i)</tt></td>
  <td>Convert an integer in the range of valid unicodes to a string of length one</td>
  </tr>
</table>



Note that `(str.indexof s offset)` is shorthand for `(str.indexof s offset 0)`.
Also, note that  `(str.at s i)` is the empty string or sequence for indices that are either negative or beyond
`(- (str.len s) 1)`. Furthermore `(str.substr s offset length)` is empty
when the offset is outside the range of positions in `s` or `length` is negative or 
`offset+length` exceeds the length of `s`. 



# Sequences

The sort constructor `Seq` can be used to create sequences over any base sort.
For example, a sequence of integers is `(Seq Int)`, and `(Seq (_ BitVec 8))`
is the definition of `String`.

## Operations
Most string operations have corresponding sequence variants. In addition, there are operations
to create a unit sequence and the empty sequence over any base sort.

<table>
  <tr>
    <td>Operation</td>
    <td>Brief description</td>
  </tr>
  <tr> 
    <td><tt>(seq.unit elem)</tt></td>
    <td>Sequence with a single element <tt>elem</tt>.</td>
  </tr>
  <tr> 
    <td><tt>(as seq.empty (Seq Int))</tt></td>
    <td>The empty sequence of integers.</td>
  </tr>
  <tr> 
    <td><tt>(seq.++ a b c)</tt></td>
    <td>Concatenation of one or more sequences.</td>
  </tr>
  <tr> 
    <td><tt>(seq.len s)</tt></td>
    <td>Sequence length. Returns an integer.</td>
  </tr>
  <tr> 
    <td><tt>(seq.extract s offset length)</tt></td>
    <td>Retrieves sub-sequence of <tt>s</tt> at <tt>offset</tt></td>
  </tr>
  <tr> 
    <td><tt>(seq.indexof s sub)</tt></td>
    <td>Retrieves first position of <tt>sub</tt> in <tt>s</tt>, -1 if there are no occurrences</td>
  </tr>
  <tr> 
    <td><tt>(seq.indexof s sub offset)</tt></td>
    <td>Retrieves first position of <tt>sub</tt> at or after <tt>offset</tt> in <tt>s</tt>, -1 if there are no occurrences</td>
  </tr>
  <tr>
    <td><tt>(seq.at s offset)</tt></td>
    <td>Sub-sequence of length 1 at <tt>offset</tt> in <tt>s</tt>.</td>
  </tr>
    <tr>
    <td><tt>(seq.nth s offset)</tt></td>
    <td>Element at <tt>offset</tt> in <tt>s</tt>. If <tt>offset</tt> is out of bounds the result is under-specified. In other words, it is treated as a fresh variable.</td>
  </tr>
  <tr>
    <td><tt>(seq.contains s sub)</tt></td>
    <td>Does <tt>s</tt> contain the sub-sequence <tt>sub</tt>?</td>
  </tr>
  <tr>
    <td><tt>(seq.prefixof pre s)</tt></td>
    <td>Is <tt>pre</tt> a prefix of <tt>s</tt>?</td>
  </tr>
  <tr>
    <td><tt>(seq.suffixof suf s)</tt></td>
    <td>Is <tt>suf</tt> a suffix of <tt>s</tt>?</td>
  </tr>
  <tr>
    <td><tt>(seq.replace s src dst)</tt></td>
    <td>Replace the first occurrence of <tt>src</tt> by <tt>dst</tt> in <tt>s</tt>.</td>
  </tr>
</table>

## Sequence Examples

When inserting `b` at or after position 8, but before the length of the string, which is at least 10,
then the resulting string has the same length, and either character 8 or 9 are unchanged.
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

