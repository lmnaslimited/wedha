## Objective

Write a unit test that validates a **core ERP business rule** and run it using a unit testing framework.  
By the end of this exercise, you will understand how unit tests protect **business decisions**, not screens or workflows.


## ERP Case Study: Preventing Duplicate Customer Creation

In an ERP system, customer records must be unique.  
A common business rule is:

> A customer cannot be created if another customer already exists with the same email address.

If this rule fails:

-   Duplicate customers appear
    
-   Invoices and payments get split incorrectly
    
-   Reporting and compliance are affected
    

Your goal is to protect this rule using a **unit test**.

## Steps to Follow

### Step 1: Identify the Business Rule

Write the rule in plain language:

> “If a customer with the given email already exists, the system must reject the creation request.”

This rule does **not** depend on UI, API, or database screens.  
It is pure business logic.


### Step 2: Create the Business Logic Function

Create a simple function that checks whether a customer can be created.

Example (simplified logic):

```ts
function fnCanCreateCustomer(iExistingEmails: string[], iNewEmail: string): boolean {
  return !iExistingEmails.includes(iNewEmail);
}
```

This function represents ERP validation logic.


### Step 3: Create a Unit Test File

Create a test file in your test directory:

```
tests/customerCreation.test.ts
```

### Step 4: Write Unit Tests for the Rule

Write unit tests that cover real business scenarios:

```ts
test('Allows customer creation when email is unique', () => {
  const LaExistingEmails = ['a@erp.com', 'b@erp.com'];
  expect(fnCanCreateCustomer(LaExistingEmails, 'c@erp.com')).toBe(true);
});
test('Blocks customer creation when email already exists', () => {
  const LaExistingEmails = ['a@erp.com', 'b@erp.com'];
  expect(fnCanCreateCustomer(LaExistingEmails, 'a@erp.com')).toBe(false);
});
```

Each test:

-   Represents a real ERP decision
    
-   Protects a business rule
    
-   Fails clearly if the rule is broken
    

### Step 5: Run the Unit Tests

Run the unit tests using your test command:

```
npm test
```

Verify that:

-   All tests pass when logic is correct
    
-   Tests fail immediately if the rule is violated


## Expected Outcome

After completing this exercise, you should be able to:

-   Convert a real ERP rule into a unit test
    
-   Write tests that validate business decisions
    
-   Run unit tests confidently without UI or database dependency
    
-   Understand how unit tests prevent silent business failures
    

## Key Takeaway

 - Unit tests exist to protect **business logic**, not user interfaces.  
 - When critical ERP rules are covered by unit tests, small code changes cannot silently break the system.
