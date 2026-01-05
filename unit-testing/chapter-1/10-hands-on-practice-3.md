# Lesson 10: Hands On Practice

## Objective
Apply the concept of **Test Doubles** by writing unit tests using Dummy, Stub, Spy, Mock, and Fake objects.

---

## Practice 1: Using a Dummy Object

### Scenario
A function requires a logger object, but logging is not part of the test.

### Task
- Create a dummy logger
- Pass it to the function
- Verify the function output

### Example
```ts
const dummyLogger = {}

function calculateTotal(amount, logger) {
  return amount * 2
}

const result = calculateTotal(100, dummyLogger)
expect(result).toBe(200)

```

----------

## Practice 2: Using a Stub

### Scenario

A service fetches user data from an external source.

### Task

-   Replace the real service with a stub
    
-   Return predefined user data
    
-   Verify the business logic
    

### Example

```ts
const userServiceStub = {
  getUser: () => ({ id: 1, role: "admin" })
}

function isAdmin(userService) {
  return userService.getUser().role === "admin"
}

expect(isAdmin(userServiceStub)).toBe(true)

```

----------

## Practice 3: Using a Spy

### Scenario

You want to verify that a save method is called.

### Task

-   Create a spy
    
-   Call the function
    
-   Verify call count and arguments
    

### Example

```ts
const saveSpy = jest.fn()

function saveOrder(orderId, saveFn) {
  saveFn(orderId)
}

saveOrder("ORD-1", saveSpy)

expect(saveSpy).toHaveBeenCalledTimes(1)
expect(saveSpy).toHaveBeenCalledWith("ORD-1")

```

----------

## Practice 4: Using a Mock

### Scenario

An email service must be triggered during order processing.

### Task

-   Create a mock email service
    
-   Define expected behavior
    
-   Verify interaction
    

### Example

```ts
const emailServiceMock = {
  send: jest.fn().mockReturnValue(true)
}

function processOrder(emailService) {
  emailService.send("order@shop.com")
}

processOrder(emailServiceMock)

expect(emailServiceMock.send).toHaveBeenCalled()

```

----------

## Practice 5: Using a Fake

### Scenario

Replace a database repository with a fake implementation.

### Task

-   Create a fake repository
    
-   Store and retrieve data
    
-   Verify functionality
    

### Example

```ts
class FakeOrderRepository {
  constructor() {
    this.orders = []
  }

  save(order) {
    this.orders.push(order)
  }

  findAll() {
    return this.orders
  }
}

const repo = new FakeOrderRepository()
repo.save({ id: 1 })

expect(repo.findAll().length).toBe(1)

```

----------
