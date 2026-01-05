# Lesson 13: Error Handling and Edge Cases

## Learning Objectives
By the end of this lesson, learners will be able to:
- Understand what error scenarios are
- Test functions that throw errors
- Validate edge cases using unit tests
- Write reliable and defensive unit tests

---

## Introduction

In real-world applications, code does not always receive valid input.  
Unit tests must verify not only **successful behavior** but also **failure scenarios**.

This lesson focuses on:
- Testing errors
- Testing exceptions
- Handling edge cases

---

## What are Error Scenarios?

Error scenarios occur when:
- Invalid input is passed
- Required parameters are missing
- Unexpected conditions occur

**Examples:**
- Dividing by zero
- Passing a string instead of a number
- Calling a function with missing arguments

---

## Testing Error Scenarios

Unit tests should confirm that:
- The function fails gracefully
- The correct error message is returned
- The application does not crash unexpectedly

---

## Example: Function with Error Handling

### Function Code (`divide.js`)

```javascript
function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero is not allowed');
  }
  return a / b;
}

module.exports = divide;
```
## Testing Thrown Exceptions

### Test Case (`test/divide.test.js`)
```
const assert = require('assert');
const divide = require('../divide');

describe('Divide Function', function () {
  it('should throw an error when dividing by zero', function () {
    assert.throws(() => {
      divide(10, 0);
    }, Error);
  });
});
```
✅This test passes only if the function throws an error. 

## Testing Error Messages

You can also test **specific error messages**.

```
it('should throw correct error message', function () {
  assert.throws(
    () => divide(10, 0),
    /Division by zero is not allowed/
  );
});

```
## Understanding Edge Cases

Edge cases are **extreme or unusual inputs**, such as:

* Empty values
* Null or undefined
* Very large numbers
* Negative values

## Example: Testing Edge Cases 
```
it('should handle negative numbers', function () {
  assert.strictEqual(divide(-10, 2), -5);
});

```


## Common Mistakes to Avoid

* Not testing failure cases
* Ignoring edge conditions
* Catching errors inside the test incorrectly
* Writing tests that always pass

---

## Practice Exercise

1. Create a function that accepts age
2. Throw an error if age is below 0
3. Write unit tests for:  
   * Valid age  
   * Invalid (negative) age

---

## Lesson Summary

In this lesson, you learned:

* How to test error scenarios
* How to test thrown exceptions
* How to validate edge cases
* Why error testing is critical for reliable applications

Testing errors ensures your code is **robust, safe, and production-ready**.