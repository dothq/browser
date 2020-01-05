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

// console.log(window.location.href)
if(window.location.href == "dot://newtab") {
  (async function() {
    console.log("async pls")
    const w = await webFrame.executeJavaScript('window');
    console.log(ipcRenderer.sendSync('get-settings-sync'))
    w.settings = ipcRenderer.sendSync('get-settings-sync');
  }) 
}

const hostname = window.location.href.substr('dot://'.length);

if (window.location.href.startsWith('dot://')) {
  window.addEventListener('DOMContentLoaded', () => {
    if (hostname.startsWith('settings')) document.title = 'Settings';
    else if (hostname.startsWith('history')) document.title = 'History';
    else if (hostname.startsWith('bookmarks')) document.title = 'Bookmarks';
    else if (hostname.startsWith('extensions')) document.title = 'Extensions';
    else if (hostname.startsWith('newtab')) {
      document.title = 'New tab';
    }
  });
}

if(window.location.protocol == 'dot:') {
  if(window.location.hostname == 'newtab') {
    window.addEventListener(
      'message',
      event => {
        ipcRenderer.send(`webui-${window.location.hostname}-message`, event.data);
      },
      false,
    );
  }
}

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

const updateAlert = () => {
  webFrame.executeJavaScript('window', false).then(w => {
    w.alert = (message?: any) => {
      console.log("Dispatched alert")
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

document.addEventListener('DOMContentLoaded', () => {
  updateAlert();
  setInterval(updateAlert, 1000)
})