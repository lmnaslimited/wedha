# Lesson 7: Assertions and Matchers
---
##  Learning Objectives

By the end of this lesson, learners will be able to:

-   Understand what assertions are
    
-   Use common assertion types
    
-   Differentiate equality and deep equality
    
-   Handle exception assertions
    
-   Apply assertion best practices
    

----------

##  What Are Assertions?

Assertions are statements used to **verify expected outcomes** in a test.

They compare:

-   Expected value
    
-   Actual value
    

If the assertion fails, the test fails.

----------

## Common Assertion Types

### Equality Assertions

-   Check if values are equal
    
```
`expect(result).toBe(10);` 
```
----------

### Boolean Assertions

-   Verify true or false conditions
 ```   
`expect(isValid).toBe(true);` 
```
----------

### Null / Undefined Assertions
```
`expect(value).toBeNull(); expect(value).toBeUndefined();` 
```
----------

##  Equality vs Deep Equality

### Shallow Equality

-   Compares references or primitive values
    
```
`expect(a).toBe(b);` 
```
----------

### Deep Equality

-   Compares object structure and values
    
```
`expect(obj1).toEqual(obj2);` 
```
----------

## Exception and Error Assertions

Used to verify that code throws expected errors.
```
`expect(() =>  divide(10, 0)).toThrow();` 
```
----------

### When to Use

-   Validating input
    
-   Error handling logic
    
-   Boundary conditions
    

----------

## Assertion Best Practices

-   Use one assertion per test (when possible)
    
-   Keep assertions clear and specific
    
-   Avoid testing implementation details
    
-   Assert behavior, not internal state
    
-   Write readable failure messages
    

----------

##  Key Takeaways

-   Assertions validate correctness
    
-   Choose the right matcher for clarity
    
-   Good assertions improve test quality