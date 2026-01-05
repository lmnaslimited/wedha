# Lesson 12: Test Setup and Teardown

## Overview
In this lesson, you will learn how **test setup and teardown** help create reliable, isolated, and maintainable unit tests by preparing and cleaning up test environments.

---

## Why Setup and Teardown Are Needed

Setup and teardown are used to:
- Prepare the test environment before execution
- Clean up resources after tests run
- Ensure test independence
- Avoid flaky or inconsistent test results

Without proper setup and teardown:
- Tests may depend on each other
- Shared data may cause unexpected failures
- Debugging becomes difficult

---

## Before and After Hooks

Testing frameworks provide hooks to run code **before** and **after** tests.

### Common Hooks
- `beforeEach` → Runs before every test
- `afterEach` → Runs after every test
- `beforeAll` → Runs once before all tests
- `afterAll` → Runs once after all tests

### Example
```ts
beforeEach(() => {
  database.connect()
})

afterEach(() => {
  database.clear()
})

```

**Key Point:**  
Hooks automate repetitive setup and cleanup logic.

----------

## Per-Test vs Per-Suite Setup

### Per-Test Setup

Runs before every individual test.

**Use When:**

-   Tests modify shared data
    
-   Each test must start fresh
    
-   Isolation is critical
    

```ts
beforeEach(() => {
  resetState()
})

```

----------

### Per-Suite Setup

Runs once for the entire test suite.

**Use When:**

-   Setup is expensive
    
-   Data is read-only
    
-   Tests do not mutate shared state
    

```ts
beforeAll(() => {
  initializeConfig()
})

```

----------

## Avoiding Shared State

Shared state between tests can lead to:

-   Order-dependent failures
    
-   Flaky tests
    
-   Hard-to-debug issues
    

### Best Practices

-   Avoid global variables
    
-   Reset data in `beforeEach`
    
-   Create fresh objects per test
    
-   Do not reuse mocks across tests
    

**Rule of Thumb:**  
Each test should be able to run independently.

----------

## Managing Test Data Lifecycle

Test data should follow a clear lifecycle:

1.  Create data during setup
    
2.  Use data in the test
    
3.  Clean up data during teardown
    

### Example

```ts
let user

beforeEach(() => {
  user = { id: 1, name: "Test User" }
})

afterEach(() => {
  user = null
})

```

### Best Practices

-   Keep test data minimal
    
-   Use factories or builders
    
-   Clean up after every test
    
-   Avoid hard-coded shared data
    

----------

## Summary

-   Setup prepares the test environment
    
-   Teardown cleans up after tests
    
-   Hooks improve readability and maintainability
    
-   Isolation prevents flaky tests
    
-   Proper data management ensures reliability
    

----------

## Learning Outcome

After completing this lesson, you will be able to:

-   Use setup and teardown hooks effectively
    
-   Choose per-test or per-suite setup correctly
    
-   Prevent shared state issues
    
-   Manage test data safely and cleanly
    
