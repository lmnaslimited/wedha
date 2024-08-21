# **Lesson 3: Basic Tags and Attributes**

## **HTML Tags**

An HTML tag is an element used to structure content on a web page. It consists of a start tag and an end tag, enclosing the content.

## **HTML Attributes**

Attributes provide additional information about HTML elements. They are placed inside the start tag of an element and come in name-value pairs.

**Syntax**: `<tagname attribute="value">`

**Key Points**:
- **Name**: The name of the attribute (e.g., `href`, `src`, `alt`).
- **Value**: The value assigned to the attribute (e.g., `"https://www.example.com"`, `"image description"`).

**Example:**
```html
<a href="https://www.example.com" target="_blank">Visit Example</a>
```

## **Some Basic Tags**

### **1. Headings**

Headings define titles or subtitles on a webpage and range from the most important (`<h1>`) to the least important (`<h6>`).

- **`<h1>`**: Most important heading.
- **`<h6>`**: Least important heading.

**Tag**: `<h1>` to `<h6>`

**Example:**
```html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
```

### **2. Paragraphs**

The `<p>` tag is used to define a paragraph of text on a web page.

**Tag**: `<p>`

**Example:**
```html
<p>This is a paragraph of text. It is used to define a block of text on a web page, separated from other elements by some space above and below.</p>
```

### **3. Links**

The `<a>` tag is used to create hyperlinks that navigate users to other web pages or resources.

**Tag**: `<a>`

**Main Attributes**:

- **`href`**: Specifies the URL of the page the link goes to.
- **`target`**: Determines where to open the linked document. Common values are `_blank` (new tab) and `_self` (same tab).

**Example:**
```html
<a href="https://www.example.com" target="_blank">Visit Example</a>
```

 1. **Relative vs. Absolute URLs**:
	-   **Absolute URL**: Provides the full path to a resource, including the protocol (e.g., `https://www.example.com/page.html`).
	-   **Relative URL**: Provides a path relative to the current document (e.g., `page.html` or `folder/page.html`).


2. **Linking Multiple HTML Pages**: To link multiple HTML pages within a website, use relative URLs. For example:
	```html
	<a href="index.html">Home</a>
	<a href="contact.html">Contact</a>
	<a href="services/index.html">Services</a>
	```

### **4. Images**

The `<img>` tag is used to embed images in a web page.

**Tag**: `<img>`

**Main Attributes**:

- **`src`**: Specifies the URL of the image file.
- **`alt`**: Provides alternative text for the image if it cannot be displayed.
- **`width`**: Sets the width of the image.
- **`height`**: Sets the height of the image.

**Example:**
```html
<img src="https://www.example.com/image.jpg" alt="Description of Image" width="300" height="200">
```
### **5. Iframes**

The `<iframe>` tag is used to embed another HTML document within the current page.

**Tag**: `<iframe>`

**Main Attributes**:

- **`src`**: Specifies the URL of the document to embed.
- **`width`**: Sets the width of the iframe.
- **`height`**: Sets the height of the iframe.
- **`frameborder`**: Specifies whether to display a border around the iframe (use `0` for no border).
- **`allowfullscreen`**: Allows the iframe content to be displayed in fullscreen mode.

**Example:**
```html
<iframe src="https://www.example.com" width="600" height="400" frameborder="0" allowfullscreen></iframe>
```
<!--stackedit_data:
eyJoaXN0b3J5IjpbMzY0NTkwMDgwLC0xNjA5MzM2NjgwLDE1Mz
cyMjU1MzcsODAyOTAzNTI0XX0=
-->