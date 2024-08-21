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

## **Main Attributes**
-   **`action`**: URL where form data is sent.
-   **`method`**: HTTP method (`get` or `post`) used to send data.
-   **`type`**: Specifies the input field type (e.g., `text`, `email`, `submit`).
-   **`name`**: Name of the input field used for form data.
-   **`id`**: Unique identifier for the form element.
-   **`rows`**: Number of visible lines in a `<textarea>`.
-   **`cols`**: Number of visible characters in a `<textarea>`.
- **`placeholder`**: Provides a hint or example text inside the input field.
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTIzMzkxNzI1NiwxODUzNTE0NDk5LDczMD
k5ODExNl19
-->