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
            console.log("POST BODY:", body);  // real POST data

            res.statusCode = 200;
            res.setHeader("Content-Type", "text/plain");

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
