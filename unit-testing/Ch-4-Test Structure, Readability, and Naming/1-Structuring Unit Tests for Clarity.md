Until now, you’ve focused on *what* to unit test and *how* to write tests that pass.  
At this stage, a new realization usually appears:

> “My tests pass… but they are hard to read.

This is not a minor problem.  In business software, **tests are read far more often than they are written** - by teammates, reviewers, and even your future self.
This lesson is about structuring unit tests so they **explain business behavior clearly**, not just confirm that code returns the right value.


## Why Structure Matters More Than Correctness Alone

Consider a simple business decision:  
**whether an invoice is allowed to be posted.**

If a test mixes setup values, method calls, and assertions without structure, the reader is forced to decode the intent mentally.  
The test may be correct, but its meaning is hidden.

In business software, a good test should immediately answer three questions:

- What business situation exists?
- What decision is being made?
- What outcome is expected?

If a test fails to communicate these clearly, it increases maintenance cost and reduces confidence - even if it passes.

## How Humans Naturally Think About Rules

People do not think in method calls.  
They think in situations and outcomes.

> “Given this situation,  
> when this action happens,  
> then this result should occur.”

Well-structured unit tests mirror this thinking.  
They move through three clear phases:

**Prepare the situation → Perform the action → Verify the outcome**

This flow is sometimes called *Arrange–Act–Assert*, but the name is not important.  
What matters is that the test reads like a small story.



## A Simple Business Rule

Let’s start with a very small rule.An invoice should not be posted if its amount exceeds the approval limit.The business logic might look like this:

```ts
class InvoicePostingPolicy {
  canPostInvoice(amount: number, approvalLimit: number): boolean {
    return amount <= approvalLimit;
  }
}
```

The code is simple.  
Now the question is: **does the test clearly explain the rule?**

## When Structure is Ignored

Here is a test that technically works:

```ts
it("test1", () => {
  const p = new InvoicePostingPolicy();
  const result = p.canPostInvoice(120000, 100000);
  expect(result).toBe(false);
});
```

At first glance, nothing is “wrong.”  But the intent is hidden.
- The test name says nothing about business behavior.  
- The numbers appear without meaning. 
-  Setup, execution, and verification are blended together.

A reader must reverse-engineer the rule from the code.This kind of test **passes silently but teaches nothing**.

## Structuring the Same Test for Clarity

![Structure of Test](https://raw.githubusercontent.com/lmnaslimited/wedha/refs/heads/unit-testing/Media/chapter-4/lesson-1.png)

Now look at the same rule, structured deliberately:

```ts
describe("Invoice Posting Policy", () => {
  it("blocks invoice posting when amount exceeds approval limit", () => {
    // Arrange: prepare the business situation
    const policy = new InvoicePostingPolicy();
    const invoiceAmount = 120000;
    const approvalLimit = 100000;

    // Act: apply the business decision
    const canPost = policy.canPostInvoice(
      invoiceAmount,
      approvalLimit
    );

    // Assert: verify the expected outcome
    expect(canPost).toBe(false);
  });
});
```

Nothing about the logic changed.  
Only the **structure and language** did.

Now the test reads naturally:

> “When an invoice exceeds the approval limit, posting is blocked.”

This test does more than verify code - it documents behavior.



## Why One Test Should Tell One Story

Sometimes beginners try to compress multiple cases into one test:

```ts
it("invoice", () => {
  const policy = new InvoicePostingPolicy();
  expect(policy.canPostInvoice(50000, 100000)).toBe(true);
  expect(policy.canPostInvoice(150000, 100000)).toBe(false);
});
```

This saves lines, but loses meaning.

When this test fails, you don’t immediately know _which business rule broke_.  
Each expectation represents a different scenario, yet they share one unclear name.

A well-structured unit test tells **one business story at a time**.


## The Mental Pattern to Remember

Every clear unit test follows the same invisible structure:

```
Given a business situation  
When a decision is made  
Then an outcome is expected
```

In code, this becomes:

```ts
// Arrange
// Act
// Assert
```

This is not a testing trick.  It is a **thinking discipline** that keeps business intent visible.



## Key Takeaway

A well-structured unit test is not just a safety net.  It is readable documentation of how the system behaves.

When tests are structured clearly:

-   Business rules are obvious 
-   Failures are easy to diagnose    
-   Refactoring feels safer   
-   Code earns trust
    

Before learning advanced tools or patterns, master this first:
**Write tests that humans can understand at a glance.**



