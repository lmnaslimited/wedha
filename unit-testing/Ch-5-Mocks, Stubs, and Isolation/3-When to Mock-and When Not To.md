After learning about mocks, stubs, and fakes, many developers reach a dangerous conclusion:

> “If isolation is important, I should mock everything.”

Tests written with this mindset may still pass, but they slowly lose value.
They become tightly coupled to implementation details, fragile during refactoring, and difficult to understand.

At that point, tests stop protecting business behavior.
They only protect how the code happens to be written today.

This lesson teaches **judgment**, not mechanics.

## The One Question That Prevents Over-Mocking

Before mocking anything, ask a single question:

> **Is this dependency part of the business rule I am testing?**

If the dependency **defines the rule**, it must remain real.  
If the dependency is **outside the rule**, replacing it may be necessary to keep isolation.

Most mocking mistakes happen because this question is never asked.

## What Should Never be Mocked

Business logic must never be mocked.

Calculations, validations, and decision rules exist specifically to be tested.
If they are replaced, the test no longer proves anything.

```ts
// Wrong: mocking the rule itself
jest.spyOn(policy, "canPostInvoice").mockReturnValue(true);
```

This test will always pass.  It does not verify correctness.  It only verifies that Jest works.

Simple data should also remain real.  Plain objects and value holders are cheap, readable, and safe to use directly.Mocking the unit under test itself is another common mistake.  If the unit is mocked, the test has no purpose.



## What Should be Mocked

Infrastructure belongs outside unit tests.

Databases, APIs, email services, file systems, and system clocks are not business rules.  
They are delivery mechanisms.Replacing them keeps tests fast, repeatable, and trustworthy.
Some rules are also interaction-based rather than output-based.

 In these cases, the business rule is not a return value but an action.

For example:

> “An email must be sent when an order is approved.”

Here, verifying the interaction is the rule itself.

```ts
expect(emailService.send).toHaveBeenCalled();
```

In such cases, mocking is not only acceptable  -  it is necessary.


## ERP Example: Correct Use of a Mock

### Business Rule

> “An order is approved only if payment succeeds.”

### Production Code

```ts
class OrderApprovalService {
  constructor(private paymentGateway: PaymentGateway) {}
  approve(order: { amount: number }): boolean {
    return this.paymentGateway.charge(order.amount);
  }
}
```

The payment gateway is external.  It may fail for reasons unrelated to business logic.  It must not run inside a unit test.

### A Well-Judged Unit Test

```ts
it("rejects order when payment fails", () => {
  const paymentGateway = {
    charge: jest.fn().mockReturnValue(false)
  };
  const service = new OrderApprovalService(paymentGateway as any);
  const approved = service.approve({ amount: 1000 });
  expect(approved).toBe(false);
});
```

This test keeps the business rule clear,  replaces infrastructure,  and avoids asserting internal implementation details.

If this test fails, the rule is wrong  -  not the environment.

## How to Recognize Over-Mocking

Over-mocking often reveals itself indirectly.

If small refactors break many tests, mocking has likely gone too far.  
If tests assert internal calls that have no clear business meaning, intent has been lost.  
If tests are harder to read than the production code, something is wrong.

Mocks should clarify rules, not obscure them.


## The Rule to Remember

Mock boundaries, not behavior. Test what defines the rule.  Replace what lies outside it.


## Key Takeaway

Mocks are not a default choice.  They are a deliberate one.
A good unit test mocks as little as possible,  but as much as necessary - nothing more.
In the next lesson, we will examine **common mocking mistakes and smells**  and learn how to spot tests that look correct but silently rot over time.

