chrome.extension.sendRequest({
  method: "getSetting"
}, function(response) {
  var setting = response.setting;
  var color = [51, 51, 51, 255];

  if (setting.active) {
    $leafs = $('#msglf-slide');

    if ($leafs.length > 0) {
      $leafs.remove();
      color = [255, 51, 255, 255];
    }
  }

  chrome.extension.sendRequest({
    method: "setBadgeColor",
    color: color
  });
});
