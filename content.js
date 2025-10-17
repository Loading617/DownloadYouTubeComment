function injectDownloadButtons() {
  const commentNodes = document.querySelectorAll('ytd-comment-thread-renderer');

  commentNodes.forEach(node => {
    if (node.querySelector('.yt-comment-download-btn')) return;

    const commentText = node.querySelector('#content-text')?.innerText;
    const username = node.querySelector('#author-text span')?.innerText;
    const menuButtonContainer = node.querySelector('#action-menu');

    if (commentText && username && menuButtonContainer) {
      const btn = document.createElement('button');
      btn.className = 'yt-comment-download-btn';
      btn.title = 'Download this comment';
      btn.textContent = '⇊';
      btn.style.setProperty('color', '#ff0000', 'important');
      btn.style.setProperty('-webkit-text-fill-color', '#ff0000', 'important');
      btn.style.marginLeft = '6px';
      btn.style.background = 'transparent';
      btn.style.border = 'none';
      btn.style.cursor = 'pointer';
      btn.style.fontSize = '16px';

      btn.onclick = () => {

        const sanitize = str =>
          str.replace(/[<>:"/\\|?*]+/g, '').replace(/\s+/g, ' ').trim();

        const safeUser = sanitize(username);
        const safeComment = sanitize(commentText).substring(0, 50);
        const fileName = `${safeUser} - ${safeComment}.txt`;

        const fileContent = `Username: ${username}\nComment: ${commentText}`;
        
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
