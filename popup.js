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
  window.open(
    // "/Users/yankunsong/Desktop/wordcloud/chart.html",
    "/Users/yankunsong/Desktop/wordcloud/chart.html",
    "CNN_WindowName"
  );

  //document.body.innerHTML = "<pre>" + str + "</pre>";
}
