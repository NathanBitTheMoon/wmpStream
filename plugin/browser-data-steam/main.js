class Youtube {
    constructor() {

    }

    get title() {
        var pageItems = document.getElementsByClassName("ytd-video-primary-info-renderer");
        var titleObject = pageItems[6];

        return titleObject.innerHTML;
    }

    get artist() {
        var pageItems = document.getElementsByClassName("yt-formatted-string");
        var titleObject = pageItems[0];

        return titleObject.innerHTML;
    }

    get album() {
        return "";
    }
}

class SongObject {
    constructor(artist_i, song_i, album_i) {
        this.album = album_i;
        this.song = song_i;
        this.artist = artist_i;
    }
}

console.log("Plugin started!!!! UwU <3");

const hostname = "localhost:3621";

var sites = {
    "www.youtube.com": Youtube
}

function readSiteData() {
    var siteObject = new sites[document.location.host]();

    var returnObject = new SongObject(siteObject.artist, siteObject.title, siteObject.album);

    return returnObject;
}

function sendData(songInfo) {
    var request = new XMLHttpRequest();
    var url = `http://${hostname}/?song=${encodeURIComponent(songInfo.song)}&&artist=${encodeURIComponent(songInfo.artist)}&&album=${encodeURIComponent(songInfo.album)}`;

    console.log(url);

    request.onerror = function(e) {
        console.log("XRH Error");
        console.log(e);
    }

    request.open("GET", url);
    request.send();
}

function inter() {
    sendData(readSiteData());
}

setInterval(inter, 5000);