function sanitizeFile(name) {
    return name.replace(/[\/\\:*?"<>|]/g, "").substring(0, 100);
}

function downloadComment(user, comment) {
    const filename = sanitizeFilename(`${user} - ${comment}.description`); 
}

chrome.downloads.download({
  url: URL.createObjectURL(
    new Blob([comment], { type: 'text/plain' })
  ),
  filename: filename,
  saveAs: true
});

