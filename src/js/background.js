chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
  if (request.method == "getSetting") {
    var setting = JSON.parse(localStorage.getItem('setting')) || {active: true};
    sendResponse({setting: setting});
  } else if (request.method == "setBadgeColor") {
    chrome.browserAction.setBadgeBackgroundColor({color: request.color});
  }else {
    sendResponse({});
  }
});

chrome.browserAction.onClicked.addListener(function(tab){
  var setting = JSON.parse(localStorage.getItem('setting'));
  if (!setting) {
    setting = { active: true };
  }

  setting.active = !setting.active;

  localStorage.setItem('setting', JSON.stringify(setting));

  if (setting.active) {
    chrome.browserAction.setBadgeBackgroundColor({color:[51, 51, 51, 255]});
    chrome.browserAction.setBadgeText({text: 'on'});
  } else {
    chrome.browserAction.setBadgeBackgroundColor({color:[51, 51, 51, 255]});
    chrome.browserAction.setBadgeText({text: 'off'});
  }
});

// TODO: refactoring
var setting = JSON.parse(localStorage.getItem('setting'));
if (!setting) {
  setting = { active: true };
}
if (setting.active) {
  chrome.browserAction.setBadgeBackgroundColor({color:[51, 51, 51, 255]});
  chrome.browserAction.setBadgeText({text: 'on'});
} else {
  chrome.browserAction.setBadgeBackgroundColor({color:[51, 51, 51, 255]});
  chrome.browserAction.setBadgeText({text: 'off'});
}

