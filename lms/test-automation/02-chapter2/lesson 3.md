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
	cy.get('.login-button').should('have.text', 'Log In') //Asserts that the button has the exact text "Log In"
	```
4. **should('have.value', value)**- Asserts that an input or textarea element has a specific value.
	```javascript
	cy.get('input[name="username"]').should('have.value', 'user123')  
	// Asserts that the input has the value "user123" 
	```
    

### 11. **`should('be.checked')`**

-   **Description**: Asserts that a checkbox or radio button is checked.
-   **Example**:
    
    javascript
    
    Copy code
    
    `cy.get('input[type="checkbox"]').should('be.checked')  // Asserts that the checkbox is checked` 
    

### 12. **`should('not.be.checked')`**

-   **Description**: Asserts that a checkbox or radio button is not checked.
-   **Example**:
    
    javascript
    
    Copy code
    
    `cy.get('input[type="checkbox"]').should('not.be.checked')  // Asserts that the checkbox is not checked` 
    

### 13. **`should('be.enabled')`**

-   **Description**: Asserts that an element is enabled (can be interacted with).
-   **Example**:
    
    javascript
    
    Copy code
    
    `cy.get('button[type="submit"]').should('be.enabled')  // Asserts that the submit button is enabled` 
    

### 14. **`should('be.disabled')`**

-   **Description**: Asserts that an element is disabled (cannot be interacted with).
-   **Example**:
    
    javascript
    
    Copy code
    
    `cy.get('button[type="submit"]').should('be.disabled')  // Asserts that the submit button is disabled` 
    

### 15. **`should('have.length', length)`**

-   **Description**: Asserts that a set of elements has a specific number of items.
-   **Example**:
    
	``` javascript
	cy.get('.list-item').should('have.length', 3)  // Asserts that there are exactly 3 elements with the class "list-item"
	```


<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE1NzAwNjMzMTUsMTYwNjcyODY2MiwtMj
A4ODc0NjYxMl19
-->