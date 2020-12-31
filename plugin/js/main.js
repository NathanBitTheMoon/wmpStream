function title() {
    return document.getElementsByClassName("ytd-video-primary-info-renderer")[6].innerHTML;
}

function channel() {
    return document.getElementsByClassName("style-scope yt-formatted-string")[27].innerHTML;
}

function communicateInfo() {
    var xrh = new XMLHttpRequest();
    xrh.open("GET", `http://localhost:3621/?song=${title()}&artist=${channel()}`);
    xrh.send();
}

setInterval(communicateInfo, 5000);