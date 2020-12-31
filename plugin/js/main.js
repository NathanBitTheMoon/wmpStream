function title() {
    return encodeURIComponent(document.getElementsByClassName("ytd-video-primary-info-renderer")[6].innerHTML);
}

function channel() {
    return encodeURIComponent(document.getElementsByClassName("ytd-video-secondary-info-renderer")[0].getElementsByClassName("yt-formatted-string")[0].innerHTML);
}

function communicateInfo() {
    var xrh = new XMLHttpRequest();
    xrh.open("GET", `http://localhost:3621/?song=${title()}&artist=${channel()}`);
    xrh.send();
}

setInterval(communicateInfo, 5000);