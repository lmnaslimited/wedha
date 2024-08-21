## Syntax for assertions 
Cypress offers various assertion functions to validate different aspects of your application. Here are some common ones and their syntax:
## **Common assertions used with `should()`** :

1. **should('exist')** -  Asserts that an element exists in the DOM.

 
	```javascript
	cy.get('.navbar').should('exist')  
	// Asserts that the element with class "navbar" exists in the DOM 
	```
 2. **should('be.visible')** - Asserts that an element is visible on the page.



-   **Example**:
	```javascript
	cy.get('.welcome-message').should('be.visible')  // Asserts that the element with class "welcome-message" is visible
	 ```
    

### 4. **`should('not.be.visible')`**

-   **Description**: Asserts that an element is not visible on the page.
-   **Example**:
    
    javascript
    
    Copy code
    
    `cy.get('.loading-spinner').should('not.be.visible')  // Asserts that the element with class "loading-spinner" is not visible` 
    

### 5. **`should('have.text', text)`**

-   **Description**: Asserts that an element contains the exact specified text.
-   **Example**:
    
    javascript
    
    Copy code
    
    `cy.get('.login-button').should('have.text', 'Log In')  // Asserts that the button has the exact text "Log In"` 
    

### 6. **`should('contain.text', text)`**

-   **Description**: Asserts that an element contains the specified text anywhere within it.
-   **Example**:
    
    javascript
    
    Copy code
    
    `cy.get('.error-message').should('contain.text', 'Invalid credentials')  // Asserts that the error message contains the text "Invalid credentials"` 
    

### 7. **`should('have.class', className)`**

-   **Description**: Asserts that an element has the specified CSS class.
-   **Example**:
    
    javascript
    
    Copy code
    
    `cy.get('.nav-item').should('have.class', 'active')  // Asserts that the element has the class "active"` 
    

### 8. **`should('not.have.class', className)`**

-   **Description**: Asserts that an element does not have the specified CSS class.
-   **Example**:
    
    javascript
    
    Copy code
    
    `cy.get('.nav-item').should('not.have.class', 'disabled')  // Asserts that the element does not have the class "disabled"` 
    

### 9. **`should('have.attr', attribute, value)`**

-   **Description**: Asserts that an element has a specific attribute with a specific value.
-   **Example**:
    
    javascript
    
    Copy code
    
    `cy.get('input[type="checkbox"]').should('have.attr', 'checked', 'checked')  // Asserts that the checkbox has the "checked" attribute` 
    

### 10. **`should('have.value', value)`**

-   **Description**: Asserts that an input or textarea element has a specific value.
-   **Example**:
    
    javascript
    
    Copy code
    
    `cy.get('input[name="username"]').should('have.value', 'user123')  // Asserts that the input has the value "user123"` 
    

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
eyJoaXN0b3J5IjpbLTE2MTQzMDQyNjAsMTYwNjcyODY2MiwtMj
A4ODc0NjYxMl19
-->