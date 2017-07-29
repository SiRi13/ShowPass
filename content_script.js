var clickedElement = null;

if (window == top) {
  chrome.extension.onRequest.addListener(function(req, sender, sendResponse) {
    setEventListener();
  });

  chrome.extension.onRequest.addListener(function(req, sender, sendResponse) {
    sendResponse(clickedElement.id);
  });
}

function setEventListener() {
  var inputElements = document.getElementsByTagName("input");
  console.log("found inputElements: " + inputElements.length);
  for (var i = 0; i < inputElements.length; ++i) {
    inputElements[i].addEventListener("mousedown", function(event) {
      if (event.button == 2 && event.target.tagName === "INPUT") {
        if (event.target.id === "") {
          event.target.id = "placeholder_id_from_extension";
        }
        clickedElement = event.target;
      }
    });
  }
}
