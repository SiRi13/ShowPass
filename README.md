## ShowPass Chrome Extension

Just a simple Chrome extension to toggle the type of an INPUT tag between 'text' and 'password'.
This enables you to display the password you just typed quickly.

---
### Workflow
Injects a content script to add listeners on each INPUT element to execute a anonymous function which checks the mouse button and what kind of tag it is. After passing those constraints it sets the element to the *clickedElement* variable.
It also adds an _onRequest_ listener which calls the toggle function.
The background script adds a new context menu which only appears on editable elements.
On click it sends a request over the extension framework to toggle the type attribute.

---
### Versioning

* ShowPass v0.1 (2017/07/31): Basic functionality

---
## IMPORTANT NOTICE
**This extension is neither tested in means of security nor user experience nor functionality!**
