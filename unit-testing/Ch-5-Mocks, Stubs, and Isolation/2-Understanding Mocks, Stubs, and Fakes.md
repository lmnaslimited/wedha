In Lesson 1, you learned one core rule of unit testing:

> A unit test must run **one piece of business logic in isolation**.

That sounds simple, but real business logic rarely lives alone.

In ERP systems, business decisions often depend on customer data, pricing rules, tax calculation, dates, or external services. You cannot always remove these dependencies from the code.
So the real question becomes:

> How do we test business logic **without letting real dependencies run**?

This is where **stubs, mocks, and fakes** come in.They are not advanced testing tricks.
They are **tools to protect isolation**.


## A Simple Mental Model

Instead of memorizing terminology, think in terms of **what role the dependency plays** in your test.

When business logic depends on something else, you usually need one of three things:

- Something that returns **fixed data**
- Something that lets you **check how it was called**
- Something that behaves like a **simplified real system**

These roles map to the common terms:

| Replacement | What it is used for |
|------------|---------------------|
| Stub       | Provide controlled data |
| Mock       | Verify interactions |
| Fake       | Simulate real behavior |

Do not treat these as rules.
They are **choices**, not requirements.

## ERP Business Scenario: Order Total Calculation

Consider this ERP rule:

> “An order total should include tax fetched from a tax service.”

### Production Code (Business Logic)

```ts
class OrderService {
  constructor(private taxService: TaxService) {}
  calculateTotal(amount: number): number {
    const tax = this.taxService.getTax(amount);
    return amount + tax;
  }
}
```

This logic is simple.  
But the dependency (`TaxService`) is not.

In production, it might:  
call an external API, use complex rules, or depend on configuration.

A unit test must **not** run any of that.

## Using a Stub: When You Only Care About Data

A stub is used when:  
you do not care _how_ something works,  
you only care _what value it returns_.

### Stub Example

```ts
class StubTaxService {
  getTax(amount: number): number {
    return 50; // fixed tax for test
  }
}
it("adds tax to order total", () => {
  const taxService = new StubTaxService();
  const service = new OrderService(taxService);
  const total = service.calculateTotal(1000);
  expect(total).toBe(1050);
});
```

Here, the test proves one business rule:  
tax is added to the order total.

The tax logic itself is irrelevant.  The stub protects isolation by keeping the data predictable.

## Using a Mock: When Interaction is the Rule

Sometimes the business rule is not about the result.  
It is about **whether something was called**.

For example:  
the system _must_ ask the tax service before calculating totals.

That is when a mock is appropriate.

### Mock Example

```ts
it("requests tax calculation when calculating order total", () => {
  const mockTaxService = {
    getTax: jest.fn().mockReturnValue(50)
  };
  const service = new OrderService(mockTaxService as any);
  service.calculateTotal(1000);
  expect(mockTaxService.getTax).toHaveBeenCalledWith(1000);
});
```

This test is not proving math.  
It is proving **behavior**.

If the interaction is removed or changed, the test should fail.

## Using a Fake: When Behavior Matters

Sometimes a stub becomes too rigid.  You need behavior, but not real infrastructure.
That is when a fake helps.

### Fake Example

```ts
class FakeTaxService {
  getTax(amount: number): number {
    if (amount > 100000) {
      return 5000;
    }
    return 100;
  }
}
```

A fake behaves like the real system,  but stays lightweight and safe for tests.
It is useful when multiple scenarios must be tested and fixed return values are not enough.


## Choosing the Right Replacement

Use the **simplest option that keeps isolation intact**.
| Situation                        | Use   |
|----------------------------------|-------|
| You only need controlled data    | Stub  |
| You need to verify interactions  | Mock  |
| You need realistic behavior      | Fake  |

If none of these are needed, **do not replace anything**.



## Common Beginner Mistakes

The most common mistake is **mocking everything**.

Over-mocking:  
ties tests to implementation details,  
breaks tests during refactoring,  
and hides real business intent.

Another mistake is testing the mock instead of the rule.

```ts
expect(mockService.getTax).toHaveBeenCalled();
```

This assertion only makes sense if  
_the call itself_ is the business requirement.

Always ask:  “What business rule does this test prove?”


## Isolation is Still the Goal

Mocks, stubs, and fakes are **not the goal**.
The goal is still:

```
Input → Business Logic → Output
```

These tools exist only to prevent databases,  
networks, and external systems from interfering with that flow.

## Key Takeaway

Unit testing is not about tools.  
It is about intent.

-   Stubs control data    
-   Mocks verify interactions   
-   Fakes simulate behavior 
-   Isolation protects trust in tests
    

In the next lesson, you will learn **when NOT to mock**  and how to recognize tests that look correct but are not true unit tests.



