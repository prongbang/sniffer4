var video = {

    findURLVideo: function(data) {

      var url = "";
      var contentType = "";

      if(!!data && data.type == "other" || data.type == "xmlhttprequest") {
        if (!!data.responseHeaders) {
          if(video.checkContentType(data.responseHeaders)){
            url = data.url;
          }
        }
      }
      return url;
    },

    checkContentType: function(headers) {
      var found = false;
      for (var i = 0; i < headers.length; i++) {
        if ((headers[i].name).toLowerCase() == "content-type" && (headers[i].value).indexOf("video") != -1) {
          found = true;
          break;
        }
      }
      return found;
    }

};
