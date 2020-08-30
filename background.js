// chrome.runtime.onInstalled.addListener(function () {
//   rateUrl(0)
// })
chrome.tabs.onActivated.addListener(onActiveTabChange)

function onActiveTabChange() {
  chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
    let url = tabs[0].url
    saveCurrentUrl(url)
    // use `url` here inside the callback because it's asynchronous!
  })
}

function saveCurrentUrl(data) {
  chrome.storage.local.set({ currentUrl: data.url }, function () {
    //fetch rate of current url and updateIcon
    updateIcon()
  })
}

function rateUrl(rate) {
  chrome.storage.local.set({ rate }, function () {
    updateIcon()
  })
}

function updateIcon() {
  chrome.storage.local.get(['rate', 'currentUrl'], function (data) {
    var rate = data.rate

    chrome.browserAction.setBadgeText({ text: String(rate) })

    if (rate === 0) {
      chrome.browserAction.setIcon({ path: 'images/bad-face-32.png' })
      chrome.browserAction.setBadgeBackgroundColor({ color: '#900' })
    } else if (rate === 2.5) {
      chrome.browserAction.setIcon({ path: 'images/neutral-face-32.png' })
      chrome.browserAction.setBadgeBackgroundColor({ color: '#888' })
    } else {
      chrome.browserAction.setIcon({ path: 'images/good-face-32.png' })
      chrome.browserAction.setBadgeBackgroundColor({ color: '#090' })
    }
  })
}
