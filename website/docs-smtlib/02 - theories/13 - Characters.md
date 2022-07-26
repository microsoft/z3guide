---
title: Unicode Characters
sidebar_position: 13
---

The _Unicode_ sort ranges over unicode characters.

A few operations are supported over characters.

```z3
(declare-const a Unicode)
(declare-const b Unicode)
(simplify (char.<= a b))
(simplify (char.<= (_ Char 1) (_ Char 2)))
(simplify (char.to_int (_ Char 1)))
(simplify (char.is_digit (_ Char 1)))
(simplify (char.is_digit (_ Char 49))) ; it is the digit 1
```

While Unicode is the default you can set the encoding of characters to ASCII (8 bit) or Bmp (16 bit).

```
(set-option :encoding unicode)
(set-option :encoding ascii)
(set-option :encoding bmp)
```