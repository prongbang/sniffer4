var media = {
    contentType: "content-type",
    video: "video",
    audio: "audio",
    other: "other",
    xmlHttpRequest: "xmlhttprequest",
    findURL: function (data) {
        var url = "";
        if (!!data && data.type == media.other || data.type == media.xmlHttpRequest) {
            if (!!data.responseHeaders) {
                if (media.checkContentType(data.responseHeaders)) {
                    url = data.url;
                }
            }
        }
        return url;
    },
    checkContentType: function (headers) {
        var found = false;
        for (var i = 0; i < headers.length; i++) {
            if ((headers[i].name).toLowerCase() == media.contentType && ((headers[i].value).indexOf(media.video) != -1 || (headers[i].value).indexOf(media.audio) != -1)) {
                found = true;
                break;
            }
        }
        return found;
    }
};
