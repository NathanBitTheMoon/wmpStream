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

module.exports = Youtube;