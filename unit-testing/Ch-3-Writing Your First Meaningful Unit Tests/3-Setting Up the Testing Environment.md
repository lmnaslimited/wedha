So far, we’ve discussed why meaningful unit tests matter and how testing frameworks help automate them. None of that works unless your testing environment is set up correctly.
This lesson is different from the previous ones. It is not meant to be read passively. It is meant to be **followed step by step**.
By the end of this lesson, you should have:
- A working test setup on your system
- The ability to run tests with a single command
- Confidence that your test results are reliable

This setup will be the foundation for every unit test you write going forward.

## 1. A Common ERP Problem: “It Works on My Machine”
A developer writes a few unit tests and runs them locally. They pass.  
Another developer pulls the same code and runs the tests. They fail.  
On the CI server, the results are different again.
The business logic did not change.  
The **environment did**.
From a business perspective, this is dangerous. Tests are supposed to give confidence that rules like approvals, validations, and calculations are safe. If test results depend on where they run, they give false confidence.
This is why setting up a **clean, consistent testing environment** is critical before writing real unit tests.

## 2. What a “Good” Testing Environment Looks Like
A proper unit testing environment is not complex or special.  
It is **predictable**.
A good testing environment ensures:

- Tests do **not** depend on production or live ERP data  
- Each test starts from a **known, clean state**  
- Tests run the **same way on every developer’s machine**  
- Tests are **fast enough** to run frequently  

If a test behaves differently depending on where it runs, the problem is not the test logic - the environment is broken.

## 3. What You Will Set Up in This Lesson
In this lesson (and the accompanying video), you will set up:
- A dedicated folder for unit tests  
- A basic test configuration  
- A single command to run all tests  
- A simple sanity test to confirm everything works  
At this stage, you are **not testing business logic yet**.  
You are preparing the ground so that future tests are trustworthy.

## 4. Step-by-Step Setup

In the previous lesson, we explored different unit testing frameworks and tools. For this course, we use **Jest** to demonstrate unit testing concepts.
Jest is a good learning tool because:
- It is easy to set up
- It includes a test runner, assertions, and basic mocking
- It works well for small and large projects

The goal here is understanding concepts, not locking into a specific tool.
### Step 1: Install Jest
From your project root, install Jest as a development dependency:

> Make sure you are using a **Node project**. If not, Initiate a new project using **npm init**

```
npm install --save-dev jest
```
This installs everything needed to start unit testing.

### Step 2: Add a Test Script
Open `package.json` and add a test script:

```
{  
"scripts": {  
"test": "jest"  
}  
}
```

This allows you to run all unit tests using a single command.

### Step 3: Create a Test Folder

Create a dedicated folder for unit tests:

```
project-root/  
├─ src/  
├─ tests/
```

This keeps test code clearly separated from business logic and makes tests easy to locate.

### Step 4: Add a Sanity Test

Inside the `tests` folder, create a file named:

```
tests/sanity.test.js
```

Add the following content:

```
test("sanity check", () => {  
expect(true).toBe(true);  
});
```

This test does **not** validate any business rule.  
Its only purpose is to confirm that:
- Jest is installed correctly
- The test runner works
- The setup is valid
### Step 5: Run the Tests
Run the following command from your project root:

```
npm test
```

You should see:
- Jest starting successfully
- One test running
- One test passing
- No errors

If this works, your testing environment is ready.

## Key Takeaway

You now have a clean and consistent testing environment.
This setup ensures that:
- Test results are reliable
- Tests behave the same across machines
- Future unit tests can be trusted

In the next lesson, we will break down the **anatomy of a real unit test** and start working with actual business logic.



