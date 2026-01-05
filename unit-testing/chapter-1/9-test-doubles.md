# Lesson 9: Test Doubles

## Overview
In this lesson, you will learn about **Test Doubles**, why they are essential in **unit testing**, and how different types of test doubles help isolate and test code effectively.

---

## What are Test Doubles?

A **Test Double** is an object used in place of a real dependency during testing.  
Just like a stunt double in movies, a test double replaces a real object to:

- Isolate the unit under test
- Avoid slow or unreliable external dependencies
- Make tests faster, predictable, and repeatable

Test doubles are commonly used to replace:
- Databases
- APIs
- File systems
- External services
- Complex business logic

---

## Types of Test Doubles

## 1. Dummy

A **Dummy** is a test double that is **passed to a method but never used**.

It exists only to satisfy method parameters or constructor requirements.

### When to Use a Dummy
- When an object is required but not used
- When the dependency has no impact on the test
- When avoiding unnecessary setup

### Example
```ts
const dummyLogger = {}

function processOrder(order, logger) {
  return order.id
}

processOrder({ id: 1 }, dummyLogger)
```

### Key Point
Dummy objects do nothing and contain no logic.

## 2. Stub

A **Stub** is a test double that provides **predefined responses** to method calls.

Stubs help control test flow by returning known data.

### When to Use a Stub

-   When external data is required
    
-   When avoiding real service or database calls
    
-   When testing logic that depends on returned values
    

### Example
```ts
const userServiceStub = {
  getUser: () => ({ id: 1, name: "Test User" })
}

const user = userServiceStub.getUser()
expect(user.name).toBe("Test User")
```

## 3. Spy

A **Spy** is a test double that **records information** about how a function or method is used during a test.

Spies allow the real function to run (optionally) while still tracking:

-   Whether it was called
    
-   How many times it was called
    
-   What arguments were passed
    

### When to Use a Spy

-   When you want to observe behavior
    
-   When verifying interactions
    
-   When side effects matter
    

### Example

```ts 
const saveSpy = jest.fn() saveSpy("order-123") 
expect(saveSpy).toHaveBeenCalled() 
expect(saveSpy).toHaveBeenCalledWith("order-123")` 
```

**Key Point:**  
Spies observe behavior without replacing logic.

----------

## 4. Mock

A **Mock** is a test double with **predefined expectations** about how it should be used.

Mocks verify interactions and fail tests when expectations are not met.

### When to Use a Mock

-   When interaction is more important than output
    
-   When enforcing strict collaboration rules
    
-   When testing service communication
    

### Example

```ts
const emailServiceMock = { sendEmail: jest.fn().mockReturnValue(true)}

emailServiceMock.sendEmail("test@mail.com") 
expect(emailServiceMock.sendEmail).toHaveBeenCalledTimes(1)` 
```

**Key Point:**  
Mocks define behavior and verify interactions.

----------

## 5. Fake

A **Fake** is a working implementation with **simplified logic**.

Fakes behave like real objects but are lightweight and fast.

### When to Use a Fake

-   When realistic behavior is required
    
-   When replacing slow or complex systems
    
-   When testing workflows end-to-end at unit level
    

### Example

```ts
class FakeUserRepository {
  private users = []

  save(user) {
    this.users.push(user)
  }

  findAll() {
    return this.users
  }
}

```

**Key Point:**  
Fakes contain real logic but are not production-ready.

----------

## When to Use Test Doubles

Use test doubles when:

-   The real object is slow or expensive
    
-   The dependency is not yet implemented
    
-   You need predictable test results
    
-   You want to isolate the unit under test

----------
## Real Object vs Test Double

| Aspect        | Real Object          | Test Double        |
|---------------|----------------------|--------------------|
| Speed         | Slow                 | Fast               |
| Reliability   | Can fail              | Stable             |
| Complexity   | High                 | Low                |
| Isolation    | Poor                 | Excellent          |
| Use Case     | Integration Tests    | Unit Tests         |



## Common Mistakes While Using Test Doubles

-   Over-mocking everything
    
-   Testing mocks instead of behavior
    
-   Using mocks where stubs are sufficient
    
-   Not verifying important interactions
    
-   Sharing mocks across tests
