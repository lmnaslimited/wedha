Up to this point, you have learned how to identify business logic and write unit tests around it.  
Now we address a problem that almost every beginner faces:

> “My tests pass sometimes, fail sometimes, and I don’t know why.”

This lesson explains **why that happens** and introduces the most important idea in unit testing:

**Isolation.**

## The Core Problem This Lesson Solves

Many tests look like unit tests but behave like something else.

They may pass on a developer’s machine, fail in CI, or break when unrelated code changes.  
When this happens, teams lose confidence in tests and stop relying on them.

The root cause is almost always the same:

> The test is not isolated.

Before learning mocks or stubs, you must clearly understand **what isolation means and why it matters**.


## What Isolation Actually Means

Isolation means that a unit test executes **one unit of business logic and nothing else**.

In an isolated unit test, the flow is always:

```
Input → Business Logic → Output
```

No database calls, no APIs, no system clock, no external services.  
If anything outside that flow runs, the test is no longer a unit test.

## A Realistic ERP Business Rule

Consider this ERP rule:

> A sales order can be confirmed only if the customer is active.

This rule does not care about how the customer was loaded or where the data came from.  
It only cares about one thing:

**Is the customer active?**

That single decision is the **unit** we want to test.


## Business Logic (The Unit Under Test)

```ts
class OrderService {
  canConfirmOrder(customer: { status: string }): boolean {
    return customer.status === "Active";
  }
}
```

This class has one responsibility.  
Given customer data, it decides whether an order can be confirmed.

## A Non-Isolated Test (The Common Mistake)

```ts
it("confirms order for customer", () => {
  const service = new OrderService();
  const customer = database.getCustomer("CUST-001"); // external dependency
  const result = service.canConfirmOrder(customer);
  expect(result).toBe(true);
});
```

This test may look fine, but it is fragile.

It depends on database availability, database state, and existing customer data.  
If the database is down or the customer record changes, the test fails  -  even if the business logic is correct.

This is not unit testing.  
This is accidental integration testing.


## The Same Test, Properly Isolated

```ts
it("allows order confirmation for active customer", () => {
  const service = new OrderService();
  const customer = {
    status: "Active"
  };
  const result = service.canConfirmOrder(customer);
  expect(result).toBe(true);
});
```

This test answers one clear business question:

> Given an active customer, can an order be confirmed?

Nothing else interferes.  
If this test fails, the logic is wrong  -  not the environment.

## Why This is a True Unit Test

This test:

-   Focuses on one business decision
    
-   Runs fast and predictably
    
-   Produces the same result every time
    
-   Clearly documents ERP behavior
    

This is what unit testing means in real business software.

## Isolation is About Intent, Not Tools

Isolation does not mean using a mocking framework or writing complex test code.

Isolation means **intentional separation**:

-   Business logic stays inside the unit
    
-   Everything else is pushed outside
    

Mocks and stubs are only tools to achieve this separation when direct removal is not possible.

## When Manual Isolation is Not Enough

Sometimes business logic depends on time, configuration, or other services.  
You cannot simply remove these dependencies.

This is where stubs, mocks, and fakes come in.  
They allow isolation **without changing the business meaning of the test**.

We will introduce them step by step in the next lessons.

## The Mental Model for This Chapter

Every example in this chapter follows one rule:

```
Given a business situation  
When a decision is made  
Then an outcome is expected  
```

And one restriction:

Nothing outside the unit is allowed to run.

## Key Takeaway

Unit testing is not about proving that code runs.  
It is about proving **business rules in isolation**.

When isolation is respected:

-   Tests become reliable    
-   Failures become meaningful    
-   Code becomes safer to change
    

Everything else in this chapter builds on this foundation.



