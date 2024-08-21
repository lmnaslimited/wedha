**Practice 1**

**Objective:** Create a Test File with Two Separate **it**  Blocks

**Steps:**

1. **Create the Test File** :

	Create a new file named `File_name.cy.js`.
    
2. **Write the Test Code**:
	Open `File_name.cy.js` in your code editor and add the following code:

 3. **Create a New Spec File**

- Your test files (specs) will go inside the `cypress/e2e` folder .
- Create a new JavaScript file in the appropriate folder. 

   **For Example:**
	```bash
	File_name.cy.js
	```
4.  Even though we haven't written any code yet - that's okay - let's click on your new spec and watch Cypress launch it. Cypress will visit `https://example.cypress.io` and the test passes.

**Practice 2**

**Objective:** Write a basic test to open a demolens and login.

**Steps:**

1.  Create a new test file in the **cypress/e2e** directory:
    
    ```bash
    test1.cy.js
    ```
    
2.  Open **test1.cy.js** in your code editor and add the following code:
    

	 ```javascript
	describe('template spec', () => {
	it('passes', () => {
	cy.visit('https://demolens.lmnas.com/login#login');
    cy.get('#login_email').click()
    cy.get('#login_email').type('example@lmnas.com')
    cy.get('#login_password').type('xxxxxxxx')
    cy.get('.for-login > .login-content > .form-signin > .page-card-actions > .btn').click()
	})
	})
	```

    This script visits a demolens and login to the lens.

**Hints:**

-   Use `cy.visit()` to navigate to a URL.
-   Use `cy.get()` to select DOM elements and perform assertions on them.


<!--stackedit_data:
eyJoaXN0b3J5IjpbLTg1MzYxMjcwMiwtMTg2NDYwOTU1XX0=
-->