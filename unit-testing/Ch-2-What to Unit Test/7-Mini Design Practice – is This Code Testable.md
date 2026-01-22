In this lesson, we will not learn new theory.  
Instead, we will **look at real ERP-style code**, understand why it is hard to unit test, and then see **how small design changes make it testable** - without changing what the system does.

Think of this lesson as learning **how to see problems in code design**, not just how to write tests.


## 1. Business Scenario (ERP Context)

An ERP system handles **employee expense reimbursements**.

Business rules are simple:
- An expense should be approved only if it is within the employee’s allowed limit
- Very high expenses must be reviewed by Finance
- Approved expenses must be saved and logged

This flow exists in almost every ERP system.


## 2. Original Code (Works in Production)

Here is a typical implementation written in TypeScript using a class.

```ts
class clExpenseApprovalService {
  approve(iexpenseId: string): boolean {
    const LdExpense = clDatabase.getExpense(iexpenseId);
    const LdEmployee = clDatabase.getEmployee(LdExpense.employeeId);
    if (LdExpense.amount > LdEmployee.limit) {
      clAudit.log("Expense exceeds limit");
      return false;
    }
    if (LdExpense.amount > 50000) {
      clNotification.sendToFinance(iexpenseId);
      return false;
    }
    clDatabase.markApproved(iexpenseId);
    clAudit.log("Expense approved");
    return true;
  }
}
```
At first glance, this looks fine.  
The ERP works.  
Expenses get approved or rejected correctly.


## 3. Why This Code is Hard to Unit Test

Let’s understand **what this class is doing** in simple terms:

-   It **fetches data** from the database 
-   It **decides** whether approval is allowed    
-   It **logs** audit information    
-   It **sends notifications**   
-   It **updates** the database
    

Everything is mixed together in one place.

Now imagine writing a unit test:

-   You need a database    
-   You need audit logging    
-   You need notification services    
-   You need real expense and employee records
    

The test becomes heavy, slow, and fragile.

The problem is **not the business rule**.  
The problem is that **decision-making is trapped inside infrastructure code**.


## 4. The Goal of Refactoring (Very Important)

Refactoring does **not** mean:

-   Changing the business behavior    
-   Rewriting the ERP flow   
-   Breaking existing functionality
    

Refactoring **only changes structure**, not results.

Our goal:  
👉 Separate **business decisions** from **system actions**


## 5. Step 1: Extract the Business Decision

First, we move the _decision logic_ into its own class.

```ts
class clExpenseApprovalPolicy {
  canApprove(
    iamount: number,
    iemployeeLimit: number
  ): boolean {
    if (iamount > iemployeeLimit) {
      return false;
    }
    if (iamount > 50000) {
      return false;
    }
    return true;
  }
}
```

### What changed?

-   No database access    
-   No logging    
-   No notifications    
-   No ERP knowledge
    

This class only answers **one question**:

> “Is this expense allowed or not?”

This is **pure business logic**.


## 6. Step 2: Use the Policy Inside the ERP Flow

Now the original service uses the new policy.

```ts
class clExpenseApprovalService {
  constructor(
    private policy: clExpenseApprovalPolicy
  ) {}
  approve(iexpenseId: string): boolean {
    const LdExpense = Database.getExpense(iexpenseId);
    const LdEmployee = Database.getEmployee(LdExpense.employeeId);
    const LAllowed = this.policy.canApprove(
      Ldexpense.amount,
      Ldemployee.limit
    );
    if (!LAllowed) {
      clAudit.log("Expense rejected");
      return false;
    }
    clDatabase.markApproved(iexpenseId);
    clAudit.log("Expense approved");
    return true;
  }
}
```

### What stayed the same?

-   Same ERP flow    
-   Same database updates    
-   Same audit logs    
-   Same approval rules
    

### What improved?

-   The **decision logic stands alone**
    
-   The service only coordinates actions
    


## 7. Why This Design is Easy to Unit Test

Now you can unit test the policy like this:

```ts
const policy = new ExpenseApprovalPolicy();
policy.canApprove(10000, 20000); // true
policy.canApprove(30000, 20000); // false
policy.canApprove(60000, 100000); // false
```

No database.  
No ERP setup.  
No side effects.

The unit test becomes **fast, simple, and reliable**.


## 8. What You Should Learn From This Exercise

-   Business logic should **not talk to infrastructure**    
-   Decisions should accept **data**, not fetch it    
-   Refactoring is about **moving logic**, not rewriting it
-   If logic is hard to test, the **design is the issue**
    


## Key Takeaway

Unit testing success starts with design, not tools.  
When business decisions are isolated, unit tests become natural and trustworthy.  
If testing feels painful, the code structure - not the tester - is the real problem.


