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



## quiz


<!--stackedit_data:
eyJoaXN0b3J5IjpbLTkxMjYxNTU3MSw5ODM0Nzc4OTMsMTQyND
cwNDkwNl19
-->