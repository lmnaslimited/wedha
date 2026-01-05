# Lesson 4: Hands-On Practice

## Learning Objectives
By the end of this lesson, learners will be able to:
- Write simple unit tests
- Use assertions correctly
- Run tests and understand results
- Practice unit testing with real examples

---

## Hands-On Overview

In this lesson, you will apply what you have learned by:
- Writing small JavaScript functions
- Creating unit tests for them
- Running tests using the testing framework

---

## Practice 1: Testing an Addition Function

### Step 1: Create the Function

Create a file named `add.js`:

```javascript
function add(a, b) {
  return a + b;
}
module.exports = add;
```
### Step 2: Write the Test Case
Create a test file test/add.test.js:
```
const assert = require('assert');
const add = require('../add');

describe('Add Function', function () {
  it('should return 8 when adding 3 and 5', function () {
    assert.strictEqual(add(3, 5), 8);
  });
});
```
### Step 3: Run the Test
```bash
npx mocha
```
✅Expected Result: Test should pass successfully.

## Practice 2: Testing a Subtraction Function
### Task
1.Create a function subtract(a, b)

2.Write a unit test to verify correct subtraction

## Example Function
```
function subtract(a, b) {
  return a - b;
}
module.exports = subtract;
```
### Example Test Case
```
const assert = require('assert');
const subtract = require('../subtract');

describe('Subtract Function', function () {
  it('should return 2 when subtracting 3 from 5', function () {
    assert.strictEqual(subtract(5, 3), 2);
  });
});
```
## Common Mistakes to Avoid
- Writing multiple checks in one test

- Forgetting to export functions

- Not running tests after writing them

- Ignoring failed test messages

## Practice Challenge (Optional)
Try writing and testing functions for:

- Multiplication

- Division

- Handling invalid inputs (e.g., non-numbers)

## Lesson Summary
In this lesson, you practiced writing real unit tests:

- Created functions

- Wrote test cases

- Executed tests

- Interpreted results

## Hands-on practice is essential to mastering unit testing.