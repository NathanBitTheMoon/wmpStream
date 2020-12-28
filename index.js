// Define various constants
const express = require("express");
const server = express();

const port = 3621;

// Start the application server
server.listen(port, () => {
    console.log(`Server started. Listening on localhost:${port}`);
})