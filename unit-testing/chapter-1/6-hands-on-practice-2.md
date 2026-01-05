# Lesson 6: Hands-On Practice – Writing Real Unit Tests

---

##  Objective

Learn how to **design, write, and validate unit tests** by applying:

- Arrange–Act–Assert (AAA) structure  
- Test independence  
- Red–Green–Refactor (TDD)  
- Assertions and matchers  

By the end of this practice, learners will be able to confidently write **production-quality unit tests**.

---

##  Practice 1: Creating and Testing a Calculator Module

---

## Step 1: Prepare the Workspace

Create a dedicated project structure for the unit testing practice.

```bash
mkdir -p ~/unit-testing-practice/src ~/unit-testing-practice/tests
cd ~/unit-testing-practice
```
## Step 2: Initialize the Project

Initialize a Node.js project and install a testing framework (Jest).
```
npm init -y
npm install --save-dev jest` 
```
Update `package.json` to enable test execution:
```
"scripts":  {  "test":  "jest"  }` 
```
----------

## Step 3: Create the Source Code File

Create a simple calculator module to test.

`touch src/calculator.js` 

Add the following content:
```
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

module.exports = { add, subtract };

```
----------

## Step 4: Create the Unit Test File

Create a test file for the calculator module.

`touch tests/calculator.test.js` 

----------

## Step 5: Write Tests Using Arrange–Act–Assert

Add the following content to `calculator.test.js`:
```
const { add, subtract } = require('../src/calculator');

test('adds two numbers correctly', () => {
  // Arrange
  const a = 5;
  const b = 3;

  // Act
  const result = add(a, b);

  // Assert
  expect(result).toBe(8);
});

test('subtracts two numbers correctly', () => {
  // Arrange
  const a = 10;
  const b = 4;

  // Act
  const result = subtract(a, b);

  // Assert
  expect(result).toBe(6);
});

```
----------

## Step 6: Execute the Tests (Green Phase)

Run the test suite:

`npm test` 

### Expected Output:

-   All tests should **pass successfully**
    
-   Jest should report **2 passing tests**
    

----------

## Step 7: Apply Red–Green–Refactor

### 🔴 Red

Modify the `add` function incorrectly:

`return a - b;` 

Run the tests again:

`npm test` 

### Expected Result:

-   Test failure confirming correct test behavior
    

----------

### 🟢 Green

Fix the implementation back to correct logic.

----------

### 🔵 Refactor

Refactor the code (if needed) without changing test behavior.

Example:

-   Improve variable naming
    
-   Remove duplication
    
-   Keep tests passing
    

----------

## Step 8: Verify Test Independence

Add another test without relying on previous tests:
```
test('add does not modify inputs', () => {
  // Arrange
  const a = 2;
  const b = 3;

  // Act
  add(a, b);

  // Assert
  expect(a).toBe(2);
  expect(b).toBe(3);
});
 
```
Run the tests again:

`npm test` 

----------

## Step 9: Verify Directory Structure

Ensure the project structure matches the expected layout.

`tree ~/unit-testing-practice` 

### Expected Output:
```
unit-testing-practice
├── src
│   └── calculator.js
├── tests
│   └── calculator.test.js
├── package.json
└── node_modules
 
```
----------

## Expected Outcome

-   Tests follow the **AAA pattern**
    
-   Each test runs **independently**
    
-   Failures correctly indicate broken logic
    
-   Refactoring does not break existing tests
    
-   Learner gains hands-on confidence in unit testing