var http = {

    getSync: function (url) {

        var result = null;
        $.ajax({
            type: "GET",
            async: !1,
            url: url,
            success: function (response, status) {
                result = response;
            }, error: function (a, b, c) {
                console.error("http.getSync : ", a, b, c);
            }
        });

        return result;
    },

    XMLHttpFactories: [
        function () {
            return new XMLHttpRequest()
        },
        function () {
            return new ActiveXObject("Msxml2.XMLHTTP")
        },
        function () {
            return new ActiveXObject("Msxml3.XMLHTTP")
        },
        function () {
            return new ActiveXObject("Microsoft.XMLHTTP")
        }
    ],

    createXMLHTTPObject: function () {
        var xmlhttp = false;
        for (var i = 0; i < http.XMLHttpFactories.length; i++) {
            try {
                xmlhttp = http.XMLHttpFactories[i]();
            }
            catch (e) {
                continue;
            }
            break;
        }
        return xmlhttp;
    },

    xhr: function (url, callback) {

        var ajax = http.createXMLHTTPObject();
        ajax.open('GET', url, true); // Async
        ajax.onload = function () {
            callback(JSON.parse(this.responseText));
        };

        ajax.onerror = function () {
            callback(null);
        };

        ajax.send(null);
    }

};