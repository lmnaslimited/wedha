## **Common assertions used with `should()`** :

1. **should('exist')** -  Asserts that an element exists in the DOM.

 
	```javascript
	cy.get('.navbar').should('exist')  
	// Asserts that the element with class "navbar" exists in the DOM 
	```
 2. **should('be.visible')** - Asserts that an element is visible on the page.

	```javascript
	cy.get('.welcome-message').should('be.visible') 
    // Asserts that the element with class "welcome-message" is visible
	```
    
 3. **should('have.text')** -  Asserts that an element contains the exact specified text.   
	```javascript
	cy.get('.login-button').should('have.text', 'Log In')   
	//Asserts that the button has the exact text "Log In"
	```
4. **should('have.value', value)**- Asserts that an input or textarea element has a specific value.
	```javascript
	cy.get('input[name="username"]').should('have.value', 'user123')  
	// Asserts that the input has the value "user123" 
	```


## **Common assertions used with `and()`** :

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
	 
3. **Combining Enabled/Disabled State**
    
    ```javascript
    cy.get('button.submit')
      .should('be.enabled')
      .and('have.text', 'Submit')  
      // Asserts that the submit button is enabled and has the text "Submit" 
    ```
    
4.  **Combining Check State and Visibility**
    
    ```javascript
    cy.get('input[type="checkbox"]')
      .should('be.checked')
      .and('be.visible')  
      // Asserts that the checkbox is checked and visible
    ```
    
5.  **Combining Element Existence and Attribute**
    
    ```javascript
    cy.get('.alert')
      .should('exist')
      .and('have.attr', 'role', 'alert') 
      // Asserts that the alert element exists and has the role attribute set to "alert" 
    ```


<!--stackedit_data:
eyJoaXN0b3J5IjpbLTExMjY5MDMwMjgsMjEzNzg5Njc4NiwzNz
g4MTY3NDksMTYwNjcyODY2MiwtMjA4ODc0NjYxMl19
-->