
#  Node.js HTTP Server – Request, Response, Routing, Body & Headers

A simple Node.js server built using the core **HTTP module**.
This project demonstrates:

* URL Handling
* HTTP Methods (GET, POST)
* Request Headers
* Request Body (Form Data)
* Routing
* Response Headers, Status Codes, HTML Response
* Login Form Handling

---

## 📌 **1. What This Server Does**

This Node.js server:

* Shows a **Login Form** on `GET /`
* Receives **POST login data** on `/login`
* Parses the **request body**
* Sends back a JSON response
* Returns **404** for unknown routes
* Logs URL, method, and headers in terminal

---

## 📌 **2. Concepts Used**

### 🔹 **HTTP Module**

`http` is a core Node.js module used to create servers.

```js
const http = require('http');
```

---

### 🔹 **Request Object (`req`)**

Browser → Server info

Includes:

| Property         | Meaning                                     |
| ---------------- | ------------------------------------------- |
| `req.url`        | Which route requested (`/`, `/login`, etc.) |
| `req.method`     | GET / POST / PUT / DELETE                   |
| `req.headers`    | Browser/device metadata                     |
| `req.on("data")` | Receive body chunks                         |
| `req.on("end")`  | Finish receiving body                       |

---

### 🔹 **Response Object (`res`)**

Server → Browser response

Includes:

| Method                 | Meaning                |
| ---------------------- | ---------------------- |
| `res.statusCode = 200` | Set HTTP status        |
| `res.setHeader()`      | Set response headers   |
| `res.write()`          | Send data part-by-part |
| `res.end()`            | End response           |

---

### 🔹 **Routing**

We manually check:

```js
if (req.method === "GET" && req.url === "/")
```

This is how we create routes without Express.

---

### 🔹 **Body Parsing (POST Data)**

POST data arrives in **chunks**, so we collect them using:

```js
let body = "";
req.on("data", chunk => body += chunk.toString());
req.on("end", () => {...});
```

---

### 🔹 **Headers**

Used to describe the request or response.

Examples:

| Header        | Purpose                                     |
| ------------- | ------------------------------------------- |
| Content-Type  | Tells browser type of response (HTML, JSON) |
| Authorization | Authentication token                        |
| User-Agent    | Browser/device information                  |

---

## 📌 **3. Project Code**

```js
const http = require('http');

const server = http.createServer((req, res) => {

    console.log("URL:", req.url);
    console.log("METHOD:", req.method);
    console.log("HEADERS:", req.headers);

    // 1. HOME PAGE (GET)
    if (req.method === "GET" && req.url === "/") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");

        res.write(`
            <h1>Welcome!</h1>
            <form action="/login" method="POST">
                <input type="text" name="username" placeholder="Enter Username" />
                <input type="password" name="password" placeholder="Enter Password" />
                <button type="submit">Login</button>
            </form>
        `);

        return res.end();
    }

    // 2. HANDLE LOGIN (POST)
    if (req.method === "POST" && req.url === "/login") {
        let body = "";

        req.on("data", chunk => {
            body += chunk.toString();
        });

        req.on("end", () => {
            console.log("POST BODY:", body);

            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");

            res.end(JSON.stringify({
                message: "Login Successful!",
                receivedData: body
            }));
        });
    }

    // 3. OTHER ROUTES
    else {
        res.statusCode = 404;
        res.setHeader("Content-Type", "text/plain");
        res.end("404 Not Found");
    }
});

server.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});
```

---

## 📌 **4. How to Run**

### 1️⃣ Install Node.js

Download from: [https://nodejs.org](https://nodejs.org)

### 2️⃣ Save file as `server.js`

### 3️⃣ Run the server

```sh
node server.js
```

You will see:

```
Server running on http://localhost:5000
```

---

## 📌 **5. Testing**

### 🔹 **Visit Home Page**

Open your browser and go to:

```
http://localhost:5000/
```

You will see a login form.

### 🔹 **Submit Login Form**

Enter username + password → click **Login**
Server prints form data in terminal.

---

## 📌 **6. Real-Time Use Cases**

| Feature         | Real-Life Usage                 |
| --------------- | ------------------------------- |
| GET `/`         | Home page of website            |
| POST `/login`   | User login system               |
| Request headers | Authentication, tokens          |
| Body parsing    | Login, registration forms       |
| Status codes    | API communication               |
| Routing         | Different pages / API endpoints |

---

✔ Core Node.js HTTP handling
✔ Routing system without Express
✔ GET & POST processing
✔ Understanding URL, method, headers
✔ Body parsing manually
✔ Status codes & headers usage
✔ Form handling basics


