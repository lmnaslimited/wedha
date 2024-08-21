**Practice 1**

**Objective:** Create a Test File with Two Separate **it**  Blocks

**Steps:**

1. **Create the Test File** :

	Create a new file named `File_name.cy.js`.
    
2. **Write the Test Code**:
	Open `File_name.cy.js` in your code editor and add the following code:
```javascript
describe('Example Test Suite', () => {
  it('Test 1: Verifies the title of the page', () => {
    // Visit the example Cypress page
    cy.visit('https://example.cypress.io/')
    
    // Verify the title of the page
    cy.title().should('eq', 'Cypress.io: Kitchen Sink')
  })

  it('Test 2: Verifies a button click', () => {
    // Visit the example Cypress page
    cy.visit('https://example.cypress.io/')
    
    // Find the "get" button and click it
    cy.contains('get').click()
    
    // Verify the button text after clicking
    cy.get('.query-btn').should('contain.text', 'Button')
  })
})
```

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
eyJoaXN0b3J5IjpbMTEyNDg0NTYwMSwtMTg2NDYwOTU1XX0=
-->