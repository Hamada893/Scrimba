# Bored Bot

## Overview

**Bored Bot** is a fun, interactive web application that fetches random activity ideas from an API, providing users with ideas to beat boredom! The app allows users to click a button to receive a new activity suggestion, making use of modern web technologies such as **APIs**, **JSON**, and **fetch** to pull dynamic content.

## Topics Covered

### What are Servers & Clients?

- **Client**: A client is any device (such as a computer or smartphone) or software that requests resources (like data or web pages) from a server. In this case, the **Bored Bot** is a client because it requests data from an external server.
  
- **Server**: A server is a computer or system that stores resources (like data, images, files, etc.) and serves them to clients upon request. The server that **Bored Bot** interacts with is the one hosting the **Bored API**, providing random activity suggestions.

### How Do Servers & Clients Interact?

Clients interact with servers by making **requests** for resources. The server processes the request and sends back a **response**. This interaction happens through the **Request/Response cycle**.

### The Request/Response Cycle

1. **Request**: The client sends a request (for example, to fetch data) to the server.
2. **Processing**: The server processes the request, accesses the needed resources, and prepares a response.
3. **Response**: The server sends a response back to the client, which may include data or a message.

In **Bored Bot**, when the user clicks the button, the client (the browser) sends a request to the server (the Bored API). The server processes the request and sends back a random activity suggestion as a response, which the client then displays.

### What Are APIs?

An **API (Application Programming Interface)** is a set of protocols that allows one piece of software to interact with another. In this project, the **Bored API** provides an endpoint that the **Bored Bot** client can send requests to. The server responds with a random activity, allowing the bot to present it to the user.

### JSON (JavaScript Object Notation)

**JSON** is a lightweight data format used for storing and exchanging data between a client and server. JSON data is easy to read and write for humans and machines alike. In **Bored Bot**, the Bored API returns activity data in JSON format, and the client extracts the relevant information to display.

Example of a JSON response from the API:
```json
{
  "activity": "Go for a walk"
}
```
Basics of Fetch Syntax
fetch() is a built-in JavaScript function used to make requests to a server. It returns a Promise that resolves to the Response object.

Basic Syntax:
```
fetch(url)
    .then(response => response.json())  // Parse the response as JSON
    .then(data => console.log(data))    // Handle the data
```
In Bored Bot, we use fetch() to request data from the Bored API:
```
fetch('https://apis.scrimba.com/bored/api/activity')
    .then(response => response.json())
    .then(data => {
        document.getElementById("activity").textContent = data.activity;
    })
```
## How to Use
1. Clone this repository to your local machine.
2. Open the index.html file in a browser.
3. Click on the "Get Activity" button to receive a random activity idea.

## Conclusion
The Bored Bot project helps demonstrate the basics of web interaction, API usage, and the request/response cycle, giving you hands-on experience with server-client communication, JSON, and fetching data using JavaScript's fetch() function.
