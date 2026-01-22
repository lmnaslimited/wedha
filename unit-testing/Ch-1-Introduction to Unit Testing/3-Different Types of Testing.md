In earlier lessons, we established that software testing acts as a business shield and that applying it early reduces cost and risk. The next important question is who actually holds this shield. In a professional ERP environment, testing is not owned by one person or one team. It is a shared responsibility where different roles look at the same system from different perspectives, each protecting the business from a specific type of risk.

## 1. The Testing Pyramid

To understand how testing responsibilities are distributed, we use the Testing Pyramid. This model explains that most tests should be small, fast, and automated at the bottom, with fewer but more complex tests at the top.

- **The Base: Unit Tests**  
  Thousands of small automated tests verify individual pieces of logic. These tests run quickly and catch defects at the earliest stage.

- **The Middle: Integration Tests**  
  Hundreds of tests ensure that different modules and services work together correctly as a system.

- **The Top: UI and UAT Tests**  
  A limited number of tests validate the software from a real user’s point of view, focusing on workflows and usability.

The effectiveness of testing comes from maintaining balance across all layers rather than relying on a single type of test.

## 2. Who Tests What? The Persona Breakdown

Testing is distributed across roles because each role naturally focuses on different risks.

![Persona](https://raw.githubusercontent.com/lmnaslimited/wedha/refs/heads/unit-testing/Media/chapter-1/Who%20test%20what.png)

### A. The Developer: Testing the Logic

Developers primarily protect the system at the code level. Their responsibility is to ensure that the logic they write behaves exactly as expected before it is shared with others.

- **Type:** Unit Testing  
- **Focus:** Is the logic implemented correctly?  
- **Risk Protected:** Calculation errors, logic flaws, and basic coding mistakes  

**Example:**  
Verifying that price multiplied by quantity always produces the correct total before the code is merged.

### B. The QA Specialist: Testing the System

QA specialists look at the application as a complete system. Their goal is to ensure that new changes do not damage existing functionality or system stability.

- **Type:** Regression and System Testing  
- **Focus:** Does this change break something that already works?  
- **Risk Protected:** Broken integrations, system crashes, and performance issues  

**Example:**  
Checking that a newly added discount feature does not affect shipping, invoicing, or reporting modules.

### C. The Business User: Testing the Workflow

Business users validate whether the system supports real work scenarios. They focus on usability and process alignment rather than technical correctness.

- **Type:** User Acceptance Testing (UAT)  
- **Focus:** Does this software help me do my job efficiently?  
- **Risk Protected:** Process gaps and poor user experience  

**Example:**  
A warehouse manager confirming that a mobile scanning screen is practical to use in actual warehouse conditions.

## 3. Functional vs Non Functional Testing

Testing can also be classified by what aspect of the system is being evaluated.

- **Functional Testing**  
  Focuses on correctness and behavior, asking whether the system does what it is supposed to do.  
  Examples include tax calculations, login validation, and report generation.

- **Non Functional Testing**  
  Focuses on quality attributes, asking how well the system performs.  
  Examples include security, performance under load, and ease of use.

Both types are critical. A system that produces correct results but performs poorly or insecurely still represents a serious business risk.

## 4. Automated vs UAT Testing

Professional testing strategies use both automation and UAT testing because each serves a different purpose.

- **Automated Testing**  
  Uses software to test software and is ideal for repetitive, predictable checks such as validating thousands of data combinations quickly and consistently.

- **UAT Testing**  
  Relies on business knowledge and real world judgment, making it suitable for workflow validation, usability confirmation, and real operational scenarios.

- **Professional Rule**  
  Any test that needs to be repeated more than twice is a strong candidate for automation.

## 7. Why Automation is Needed in Professional Testing

As ERP systems grow in size and complexity, relying heavily on UAT testing alone becomes unsustainable. Automation is essential to effectively control both **Cost of Quality (COQ)** and **Cost of Poor Quality (COPQ)**.

**Cost of Quality (COQ)**  
The cost of preventing defects, including test creation, tools, infrastructure, and upfront time investment.

**Cost of Poor Quality (COPQ)**  
The cost of failures, such as rework, production incidents, customer complaints, downtime, and reputational damage.

When teams attempt to reduce COPQ without automation, COQ increases sharply because repeated UAT cycles require more people, more time, and greater coordination. Automation breaks this trade off.

## 8. How Automation Reduces Both COQ and COPQ

Automation fundamentally changes the economics of testing.

- Automated tests run faster and more frequently without additional human effort.
- Defects are detected earlier, reducing rework and late stage failures.
- Regression testing becomes predictable and reliable instead of risky and rushed.

By adopting automation tools:
- **COQ decreases** because tests are reused continuously at a low marginal cost.
- **COPQ decreases** because fewer defects escape into production.

The long term objective is to drive **COPQ as close to 0 as possible** by preventing defects from reaching production.

Automation is not a technical luxury. It is a financial necessity.

## 9. Benefits of Test Automation

- Faster feedback for developers  
- Early defect detection through shift left practices  
- Reduced dependency on repetitive UAT cycles  
- Improved system stability and release confidence  
- Lower operational and reputational risk  
- Scalable testing as the ERP grows  
- Sustainable balance between COQ and COPQ  

## Key Takeaway

- No single role can detect every defect.
- Developers, QA specialists, and business users each protect the system from different risks.
- The cost of fixing defects increases sharply as they move later in the SDLC.
- Early testing and automation convert expensive failures into inexpensive prevention.
- The ultimate goal of a mature testing strategy is to reduce COPQ to 0 by stopping defects before they reach production.

This shared responsibility is what makes testing effective in real world ERP systems.
