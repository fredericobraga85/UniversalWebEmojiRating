let btnRateBad = document.getElementById('btnRateBad')
let btnRateMeh = document.getElementById('btnRateMeh')
let btnRateGood = document.getElementById('btnRateGood')

btnRateBad.onclick = function (element) {
  chrome.extension.getBackgroundPage().rateUrl(0)
  window.close()
}

btnRateMeh.onclick = function (element) {
  chrome.extension.getBackgroundPage().rateUrl(2.5)
  window.close()
}

btnRateGood.onclick = function (element) {
  chrome.extension.getBackgroundPage().rateUrl(5)
  window.close()
}
