chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
  if (request.method == "getSetting") {
    sendResponse({setting: localStrage.getItem('setting')});
  } else {
    sendResponse({});
  }
});