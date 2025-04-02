const http = require("http");
const url = require("url");

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Parse the URL and extract query parameters
  const query = url.parse(req.url, true).query;
  const name = query.name || "Guest";
  const age = query.age || "Unknown";
  const email = query.email || "Not Provided";

  // Set response header
  res.writeHead(200, { "Content-Type": "text/html" });

  // Generate response with submitted data
  res.write("<h1>Form Data Received</h1>");
  res.write("<p>Here is the data you submitted:</p>");
  res.write(`<ul>
        <li><strong>Name:</strong> ${name}</li>
        <li><strong>Age:</strong> ${age}</li>
        <li><strong>Email:</strong> ${email}</li>
    </ul>`);

  res.end();
});

// Start the server on port 3000
server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
