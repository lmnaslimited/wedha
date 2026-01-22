## 1. Why Writing Tests is Not Enough

By now, you know how to write and run unit tests.  
But many teams still write tests that **pass** and yet fail to protect the business.

The reason is simple:
They write tests like developers - not like testers.

Writing a unit test is a technical skill.  
**Thinking like a tester is a mindset.**

This lesson is about developing that mindset.


## 2. Developers Think in “Happy Paths”

When developers write code, they usually think like this:
- What input should the user give?
- What result should the system return?
- How do I make this work?

This leads to **happy-path thinking**.

Example:
> Stock is available → order gets approved

If you write only one test for this scenario, your test will pass - but your system is still fragile.

Happy paths show that the system *can work*.  
They do not show that the system is *safe*.


## 3. Testers Think in “What Can Go Wrong”

A tester starts from a different place:
- What assumptions does this logic make?
- What inputs might break it?
- Where could business rules be violated silently?

Using the same ERP rule:

> An order should not be approved if stock is insufficient

A tester immediately asks:
- What if stock is exactly equal to required quantity?
- What if stock is zero?
- What if stock is negative due to a data issue?
- What if the requested quantity is zero?
- What if someone changes this logic later?

These questions define **what needs testing**.


## 4. Turning Business Risk into Test Cases

A good tester does not test code behavior randomly.  
They test **business risk**.

In ERP systems, risk usually comes from:
- Boundary values (minimum, maximum, exact matches)
- Invalid or unexpected data
- Changes made by future developers
- Assumptions that are not enforced in code

For the order approval rule, meaningful tests include:
- Approve when stock is sufficient
- Reject when stock is insufficient
- Reject when stock is zero
- Reject when requested quantity is negative
- Reject when stock data is invalid

Each test represents a **business protection**, not just a technical check.

## 5. One Rule, Multiple Tests

Beginners often ask:
> “Why do I need so many tests for one function?”

Because a single business rule can fail in many ways.

One rule:
> “Approve order only if stock is sufficient”

Multiple risks: Wrong comparison operator, Incorrect handling of edge values, Assumptions about data validity, and  Future refactoring mistakes

Each test locks one risk in place.
This is how small unit tests prevent large ERP failures.


## 6. Naming Tests Like a Tester

Thinking like a tester also changes how you name tests.

Bad test name:

```ts
test("canApproveOrder works")
```

Good test name:
```ts
test("order is rejected when requested quantity exceeds available stock")
```

A good test name:
- Describes the business situation
- Explains the expected behavior
- Makes failures easy to understand

If a test fails, the name should already tell you **what broke**.

## 7. Tests as Living Documentation

When written with a tester’s mindset, unit tests become Executable business rules, Living documentation and Safety nets for future changes.

A new developer can read the tests and understand:
- What decisions the system makes
- What scenarios matter
- What must never break

This is especially important in long-lived ERP systems.


## 8. What Changes When You Think Like a Tester

When you adopt this mindset:
- You stop writing “just enough” tests
- You focus on risk, not coverage numbers
- You anticipate failures before they happen
- You protect business decisions, not lines of code

Your tests become fewer - but far more valuable.

## Key Takeaway

 - Thinking like a tester means Questioning assumptions, Challenging happy paths, Protecting business risk , and Writing tests that fail for the right reasons
 - A good unit test is not written to make the code look correct.  
 - It is written to **prove the business rule cannot break silently**.
