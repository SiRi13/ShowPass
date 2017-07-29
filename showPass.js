var clickedElement = null;

window.addEventListener("message", function(event) {
  if (event.source != window) {
    return;
  }

  if (event.data.type && (event.data.type == "FROM_PAGE")) {
    console.log("content script received: " + event.data.text);
    clickedElement = event.data.text;
  }
})

function requestSettingEventListener(tabId) {
  chrome.tabs.sendRequest(tabId, {});
}

function requestClickedElement(tabId) {
  chrome.tabs.sendRequest(tabId, {}, function(elem) {
    clickedElement = elem;
  })
}

chrome.tabs.onUpdated.addListener(function(tabId, change, tab) {
  if (change.status == "complete") {
    requestSettingEventListener(tabId);
  }
});

chrome.tabs.onActivated.addListener(function(activeInfo) {
  requestSettingEventListener(activeInfo.tabId);
});

var context = "editable";
var title = "Toggle Password"
var id = chrome.contextMenus.create({
  "title": title,
  "contexts": [context],
  "onclick": function(info, tab) {
    requestClickedElement(tab.id);
    if (clickedElement != null) {
      if (clickedElement.getAttribute('type') === 'password') {
        clickedElement.setAttribute('type', 'text');
      }
      else {
        clickedElement.setAttribute('type', 'password');
      }
    }
  }
});
