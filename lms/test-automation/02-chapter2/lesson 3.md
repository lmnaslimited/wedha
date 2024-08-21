## Synatx for assertions 
Cypress offers various assertion functions to validate different aspects of your application. Here are some common ones and their purposes:

### 1. **cy.visit()**

 **Functionality**: Loads a remote URL into the Cypress Test Runner.
 ```javascript
 cy.visit('https://example.com')
 ```

### 2. **cy.get()**
   **Functionality**: Queries for an element in the DOM using a CSS selector.
   ```javascript
cy.get('button').click()
 ```
 
### 3. **cy.contains()**
   **Functionality**: Finds an element containing specific text.
   ```javascript
cy.contains('Submit').click()
 ```

### 4. **cy.click()**
   **Functionality**: Finds an element containing specific text.
   ```javascript
cy.get('.btn').click()
 ```
 
### 5. **cy.type()**

**Functionality**: Types text into an input field or textarea.
    
   ```javascript 
cy.get('input[name="email"]').type('test@example.com')
```
   
### 6. **cy.clear()**

**Functionality**: Clears the value of an input or textarea.
```javascript
cy.get('input[name="search"]').clear()
 ```

### 7. **cy.select()**

**Functionality**: Selects an option in a `<select>` dropdown.

    
```javascript
cy.get('select').select('Option 1')
```

### 8. **cy.check()**

**Functionality**: Checks a checkbox or radio button.

    
```javascript
cy.get('input[type="checkbox"]').check()
```
 
### 9. **cy.submit()**
**Functionality**: Submits a form.

```javascript
cy.get('form').submit()
  ``` 

### 10. **cy.wait()**
**Functionality**: Waits for a specified amount of time or waits for a specific route to complete.

```javascript
  cy.wait(1000) // Wait for 1 second
  cy.wait('@getData') // Wait for a specific route
  ``` 





<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE1MjcxNDk0NDMsLTIwODg3NDY2MTJdfQ
==
-->