# Lesson 3: Installation and Running

## Learning Objectives
By the end of this lesson, learners will be able to:
- Install Mocha
- Understand basic test structure
- Run test cases
---
## How to install Mocha?

### Step 1: Initialize Node.js project
```
npm init -y
```
### Step 2: Install Mocha
bash
Copy code
npm install --save-dev mocha
Basic Structure
Sample Project Structure
```bash
Copy code
project/
│── test/
│   └── sample.test.js
│── package.json
```
### Sample Test File
```javascript
const assert = require('assert');
describe('Addition Test', function () {
  it('should return 4 when adding 2 and 2', function () {
    assert.strictEqual(2 + 2, 4);
  });
});
```
### Run the Test
Using npx
```bash
npx mocha
```
### Using package.json script
```json
"scripts": {
  "test": "mocha"
}
```
```bash
npm test
```

Output Example
```
✔ Test Passed
❌ Test Failed with error message
```

### Summary
You learned how to install Mocha, write a basic test, and run it using command line tools.



---
