console.log("Plugin started");

const request = new Request("http://www.nbti.net:3621/?song=OwO", {
    method: "GET"
});

function checkResponse(response) {
    console.log(response);
}

fetch(request).then(checkResponse);

console.log("Request sent");