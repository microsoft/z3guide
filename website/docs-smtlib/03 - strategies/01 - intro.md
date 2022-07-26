---
title: Introduction
sidebar_position: 1
---

High-performance solvers, such as Z3, contain many tightly integrated, handcrafted heuristic combinations of algorithmic proof methods. While these heuristic combinations tend to be highly tuned for known classes of problems, they may easily perform very badly on new classes of problems. This issue is becoming increasingly pressing as solvers begin to gain the attention of practitioners in diverse areas of science and engineering. In many cases, changes to the solver heuristics can make a tremendous difference.

In this tutorial we show how to create custom strategies using the basic building blocks available in Z3. Z3 implements the ideas proposed in this [article](https://web.archive.org/web/20190206110824/http://research.microsoft.com/en-us/um/people/leonardo/strategy.pdf).

