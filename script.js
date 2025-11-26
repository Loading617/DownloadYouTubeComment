document.querySelector(".github-btn").addEventListener("click", () => {
  chrome.tabs.create({ url: "https://github.com/loading617/DownloadYouTubeComment" });
});

const bugReport = document.querySelector(".btn");
bugReportBtn.innerHTML = chrome.i18n.getMessage("bugReport");
bugReport.addEventListener("click", () => {
  chrome.tabs.create({ url: "https://github.com/loading617/DownloadYouTubeComment/issues" });
});

const changelog = document.querySelector(".btn");
changelogBtn.innerHTML = chrome.i18n.getMessage("changelog");
changelog.addEventListener("click", () => {
  chrome.tabs.create({ url: "https://downloadyoutubecomment.com/changelog" });
});