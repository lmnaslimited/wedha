# Agile-101: Roles and Responsibilities
  

**Roles** refer to one's position on the team.  

**Responsibilities** refer to the tasks and duties of their particular role or job description. It can be beneficial to understand the benefits of implementing functional roles and responsibilities.

![User Story Mindmap](https://raw.githubusercontent.com/lmnaslimited/iyakkam/lmnas-process/lmnas-process/user-story-mindmap.drawio.svg)
 
  
### Role: **Scrum Master**


A **Scrum master** is a facilitator who ensures that the Scrum team follows the processes that they agreed to follow.



**Responsibilities**


- Plan daily Scrum, or stand-up, meetings that last no longer than 15 minutes and give each team member the opportunity to answer these questions. 

	- What did you do yesterday?

  

	- What will you do today?

  

	- What is impeding your progress?

- Monitor the progress of each team members and also ensures that team members know their respective roles and project ownership
 

- To help the team stay focused on the tasks that need to be done during each iteration, the Scrum master looks for distractions and roadblocks that can impede progress.

- Monitoring team velocity and preparing burn-down and burn-up charts and other metrices.

  

### Role: **Product Owner**


The primary goal of an **Agile Product Owner** is to represent the customer to the development team.
  

**Responsibilities**

- Ensures user stories are groomed and ready for development to start work.


- Managing and making visible the product backlog, or the prioritized list of requirements for future product development.

  
- Being available to the development team to answer any questions related to customer requirements and needs.
 

- Evaluating product progress at each iteration (scrum).

![User Story UseCase](https://raw.githubusercontent.com/lmnaslimited/iyakkam/lmnas-process/lmnas-process/user-story-usecase.drawio.svg)


### Role: **Developer**


A **Developer**’s role is to translate user story and ideas into a working product using **LMNAs** prescribed technologies. For ex, Developing an API, developing the backend systems in **LENS Core**, Designing user-friendly front end inteface.

  
**Responsibilities**
  

- Pull development stories from the Sprint cycle and create development tasks.

- Develop the product code based on the task created.

- Reporting and Flagging any impediments and work with other teams for solutions

  

- Talking through requirements with clients

- Create and Update developer document ( For any piece of logic they develop ).

- Testing and evaluating the developed code.

- Marking the completion of the user story 

### Role: **Tester**


The key function of a **Tester** is to conduct both manual and automated tests of software products. The goal is to reduce the number of bugs and identify as many mistakes as possible.
 

### **Manual Testing:**

**Manual Integration testing:** Execute manual test scenarios for applications and report defects.


**Responsibilities**

-   Arranging Test Environment to execute the test cases.
-   Conducting Review Meetings.
-   Analyzing and executing Test Cases.
-   Defect Tracking.

### **Automation Testing:** 
**Automation Tester:** In order to ensure that the application is working perfectly and exactly how it is expected to, automation test engineers test and validate it on a regular basis.

**Responsibilities:**

**Automated Unit Test**:
 -   Write and execute automated tests scripts that run testing functions automatically;
 -   Maximize test coverage for the most critical features of the system;
 -   Determine the priority for test scenarios and create execution plans to implement these scenarios

**Automated Integration Test:**

 - Define test cases and data mappings using development documentation and requirements 
 - Configure test environment, including data integration platforms, and execute associated test cases

**Automated Regression Test**

 - Automated test scripts are executed whenever the application code is updated or modified.
 - Maintaing the overall stability and functionality of the existing feature.
 - Scheduling test scripts and reporting the defects.
 - Marking completion once the tests are successful.
- Perform error analysis and bug reporting and assist in requirement analysis, test design, and test documents.  

### Role: **Security Tester**

**Security tester** is responsible for implementing security headers to the code and running test scripts to identify bugs.

**Responsibilities**

 - Ensuring the website is accessed only using HTTPs.
 - Controlling which features and APIs can be used in the browser.
 - Identifying potential threats and bugs that are harmful for the application and user data.
 - Making sure the codes are encrypted end to end.

 ## User Story Process
 ![User Story Process](https://raw.githubusercontent.com/lmnaslimited/iyakkam/lmnas-process/lmnas-process/user-story-process.drawio.svg)
  

### Role: **CI Pipeline**

**Continous Integration pipeline** is an orchestration engine, which performes automatic unit test and automatic security checks.

**Responsibilities**

- Integration and merging of the codes.
- Building the code and perform Unit test and report the defects if any.
- Once the Product Owner approves the tests, perform regression and integration testing.
- Perform Automated unit test, Integration test, Code quality analysis, Code review and code security
- Building the code and packaging it for production.

- Marking the story completed