function onLinkClicked(link, tab) {
  if (typeof link.linkUrl === 'string') {
    chrome.windows.create({
      url: link.linkUrl,
      type: 'popup',
      width: 560,
      height: 365,
      incognito: tab.incognito,
    });
  }
}

chrome.contextMenus.create({
  title: 'Open in Popup',
  contexts: ['link'],
  onclick: onLinkClicked,
});

