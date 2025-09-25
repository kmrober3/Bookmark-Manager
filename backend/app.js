const express = require("express");
const app = express();
const port = 8080;

//Define a route for GET request to the root URL
app.get('/', (req, res) => {
    res.send("Hello World from express!");
}); 

//Start the server 
app.listen(port, () => {
    console.log(`Example listening app at http://localhost:${port}`);
});