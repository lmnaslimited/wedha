
# **Assertion in Cypress**

Assertions in Cypress are used to verify that certain conditions are true during a test, ensuring that the application behaves as expected. They help confirm whether elements exist, have the correct text, are visible, or meet other criteria, validating that the actual outcome matches the expected result. Assertions are crucial in automated testing for validating the state of your application and ensuring it functions correctly across different scenarios.


# **Common Assertion Functions**

### should( )

- **Description**: `should()` is the primary assertion function in Cypress. It is used to assert that the subject (an element, value, etc.) meets certain conditions.
-   **Purpose**: To verify that an element or value has a specific property, state, or content.

	```javascript
	cy.get('.header').should('be.visible')  
	// Asserts that the element with class "header" is visible
	cy.get('.login-button').should('have.text', 'Log In') 
 // Asserts that the button has the text "Log In"

	```


### and( )
Cypress supports modern JavaScript frameworks and libraries out of the box, including React, Angular, Vue, and others.

### expect( )

Cypress provides a real-time preview of your application and the tests running against it. This helps you see exactly what’s happening during test execution.

### assert( )

Cypress automatically waits for elements to appear, animations to  
complete, and XHR requests to finish, reducing the need for manual wait commands.


# **Cypress supports various types of testing**


-   End-to-End (E2E) Testing.
-   Integration Testing.
-   Unit Testing.
-   API Testing.
<!--stackedit_data:
eyJoaXN0b3J5IjpbODI4MzgxMDA5XX0=
-->