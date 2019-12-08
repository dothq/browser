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

console.log(window.location.href)
if (window.location.href == 'dot://newtab') {
  webFrame.executeJavaScript('window', false).then(w => {
    w.settings = ipcRenderer.sendSync('get-settings-sync');
  })

  window.addEventListener(
    'message',
    event => {
      ipcRenderer.send(`dot-${event.data}`);
    },
    false,
  );

  ipcRenderer.on('settings-push', (event: any, data: any) => {
    webFrame.executeJavaScript('window', false).then(w => {
      w.settings = ipcRenderer.sendSync('get-settings-sync');
      console.log('recieved settings push from', data);

      if (w.settings) {
        console.log(event.data, w.settings.uiTheme);
        if (w.settings.uiTheme == 'dark') {
          console.log('dark');
          document
            .getElementById('app')
            .firstElementChild.classList.remove('theme-light');
          document
            .getElementById('app')
            .firstElementChild.classList.add('theme-dark');
        } else {
          console.log('light');
          document
            .getElementById('app')
            .firstElementChild.classList.add('theme-light');
          document
            .getElementById('app')
            .firstElementChild.classList.remove('theme-dark');
        }
      }
    });
  });
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
});