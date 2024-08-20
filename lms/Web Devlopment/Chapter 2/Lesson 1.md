# **Lesson 1: Introduction to HTML**

## **What is HTML?**

HTML **(HyperText Markup Language)** is the standard language used to create and design web pages. It provides the basic structure of a website, which can be enhanced with CSS for styling and JavaScript for interactivity.

## **A Simple HTML Document**

**Example**

```html
<!DOCTYPE html>
<html>
<head>
    <title>Page Title</title>
</head>
<body>

    <h1>My First Heading</h1>
    <p>My first paragraph.</p>

</body>
</html>
```
-   `<!DOCTYPE html>`: Declares the document as HTML5.
-   `<html>`: Root element of the HTML page.
-   `<head>`: Contains meta information about the page.
-   `<title>`: Sets the page title shown in the browser tab.
-   `<body>`: Contains all visible content (headings, paragraphs, images, etc.).
-   `<h1>`: Defines a large heading.
-   `<p>`: Defines a paragraph.

## **What is an HTML Element?**

The HTML element is everything from the start tag to the end tag.

```html
<tagname>Content goes here...</tagname>
```
**Examples of Some HTML Elements** 

```html
<h1>My First Heading</h1>
<p>My first paragraph.</p>
```

-   **Start tag**: `<h1>`
-   **Content**: `My First Heading`
-   **End tag**: `</h1>`

## **Empty Element**
Elements Some HTML elements do not have content and are called empty elements. They do not have an end tag. 

**Example of an empty element:** 
```html
 <br>
 ```

## **Remember**

-   **Never Skip the End Tag:** Always close your HTML elements with an end tag to ensure proper structure and display.
-   **HTML is Not Case Sensitive:** HTML tags are not case sensitive. `<h1>` and `<H1>` are treated the same.

<!--stackedit_data:
eyJoaXN0b3J5IjpbLTY3MTM2MjUxOCwtMzM3NTExODk4LC0xMz
E2MTcxNzA0LC00NzU4NTQ4MV19
-->