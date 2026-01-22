By the end of this lesson, you will be able to:

-   Recognize common mocking mistakes in unit tests    
-   Understand how bad mocks hide broken ERP business rules   
-   Write tests that validate **business behavior**, not implementation    
-   Build tests that remain stable during refactoring
  

## Mocking Business Logic (The Most Serious Smell)

### ERP Scenario

> “A sales order can be approved only if margin is above the minimum threshold.”

### Production Business Rule

```ts
class Approve {
 canApproveOrder(margin: number, minMargin: number): boolean {
  return margin >= minMargin;
}
}
```

### ❌ Smelly Test

```ts
it("approves order", () => {
  const service: any = {};
  service.canApproveOrder = jest.fn().mockReturnValue(true);
  expect(service.canApproveOrder(10, 20)).toBe(true);
});
```

### Why This is Wrong

-   The business rule is never executed    
-   The test passes even if the real logic is incorrect    
-   This creates false confidence
  
You are testing the mock, not the rule.

### ✅ Correct Test

```ts
it("rejects order when margin is below minimum", () => {
  const result = canApproveOrder(10, 20);
  expect(result).toBe(false);
});
```

**Key Rule:**  
If you mock it, you are no longer testing it.



## Over-Mocking ERP Dependencies

### ERP Scenario

> “Posting an invoice updates ledger, stock, and audit log.”

### ❌ Over-Mocked Test

```ts
const ledger = { update: jest.fn() };
const stock = { update: jest.fn() };
const audit = { log: jest.fn() };
const service = new InvoicePostingService(ledger, stock, audit);
service.post(invoice);
expect(ledger.update).toHaveBeenCalled();
expect(stock.update).toHaveBeenCalled();
expect(audit.log).toHaveBeenCalled();
```

### Why This is a Smell

-   Test is tightly coupled to internal workflow
    
-   Any refactor breaks the test
    
-   Business intent is unclear
    

The test checks **how** the system works, not **what must be true**.

### Better Way to Think

Ask:

> “What business outcome actually matters here?”

Often, asserting the **final state or result** is enough.



## Mocking Internal Implementation Details

### ERP Scenario

> “Customer credit is checked before confirming an order.”

### ❌ Smelly Test

```ts
expect(creditService.checkLimit).toHaveBeenCalled();
```

### Why This is Dangerous

This test fails when:
-   Method names change    
-   Logic is reorganized   
-   Implementation improves
    

Even though the business rule still holds.

### ✅ Better Test

```ts
expect(canConfirmOrder(customer)).toBe(false);
```

Test the **decision**, not the internal call.



## Interaction-Only Tests with No Business Meaning

### ERP Scenario

> “An email is sent when a purchase order is approved.”

### ❌ Weak Test

```ts
expect(emailService.send).toHaveBeenCalled();
```

### Why This is Incomplete

This test does not explain:

-   Why the email was sent    
-   Under what condition it was sent
    

### ✅ Stronger Test

```ts
it("sends approval email when purchase order is approved", () => {
  approvePurchaseOrder(po);
  expect(emailService.send).toHaveBeenCalled();
});
```

Here, the interaction is tied to a **clear ERP rule**, not just a call.



## Fragile Tests That Break During Refactoring

### ERP Scenario

> “Invoice posting logic is refactored for performance.”

### Smell Indicators

-   Tests fail after renaming methods  
-   Tests assert multiple internal calls    
-   Small refactors cause many failures
    

### Root Cause

Mocks are bound to **implementation**, not **behavior**.

### Healthy Sign

If you can refactor internal logic and tests still pass,  your mocking strategy is correct.



## Mental Checklist for Mocking Quality

Before accepting a mocked test, ask yourself:

-   Am I mocking a business rule?    
-   Am I asserting calls instead of outcomes? 
-   Will this test survive refactoring?   
-   Does this test clearly explain an ERP rule?

If the answer feels uncomfortable, the mock is probably wrong.

## Key Takeaway

Mocks are powerful  -  and dangerous.
In ERP systems, **bad mocks hide broken business rules** and create false confidence.
A healthy unit test:
-   Mocks infrastructure, not logic    
-   Protects business intent    
-   Survives refactoring
    
