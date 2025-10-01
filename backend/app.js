import express from "express";  
import fetch from "node-fetch";           
import { JSDOM } from "jsdom";  
import cors from "cors";    


const app = express();
const PORT = 8080;  

app.use(express.json()); 
app.use(cors());

app.get("/", (req, res) => {
  res.send("Backend is running");
});

//    To test call in Postman: GET http://localhost:8080/title?url=yoururlhere/
app.get("/title", async (req, res) => {
  const url = req.query.url;  

  if (!url) {
    return res.status(400).json({ error: "Missing url parameter" });
  }

  try {
    const response = await fetch(url);
    const html = await response.text(); 

    const dom = new JSDOM(html);
    const title = dom.window.document.querySelector("title")?.textContent || "No title found";

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
