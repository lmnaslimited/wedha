In Lesson 1, we learned that software testing is a business necessity. In this lesson, we look at the **Software Development Lifecycle (SDLC)**, the step by step process used to build software. More importantly, we focus on a critical reality of software development: the longer a defect remains undetected in the system, the more expensive it becomes to fix.

## 1. What is the SDLC?

The SDLC can be compared to a factory assembly line. Before a product reaches the customer, it passes through multiple stations. If a mistake occurs at an early station and is not detected, every subsequent station continues to build on top of that flaw. By the time the product reaches the end, the cost of fixing that original mistake has multiplied.

The SDLC exists to reduce this risk by introducing structured stages where decisions can be validated and corrected early.

### The Standard Stages of the SDLC

![SDLC](https://raw.githubusercontent.com/lmnaslimited/wedha/refs/heads/unit-testing/Media/chapter-1/SDLC%20.png)

**Planning and Feasibility**  
At this stage, senior leaders and project managers decide whether the project should be built at all. They evaluate budget, timelines, and technical feasibility. The goal is to ensure the project is worth the investment before resources are committed. The risk here is starting something that cannot be completed or will become too expensive to maintain later.

**Requirements Analysis**  
This is the most critical stage for ERP systems. Analysts work closely with business users to document what the system must do in the form of a Software Requirement Specification. The goal is to clearly define business needs, such as supporting multi currency payments across multiple countries. The biggest risk at this stage is building the wrong solution perfectly.

**System Design (Architecture)**  
Architects translate requirements into technical blueprints. They decide the database structure, user interface approach, and how different modules such as Sales and Finance will interact. The goal is to create a stable and scalable foundation that can grow with the business.

**Software Development (Coding)**  
Developers convert designs into working code. In mature teams, developers also write unit tests alongside the code to validate their logic early. The goal is to produce functional, clean, and reliable software that matches the intended design.

**Integration and Testing**  
At this stage, all components are combined into a single system. QA teams validate workflows, test invalid inputs, simulate high traffic, and verify that modules work together correctly. The goal is to identify and fix defects before real users encounter them.

**Deployment (Implementation)**  
The software is moved from the test environment into the live environment. In ERP systems, this often includes data migration from older systems. The goal is to release the software with minimal or zero disruption to business operations.

**Maintenance and Operations**  
Once the system is live, work does not stop. Tax laws change, browsers update, and users report issues. The goal here is to keep the system stable, secure, and usable over time.

## Reality Check

Many people assume testing happens only during the testing phase. Professional teams understand that testing must shadow every stage of the SDLC, from requirements through maintenance.

## 2. The Cost of Discovery

The same defect can have very different costs depending on when it is discovered.

| SDLC Stage    | Action to Fix a Mistake                   | Relative Cost |
|---------------|-------------------------------------------|---------------|
| Requirements  | Rewrite a sentence in a document          | $             |
| Design        | Redraw a diagram or update a plan         | $$            |
| Development   | Rewrite a few lines of code               | $$$           |
| Testing       | Recode, rerun tests, update documentation | $$$$          |
| Production    | Stop business, fix live data, legal risk  | $$$$$$$$      |

This table highlights a simple truth: defects are cheapest when found early and dangerously expensive when found late.

![Escalation](https://raw.githubusercontent.com/lmnaslimited/wedha/refs/heads/unit-testing/Media/chapter-1/Cost%20of%20error.png)

## 3. Shift Left: Finding Bugs Early

In traditional waterfall models, testing happened only at the end of development. This was risky because finding major defects late often caused long delays or forced painful compromises. Modern teams use an approach called Shift Left, which moves testing activities earlier in the project timeline. Requirements, designs, and small code changes are validated as soon as they are created. As a result, **teams stop acting as bug hunters and start becoming bug preventers**.

![Left Shift](https://raw.githubusercontent.com/lmnaslimited/wedha/refs/heads/unit-testing/Media/chapter-1/Left%20shift.png)

## 4. The Gap Between What I Said and What I Meant

In ERP systems, many defects are not caused by broken code but by misunderstood requirements. For example, a business may say it needs a way to apply discounts to orders. A developer may correctly implement a system that applies a ten percent discount to all orders, while the real intent was to apply discounts only for wholesale customers. If this gap is discovered late, the cost of fixing it is high. If it is discovered during requirements review, the fix is simple. This is why testing must begin the moment a requirement is written.

## 5. Why the Cost Increases at Each SDLC Stage

The increase in bug-fixing cost across SDLC stages is driven by **human effort, system complexity, business dependency, and reputation risk**. A defect discovered early usually affects only understanding or logic. As the system progresses, the same defect becomes embedded into code, data, integrations, and real business operations, multiplying its impact.

 - **Man (People Cost)**
    Early-stage fixes involve one or two people. Late-stage fixes require developers, testers, business users, support teams, and managers, often across departments and time zones.
 - **System (Technical Cost)**
    As software grows, components become tightly coupled. A late fix may require code changes, database corrections, regression testing, redeployment, and rollback plans.
 - **Business (Operational Cost)**
    In production, defects can stop invoicing, delay shipments, or block financial closing. Business continuity becomes the primary concern, not just correctness.
 - **Reputation (Trust Cost)**
    Production bugs reduce customer confidence, create audit findings, and damage brand credibility. These costs are difficult to measure but long-lasting.

## 6. Impact of Late Bug Discovery on Stakeholders

Late discovery of defects affects every role differently, increasing friction across the organization.

**Impact on the System**  
Increased instability, frequent hotfixes, higher regression risk, and accumulation of technical debt.

**Impact on the Business**  
Revenue loss, delayed operations, compliance violations, and reactive decision-making instead of planned execution.

**Impact on Developers**  
Frequent context switching, increased stress, rushed fixes, reduced code quality, and less time for innovation.

**Impact on Testers (QA & UAT)**  
Compressed testing windows, incomplete coverage, pressure to approve risky releases, and higher defect leakage into production.

**Impact on Customers**  
Broken workflows, incorrect data, reduced trust, and increased support interactions.

Early testing protects not just the software but the people and processes around it.


## Key Takeaway

- The SDLC is a progression of increasing risk, not just a sequence of tasks.  
- The longer defects remain undetected, the higher the cost and impact on people, systems, and business.  
- Early testing, combined with automation and UAT, transforms small mistakes into manageable fixes and prevents major disruptions.  
- Shared responsibility across developers, QA, and business users ensures comprehensive coverage and stronger business protection.  
- The ultimate goal is to reduce COPQ to 0 percent by catching defects before they reach production.
