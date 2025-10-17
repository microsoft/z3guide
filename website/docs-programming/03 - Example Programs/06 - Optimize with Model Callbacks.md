---
title: Optimize with Model Callbacks
sidebar_position: 6
---

# Using set_on_model with Optimize

This tutorial demonstrates how to use the `set_on_model` callback feature with Z3's `Optimize` class. The `set_on_model` method allows you to register a callback function that is invoked whenever Z3 finds a new model during the optimization process. This is particularly useful for monitoring the optimization progress, logging intermediate results, or implementing early termination conditions.

## Basic Usage

The simplest use case is to monitor the optimization progress by printing intermediate models:

```z3-python
from z3 import *
import sys

opt = Optimize()

def on_model(m):
    print("Found model:", m)
    sys.stdout.flush()
    
opt.set_on_model(on_model)

# Create a simple optimization problem
x, y = Ints('x y')
opt.add(x >= 0)
opt.add(y >= 0) 
opt.add(x + y <= 10)

# Maximize the sum
opt.maximize(x + y)

print("Starting optimization...")
result = opt.check()
print("Optimization result:", result)
if result == sat:
    print("Final model:", opt.model())
```

## Monitoring Multiple Objectives

When dealing with multiple optimization objectives, the callback can help track how each objective evolves:

```z3-python
from z3 import *

opt = Optimize()

# Variables for a resource allocation problem
workers = [Int(f'worker_{i}') for i in range(3)]
tasks = [Int(f'task_{i}') for i in range(4)]

# Constraints
for w in workers:
    opt.add(w >= 0, w <= 10)  # Each worker can work 0-10 hours
    
for t in tasks:
    opt.add(t >= 1, t <= 5)   # Each task requires 1-5 hours

# Total work constraint
opt.add(Sum(workers) == Sum(tasks))

# Track model evolution
models_found = []

def track_models(m):
    model_values = {}
    for w in workers:
        model_values[f'worker_{workers.index(w)}'] = m.eval(w)
    for t in tasks:
        model_values[f'task_{tasks.index(t)}'] = m.eval(t)
    models_found.append(model_values)
    print(f"Model #{len(models_found)}: {model_values}")

opt.set_on_model(track_models)

# Multiple objectives
h1 = opt.minimize(Sum([If(w > 8, w - 8, 0) for w in workers]))  # Minimize overtime
h2 = opt.maximize(Sum(workers))  # Maximize total work hours

result = opt.check()
print(f"Found {len(models_found)} intermediate models")
print("Final result:", result)
```

## Early Termination with Custom Conditions

You can use the callback to implement early termination when certain conditions are met:

```z3-python
from z3 import *

class OptimizationMonitor:
    def __init__(self, max_models=5):
        self.models_seen = 0
        self.max_models = max_models
        self.best_value = None
        
    def model_callback(self, model):
        self.models_seen += 1
        print(f"Model {self.models_seen}: {model}")
        
        # You could add custom termination logic here
        # Note: Z3 doesn't provide a direct way to stop optimization
        # from the callback, but you can track progress
        
        if self.models_seen >= self.max_models:
            print(f"Reached maximum models limit ({self.max_models})")

# Example: Finding optimal assignment
opt = Optimize()
monitor = OptimizationMonitor(max_models=3)

# Variables
x, y, z = Ints('x y z')

# Constraints
opt.add(x >= 0, x <= 100)
opt.add(y >= 0, y <= 100) 
opt.add(z >= 0, z <= 100)
opt.add(x + y + z == 150)

# Set the callback
opt.set_on_model(monitor.model_callback)

# Objective
opt.maximize(x * x + y * y + z * z)

result = opt.check()
print(f"Total models evaluated: {monitor.models_seen}")
```

## Integration with MaxSAT and Local Search

The `set_on_model` callback is particularly useful when using MaxSAT engines or local search algorithms, which may find many intermediate solutions:

```z3-python
from z3 import *

opt = Optimize()

# Problem: Weighted MaxSAT
variables = [Bool(f'p_{i}') for i in range(6)]

# Hard constraints (must be satisfied)
opt.add(Or(variables[0], variables[1]))
opt.add(Or(Not(variables[0]), variables[2]))
opt.add(Or(Not(variables[1]), Not(variables[2])))

# Soft constraints with weights
opt.add_soft(variables[3], weight=3)
opt.add_soft(variables[4], weight=2) 
opt.add_soft(Not(variables[5]), weight=1)
opt.add_soft(And(variables[0], variables[1]), weight=4)

# Track solutions for analysis
solutions = []

def collect_solutions(model):
    solution = {}
    total_weight = 0
    for i, var in enumerate(variables):
        val = is_true(model.eval(var))
        solution[f'p_{i}'] = val
        
        # Calculate satisfied soft constraint weights
        if i == 3 and val: total_weight += 3
        if i == 4 and val: total_weight += 2  
        if i == 5 and not val: total_weight += 1
        
    solution['weight'] = total_weight
    solutions.append(solution)
    print(f"Solution with weight {total_weight}: {solution}")

opt.set_on_model(collect_solutions)

# Enable local search for better exploration
opt.set("enable_lns", True)

result = opt.check()
print(f"Found {len(solutions)} solutions")
print("Best solution:", max(solutions, key=lambda s: s['weight']) if solutions else "None")
```

## Usage with External Files

The original example from the issue shows how to use `set_on_model` with external SMT-LIB files:

```z3-python
from z3 import *
import sys

opt = Optimize()

def on_model(m):
    print("model", m)
    sys.stdout.flush()
    
opt.set_on_model(on_model)

# Configure optimization engine
# opt.set("maxsat_engine","wmax")  # Uncomment to use weighted MaxSAT
opt.set("enable_lns", True)       # Enable local search

# Load problem from file (create a sample file first)
# opt.from_file("problem.smt2")

# For demonstration, add constraints directly
x, y = Reals('x y')
opt.add(x >= 0)
opt.add(y >= 0)
opt.add(x + y <= 5)
opt.maximize(x * y)

# Set verbosity and timeout
set_option(verbose=2)
opt.set(timeout=3000)

result = opt.check()
print("Final model:", opt.model() if result == sat else "No solution")
```

## Key Points

- The `set_on_model` callback is invoked for each intermediate model found during optimization
- The callback receives a `ModelRef` object representing the current model
- This feature is most useful with iterative optimization engines like MaxSAT solvers or local search
- The callback can be used for monitoring progress, collecting statistics, or implementing custom termination logic
- When using `verbose=2`, you'll see additional solver statistics along with the model callbacks