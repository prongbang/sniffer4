

$("body").click(function(e){
  var posX = $(this).offset().left, posY = $(this).offset().top;
  var x = (e.pageX - posX), y = (e.pageY - posY);
});

function setPopup(url) {
  return '<div class="sniffer4-popup" style="background: #E91E63;position: fixed; bottom: 0px; left: 42%;width: auto; z-index: 9999999; color: rgb(51, 51, 51); opacity: 1; text-align: center;padding-right: 5px;"> <input type="hidden" id="sniffer4-url" value="'+url+'"> <button class="sniffer4-download" style="color: #ffffff; background: #E91E63; font-size: 13px; border: none; cursor: pointer; border-radius: 1px; padding: 5px 5px 5px 20px;"> <span style="padding-right: 10px;">Downloads Video </span> </button> <span style="color: #333333;">|</span> <span style="padding-left: 10px;padding-right: 10px;"> <a href="'+url+'" target="_blank" style="color: orange;" wotsearchprocessed="true">Get Link</a> </span> <span style="color: #333333;padding-right: 1px;">|</span> <span><a class="sniffer4-close" href="#" style="padding-left: 5px;background: rgba(51, 51, 51, 0.32);border-radius: 10px;padding: 0px 5px 2px 5px;text-decoration: none;" wotsearchprocessed="true">x</a></span></div>';
}

chrome.runtime.onMessage.addListener(
 function(request, sender) {

   if(request.action == "success") {
     var url = request.url;
     console.log(url);

     $("body").append(setPopup(url));

     $(".sniffer4-download").click(function(){
       $(".sniffer4-popup").hide();
       var url = $("#sniffer4-url").val();
       var json = {
         action: "download",
         url: url,
         name: window.location.hostname
       };
       chrome.runtime.sendMessage(json);
     });

     $(".sniffer4-close").click(function() {
       $(".sniffer4-popup").remove();
     });

   }

});
