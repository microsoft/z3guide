--- 
title: IEEE Floats
sidebar_position: 7
---


> **SMTLIB2 standard** [IEEE Floating Point Numbers](http://smtlib.cs.uiowa.edu/theories-FloatingPoint.shtml)



```z3
(declare-fun X () (_ FloatingPoint 11 53))

(assert (fp.isNormal X))
(assert (not (fp.isSubnormal X)))
(assert (not (fp.isZero X)))
(assert (not (fp.isInfinite X)))
(assert (not (fp.isNaN X)))
(assert (not (fp.isNegative X)))
(assert (fp.isPositive X))

(check-sat)
(get-model)
```

Floating point operations are defined modulo rounding modes.
Many algebraic properties of bit-vectors, integers and reals don't carry over to floating points.
For example, addition is not associative.

```z3
(declare-const a Float32)
(declare-const b Float32)
(declare-const c Float32)

(assert (not (= (fp.add roundNearestTiesToEven a (fp.add roundNearestTiesToEven b c))
	        (fp.add roundNearestTiesToEven (fp.add roundNearestTiesToEven a b) c))))
(check-sat)
(get-model)
```
