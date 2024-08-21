# **Lesson 8: HTML Forms**

## **What are HTML Forms?**

HTML forms are used to collect user input and submit data to a server. Forms are essential for interactive websites, enabling users to enter information and interact with web applications.

## **Basic Form Structure**

```html
<form action="submit-url" method="post">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name">

    <label for="email">Email:</label>
    <input type="email" id="email" name="email">

    <label for="message">Message:</label>
    <textarea id="message" name="message" rows="4" cols="50"></textarea>

    <button type="submit">Submit</button>
</form>
```
## **Form Elements**

-   **`<form>`**: Defines the form.
-   **`<input>`**: Defines an input field.
-   **`<textarea>`**: Defines a multi-line text input.
-   **`<button>`**: Defines a clickable button.
-   **`<select>`**: Defines a drop-down list.
-   **`<option>`**: Defines an option in a drop-down list.
-   **`<label>`**: Associates a label with a form element, improving accessibility.

## **Main Attributes**
-   **`action`**: Specifies where to send the form-data when a form is submitted.
-   **`method`**: Specifies HTTP method (`get` or `post`) used to send data.
-   **`type`**: Specifies the input field type (e.g., `text`, `email`, `submit`).
-   **`name`**: Specifies the name of the form
-   **`id`**: Unique identifier for the form element.
- **`placeholder`**: Provides a hint or example text inside the input field.
- **`required`**: Makes the input field mandatory to fill before submitting the form.
- **`value`**: Defines the default value for an input field.
-   **`rows`**: Number of visible lines in a `<textarea>`.
-   **`cols`**: Number of visible characters in a `<textarea>`.
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTcwNjY3MTU2MSwxODUzNTE0NDk5LDczMD
k5ODExNl19
-->