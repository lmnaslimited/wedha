# Lesson 14: Hands On Practice
## Objective
Practice writing unit tests that handle **errors, exceptions, and edge cases** correctly.

---

## Practice 1: Handling Invalid Input

### Scenario
A function calculates the square of a number.  
It should return an error message if the input is not a number.

### Code
```ts
function square(value) {
  if (typeof value !== "number") {
    return "Invalid input"
  }
  return value * value
}

```

### Task

-   Write a test for valid input
    
-   Write a test for invalid input
    

### Example Test

```ts
test("should return square for valid number", () => {
  expect(square(4)).toBe(16)
})

test("should return error message for invalid input", () => {
  expect(square("a")).toBe("Invalid input")
})

```

----------

## Practice 2: Testing Thrown Exceptions

### Scenario

A function withdraws money from an account.  
It should throw an error if the balance is insufficient.

### Code

```ts
function withdraw(amount, balance) {
  if (amount > balance) {
    throw new Error("Insufficient balance")
  }
  return balance - amount
}

```

### Task

-   Write a test for successful withdrawal
    
-   Write a test to verify the error is thrown
    

### Example Test

```ts
test("should withdraw amount when balance is sufficient", () => {
  expect(withdraw(100, 500)).toBe(400)
})

test("should throw error when balance is insufficient", () => {
  expect(() => withdraw(600, 500)).toThrow("Insufficient balance")
})

```

----------

## Practice 3: Handling Empty Values (Edge Case)

### Scenario

A function returns the first item in a list.  
It should return `null` if the list is empty.

### Code

```ts
function getFirstItem(items) {
  if (items.length === 0) {
    return null
  }
  return items[0]
}

```

### Task

-   Write a test for a non-empty list
    
-   Write a test for an empty list
    

### Example Test

```ts
test("should return first item when list is not empty", () => {
  expect(getFirstItem([10, 20, 30])).toBe(10)
})

test("should return null for empty list", () => {
  expect(getFirstItem([])).toBeNull()
})

```

----------

## Practice 4: Testing Boundary Values

### Scenario

A function checks if a user is eligible to vote.  
Minimum age required is 18.

### Code

```ts
function canVote(age) {
  if (age < 18) {
    return false
  }
  return true
}

```

### Task

-   Test the minimum valid age
    
-   Test a value below the limit
    

### Example Test

```ts
test("should allow voting at age 18", () => {
  expect(canVote(18)).toBe(true)
})

test("should not allow voting below age 18", () => {
  expect(canVote(16)).toBe(false)
})

```

----------

## Practice 5: Testing Null and Undefined

### Scenario

A function returns the length of a string.  
It should return `0` if the value is null or undefined.

### Code

```ts
function getLength(text) {
  if (!text) {
    return 0
  }
  return text.length
}

```

### Task

-   Test normal string
    
-   Test null and undefined inputs
    

### Example Test

```ts
test("should return length of string", () => {
  expect(getLength("hello")).toBe(5)
})

test("should return 0 for null value", () => {
  expect(getLength(null)).toBe(0)
})

```

----------

## Summary

-   Always test failure paths
    
-   Verify thrown errors explicitly
    
-   Cover edge and boundary cases
    
-   Keep error-handling tests simple
    
-   Good tests expect things to go wrong
    

----------

## Practice Outcome

After completing this practice, you will be able to:

-   Write tests for invalid inputs
    
-   Handle thrown exceptions safely
    
-   Identify and test edge cases
    
-   Build more reliable unit tests
    
