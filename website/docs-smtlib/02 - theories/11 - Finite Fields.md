---
title: Finite Fields
sidebar_position: 11
---

:::info Z3 5.3 and later

Finite-field support was added in Z3 5.3. The examples below are non-interactive
because the guide's embedded solver uses Z3 5.0. Run them with a Z3 5.3 or later
command-line executable.

:::

## Prime Fields

The sort `(_ FiniteField p)` represents the field of integers modulo a prime `p`.
For example, `(_ FiniteField 7)` has the elements 0 through 6. Addition and
multiplication wrap modulo 7, so 5 + 3 = 1 and 5 * 5 = 4 in this field.
This differs from bit-vector arithmetic, which wraps modulo a power of two.

Use `(set-logic QF_FF)` for quantifier-free finite-field problems. A sort alias
makes it convenient to declare several elements of the same field.

```lisp
(set-logic QF_FF)
(define-sort F () (_ FiniteField 7))
(declare-const x F)
(assert (= (ff.add x #f3m7) #f1m7))
(check-sat)
(get-value (x (ff.mul x x) (ff.neg x)))
```

The result is `sat`, with `x` equal to 5, its square equal to 4, and its negation
equal to 2. Model values include their field sort, for example
`(as ff5 (_ FiniteField 7))`.

## Numerals and Operations

A literal such as `#f3m7` includes both the value 3 and the modulus 7.
When a sort alias `F` is available, `(as ff3 F)` is another spelling of the same
element. Numerals are normalized modulo the field modulus, including negative
numerals such as `(as ff-1 F)`. Ordinary integer numerals are not implicitly
converted to field elements.

| Operation | Meaning |
|-----------|---------|
| `(ff.add a b ...)` | Addition modulo the field modulus; at least two arguments |
| `(ff.mul a b ...)` | Multiplication modulo the field modulus; at least two arguments |
| `(ff.neg a)` | Additive inverse |
| `(ff.bitsum b0 b1 ...)` | Weighted sum `b0 + 2*b1 + 4*b2 + ...`, reduced modulo the field modulus; at least two arguments |
| `(= a b)` | Equality of field elements |
| `(distinct a b ...)` | Pairwise distinct field elements |

All operands of a field arithmetic operation must have the same field sort.
Different moduli give different sorts; an expression cannot add an element of
`(_ FiniteField 7)` to an element of `(_ FiniteField 13)`. Fields do not have
the integer ordering operations `<`, `<=`, `>` and `>=`.

### Encoding Bits

`ff.bitsum` does **not** constrain its arguments to be zero or one. Add these
constraints explicitly when representing bits.

```lisp
(set-logic QF_FF)
(define-sort F () (_ FiniteField 13))
(declare-const b0 F)
(declare-const b1 F)
(declare-const b2 F)
(assert (or (= b0 (as ff0 F)) (= b0 (as ff1 F))))
(assert (or (= b1 (as ff0 F)) (= b1 (as ff1 F))))
(assert (or (= b2 (as ff0 F)) (= b2 (as ff1 F))))
(assert (= (ff.bitsum b0 b1 b2) (as ff5 F)))
(check-sat)
(get-value (b0 b1 b2))
```

The result is `sat`, with `b0 = 1`, `b1 = 0`, and `b2 = 1`. The first argument
is the least significant bit. Here all three-bit values fit below 13. In
general, a bit encoding can wrap modulo the field modulus: require `2^n <= p`
if all `n`-bit unsigned values must have distinct field representations.

## Scope and Limits

The supported fragment is quantifier-free arithmetic over prime fields, including
disequalities, Boolean combinations, and field-valued `ite` expressions.
Extension fields and complete quantified reasoning are not supported.
Composite moduli are rejected; for moduli above 64 bits, the implementation uses
probable-prime screening rather than a primality certificate.

For ground combinations with other theories, such as arrays or uninterpreted
functions, omit `set-logic` or use `ALL` instead of `QF_FF`. Distinct field
sorts can coexist in one problem, but their arithmetic remains separate.

Z3 combines bounded native algebraic solving with an exact bit-vector fallback.
Large fields, especially cryptographic-size primes, can still be expensive.
Complete native `get-proof` support is not available for the entire field solver;
standalone certificate tooling has a more restricted input profile.
See the upstream [finite-field documentation](https://github.com/Z3Prover/z3/blob/z3-5.3.1/doc/QF_FF.md)
for solver controls and proof-support details.
