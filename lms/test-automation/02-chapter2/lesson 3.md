## Syntax for assertions 
Cypress offers various assertion functions to validate different aspects of your application. Here are some common ones and their syntax:
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
5. **should('have.length', length)**- Asserts that a set of elements has a specific number of items.

    
	``` javascript
	cy.get('.list-item').should('have.length', 3)  // Asserts that there are exactly 3 elements with the class "list-item"
	```


<!--stackedit_data:
eyJoaXN0b3J5IjpbLTg5MzQxODc4MSwxNjA2NzI4NjYyLC0yMD
g4NzQ2NjEyXX0=
-->