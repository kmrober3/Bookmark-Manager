import express from "express";  
import fetch from "node-fetch";           
import { JSDOM } from "jsdom";     


const app = express();
const PORT = 8080; 

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is running");
});

//    API route: get the title of a webpage
//    You would call: GET http://localhost:8080/title?url=https://www.foxnews.com/
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

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
