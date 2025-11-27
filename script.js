document.querySelector(".github-btn").addEventListener("click", () => {
  chrome.tabs.create({ url: "https://github.com/loading617/DownloadYouTubeComment" });
});

const bugReportBtn = document.querySelector(".btn");
bugReportBtn.innerHTML = chrome.i18n.getMessage("bugReport");
bugReportBtn.addEventListener("click", () => {
  chrome.tabs.create({ url: "https://github.com/loading617/DownloadYouTubeComment/issues" });
});

const changelogBtn = document.querySelector(".btn");
changelogBtn.innerHTML = chrome.i18n.getMessage("changelog");
changelogBtn.addEventListener("click", () => {
  chrome.tabs.create({ url: "https://downloadyoutubecomment.com/changelog" });
});
