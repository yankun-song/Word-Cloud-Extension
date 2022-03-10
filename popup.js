//const fs = require("fs");

// Initialize button with user's preferred color
let changeColor = document.getElementById("changeColor");

chrome.storage.sync.get("color", ({ color }) => {
  changeColor.style.backgroundColor = color;
});

// When the button is clicked, inject setPageBackgroundColor into current page
changeColor.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  console.log(tab.url);
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: contentGetter,
  });
});

// The body of this function will be executed as a content script inside the
// current page
function setPageBackgroundColor() {
  chrome.storage.sync.get("color", ({ color }) => {
    document.body.style.backgroundColor = color;
  });
}

function contentGetter() {
  var bodyScripts = document.querySelectorAll("body script");
  for (var i = 0; i < bodyScripts.length; i++) {
    bodyScripts[i].remove();
  }
  var str = document.body.textContent;
  console.log("hello Yankun!", str);
  const object = {
    format: "png",
    width: 1000,
    height: 1000,
    fontFamily: "sans-serif",
    fontScale: 15,
    scale: "linear",
    text: "This is a test. I repeat, this is a test. We are only testing the functionality of this api, nothing else. End of test.",
  };
  object.text = str;
  fs.appendFileSync("churchill.json", object);
  //document.body.innerHTML = "<pre>" + str + "</pre>";
}
