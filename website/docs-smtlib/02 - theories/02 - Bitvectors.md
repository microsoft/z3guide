--- 
title: Bitvectors 
sidebar_position: 2
---

>  **SMTLIB2** standard [The Theory of fixed sized bit-vectors](https://smt-lib.org/theories-FixedSizeBitVectors.shtml)

Modern CPUs and main-stream programming languages use arithmetic over fixed-size bit-vectors. The theory of bit-vectors allows modeling the precise semantics of unsigned and of signed two-complements arithmetic. There are a large number of supported functions and relations over bit-vectors. They are summarized on Z3's documentation [link](https://z3prover.github.io/api/html/z3__api_8h.html). We will not try to give a comprehensive overview here, but touch on some of the main features.

In contrast to programming languages, such as C, C++, C#, Java, there is no distinction between signed and unsigned bit-vectors as numbers. Instead, the theory of bit-vectors provides special signed versions of arithmetical operations where it makes a difference whether the bit-vector is treated as signed or unsigned.

Z3 supports Bitvectors of arbitrary size. (\_ BitVec n) is the sort of bitvectors whose length is n. Bitvector literals may be defined using binary, decimal and hexadecimal notation. In the binary and hexadecimal cases, the bitvector size is inferred from the number of characters. For example, the bitvector literal #b010 in binary format is a bitvector of size 3, and the bitvector literal #x0a0 in hexadecimal format is a bitvector of size 12. The size must be specified for bitvector literals in decimal format. For example, (\_ bv10 32) is a bitvector of size 32 that represents the numeral 10. By default, Z3 display bitvectors in hexadecimal format if the bitvector size is a multiple of 4, and in binary otherwise. The command (set-option pp.bv-literals false) can be used to force Z3 to display bitvector literals in decimal format.

```z3
(display #b0100)
(display (_ bv20 8))
(display (_ bv20 7))
(display #x0a) 
(set-option :pp.bv-literals false)
(display #b0100)
(display (_ bv20 8))
(display (_ bv20 7))
(display #x0a) 
```

### Basic Bitvector Arithmetic
```z3
(simplify (bvadd #x07 #x03)) ; addition
(simplify (bvsub #x07 #x03)) ; subtraction
(simplify (bvneg #x07)) ; unary minus
(simplify (bvmul #x07 #x03)) ; multiplication
(simplify (bvurem #x07 #x03)) ; unsigned remainder
(simplify (bvsrem #x07 #x03)) ; signed remainder
(simplify (bvsmod #x07 #x03)) ; signed modulo
(simplify (bvshl #x07 #x03)) ; shift left
(simplify (bvlshr #xf0 #x03)) ; unsigned (logical) shift right
(simplify (bvashr #xf0 #x03)) ; signed (arithmetical) shift right
```
### Bitwise Operations

 ```z3
(simplify (bvor #x6 #x3))   ; bitwise or
(simplify (bvand #x6 #x3))  ; bitwise and
(simplify (bvnot #x6)) ; bitwise not
(simplify (bvnand #x6 #x3)) ; bitwise nand
(simplify (bvnor #x6 #x3)) ; bitwise nor
(simplify (bvxnor #x6 #x3)) ; bitwise xnor
```
We can prove a bitwise version of deMorgan's law
```z3
(declare-const x (_ BitVec 64))
(declare-const y (_ BitVec 64))
(assert (not (= (bvand (bvnot x) (bvnot y)) (bvnot (bvor x y)))))
(check-sat)
```

Let us illustrate a simple property of bit-wise arithmetic. There is a fast way to check that fixed size numbers are powers of two. It turns out that a bit-vector x is a power of two or zero if and only if x & (x - 1) is zero, where & represents the bitwise and. We check this for four bits below.

```z3
(define-fun is-power-of-two ((x (_ BitVec 4))) Bool 
  (= #x0 (bvand x (bvsub x #x1))))
(declare-const a (_ BitVec 4))
(assert 
 (not (= (is-power-of-two a) 
         (or (= a #x0) 
             (= a #x1) 
             (= a #x2) 
             (= a #x4) 
             (= a #x8)))))
(check-sat)
```


### Word operations

```z3
(declare-const a (_ BitVec 4))
(simplify (concat a #x0 #x1 #x2))
(simplify ((_ zero_extend 4) #xF))
(simplify ((_ sign_extend 4) #xF))
(simplify ((_ extract 15 8) #xABCD1234))
(simplify ((_ rotate_left 4) #xABCD))
(simplify ((_ rotate_right 4) #xABCD))
(simplify ((_ repeat 3) #xABC))
```

### Predicates over Bitvectors

```z3
(simplify (bvule #x0a #xf0))  ; unsigned less or equal
(simplify (bvult #x0a #xf0))  ; unsigned less than
(simplify (bvuge #x0a #xf0))  ; unsigned greater or equal
(simplify (bvugt #x0a #xf0))  ; unsigned greater than
(simplify (bvsle #x0a #xf0))  ; signed less or equal
(simplify (bvslt #x0a #xf0))  ; signed less than
(simplify (bvsge #x0a #xf0))  ; signed greater or equal
(simplify (bvsgt #x0a #xf0))  ; signed greater than
```

Signed comparison, such as bvsle, takes the sign bit of bitvectors into account for comparison, while unsigned comparison treats the bitvector as unsigned (treats the bitvector as a natural number).

```z3
(declare-const a (_ BitVec 4))
(declare-const b (_ BitVec 4))
(assert (not (= (bvule a b) (bvsle a b))))
(check-sat)
(get-model)
```


### BitVectors and Integers

You can mix integers and bit-vectors.
Note that reasoning in the combination has significant overhead so you 
will be better off if you can model your problems entirely only using bit-vectors
or entirely using integers (reals).
In the conversion function from bit-vectors to integers, bit-vectors correspond to non-negative integers.
For the conversion function that maps integers to bit-vectors you have to supply the bit-width $n$. Then the
bit-vector corresponding to the integer argument represents the unsigned number obtained by taking the modulus
with respect to $2^n$.


```z3
(simplify (bv2int #xa0))
(simplify ((_ int2bv 32) -3))
```

### Pop-count

We claim that the following program computes the number of bits that are set in $v$:

```C
int popcount32 (unsigned int v) { 
  v = v - ((v >> 1) & 0x55555555); 
  v = (v & 0x33333333) + ((v >> 2) & 0x33333333); 
  v = ((v + (v >> 4) & 0xF0F0F0F) * 0x1010101) >> 24; 
  return(v); 
} 
```

To check this claim, let us first reformulate popcount32 using definitions in SMTLIB2

```z3
(define-fun popcount32 ((v (_ BitVec 32))) (_ BitVec 32)
   (let ((v (bvsub v (bvand (bvlshr v (_ bv1 32)) #x55555555))))
   (let ((v (bvadd (bvand v #x33333333) (bvand (bvlshr v (_ bv2 32)) #x33333333))))
   (bvlshr (bvmul (bvand (bvadd v (bvlshr v (_ bv4 32))) #x0F0F0F0F) #x01010101) (_ bv24 32)))
   )
)

(simplify (popcount32 #x01234100))
```

The brute force way to compute a popcount is to add all bits together.
We can define the brute-force method for 4, 8 and 16 bits before writing down the 32 bit version.

```z3
(define-fun popcount4 ((v (_ BitVec 4))) (_ BitVec 32)
    (bvadd
      ((_ zero_extend 31) ((_ extract 0 0) v))
      ((_ zero_extend 31) ((_ extract 1 1) v))
      ((_ zero_extend 31) ((_ extract 2 2) v))
      ((_ zero_extend 31) ((_ extract 3 3) v))
    )
)

(define-fun popcount8 ((v (_ BitVec 8))) (_ BitVec 32)
   (bvadd (popcount4 ((_ extract 7 4) v)) (popcount4 ((_ extract 3 0) v)))
)

(define-fun popcount16 ((v (_ BitVec 16))) (_ BitVec 32)
   (bvadd (popcount8 ((_ extract 15 8) v)) 
          (popcount8 ((_ extract 7 0) v)))
)

(define-fun popcount32_b ((v (_ BitVec 32))) (_ BitVec 32)
   (bvadd (popcount16 ((_ extract 31 16) v))
          (popcount16 ((_ extract 15 0) v)))
)

(define-fun popcount32_a ((v (_ BitVec 32))) (_ BitVec 32)
   (let ((v (bvsub v (bvand (bvlshr v (_ bv1 32)) #x55555555))))
   (let ((v (bvadd (bvand v #x33333333) (bvand (bvlshr v (_ bv2 32)) #x33333333))))
   (bvlshr (bvmul (bvand (bvadd v (bvlshr v (_ bv4 32))) #x0F0F0F0F) #x01010101) (_ bv24 32)))
   )
)


(declare-const x (_ BitVec 32))

(assert (not (= (popcount32_a x) (popcount32_b x))))

(check-sat)

```