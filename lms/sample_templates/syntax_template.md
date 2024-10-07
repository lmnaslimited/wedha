## Basic Syntax

```javascript
// Visit a webpage
cy.visit('https://example.com');

// Get an element
cy.get('selector');

// Click an element
cy.get('selector').click();

// Type into an input
cy.get('input[name="username"]').type('your-username');

// Assert element contains text
cy.get('selector').should('contain', 'expected text');

// Wait for a request
cy.intercept('GET', '/api/endpoint').as('apiRequest');
cy.wait('@apiRequest');

// Chain commands
cy.get('selector').click().type('text').should('have.value', 'text');


```

## Additional Resources

-   [Cypress Documentation](%5B%5Bhttps://docs.cypress.io%5D(https://docs.cypress.io/)%5D(%5Bhttps://docs.cypress.io/%5D(https://docs.cypress.io/)))
    
-   [Cypress GitHub Repository](%5B%5Bhttps://github.com/cypress-io/cypress%5D(https://github.com/cypress-io/cypress)%5D(%5Bhttps://github.com/cypress-io/cypress%5D(https://github.com/cypress-io/cypress)))
- 
![enter image description here](https://github.com/lmnaslimited/wedha/blob/framework/lms/media/API_JSON.png?raw=true)
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE2MTYzNTk2NDBdfQ==
-->