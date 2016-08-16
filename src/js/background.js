
chrome.webRequest.onResponseStarted.addListener(function (data) {

    if (!data || data.tabId < 0) return false; 

    chrome.tabs.get(data.tabId, function (tab) {

        if (chrome.runtime.lastError) {
            console.log(chrome.runtime.lastError.message);
        } else if (!tab) {
            console.log(data);
        } else {
            var tabInfo = tab;
            data.tab = tabInfo;
            if (!tabInfo.url) return false;

            var url = media.findURL(data);
            if(url != "") {
              console.log(url);
              chrome.tabs.sendMessage(tab.id, { action:"success", url: url });
            }

        }

    });

}, {

    urls: ["<all_urls>"]

}, ["responseHeaders"]);

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {

        if (request.action == "download") {

          var filename = request.name + ".mp4";

          var options = {
              url: request.url,
              filename: filename,
              saveAs: true,
              method: "GET"
          };

          chrome.downloads.download(options, function (downloadId) { });

        }

});
