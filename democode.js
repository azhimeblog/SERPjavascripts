var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://google-search3.p.rapidapi.com/api/v1/serp/",
    "method": "POST",
    "headers": {
        "x-rapidapi-host": "google-search3.p.rapidapi.com",
        "x-rapidapi-key": "e65e6d3ee4msh395ed7d245d01f9p1e2a0ejsn7f193f1f07fe",
        "content-type": "application/json",
        "accept": "application/json"
    },
    "processData": false,
    "data": "{ \"query\": \"q=google+search+api&num=100\", \"website\": \"https://rapidapi.com\"}"
}

$.ajax(settings).done(function(response) {
    console.log(response);
});