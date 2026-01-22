In the previous lesson, you set up a clean and reliable testing environment.  
That setup is useless unless you actually write and run a real unit test.

This lesson is where theory becomes action.

You will:
- Write your **first real unit test**
- Run it using the test command
- Understand what “pass” and “fail” actually mean
- See how a test protects a business rule, not just code

This is the moment where unit testing stops being abstract.


## 1. From Business Rule to Testable Logic

Before writing any test, we start with a **business rule**, not code.

Example business rule (ERP-style):

> An order should not be approved if the requested quantity is greater than available stock.

This rule:
- Is easy to understand
- Has clear conditions
- Has a clear expected outcome

Good unit tests always begin like this.

## 2. The Code We are Testing (Simple and Isolated)

To test the rule, we need a small piece of logic that represents it.

Example function:


```ts
function fnCanApproveOrder(iRequestedQty: number, iAvailableQty: number): boolean {  
    return iRequestedQty <= iAvailableQty;  
}
```

This function:
- Has one responsibility
- Takes inputs
- Returns a result
- Does not depend on databases or APIs

This is ideal unit-testable code.


## 3. Writing Your First Unit Test

Create a new test file inside the `tests` folder:


```
tests/orderApproval.test.ts
```

Add the following test:


```ts
const { fnCanApproveOrder } = require("../src/orderApproval");
test("order is rejected when stock is insufficient", () => {  
    const LdResult = fnCanApproveOrder(10, 5);  
    expect(LdResult).toBe(false);  
});
```

What this test is doing:
- Calls the business logic with known values
- Captures the result
- Asserts the expected outcome

This is the core structure of every unit test.

## 4. Understanding the Test Structure

Every basic unit test has three clear parts:

**Arrange**  
Set up input data  

```ts
const LdResult = fnCanApproveOrder(10, 5);
```

**Act**  
Execute the logic under test  

```ts
fnCanApproveOrder(...)
```

**Assert**  
Verify the expected result  

```ts
expect(result).toBe(false);
```

If you can clearly see these three parts, your test is readable and trustworthy.

## 5. Running the Test

Run the test using the command you set up earlier:


```bash
npm test
```

You should see:
- Jest running
- Your test file detected
- The test passing

A passing test means:
- The business rule behaves as expected
- The logic is currently safe


##6. What Happens When a Test Fails?

Now, change the test slightly:


```
expect(result).toBe(true);
```

Run the tests again.

This time, the test fails.

This failure is **good**.

It means:
- The test is actually checking something
- The tool is protecting the business rule
- Wrong assumptions are caught early

Failing tests are signals, not problems.



## 7. Why This is Powerful in Real ERP Systems

In real ERP projects:
- Rules change often
- Edge cases are missed
- Regressions are expensive

A unit test like this:
- Runs in milliseconds
- Can be executed anytime
- Immediately flags broken business logic

Instead of trusting memory or manual checks, you trust tests.


## Key Takeaway

A unit test is a **business rule written as executable proof**.

If you can:
- Clearly state the rule
- Isolate the logic
- Assert the expected outcome  

You can write effective unit tests.
