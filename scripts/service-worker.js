chrome.action.onClicked.addListener((tab) => {
    chrome.tabs.executeScript({
        file: 'contentScript.js',
        args: [tab.url],
    })
})