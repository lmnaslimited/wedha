In the previous lesson, we drew a clear boundary between business logic and infrastructure. In real ERP code, that boundary is most often broken by something subtle and dangerous: dependencies. They rarely look harmful, but they quietly make unit testing difficult, slow, and unreliable.

## 1. What a Dependency Really is?

A dependency is anything your code **needs** in order to run.

In ERP systems, this often means databases, configuration files, system time, external APIs, message queues, or even global variables. When business logic directly reaches out to these things, it becomes tied to the environment instead of focusing on decisions.

The problem is not that dependencies exist. The problem is **when business logic controls them instead of being fed by them**.


## 2. A Real ERP Scenario: The Approval Rule That Needs “Everything”

Imagine an ERP rule that checks whether a purchase request can be approved.

To make this decision, the code:
- Reads current budget from the database  
- Fetches exchange rates from an external service  
- Checks approval limits from configuration  
- Logs the action for audit purposes  

The decision itself is simple, but the code cannot run without all these dependencies being available. To test this rule, a developer now needs a database, network access, correct configs, and logging setup.

At this point, the test is no longer about the approval rule. It is about **surviving the environment**.


## 3. Why Dependencies Kill Unit Tests Quietly

Dependencies rarely break tests loudly. Instead, they make tests unreliable.

A test may fail because the database is slow, because the API is down, because time zones differ, or because configuration changed. None of these failures mean the business rule is wrong, yet developers start ignoring test failures.

This is how teams slowly lose trust in unit tests - not because tests are bad, but because dependencies are uncontrolled.


## 4. The Core Mistake Developers Make

Only in this section, let’s be explicit.

The most common mistake is this:
- Business logic **creates** or **fetches** its own dependencies  
- Decisions depend on live systems instead of provided values  
- Tests must replicate real environments to work  

When this happens, unit tests become integration tests by accident. They run slower, fail unpredictably, and are harder to write.


## 5. The Shift That Makes Dependencies Harmless

Well-designed business logic does not ask **where data comes from.** It only asks **what the data is.**

Instead of pulling budget values, exchange rates, or system time internally, the **logic receives them as inputs.** Dependencies move to the edges of the system, handled by infrastructure code.

Once this shift happens, unit tests become simple again. The logic can be tested with plain data, without databases or services. Dependencies stop being killers and become replaceable helpers.


## Key Takeaway

Dependencies are not the enemy -**uncontrolled dependencies are**.  
When business logic directly depends on databases, APIs, or system state, unit tests become slow and unreliable. When logic receives data instead, dependencies lose their power to break tests.

In the next lesson, we’ll see how to design code so that logic can stand alone, even inside large ERP systems.



