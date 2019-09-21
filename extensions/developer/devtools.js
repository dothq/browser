fetch('https://devtools-dot.enderdev.now.sh/serve_file/devtools.css')
  .then(res => res.text())
  .then(data => {
    chrome.devtools.panels.applyStyleSheet(data);
  });
