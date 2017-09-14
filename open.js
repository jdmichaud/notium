chrome.commands.onCommand.addListener(function(command) {
  chrome.tabs.create({ url: "note.html" });
});

chrome.tabs.onCreated.addListener(function() {
  // TODO: Select the textarea so the user can start typing right away
});

