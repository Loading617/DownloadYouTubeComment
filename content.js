function addDownloadButtons() {
  const commentNodes = document.querySelectorAll('ytd-comment-thread-renderer');

  commentNodes.forEach(node => {
    if (node.querySelector('.custom-download-btn')) return;

    const commentText = node.querySelector('#content-text')?.innerText;
    const actionPanel = node.querySelector('#action-buttons');

    if (commentText && actionPanel) {
      const downloadBtn = document.createElement('button');
      downloadBtn.className = 'custom-download-btn';
      downloadBtn.style.marginLeft = '8px';
      downloadBtn.innerText = '⬇️';
      downloadBtn.title = 'Download comment';

      downloadBtn.onclick = () => {
        const blob = new Blob([commentText], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        a.download = 'comment.txt';
        a.click();

        URL.revokeObjectURL(url);
      };

      actionPanel.appendChild(downloadBtn);
    }
  });
}

setInterval(addDownloadButtons, 2000);