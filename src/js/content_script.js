chrome.extension.sendRequest({
  method: "getSetting"
}, function(response) {
  var setting = response.setting;
  if (setting && setting.disable) {return;}

  $('#msglf-slide').remove();
});