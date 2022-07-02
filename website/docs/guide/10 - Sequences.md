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


 Operation                        | Brief description
|---------------------------------|---------------------------|
| `(seq.unit elem)`               | Sequence with a single element `elem` |
| `(as seq.empty (Seq Int))`      | The empty sequence of integers |
| `(seq.++ a b c)`                | Concatenation of one or more sequences |
| `(seq.len s)`                   | Sequence length. Returns an integer |
| `(seq.extract s offset length)` | Retrieves sub-sequence of `s` at `offset` |
| `(seq.indexof s sub [offset])`  | Retrieves first position of `sub` in `s`, -1 if there are no occurrences |
| `(seq.at s offset)`             | Sub-sequence of length 1 at `offset` in `s` |
| `(seq.nth s offset)`            | Element at `offset` in `s`. If `offset` is out of bounds the result is under-specified. In other words, it is treated as a fresh variable |
| `(seq.contains s sub)`          |  Does `s` contain the sub-sequence `sub`? |
| `(seq.prefixof pre s)`          | Is `pre` a prefix of `s`? |
| `(seq.suffixof suf s)`          | Is `suf` a suffix of `s`? |
| `(seq.replace s src dst)`       | Replace the first occurrence of `src` by `dst` in `s` |


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

