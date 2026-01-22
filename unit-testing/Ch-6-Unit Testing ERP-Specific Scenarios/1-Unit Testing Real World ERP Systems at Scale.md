## Why Business Rules Must Always be Unit Tested

ERP systems exist to enforce rules. Pricing, approvals, discounts, limits, and permissions define how the business operates. If these rules fail, the system may still run, but the business will be wrong.

Business rules are pure logic. They do not require databases, APIs, or UI screens to be tested. This makes them ideal candidates for unit testing.

A good unit test answers one clear question: given this input, is the rule applied correctly?

## A Realistic ERP Business Rule

Consider the following rule:

A sales order can be approved only if the total amount is within the approver’s authorization limit.

This rule depends only on numbers and roles. It does not care where the order came from or how it will be stored.

That makes it a perfect unit.

## Production Code Example

```ts
class ApprovalPolicy {
  canApproveOrder(orderTotal: number, approvalLimit: number): boolean {
    return orderTotal <= approvalLimit;
  }
}
```

This class contains a single business rule. There are no side effects and no infrastructure concerns.



## A Correct Unit Test

```ts
describe("ApprovalPolicy", () => {
  it("rejects order when total exceeds approval limit", () => {
    const policy = new ApprovalPolicy();
    const result = policy.canApproveOrder(150000, 100000);
    expect(result).toBe(false);
  });
  it("approves order when total is within approval limit", () => {
    const policy = new ApprovalPolicy();
    const result = policy.canApproveOrder(75000, 100000);
    expect(result).toBe(true);
  });
});
```

Each test validates one outcome. There is no database, no mock server, and no setup complexity. If a test fails, the rule is wrong.


## Testing Validations as Business Rules

Validations are also business logic. They are not UI concerns.

Consider this rule:

An invoice date cannot be in the future.


## Production Code

```ts
class InvoiceValidator {
  isInvoiceDateValid(invoiceDate: Date, today: Date): boolean {
    return invoiceDate <= today;
  }
}
```


## Unit Test

```ts
describe("InvoiceValidator", () => {
  it("rejects invoice with future date", () => {
    const validator = new InvoiceValidator();
    const today = new Date("2026-01-20");
    const futureDate = new Date("2026-02-01");
    const result = validator.isInvoiceDateValid(futureDate, today);
    expect(result).toBe(false);
  });
});
```

The test controls time explicitly. Nothing external interferes. The rule is clear and verifiable.


## Authorization Rules are Business Logic Too

Authorization is not just a security concern. It is a business rule.

Consider this rule:

Only finance managers can cancel posted invoices.


## Production Code

```ts
type UserRole = "Clerk" | "Manager" | "FinanceManager";
class AuthorizationPolicy {
  canCancelInvoice(role: UserRole, isPosted: boolean): boolean {
    return role === "FinanceManager" && isPosted;
  }
}
```


## Unit Test

```ts
describe("AuthorizationPolicy", () => {
  it("prevents non finance users from canceling posted invoices", () => {
    const policy = new AuthorizationPolicy();
    const result = policy.canCancelInvoice("Manager", true);
    expect(result).toBe(false);
  });
});
```

This test protects a critical ERP control. If it fails, the system allows incorrect behavior.


## Breaking Complex ERP Flows into Units

Real ERP workflows are long, but they are built from small rules.

Order processing may involve pricing rules, discount eligibility, approval checks, and authorization logic. Each of these must be extracted into its own unit and tested independently.

When each rule is correct, the overall flow becomes reliable.


## What Not to Test in This Lesson

This lesson does not test screens, database writes, or API calls. Those belong to integration or system tests.

Here, the goal is to ensure that every rule that decides something is tested in isolation.
If it contains a condition, a calculation, or a decision, it must have a unit test.


## Key Takeaway

ERP systems fail silently when business rules are wrong.

Unit tests are the first and strongest line of defense.

Test rules, validations, and authorizations as pure logic.  
Keep tests simple and focused.  
If logic exists, it must be unit tested.

In the next lesson, we will focus on testing calculations involving money, precision, and rounding, where ERP systems commonly break at scale.


