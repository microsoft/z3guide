---
title: Introduction
sidebar_position: 1
---

Z3's main functionality to checking the satisfiability of logical formulas over one or more theories. Z3 can produce models for satisfiable formulas. Yet in many cases arbitrary models are insufficient and applications are really solving optimization problems: one or more values should be minimal or maximal. When there are multiple objectives, they should be combined using Pareto fronts, lexicographic priorities, or optimized independently. This section describes a feature exposed by Z3 that lets users formulate objective functions directly with Z3. Under the hood is a portfolio of approaches for solving linear optimization problems over SMT formulas, MaxSMT, and their combinations.

