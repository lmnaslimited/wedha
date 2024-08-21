# **Lesson 3: Understanding HTML Elements**

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

**Example of Some Empty Element:** 
 -  **Line Break (`<br>`):** Inserts a line break in the text.
 - **Horizontal Rule (`<hr>`):** Creates a thematic break or horizontal line.
 - **Image (`<img>`):** Embeds an image into the document. 

## **Block and Inline Elements**
Every HTML element has a default display value, depending on what type of element it is.

The two most common display values are block and inline.

### **Block-Level Elements**
Block-level elements occupy the full width available and start on a new line. They are used to structure larger sections of content.

**Examples:** 
- **`<div>`**: Defines a division or section of content. 
- **`<p>`**: Represents a paragraph of text.

**Here are the block-level elements in HTML:**
`<address>`  `<article>`  `<aside>`  `<blockquote>`  `<canvas>`  `<dd>`   `<div>`   `<dl>`  `<dt>`  `<fieldset>`  `<figcaption>`   `<figure>`   `<footer>`   `<form>`   `<h1>` to `<h6>`  `<header>`   `<hr>`  `<li>`   `<main>`  `<nav>` `<noscript>`   `<ol>`  `<p>`   `<pre>`   `<section>`  `<table>` `<tfoot>`   `<ul>`  `<video>`

### **Inline Elements**
Inline elements only occupy as much width as necessary and do not start on a new line. They are used to style small portions of content within block-level elements.

**Examples:**
-   **`<span>`**: Applies styles or scripts to a portion of text.
-   **`<a>`**: Defines a hyperlink.

**Here are the inline elements in HTML:**
`<a>`
 `<abbr>`
 `<acronym>`
 `<b>`
 `<bdo>`
 `<big>`
 `<br>`
 `<button>`
 `<cite>`
 `<code>`
 `<dfn>`
 `<em>`
 `<i>`
 `<img>`
 `<input>`
 `<kbd>`
 `<label>`
 `<map>`
 `<object>`
 `<output>`
 `<q>`
 `<samp>`
 `<script>`
 `<select>`
 `<small>`
 `<span>`
 `<strong>`
 `<sub>`
 `<sup>`
 `<textarea>`
 `<time>`
 `<tt>`
 `<var>` `` 

## **Remember**
-   **Never Skip the End Tag:** Always close your HTML elements with an end tag to ensure proper structure and display.
-   **HTML is Not Case Sensitive:** HTML tags are not case sensitive. `<h1>` and `<H1>` are treated the same.
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTI2MjI3MTUyLC0xNzU5NjU1OTc0XX0=
-->