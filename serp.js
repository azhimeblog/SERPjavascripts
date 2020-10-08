function keywordscheck() {
    waiting = "<button class=\"wait\"></button>"
    document.getElementById("dataset").innerHTML = waiting;


    let keywords = document.getElementById("keywords").value;
    let urlsite = document.getElementById("urlsite").value;

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
        "data": "{ \"query\": \"q=" + keywords + "&num=100\", \"website\": \"  " + urlsite + "\"}"
    }

    $.ajax(settings).done(function(serp) {


        console.log(serp);

        if (serp.position === 0 & serp.position === -1) {
            document.getElementById("dataset").innerHTML = "ไม่พบอันดับลองใหม่อีกครั้ง";

        } else {
            document.getElementById("dataset").innerHTML = "ทำที่คุณค้นหาคือ  " + keywords + "<br>อันดับของคำนี้อยู่ที่ อันดับ " + serp.position + "<br>เว็บไซต์ของคุณคือ " + urlsite;
        }

    });

}