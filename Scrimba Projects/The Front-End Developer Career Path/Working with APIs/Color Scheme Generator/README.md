# 🎨 Color Scheme Generator

## Overview

**Color Scheme Generator** is a sleek and interactive web application that allows users to generate beautiful color schemes based on a selected seed color and scheme mode. By integrating a public RESTful API, the app demonstrates how to dynamically fetch and display data using modern JavaScript features like `fetch()` and DOM manipulation.

This project was built as part of the **Scrimba Front-End Developer Career Path** and showcases core concepts in working with **REST APIs** and **HTTPS requests**.

---

## 📚 Topics Covered

### 🔐 HTTPS Requests

An **HTTPS request** is how clients securely communicate with servers over the web. This project involves making such requests to the [Color API](https://www.thecolorapi.com/).

- **URLs & Endpoints**:  
  The endpoint used is:  
  `https://www.thecolorapi.com/scheme`

- **Methods**:  
  This app uses the `GET` method, which retrieves data from the server without modifying any resources.

- **Body**:  
  Since it’s a `GET` request, no request body is sent - however, it was very useful to learn about other methods for future reference to (hoprefully) create C.R.U.D web applications in the future.

- **Headers**:  
  In this case, default headers are used — no custom headers are required for this public API.

---

### 🌐 REST APIs

A **REST API** provides access to resources using standard HTTP methods.

- **Resources**:  
  The primary resource accessed is the `scheme` endpoint, which provides color schemes based on the seed color.

- **Parameters**:  
  These are key-value pairs used to specify details about the resource. Example:  
  `?hex=F55A5A`

- **Queries**:  
  Additional options can be included in the URL as query parameters:  
  `?hex=F55A5A&mode=analogic&count=5`

  - `hex`: the base color (without the `#`)
  - `mode`: the scheme type (e.g., `monochrome`, `analogic`, `complement`, etc.)
  - `count`: number of colors to return (default is 5)

---

### 📦 Fetch API in JavaScript

The `fetch()` function is used to send a request to the API and handle the response asynchronously.

**Example:**
```js
fetch('https://www.thecolorapi.com/scheme?hex=F55A5A&mode=monochrome')
  .then(response => response.json())
  .then(data => {
    // Use the returned color scheme data
  });
```
---

### 💡 How It Works
The user picks a color from a color input.

- The user selects a color scheme mode from a dropdown.

- Clicking "Get Scheme" sends a GET request to the Color API with the selected parameters.

- The app receives a JSON response with five related color codes.

- The color swatches and hex codes are updated in the UI accordingly.

--- 

### 🧪 Example JSON Response

```js
{
  "colors": [
    {
      "hex": {
        "value": "#F55A5A"
      }
    },
    ...
  ]
}
```
--- 

### 🚀 How to Use

1. Clone or download this repository.

2. Open index.html in your browser.

3. Choose a color and a scheme type.

4. Click "Get Scheme" and watch the magic happen.

--- 

## ✅ Conclusion
The Color Scheme Generator introduces essential frontend development concepts like:

- Using fetch() for HTTPS requests

- Understanding URLs, methods, parameters, and queries

- Interacting with REST APIs

- Dynamically updating the DOM based on API responses

This project is a fun and practical example of client-server communication and how external APIs can be used to build rich, interactive web experiences.
