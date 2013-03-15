chrome.extension.sendRequest({
  method: "getSetting"
}, function(response) {
  var setting = response.setting;
  if (setting.active) {
    $('#msglf-slide').remove();
    chrome.extension.sendRequest({
      method: "setBadgeColor",
      color: [255, 51, 255, 255]
    });
  }
});
