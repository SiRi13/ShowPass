var context = "editable";
var title = "Toggle Password";
var id = chrome.contextMenus.create({
  "title": title,
  "contexts": [context],
  "onclick": function(info, tab) {
      var tabId = tab.id;
    chrome.tabs.sendRequest(tabId, {});
  }
});
