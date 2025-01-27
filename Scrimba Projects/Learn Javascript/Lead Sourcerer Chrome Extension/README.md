# 🧙‍♂️ Lead Sorcerer Chrome Extension  

Welcome to **Lead Sorcerer**, the magical Chrome extension for collecting, saving, and managing your leads! With just a few clicks, you can save links (or input your own), store them in your browser’s local storage, and never lose track of important URLs—even after refreshing the page!  

This project serves as a hands-on learning experience for foundational JavaScript concepts, wrapped in a practical, real-world use case.  


## ✨ What Does Lead Sorcerer Do?  

Lead Sorcerer is a productivity tool designed to make saving leads (like URLs or other key data) effortless:  

- **Save URLs**: Add a URL directly or save the current browser tab.  
- **Persistent Storage**: Automatically saves leads to local storage so they persist across browser sessions.  
- **Dynamic List Rendering**: Display saved links dynamically on the page.  
- **Clear Functionality**: Quickly delete all saved leads when you're done with them.  

---

## 🧑‍💻 Foundational JavaScript Concepts Introduced  

This project emphasizes several essential JavaScript concepts for modern web development. Here's a breakdown of the new concepts I mastered:  

## 1. **Event Listeners**
   - **What It Does**: Listens for user interactions (like clicks or double clicks) and executes a callback function.  
   - **Example in Lead Sorcerer**:  
     - Clicking the "Save Tab" button triggers a function to save the current tab’s URL.  
     - Double-clicking the "Delete All" button clears all saved leads.  

   ```javascript
   deleteBtn.addEventListener("dblclick", function() {
       localStorage.clear();
       myLeads = [];
       render(myLeads);
   });
   ```
## 2. **Local Storage**

What It Does: Allows data to persist across browser sessions by storing key-value pairs in the browser.
Why It's Useful: Without local storage, your saved leads would disappear after a page refresh.
Example in Lead Sorcerer:

Using localStorage.setItem() to save leads.
Retrieving them with localStorage.getItem() when the page loads.



``` javascript
CopylocalStorage.setItem("myLeads", JSON.stringify(myLeads));
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
```
## 3. **JSON.stringify() and JSON.parse()**

What They Do:

JSON.stringify(): Converts JavaScript objects/arrays into a JSON string (necessary for storing in local storage).
JSON.parse(): Converts JSON strings back into JavaScript objects/arrays for use in the app.



 ## 4. **Template Strings**

What It Does: Makes it easier to embed expressions (like variables) into strings using backticks (`).
Why It's Useful: Simplifies creating dynamic HTML for the saved leads list.

``` javascript
CopylistItems += `
    <li>
        <a target='_blank' href='${leads[i]}'>
            ${leads[i]}
        </a>
    </li>
`;
```
## 5. **Array Methods**

push(): Adds new leads to the myLeads array.
for Loop: Iterates through the array to render saved links dynamically.

``` javascript
Copyfor (let i = 0; i < leads.length; i++) {
    listItems += `<li><a href='${leads[i]}' target='_blank'>${leads[i]}</a></li>`;
}
```
# 🚀 How It Works

- Save Current Tab:
- Click the "Save Tab" button to save the URL of the current tab.
- Add a URL:
- Enter a URL into the input field and click "Save Input" to add it to your list.
- View Leads:
- Your saved leads will appear as clickable links.
- Clear All Leads:
- Double-click the "Delete All" button to clear your list.



# 🎓 Learning Outcomes

Through this project, I learned foundational concepts such as:

- Using JavaScript to interact with the DOM dynamically
- Making web applications persistent with local storage
- Writing clean, reusable functions
- Debugging and problem-solving in JavaScript
