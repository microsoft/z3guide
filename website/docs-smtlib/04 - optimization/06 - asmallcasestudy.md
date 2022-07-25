---
title: A Small Case Study
sidebar_position: 6
---

In collaboration with Anh-Dung Phan.

## Problem description

Use the problem of virtual machine placement as an example. Assume that we have three virtual machines (VMs) which require 100, 50 and 15 GB hard disk respectively. There are three servers with capabilities 100, 75 and 200 GB in that order. Find out a way to place VMs into servers in order to
- Minimize the number of servers used
- Minimize the operation cost (the servers have fixed daily costs 10, 5 and 20 USD respectively.)

### Boolean encoding

We start with a Boolean encoding. Let xij denote that VM i is put into server j and yj denote that server j is in use.

```z3 
(declare-const x11 Bool)
(declare-const x12 Bool)
(declare-const x13 Bool)
(declare-const x21 Bool)
(declare-const x22 Bool)
(declare-const x23 Bool)
(declare-const x31 Bool)
(declare-const x32 Bool)
(declare-const x33 Bool)

(declare-const y1 Bool)
(declare-const y2 Bool)
(declare-const y3 Bool)


; We express that a virtual machine is on exactly one server by simply converting it to integer constraints.
(assert (= (+ x11 x12 x13) 1))
(assert (= (+ x21 x22 x23) 1))
(assert (= (+ x31 x32 x33) 1))

; And an used server is implied by having a VM on it.

(assert (and (implies y1 x11) (implies y1 x21) (implies y1 x31)))
(assert (and (implies y2 x12) (implies y2 x22) (implies y2 x32)))
(assert (and (implies y3 x13) (implies y3 x23) (implies y3 x33)))

; Capability constraints are quite natural to add.

(assert (<= (+ (* 100 x11) 
               (* 50 x21) 
               (* 15 x31)) 
            (* 100 y1)))
(assert (<= (+ (* 100 x12) 
               (* 50 x22) 
               (* 15 x32)) 
            (* 75 y2)))
(assert (<= (+ (* 100 x13) 
               (* 50 x23) 
               (* 15 x33)) 
            (* 200 y3)))

; Optimization goals are expressed implicitly via assert-soft command.
(assert-soft (not y1) :id num_servers)
(assert-soft (not y2) :id num_servers)
(assert-soft (not y3) :id num_servers)

(assert-soft (not y1) :id costs :weight 10)
(assert-soft (not y2) :id costs :weight 5)
(assert-soft (not y3) :id costs :weight 20)

(check-sat)
(get-model)
(get-objectives)
```

The assert-soft command represents MaxSMT which tries to maximize the weighted sum of Boolean expressions belonged to the same id. Since we are doing minimization, negation is needed to take advantage of MaxSMT support.


### Integer encoding

In this example, the Boolean encoding is not really natural. Most of the constraints is of arithmetic form, it makes more sense to express them using integer arithmetic. Here is a similar encoding using integer arithmetic.

```z3
(declare-const x11 Int)
(declare-const x12 Int)
(declare-const x13 Int)
(declare-const x21 Int)
(declare-const x22 Int)
(declare-const x23 Int)
(declare-const x31 Int)
(declare-const x32 Int)
(declare-const x33 Int)

(declare-const y1 Int)
(declare-const y2 Int)
(declare-const y3 Int)

(assert (and (>= x11 0) (>= x12 0) (>= x13 0) 
             (>= x21 0) (>= x22 0) (>= x23 0)
             (>= x31 0) (>= x32 0) (>= x33 0)))
             
(assert (and (<= y1 1) (<= y2 1) (<= y3 1)))

(assert (= (+ x11 x12 x13) 1))
(assert (= (+ x21 x22 x23) 1))
(assert (= (+ x31 x32 x33) 1))

(assert (and (>= y1 x11) (>= y1 x21) (>= y1 x31)))
(assert (and (>= y2 x12) (>= y2 x22) (>= y2 x32)))
(assert (and (>= y3 x13) (>= y3 x23) (>= y3 x33)))

(assert (<= (+ (* 100 x11) (* 50 x21) (* 15 x31)) (* 100 y1)))
(assert (<= (+ (* 100 x12) (* 50 x22) (* 15 x32)) (* 75 y2)))             
(assert (<= (+ (* 100 x13) (* 50 x23) (* 15 x33)) (* 200 y3)))

(minimize (+ y1 y2 y3))
(minimize (+ (* 10 y1) (* 5 y2) (* 20 y3)))

;(set-option :opt.priority pareto)
(check-sat)
(get-model)
(get-objectives)
```

The capability constraints and goals are easier to express than those of Boolean encoding. However, we need to add extra constraints to ensure that only 0-1 integers are allowed in the model. It is also interesting to see different results by choosing various ways of combining objectives. You can uncomment the set-option command and take a look at results.

