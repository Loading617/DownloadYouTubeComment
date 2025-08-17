function injectDownloadButtons() {
  const commentNodes = document.querySelectorAll('ytd-comment-thread-renderer');

  commentNodes.forEach(node => {
    if (node.querySelector('.yt-comment-download-btn')) return;

    const commentText = node.querySelector('#content-text')?.innerText;
    const menuButtonContainer = node.querySelector('#action-menu');

    if (commentText && menuButtonContainer) {
      const btn = document.createElement('button');
      btn.className = 'yt-comment-download-btn';
      btn.title = 'Download this comment';
      btn.textContent = '⇊';
      btn.style.marginLeft = '6px';
      btn.style.background = 'transparent';
      btn.style.border = 'none';
      btn.style.cursor = 'pointer';
      btn.style.fontSize = '16px';

      btn.onclick = () => {
        const blob = new Blob([commentText], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'comment.txt';
        a.click();
        URL.revokeObjectURL(url);
      };

      menuButtonContainer.appendChild(btn);
    }
  });
}

setInterval(injectDownloadButtons, 2000);


