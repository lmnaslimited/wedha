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

<!--stackedit_data:
eyJoaXN0b3J5IjpbLTczMzQ3NTIyMCwxODUzNTE0NDk5LDczMD
k5ODExNl19
-->