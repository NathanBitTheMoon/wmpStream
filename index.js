// Define various constants
const express = require("express");
const config = require("./config.json");
const server = express();

const port = 3621;

var currentSong = "";
var currentArtist = "";
var currentAlbum = "";

// Server configuration
server.use(express.static("./html/"));

server.get('/', (req, res) => {
    res.json({"nbtm": true});

    // Set currently playing song info
    // Browser plugin/application will make requests to the node server to report the information
    // Stores the information in variables to be served to a client later.
    if (req.query.song != undefined) { currentSong = req.query.song; }
    if (req.query.artist != undefined) { currentArtist = req.query.song; }
    if (req.query.currentAlbum != undefined) { currentAlbum = req.query.song; }
});

server.get('/song', (req, res) => {
    // Serve the file that will be used to periodically refresh the information on the page
    // File's JS will query the server every 1000ms, getting the previously stored information.
    // This is done so that the page can just be added as a browser source in OBS and will automatically refresh
    res.sendFile(__dirname +  '/html/song.html');
});

server.get('/getMeta', (req, res) => {
    // Return metadata about currently playing songs that were previously reported.
    // This method is used by the frontend pages and other APIs.
    // This is done to allow the frontend to retrieve the current song info without any dumb stuff.
    if (req.query.data == "song") {
        res.statusCode = 200;
        res.send(currentSong);
    } else if (req.query.data == "album") {
        res.statusCode = 200;
        res.send(currentAlbum);
    } else if (req.query.data == "artist") {
        res.statusCode = 200;
        res.send(currentArtist);
    } else {
        res.statusCode = 404;
        res.send("Command not found");
    }
})

// Start the application server
server.listen(port, () => {
    console.log(`Server started. Listening on localhost:${port}`);
});