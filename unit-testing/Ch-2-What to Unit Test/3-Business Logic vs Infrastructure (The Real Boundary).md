In the previous lesson, we saw that unit tests become painful when business rules are tangled with too much surrounding code. To fix this, we must understand the most important boundary in software design: the line between **business logic** and **infrastructure**.

This boundary decides whether your ERP code is easy to test or constantly fighting you.


## 1. What Business Logic Really Means in an ERP System

Business logic is the part of the system that answers questions and makes decisions.

In an ERP context, business logic decides things like whether an order can be approved, whether a discount is allowed, whether stock needs replenishment, or whether a transaction violates a policy. These rules exist even if the ERP had no UI, no database, and no external services.

For example, the rule **“an order cannot be approved if available stock is less than the required quantity”** is pure business logic. It does not care where the stock number comes from or how the order is displayed on the screen. It only cares about inputs and outcomes.


## 2. What Infrastructure Looks Like in Real Projects

Infrastructure is everything that helps the system run but does not decide business outcomes.

Databases store data, APIs fetch external information, frameworks handle requests, and UI layers collect user input. All of these are necessary, but none of them define the rules of the business.

In many ERP projects, business logic is written directly inside infrastructure code. Approval rules sit inside database transactions, pricing logic lives inside API handlers, and validations are buried inside UI events. The system works, but the logic becomes inseparable from the environment.

This is where unit testing starts to break down.


## 3. The ERP Approval Flow That Exposes the Boundary

Consider an ERP purchase approval flow.

A user clicks **“Approve.”** The system fetches supplier data, checks budget limits, validates approval hierarchy, writes audit logs, and updates the database. Somewhere inside this flow is a simple decision: **Is this purchase allowed?**

If that decision is embedded inside database calls and logging logic, testing it requires recreating the entire flow. But if the decision is extracted into a standalone rule that accepts inputs and returns an outcome, it can be tested in isolation.

The difference is not what the system does. The difference is **where the decision lives**.


## 4. How Business Logic and Infrastructure Should Interact

Only in this section, let’s make the boundary explicit:

- Business logic should **receive data**, not fetch it  
- Business logic should **return decisions**, not perform side effects  
- Infrastructure should **collect inputs and apply results**, not decide rules  

When this boundary is respected, infrastructure becomes replaceable and business logic becomes testable.



## 5. Why This Boundary Changes Everything for Unit Testing

Once business logic is separated, unit tests stop being fragile. You no longer need databases, APIs, or ERP configurations to validate rules. Tests become small, fast, and meaningful.

More importantly, the business gains confidence. When rules are tested in isolation, teams can change infrastructure, refactor code, or upgrade frameworks without fear of silently breaking core decisions.

This boundary is the foundation of testable design.


## Key Takeaway

Business logic defines **what the ERP decides**. Infrastructure defines **how the ERP operates**. When these two are mixed, unit testing becomes painful. When they are separated, testing becomes simple and reliable.

In the next lesson, we’ll look at how **dependencies** silently destroy this boundary and make unit tests harder than they need to be.

