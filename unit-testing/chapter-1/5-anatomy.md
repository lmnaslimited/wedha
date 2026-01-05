# Lesson 5: Anatomy of a Unit Test

---

##  Learning Objectives

By the end of this lesson, learners will be able to:

- Understand the standard structure of a unit test
- Write clean and independent unit tests
- Apply the Red–Green–Refactor (TDD) methodology effectively

---

##  Test Structure: Arrange – Act – Assert (AAA)

The **AAA pattern** is a widely accepted structure for writing clear and maintainable unit tests.

###  Arrange
- Set up test data
- Initialize objects
- Prepare dependencies

**Goal:** Create the conditions needed for the test

---

###  Act
- Execute the method or function under test

**Goal:** Perform the action being tested

---

###  Assert
- Verify the result
- Check expected vs actual outcomes

**Goal:** Confirm the behavior is correct

---

### Example (Conceptual)

```ts
// Arrange
const calculator = new Calculator();

// Act
const result = calculator.add(2, 3);

// Assert
expect(result).toBe(5);
```
## 🔗 Test Independence

### What is Test Independence?

Each unit test should:

-   Run independently
    
-   Not rely on the result of another test
    
-   Produce the same result every time
    

----------

### Why It Matters

-   Prevents flaky tests
    
-   Makes debugging easier
    
-   Allows tests to run in any order
    
-   Improves reliability of test suites
    

----------

### Best Practices for Independence

-   Avoid shared state
    
-   Reset data before each test
    
-   Use fresh test objects
    
-   Do not depend on external systems
    

----------

## 🔄 Red–Green–Refactor Methodology (TDD)

**Test-Driven Development (TDD)** follows a three-step cycle:

----------

### 🔴 Red

-   Write a test that fails
    
-   Confirms the feature does not yet exist
    

----------

### 🟢 Green

-   Write minimal code to pass the test
    
-   Focus on correctness, not perfection
    

----------

### 🔵 Refactor

-   Improve code quality
    
-   Remove duplication
    
-   Keep tests passing
    

----------

### Benefits of TDD

-   Better code design
    
-   Higher test coverage
    
-   Fewer bugs
    
-   Confident refactoring
    

----------

## 📝 Key Takeaways

-   AAA makes tests readable and structured
    
-   Independent tests are reliable tests
    
-   Red–Green–Refactor drives clean development