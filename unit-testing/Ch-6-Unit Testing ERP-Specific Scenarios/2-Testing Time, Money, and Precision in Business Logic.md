## Why Time and Money are Risky in ERP Systems

Money calculations suffer from floating point precision issues.
Time based rules fail when system time changes.
Date logic breaks across time zones and fiscal boundaries.

If these are not tested correctly, tests may pass today and fail tomorrow without any code change. A good unit test must be stable and predictable.

## Testing Money Calculations Safely

Consider this business rule:
An invoice total must include tax rounded to two decimal places.

## Production Code

```ts
class InvoiceCalculator {
  calculateTotal(amount: number, taxRate: number): number {
    const tax = amount * taxRate;
    return Math.round((amount + tax) * 100) / 100;
  }
}
```

This logic performs a monetary calculation and rounding. This must be tested explicitly.


## Unit Test

```ts
describe("InvoiceCalculator", () => {
  it("calculates total with tax rounded to two decimals", () => {
    const calculator = new InvoiceCalculator();
    const total = calculator.calculateTotal(999.99, 0.18);
    expect(total).toBe(1179.99);
  });
});
```

The test asserts the exact expected value. If rounding logic changes or breaks, the test will immediately fail.

## Avoiding Floating Point Traps

Never rely on implicit floating point equality without rounding logic in production code.

If rounding rules exist in the business, they must exist in the code and be tested as rules.

## Testing Time Based Business Rules

Consider this rule: An order cannot be posted after the daily cutoff time.

## Production Code

```ts
class CutoffPolicy {
  canPostOrder(currentTime: Date, cutoffHour: number): boolean {
    return currentTime.getHours() < cutoffHour;
  }
}
```

This logic depends on time, but it must not depend on the system clock during tests.


## Unit Test

```ts
describe("CutoffPolicy", () => {
  it("rejects order after cutoff time", () => {
    const policy = new CutoffPolicy();
    const timeAfterCutoff = new Date("2026-01-20T18:30:00");
    const result = policy.canPostOrder(timeAfterCutoff, 18);
    expect(result).toBe(false);
  });
});
```

The test controls time explicitly. No system clock is involved. This makes the test deterministic.


## Testing Date Based Rules

Consider this rule:

Transactions cannot be posted outside the fiscal year.

## Code

```ts
class FiscalPolicy {
  isWithinFiscalYear(date: Date, fiscalStart: Date, fiscalEnd: Date): boolean {
    return date >= fiscalStart && date <= fiscalEnd;
  }
}
```
## Unit Test

```ts
describe("FiscalPolicy", () => {
  it("rejects date outside fiscal year", () => {
    const policy = new FiscalPolicy();
    const fiscalStart = new Date("2025-04-01");
    const fiscalEnd = new Date("2026-03-31");
    const transactionDate = new Date("2026-04-01");
    const result = policy.isWithinFiscalYear(
      transactionDate,
      fiscalStart,
      fiscalEnd
    );
    expect(result).toBe(false);
  });
});
```

This test validates compliance logic. If fiscal boundaries change, the rule and test change together.


## Testing Time Zones Without Flakiness

Time zone logic must be expressed in data, not inferred from the environment.


## Code

```ts
class TimeZonePolicy {
  isSameBusinessDay(localDate: Date, utcDate: Date): boolean {
    return localDate.toDateString() === utcDate.toDateString();
  }
}
```

## Unit Test

```ts
describe("TimeZonePolicy", () => {
  it("detects different business days across time zones", () => {
    const policy = new TimeZonePolicy();
    const localDate = new Date("2026-01-20T00:30:00+05:30");
    const utcDate = new Date("2026-01-19T19:00:00Z");
    const result = policy.isSameBusinessDay(localDate, utcDate);
    expect(result).toBe(false);
  });
});
```

The test uses explicit dates and offsets. No environment assumptions are involved.


## What Makes these Tests Stable

Inputs are controlled.  
System time is never used.  
Rounding rules are explicit.  
Expected outcomes are exact.

This is how flaky ERP tests are avoided.


## Key Takeaway

Time and money logic must always be unit tested.  
Never depend on the system clock or implicit precision.  
Express rules clearly and test exact outcomes.

If a calculation, date check, or cutoff rule exists, it must have a unit test.

In the next lesson, we will focus on testing error paths and edge cases that ERP systems must handle reliably under real world pressure.

