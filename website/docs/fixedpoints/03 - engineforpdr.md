---
title: Engine for Property Directed Reachability
sidebar_position: 3
---

A different underlying engine for fixed-points is based on an algorithm for Property Directed Reachability (PDR). The PDR engine is used by default for relations over integers, reals and algebraic data-types. The version in Z3 applies to Horn clauses with arithmetic and Boolean domains. The engine also works with domains using algebraic data-types and bit-vectors, although it is currently not overly tuned for either. The PDR engine is targeted at applications from symbolic model checking of software. The systems may be infinite state. The following examples also serve a purpose of showing how software model checking problems (of safety properties) can be embedded into Horn clauses and solved using PDR.

## Procedure Calls