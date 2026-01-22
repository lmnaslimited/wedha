By now, you know how to:
- Structure tests for clarity
- Name tests as business specifications

At this stage, teams usually hit another problem:

> “Our tests are readable… but they are getting long and repetitive.”

This lesson teaches you how to **remove duplication and setup noise without hiding business meaning**.


## What Setup Noise Really is

Setup noise is not just “extra code”.  
It is **anything that distracts the reader from the business rule being tested**.

Consider what a reader wants to see first in a test:

> “What rule is being validated here?”

If they must scroll past many lines of setup to answer that question, the test has too much noise.

## A New Business Scenario

Let’s use a **Purchase Order approval rule**.

**Business rules:**
- A purchase order can be approved only if the requester is active
- The amount must be within the approval limit

### Business Logic

```ts
class PurchaseOrderApprovalPolicy {
  canApprove(
    amount: number,
    approvalLimit: number,
    isRequesterActive: boolean
  ): boolean {
    if (!isRequesterActive) return false;
    return amount <= approvalLimit;
  }
}
```

Simple logic. Now let’s see how duplication slowly makes tests painful.

## The Problem: Repeated Setup Everywhere

```ts
describe("Purchase Order Approval Policy", () => {
  it("approves purchase order within limit for active requester", () => {
    const policy = new PurchaseOrderApprovalPolicy();
    const amount = 50000;
    const approvalLimit = 100000;
    const isRequesterActive = true;
    const result = policy.canApprove(
      amount,
      approvalLimit,
      isRequesterActive
    );
    expect(result).toBe(true);
  });
  it("blocks approval when amount exceeds limit", () => {
    const policy = new PurchaseOrderApprovalPolicy();
    const amount = 150000;
    const approvalLimit = 100000;
    const isRequesterActive = true;
    const result = policy.canApprove(
      amount,
      approvalLimit,
      isRequesterActive
    );
    expect(result).toBe(false);
  });
});
```
These tests are **correct** and **readable**.  But notice what’s repeating:
-   Policy creation    
-   Approval limit   
-   Active requester flag    
-   Call structure  

As more cases are added, the noise grows faster than the rules.

## Why Duplication is Dangerous

Duplication causes two long-term problems:

1.  **Business rules get buried**  
    The actual difference between tests becomes hard to spot.
    
2.  **Changes become risky**  
    If setup changes, many tests must be edited, increasing mistakes.
    

The goal is **not to remove setup**, but to **push it out of the spotlight**.


## Reducing Noise Without Hiding Meaning

The safest first step is **shared setup that does not change the business story**.

```ts
describe("Purchase Order Approval Policy", () => {
  let policy: PurchaseOrderApprovalPolicy;
  let approvalLimit: number;
  let isRequesterActive: boolean;
  beforeEach(() => {
    policy = new PurchaseOrderApprovalPolicy();
    approvalLimit = 100000;
    isRequesterActive = true;
  });
  it("approves purchase order within limit for active requester", () => {
    const amount = 50000;

    const result = policy.canApprove(
      amount,
      approvalLimit,
      isRequesterActive
    );
    expect(result).toBe(true);
  });
  it("blocks approval when amount exceeds limit", () => {
    const amount = 150000;

    const result = policy.canApprove(
      amount,
      approvalLimit,
      isRequesterActive
    );
    expect(result).toBe(false);
  });
});
```

Now the tests immediately show **what changes per rule**:

-   Only the `amount`    
The business intent is clearer because the noise is gone.


## When Setup Becomes Too Clever

A common mistake is over-abstracting setup:

```ts
function createValidPolicyScenario() {
  return new PurchaseOrderApprovalPolicy();
}
```

Used like this:

```ts
it("works", () => {
  const policy = createValidPolicyScenario();
});
```
This hides more than it helps. If a reader must jump to another file to understand the test,  
**clarity is already lost**.


## A Simple Rule to Follow

Remove duplication **only when**:

-   The duplicated code does not explain the rule    
-   The shared setup applies to most tests    
-   The test body still reads like a business scenario
    

Never remove duplication if it hides **why the test exists**.


## What a Clean Test Should Highlight

When setup noise is controlled, each test highlights:

-   The condition that changes 
-   The decision being made   
-   The expected outcome
    
Everything else fades into the background.


## Key Takeaway

Avoiding duplication is not about shorter tests.  
It is about **keeping business rules visible**.

Good tests:

-   Share setup carefully    
-   Keep differences obvious    
-   Avoid clever abstractions   
-   Make rules easy to spot
   
Once duplication and noise are under control, tests stay readable even as systems grow.
In the next lesson, we’ll focus on **keeping tests maintainable over time** -   
how today’s clean tests don’t turn into tomorrow’s mess.
