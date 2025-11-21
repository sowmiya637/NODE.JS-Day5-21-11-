
# **Express.js – README**

##  **What is Express.js?**

**Express.js** is a fast, lightweight, and flexible **Node.js web framework** used to build:

* Web servers
* REST APIs
* Web applications

Node.js’ built-in `http` module is low-level and difficult for large apps.
**Express makes server creation very easy** by providing simple methods like:

* `app.get()`
* `app.post()`
* `app.use()`
* `app.listen()`

---

## 🚀 **Why Use Express.js?**

### ✔ 1. Simple & Clean Syntax

Creating a server in Node’s `http` takes many lines
→ Express does it in just a few lines.

### ✔ 2. Routing Support

Handle multiple pages easily:

```js
app.get("/home", ...)
app.post("/login", ...)
```

### ✔ 3. Middleware Support

Middleware = functions that run before your route.

Used for:

* Logging
* Body parsing (JSON)
* Authentication
* Error handling

### ✔ 4. JSON Handling

Express can read JSON from POST requests easily.

### ✔ 5. Widely Used

Most companies use Express to build backend APIs.

---

# 📦 **Installation**

Inside your project folder:

```sh
npm init -y
npm install express
```

This installs Express and updates `package.json`.

---

# 📝 **Example: Simple Express App**

### **index.js**

```js
const express = require("express");
const app = express();

// Route for GET request
app.get("/", (req, res) => {
  res.send("Welcome to Express App!");
});

// Start server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
```

---

# 📁 **package.json**

```json
{
  "name": "express-demo",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^5.1.0"
  }
}
```

---

# ▶️ **How to Run**

```sh
node index.js
```

Browser → open:

```
http://localhost:3000
```

You will see:

```
Welcome to Express App!
```

---

# 📌 **How This Works**

### **1. require("express")**

Loads Express module.

### **2. const app = express()**

Creates an Express application.

### **3. app.get("/")**

Handles GET request to `/`.

### **4. res.send()**

Sends a response back to the browser.

### **5. app.listen(3000)**

Starts the server on port **3000**.

---

| Feature       | Why It’s Useful                           |
| ------------- | ----------------------------------------- |
| Simple API    | Easy to create servers                    |
| Routing       | Build multiple endpoints                  |
| Middleware    | Add authentication, logging, body parsing |
| JSON handling | Perfect for APIs                          |
| Fast          | Built for performance                     |

