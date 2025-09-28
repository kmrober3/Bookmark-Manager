// 1. Import required libraries
const express = require("express");        // Express framework
const fetch = require("node-fetch");       // To fetch HTML from external websites
const { JSDOM } = require("jsdom");        // To parse HTML and extract the <title>

// 2. Initialize the app
const app = express();
const PORT = 8080; // You can change this

// 3. Middleware to parse JSON bodies from POST requests into raw JS 
app.use(express.json());

// 4. Example route: health check
//    Visit http://localhost:8080/ in the browser
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// 5. API route: get the title of a webpage
//    You would call: GET http://localhost:3000/title?url=https://www.foxnews.com/
app.get("/title", async (req, res) => {
  const url = req.query.url; // read ?url=... from query string

  if (!url) {
    return res.status(400).json({ error: "Missing url parameter" });
  }

  try {
    // Fetch the HTML of the given page
    const response = await fetch(url);
    const html = await response.text();

    // Parse it with JSDOM
    const dom = new JSDOM(html);
    const title = dom.window.document.querySelector("title")?.textContent || "No title found";

    // Send JSON response back
    res.json({ url, title });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Could not fetch or parse URL" });
  }
});

// 6. Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
