var clickedElement = null;

if (window == top) {
  chrome.extension.onRequest.addListener(function(req, sender, sendResponse) {
    toggleType();
  });

  var inputElements = document.getElementsByTagName("INPUT");
  console.log("found inputElements: " + inputElements.length);
  for (var i = 0; i < inputElements.length; ++i) {
      inputElements[i].addEventListener("mousedown", function(event) {
          if (event.button == 2 && event.target.tagName === "INPUT") {
            clickedElement = event.target;
          }
      });
  }
}

function toggleType() {
  if (clickedElement != null) {
      if (clickedElement.type === 'password') {
          clickedElement.type = 'text';
      }
      else {
          clickedElement.type = 'password';
      }
  }
}
