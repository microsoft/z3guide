--- 
title: Sequences
sidebar_position: 10
---

The sort constructor `Seq` can be used to create sequences over any base sort.
For example, a sequence of integers is `(Seq Int)`, and `(Seq Unicode)`
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

