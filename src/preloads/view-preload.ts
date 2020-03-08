import { ipcRenderer, webFrame } from 'electron';

const tabId = parseInt(
  process.argv.find(x => x.startsWith('--tab-id=')).split('=')[1],
  10,
);

const goBack = () => {
  ipcRenderer.send('browserview-call', {
    tabId,
    scope: 'webContents.goBack',
  });
};

const goForward = () => {
  ipcRenderer.send('browserview-call', {
    tabId,
    scope: 'webContents.goForward',
  });
};

window.addEventListener('mouseup', e => {
  if (e.button === 3) {
    goBack();
  } else if (e.button === 4) {
    goForward();
  }
});

if (window.location.protocol === 'dot:' || window.location.host == "localhost:4445") {
  (async function() {
    const w = await webFrame.executeJavaScript('window');
    w.settings = ipcRenderer.sendSync('get-settings-sync');
  })();

  window.onload = () => {
    if (window.location.hostname === 'settings') document.title = 'Settings';
    else if (window.location.hostname === 'history') document.title = 'History';
    else if (window.location.hostname === 'bookmarks')
      document.title = 'Bookmarks';
    else if (window.location.hostname === 'extensions') {
      document.title = 'Extensions';
    } else if (window.location.hostname === 'newtab') {
      document.title = 'New tab';
    } else if (window.location.hostname === 'error') {
      document.title = window.location.hash.split("#")[1] || 'dot://error';
    }

  };
}

const updateAlert = () => {
  webFrame.executeJavaScript('window', false).then(w => {
    w.navigator.usingDotBrowser = true

    w.alert = (message?: any) => {
      ipcRenderer.send('show-alert', 'alert', message);
    }

    w.confirm = (message?: any) => {
      ipcRenderer.send('show-alert', 'confirm', message);
    }

    w.prompt = (message?: any) => {
      ipcRenderer.send('show-alert', 'input', message);
    }
  })
}

const insertStyles = () => {
  const styleElement = document.createElement("style")

  styleElement.textContent = `
    ::selection {
      background-color: #cfe8fc;
    }
  `

  styleElement.setAttribute("data-dot-special", "");

  document.head.appendChild(styleElement)
}

document.addEventListener('DOMContentLoaded', () => {
  const flags = {
    disableHighlight: document.querySelector('meta[name="dot-disable-highlight"][content="true"]') == null
  }

  updateAlert();

  if(flags.disableHighlight) {
    insertStyles();
  }

  setInterval(updateAlert, 1000)

  let beginningScrollLeft: number = null;
  let beginningScrollRight: number = null;
  let horizontalMouseMove = 0;
  let verticalMouseMove = 0;

  const resetCounters = () => {
    beginningScrollLeft = null;
    beginningScrollRight = null;
    horizontalMouseMove = 0;
    verticalMouseMove = 0;
  };

  function getScrollStartPoint(x: number, y: number) {
    let left = 0;
    let right = 0;

    let n = document.elementFromPoint(x, y);

    while (n) {
      if (n.scrollLeft !== undefined) {
        left = Math.max(left, n.scrollLeft);
        right = Math.max(right, n.scrollWidth - n.clientWidth - n.scrollLeft);
      }
      n = n.parentElement;
    }
    return { left, right };
  }

  document.addEventListener('wheel', e => {
    verticalMouseMove += e.deltaY;
    horizontalMouseMove += e.deltaX;

    if (beginningScrollLeft === null || beginningScrollRight === null) {
      const result = getScrollStartPoint(e.deltaX, e.deltaY);
      beginningScrollLeft = result.left;
      beginningScrollRight = result.right;
    }
  });

  ipcRenderer.on('scroll-touch-end', () => {
    if (
      horizontalMouseMove - beginningScrollRight > 150 &&
      Math.abs(horizontalMouseMove / verticalMouseMove) > 2.5
    ) {
      if (beginningScrollRight < 10) {
        goForward();
      }
    }

    if (
      horizontalMouseMove + beginningScrollLeft < -150 &&
      Math.abs(horizontalMouseMove / verticalMouseMove) > 2.5
    ) {
      if (beginningScrollLeft < 10) {
        goBack();
      }
    }

    resetCounters();
  })
})