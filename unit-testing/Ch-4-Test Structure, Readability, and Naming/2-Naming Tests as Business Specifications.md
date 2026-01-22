In the previous lesson, you learned how **structure** makes a unit test readable.  
Now we move one level deeper.

Even a well-structured test can still fail at one critical point:

> “I understand the code… but I don’t know *what business rule this test represents*.”

This lesson focuses on **test naming** - not as a technical detail, but as a way to turn tests into **business specifications**.

## Why Test Names Matter More Than You Think

In real projects, people rarely open test bodies first.

They scan:
- Test file names
- `describe` blocks
- `it` statements

From these names alone, they decide:
- What the system guarantees
- What behaviors are protected
- What can safely be changed

If test names are vague, misleading, or technical, the tests lose their most valuable role:  
**explaining business behavior at a glance**.


## How Tests are Read in the Real World

A developer usually encounters tests like this:

```ts
UserDiscountPolicy
  ✓ test1
  ✓ test2
  ✓ edgeCase
```

Nothing here explains _why_ these tests exist.

Now compare that with:

```ts
User Discount Policy
  ✓ applies loyalty discount for returning customers
  ✓ blocks discount when account is inactive
  ✓ does not exceed maximum allowed discount
```

Without reading a single line of code, the second version already tells a story.


## A Simple Business Rule

Let’s introduce a new scenario.

A customer may receive a discount **only if**:

-   The customer is active    
-   The discount does not exceed the allowed maximum
    

Here is a minimal business policy:

```ts
class DiscountPolicy {
  applyDiscount(
    originalPrice: number,
    discountPercentage: number,
    isCustomerActive: boolean
  ): number {
    if (!isCustomerActive || discountPercentage > 20) {
      return originalPrice;
    }

    return originalPrice * (1 - discountPercentage / 100);
  }
}
```

The logic is straightforward.  
Now let’s look at how **naming** can either clarify or obscure this rule.


## Poor Naming: Tests That Hide Business Meaning

```ts
describe("DiscountPolicy", () => {
  it("test1", () => {
    const policy = new DiscountPolicy();
    const price = policy.applyDiscount(1000, 10, true);
    expect(price).toBe(900);
  });
});
```

This test passes. But the name tells us nothing.

A reader cannot tell:
-   Why the discount was applied    
-   Under what conditions it should work    
-   What business rule is being protected
    
The test exists, but its purpose is invisible.


## Naming Tests as Business Specifications

![Test Names](https://raw.githubusercontent.com/lmnaslimited/wedha/refs/heads/unit-testing/Media/chapter-4/lesson-02.png)

Now look at the same test, named intentionally:

```ts
describe("Customer Discount Policy", () => {
  it("applies discount for active customers within allowed limit", () => {
    // Arrange
    const policy = new DiscountPolicy();
    const originalPrice = 1000;
    const discountPercentage = 10;
    const customerIsActive = true;

    // Act
    const finalPrice = policy.applyDiscount(
      originalPrice,
      discountPercentage,
      customerIsActive
    );

    // Assert
    expect(finalPrice).toBe(900);
  });
});
```

Even without reading the test body, the rule is clear:

> “Active customers get a discount, as long as it’s within limits.”

This is no longer just a test.  
It is a **written business promise**.


## Good Names Describe Behavior, Not Mechanics

A common beginner mistake is naming tests after:

-   Method name    
-   Input values
-   Technical operations
    

For example:

```ts
it("applyDiscount returns value", () => {});
```

This tells us _how_ the code works, not _why_ it exists.

A better name focuses on behavior:

```ts
it("does not apply discount when customer account is inactive", () => {});
```

This describes a real business decision.



## One Name, One Rule

Each test name should describe **exactly one rule**.

Avoid names that bundle multiple ideas:

```ts
it("handles discounts correctly", () => {});
```

Instead, be specific:

```ts
it("blocks discount when customer is inactive", () => {});
```

Specific names make failures meaningful.  
When a test fails, the failure message should already explain what broke.



## A Simple Naming Check

Before finalizing a test name, ask yourself:

> “If this test fails in production,  
> will the name clearly explain what business rule is broken?”

If the answer is no, rename it.



## Key Takeaway

Good test names turn unit tests into **living business documentation**.

When tests are named well:

-   You understand behavior without reading code    
-   Failures point directly to broken rules    
-   Refactoring becomes safer    
-   Business intent stays visible over time
    

Structure helps tests read well.  
**Naming makes tests speak clearly.**

In the next lesson, we’ll look at how to keep tests readable _as they grow_ -   
by avoiding duplication and noisy setup without losing clarity.


