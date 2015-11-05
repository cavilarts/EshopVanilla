(function () {
    function xhrProxy() {
        var xmlhttp = new XMLHttpRequest(),
            url = "./static/content/content.json";

        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
                // Result:
                var myArr = JSON.parse(xmlhttp.responseText);
            }
        }

        xmlhttp.open("GET", url, true);
        xmlhttp.send();
    }
    
    xhrProxy();
})();