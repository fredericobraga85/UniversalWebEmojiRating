chrome.tabs.onActivated.addListener(onActiveTabChange)

function onActiveTabChange() {
  chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
    let url = tabs[0].url
    saveCurrentUrl(url, function () {
      //fetch rate of current url and updateIcon
      updateIcon()
    })
    // use `url` here inside the callback because it's asynchronous!
  })
}

function saveCurrentUrl(url, callback) {
  chrome.storage.local.set({ currentUrl: url }, function () {
    callback()
  })
}

function rateUrl(rate) {
  chrome.storage.local.get('currentUrl', function (data) {
    chrome.storage.local.set({ [data.currentUrl]: rate }, function () {
      //fetch rate of current url and updateIcon
      updateIcon()
    })
  })
}

function updateIcon() {
  chrome.storage.local.get('currentUrl', function (data) {
    var currentUrl = data.currentUrl
    chrome.storage.local.get([data.currentUrl], function (data) {
      var rate = data[currentUrl]
      chrome.browserAction.setBadgeText({ text: String(rate) })

      if (rate === 0) {
        chrome.browserAction.setIcon({ path: 'images/bad-face-32.png' })
        chrome.browserAction.setBadgeBackgroundColor({ color: '#900' })
      } else if (rate === 2.5) {
        chrome.browserAction.setIcon({ path: 'images/neutral-face-32.png' })
        chrome.browserAction.setBadgeBackgroundColor({ color: '#888' })
      } else if (rate === 5) {
        chrome.browserAction.setIcon({ path: 'images/good-face-32.png' })
        chrome.browserAction.setBadgeBackgroundColor({ color: '#090' })
      } else {
        chrome.browserAction.setBadgeText({ text: '' })
        chrome.browserAction.setIcon({ path: 'images/good-face-32.png' })
      }
    })
  })
}
