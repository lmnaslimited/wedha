Before learning how to design testable systems, it is important to understand why unit testing often feels frustrating in real ERP projects. Most teams do not struggle because they lack testing tools or skills. They struggle because the code itself resists testing.

This lesson explains where that resistance comes from.

## 1. When Business Rules are Hidden Inside ERP Workflows

Consider a common ERP action: submitting an invoice.

On the surface, this looks simple. A user clicks **“Submit”** and the system processes the invoice. Behind the scenes, however, the same action may **validate tax rules, check customer credit limits, update accounting entries, write to the database, and trigger notifications.**

The real business rule is small and clear:  
**An invoice should not be submitted if the customer has exceeded their credit limit.**

But when this rule is buried inside a long workflow tied to UI actions and database writes, it becomes difficult to test on its own. To verify that single decision, a developer is forced to simulate the entire ERP behavior instead of just checking the rule. The logic works, but it is locked inside too much surrounding machinery.


## 2. When Logic Depends on Environment Instead of Data

Now think about price calculation in an ERP system.

The final price depends on **item price, customer category, discounts, taxes, and currency.** In many systems, the code does not receive these values as inputs. Instead, it fetches customer data from the database, reads tax rules from system settings, calls currency services, and depends on session context.

When logic is written this way, you cannot test it by simply providing inputs and checking outputs. You must recreate the environment in which the ERP normally runs. The test becomes fragile, slow, and tightly coupled to configuration rather than logic.

At this point, the problem is not whether the calculation is correct. The problem is that the logic cannot stand on its own.

## 3. When Small Changes Create Big Fear

ERP systems constantly evolve. New tax rules are introduced, approval flows change, and pricing logic is adjusted. In well-designed code, these changes are local and predictable.

In poorly structured code, a small change breaks multiple tests, forces complex setup changes, or causes failures in unrelated areas. Developers begin to hesitate before touching the logic. This fear is not about testing; it is about design.

When a team is afraid to change business logic, the system slowly becomes rigid, and innovation slows down.


## 4. Common Design Patterns That Cause This Pain

Only in this section, let’s clearly list the patterns that typically make code painful to unit test:

- Business logic mixed directly with database queries and API calls  
- Functions that perform multiple responsibilities at once  
- Logic that reads global state instead of receiving inputs  
- Code that cannot run without the full ERP environment  

These patterns make tests expensive and unreliable, even when the rules themselves are simple.


## 5. What This Lesson Really Teaches

Painful unit testing is almost always a design problem, not a testing problem.

When business decisions are clearly separated from infrastructure, tests become easy. When they are mixed together, tests become fragile. Understanding this distinction is the first step toward writing code that is both testable and safe for business-critical systems.


## Key Takeaway

If a piece of ERP logic is hard to unit test, it is usually a signal that the logic is doing too much or depending on too much. Unit tests expose design problems long before they expose bugs.

In the next lesson, we will explore the most important boundary in testable design: separating **business logic** from **infrastructure**.
