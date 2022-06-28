## hi

```z3
; some z3 code involving quotes
(declare-const a String)
(declare-const b String)
(assert (= (str.++ b a) (str.++ "abc" b)))
(check-sat)
(get-model)
```

```z3
// test code for JS code injection (looks like it doesn't go thru?)
<img src='' onerror='alert("hi")'></img>
```