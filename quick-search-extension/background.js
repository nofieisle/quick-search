chrome.commands.onCommand.addListener(async (command) => {
  if (command !== 'search-selected-text') return;

  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  const results = await chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => window.getSelection().toString().trim()
  });

  const selectedText = results[0]?.result;
  if (selectedText) {
    const url = `https://www.google.com/search?q=${encodeURIComponent(selectedText)}`;
    chrome.tabs.create({ url });
  }
});
