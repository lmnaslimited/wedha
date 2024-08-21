## **Common assertions used with `except()`** :

The `expect()` function in Cypress is used for making assertions in a more flexible and expressive way, allowing for custom or complex conditions. 
1.  **Verify the Text Content of an Element**
	```javascript
	cy.get('.message').then($message => {
	expect($message).to.contain.text('Success') 
	})
	// Asserts that the element contains the text "Success"
	```
    
2. **Assert an Element's Attribute Value**
	```javascript
	cy.get('input[name="email"]').then($input => {
	expect($input).to.have.attr('placeholder', 'Enter your email')  
	 })
	// Asserts that the input has the placeholder "Enter your email"
	```           
3.  **Ensure an Input Field is Enabled**
    
	```javascript
	cy.get('button[type="submit"]').then($button => {
	expect($button).to.be.enabled  // Asserts that the submit button is enabled
	})
	```  
4. **Check if a Checkbox is Checked** 
	 ```javascript 
	 cy.get('input[type="checkbox"]').then($checkbox => {
	expect($checkbox).to.be.checked  // Asserts that the checkbox is checked
	})
	```
    
8.  **Assert Multiple Conditions on an Element**
	```javascript    
	cy.get('.alert').then($alert => {
	expect($alert).to.exist  // Asserts that the alert exists
	expect($alert).to.have.attr('role', 'alert')  // Asserts that the alert has the attribute "role" set to "alert"
	expect($alert).to.contain.text('Error')  // Asserts that the alert contains the text "Error"
	 })
	 ```
## **Common assertions used with `assert()`** :

The `and()` function in Cypress is used to chain multiple assertions on the same subject. It allows you to perform additional checks or validations in a more readable and concise manner.

Here are some common assertions used with `and()`:

### Common Assertions with `and()`

1.  **Combining Visibility and Text Content**
	``` javascript
	 cy.get('.header')
	   .should('be.visible')
	   .and('contain.text', 'Welcome')  // Asserts that the header is visible and contains the text "Welcome"
	```
	
2.  **Combining Attribute Checks**

	```javascript
	  cy.get('input[type="text"]')
	    .should('have.attr', 'placeholder', 'Enter your name')
	    .and('have.value', '')  
	    // Asserts that the input has the placeholder "Enter your name" and is empty
	 ```
	 
4.  **Combining Enabled/Disabled State**
    
    ```javascript
    cy.get('button.submit')
      .should('be.enabled')
      .and('have.text', 'Submit')  
      // Asserts that the submit button is enabled and has the text "Submit" 
    ```
    
5.  **Combining Check State and Visibility**
    
    ```javascript
    cy.get('input[type="checkbox"]')
      .should('be.checked')
      .and('be.visible')  
      // Asserts that the checkbox is checked and visible
    ```
    
6.  **Combining Element Existence and Attribute**
    
    ```javascript
    cy.get('.alert')
      .should('exist')
      .and('have.attr', 'role', 'alert') 
      // Asserts that the alert element exists and has the role attribute set to "alert" 
    ```


<!--stackedit_data:
eyJoaXN0b3J5IjpbOTgzNDc3ODkzLDE0MjQ3MDQ5MDZdfQ==
-->