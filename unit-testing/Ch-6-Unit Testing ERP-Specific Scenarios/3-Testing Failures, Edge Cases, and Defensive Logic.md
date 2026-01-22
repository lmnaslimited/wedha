## Lesson 3: Testing Failures, Edge Cases, and Defensive Logic

## Why Failure Testing Matters in ERP Systems

ERP systems deal with money, inventory, compliance, and approvals. When failures are not tested, systems behave unpredictably under pressure. Silent failures, incorrect approvals, or partial updates cause more damage than visible errors.  

A correct unit test suite proves not only that logic works, but also that it fails correctly.

## Testing Invalid Input Handling

  

Consider this business rule: An invoice cannot be posted if the amount is zero or negative.

  ## Production Code

```ts
class InvoicePolicy {
canPostInvoice(amount: number): boolean {
if (amount <= 0) {
throw new Error("Invalid invoice amount");
}
return true;
}
}
```


This logic explicitly rejects invalid input. The failure path is part of the business rule and must be tested.

## Unit Test

```ts
describe("InvoicePolicy", () => {
it("throws error for zero or negative invoice amount", () => {
const policy = new InvoicePolicy();
expect(() => policy.canPostInvoice(0)).toThrow(
"Invalid invoice amount"
);
});
});
```  

This test proves that invalid data is rejected immediately and clearly.



## Testing Missing Required Data

Consider this rule:

An order cannot be confirmed if the customer is missing.

## Production Code

```ts
class OrderConfirmationPolicy {
canConfirmOrder(customer: { id: string } | null): boolean {
if (!customer) {
return false;
}
return true;
}
}
```

## Unit Test
```ts
describe("OrderConfirmationPolicy", () => {
it("rejects order when customer is missing", () => {
const policy = new OrderConfirmationPolicy();
const result = policy.canConfirmOrder(null);
expect(result).toBe(false);
});
});
```

The test validates defensive logic that protects the system from incomplete data.


## Testing Boundary Conditions

Consider this business rule:

A discount is allowed only when the quantity is greater than or equal to the minimum threshold.
## Production Code

```ts
class DiscountPolicy {
isDiscountAllowed(quantity: number, minQuantity: number): boolean {
return quantity >= minQuantity;
}
}
```


## Unit Test
```ts
describe("DiscountPolicy", () => {
it("allows discount exactly at the minimum quantity", () => {
const policy = new DiscountPolicy();
const result = policy.isDiscountAllowed(10, 10);
expect(result).toBe(true);
});
});
```
  
Boundary tests protect logic where off by one errors usually occur.

## Testing Unexpected Conditions Explicitly

Consider this rule: Stock cannot be reserved if available quantity is undefined.



## Production Code
```ts
class StockPolicy {
canReserve(quantity: number | undefined): boolean {
if (quantity === undefined) {
return false;
}
return quantity > 0;
}
}
```  

## Unit Test
```ts
describe("StockPolicy", () => {
it("rejects reservation when stock quantity is undefined", () => {
const policy = new StockPolicy();
const result = policy.canReserve(undefined);
expect(result).toBe(false);
});
});
```
  

This test ensures the system fails safely when data is incomplete or corrupted.



## Testing Error Messages and Signals

In ERP systems, failures must be clear. A failure that hides its reason is more dangerous than a visible error.

When logic throws errors, the error message itself is part of the contract and should be tested.


## Production Code

```ts
class PaymentPolicy {
processPayment(amount: number): void {
if (amount > 100000) {
throw new Error("Payment limit exceeded");
}
}
}
```
 

## Unit Test

```ts
describe("PaymentPolicy", () => {
it("throws clear error when payment exceeds limit", () => {
const policy = new PaymentPolicy();
expect(() => policy.processPayment(150000)).toThrow(
"Payment limit exceeded"
);
});
});
```
  

## What Defensive Unit Tests Give You

Defensive tests ensure that invalid states are rejected early.  
They make failures predictable.  
They protect downstream systems.  
They document how the system behaves under stress.

In ERP systems, defensive behavior is not optional. It is a requirement.

## Key Takeaway

Every failure path is a business rule.  
Invalid inputs must be tested.  
Boundary values must be tested.  
Unexpected conditions must be tested.

If logic can fail, that failure must have a unit test.

In the next lesson, we will focus on testing ERP workflows at scale and ensuring that large rule sets remain testable and maintainable over time.


