import {
  BrowserView,
  app,
  Menu,
  nativeImage,
  clipboard,
  BrowserWindow,
  shell,
} from 'electron';
import { appWindow } from '.';
import { sendToAllExtensions } from './extensions';
import { engine } from './services/web-request';
import { parse } from 'tldts';
import console = require('console');
import { resolve } from 'path';
import { Client } from 'discord-rpc';
import * as isDev from 'electron-is-dev';

export class View extends BrowserView {
  public title: string = '';
  public url: string = '';
  public tabId: number;
  public homeUrl: string = 'http://localhost:4444/newtab.html';

  constructor(id: number, url: string) {
    super({
      webPreferences: {
        preload: `${process.cwd()}\\build\\view-preload.js`,
        nodeIntegration: true,
        additionalArguments: [`--tab-id=${id}`],
        nodeIntegrationInSubFrames: true,
        contextIsolation: true,
        partition: 'persist:view',
        plugins: true,
      },
    });

    this.homeUrl = url;
    this.tabId = id;

    var truncateStr = function(str: any, length: any, ending: any) {
      if (length == null) {
        length = 100;
      }
      if (ending == null) {
        ending = '...';
      }
      if (str.length > length) {
        return str.substring(0, length - ending.length) + ending;
      } else {
        return str;
      }
    };

    this.webContents.on('context-menu', (e, params) => {
      let menuItems: Electron.MenuItemConstructorOptions[] = [];

      if (params.mediaType == 'video' || params.mediaType == 'audio') {
        menuItems = menuItems.concat([
          {
            label: 'Open ' + params.mediaType + ' in new tab',
            enabled: params.srcURL.includes('blob:') == false,
            icon: process.cwd() + '\\static\\app-icons\\add.png',
            click: () => {
              appWindow.webContents.send('api-tabs-create', {
                url: params.srcURL,
                active: false,
              });
            },
          },
          {
            label: 'Save ' + params.mediaType,
            enabled: params.srcURL.includes('blob:') == false,
            click: () => {
              this.webContents.downloadURL(params.srcURL);
            },
          },
          {
            label: 'Copy link',
            enabled: params.srcURL.includes('blob:') == false,
            click: () => {
              clipboard.clear();
              clipboard.writeText(params.srcURL);
            },
          },
          {
            type: 'separator',
          },
        ]);
      }

      if (params.linkURL !== '') {
        menuItems = menuItems.concat([
          {
            label: 'Open link in new tab',
            icon: process.cwd() + '\\static\\app-icons\\add.png',
            click: () => {
              appWindow.webContents.send('api-tabs-create', {
                url: params.linkURL,
                active: false,
              });
            },
          },
          {
            type: 'separator',
          },
          {
            label: 'Copy link address',
            click: () => {
              clipboard.clear();
              clipboard.writeText(params.linkURL);
            },
          },
          {
            type: 'separator',
          },
        ]);
      }

      if (params.hasImageContents) {
        menuItems = menuItems.concat([
          {
            label: 'Open image in new tab',
            icon: process.cwd() + '\\static\\app-icons\\add.png',
            click: () => {
              appWindow.webContents.send('api-tabs-create', {
                url: params.srcURL,
                active: false,
              });
            },
          },
          {
            label: 'Save image',
            click: () => {
              this.webContents.downloadURL(params.srcURL);
            },
          },
          {
            label: 'Copy image',
            click: () => {
              const img = nativeImage.createFromDataURL(params.srcURL);

              clipboard.clear();
              clipboard.writeImage(img);
            },
          },
          {
            label: 'Copy image address',
            click: () => {
              clipboard.clear();
              clipboard.writeText(params.srcURL);
            },
          },
          {
            type: 'separator',
          },
        ]);
      }

      if (params.isEditable) {
        menuItems = menuItems.concat([
          {
            role: 'undo',
            accelerator: 'CmdOrCtrl+Z',
          },
          {
            role: 'redo',
            accelerator: 'CmdOrCtrl+Y',
          },
          {
            type: 'separator',
          },
          {
            role: 'cut',
            enabled: params.selectionText.length >= 1,
          },
          {
            role: 'copy',
            accelerator: 'CmdOrCtrl+C',
            enabled: params.selectionText.length >= 1,
          },
          {
            role: 'paste',
            accelerator: 'CmdOrCtrl+V',
          },
          {
            role: 'selectAll',
            accelerator: 'CmdOrCtrl+A',
          },
          {
            type: 'separator',
          },
        ]);
      }

      if (
        !params.isEditable &&
        params.selectionText !== '' &&
        !params.hasImageContents
      ) {
        menuItems = menuItems.concat([
          {
            role: 'copy',
            accelerator: 'CmdOrCtrl+C',
          },
          {
            label: `Search the web for "${truncateStr(
              params.selectionText,
              16,
              '...',
            )}"`,
            click: () => {
              var url = `https://google.com/search?q=${params.selectionText}`;

              this.webContents.loadURL(url);
            },
          },
        ]);
      }

      if (
        !params.hasImageContents &&
        params.linkURL === '' &&
        params.selectionText === '' &&
        !params.isEditable
      ) {
        menuItems = menuItems.concat([
          {
            label: 'Back              ',
            accelerator: 'Alt+Left',
            enabled: this.webContents.canGoBack(),
            click: () => {
              this.webContents.goBack();
            },
          },
          {
            label: 'Forward         ',
            accelerator: 'Alt+Right',
            enabled: this.webContents.canGoForward(),
            click: () => {
              this.webContents.goForward();
            },
          },
          {
            label: 'Refresh',
            accelerator: 'F5',
            click: () => {
              this.webContents.reload();
            },
          },
          {
            type: 'separator',
          },
        ]);
      }

      menuItems.push(
        {
          type: 'separator',
        },
        {
          label: 'View source',
          enabled: this.webContents.getURL().includes('static/pages/') == false,
          click: () => {
            if (this.webContents.getURL().substr(0, 12) != 'view-source:') {
              var url = `view-source:${this.webContents.getURL()}`;

              this.webContents.loadURL(url);
            }
          },
        },
        {
          label: 'Inspect',
          accelerator: 'F12',
          enabled: this.webContents.getURL().includes('static/pages/') == false,
          click: () => {
            if (this.webContents.getURL()) {
              this.webContents.inspectElement(params.x, params.y);

              if (this.webContents.isDevToolsOpened()) {
                this.webContents.devToolsWebContents.focus();
                this.webContents.devToolsWebContents.toggleDevTools();
              }
            }
          },
        },
      );

      const menu = Menu.buildFromTemplate(menuItems);

      menu.popup();
    });

    this.webContents.addListener('found-in-page', (e, result) => {
      appWindow.webContents.send('found-in-page', result);
    });

    this.webContents.on('media-started-playing', (listener: any) => {
      appWindow.webContents.send(`audio-playing-${this.tabId}`);
    });

    this.webContents.on('media-paused', (listener: any) => {
      appWindow.webContents.send(`audio-stopped-${this.tabId}`);
    });

    this.webContents.addListener('did-stop-loading', () => {
      this.updateNavigationState();
      appWindow.webContents.send(`view-loading-${this.tabId}`, false);
    });

    this.webContents.addListener('did-start-loading', () => {
      this.updateNavigationState();
      appWindow.webContents.send(`view-loading-${this.tabId}`, true);
    });

    this.webContents.addListener('did-start-navigation', (...args: any[]) => {
      this.updateNavigationState();

      const url = this.webContents.getURL();

      const { styles, scripts } = engine.getCosmeticsFilters({
        url,
        ...parse(url),
      });

      this.webContents.insertCSS(styles);

      for (const script of scripts) {
        this.webContents.executeJavaScript(script);
      }

      appWindow.webContents.send(`load-commit-${this.tabId}`, ...args);

      this.emitWebNavigationEvent('onBeforeNavigate', {
        tabId: this.tabId,
        url: this.webContents.getURL(),
        frameId: 0,
        timeStamp: Date.now(),
        processId: process.pid,
        parentFrameId: -1,
      });

      this.emitWebNavigationEvent('onCommitted', {
        tabId: this.tabId,
        url,
        sourceFrameId: 0,
        timeStamp: Date.now(),
        processId: process.pid,
        frameId: 0,
        parentFrameId: -1,
      });
    });

    this.webContents.addListener('did-finish-load', async () => {
      //       this.webContents.executeJavaScript(`
      //       /*! Copyright Twitter Inc. and other contributors. Licensed under MIT */
      //       var twemoji=function(){"use strict";var twemoji={base:"https://twemoji.maxcdn.com/2/",ext:".png",size:"72x72",className:"emoji",convert:{fromCodePoint:fromCodePoint,toCodePoint:toCodePoint},onerror:function onerror(){if(this.parentNode){this.parentNode.replaceChild(createText(this.alt,false),this)}},parse:parse,replace:replace,test:test},escaper={"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"},re=/(?:\ud83d\udc68\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c\udffb|\ud83d\udc68\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc]|\ud83d\udc68\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd]|\ud83d\udc68\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c\udffb|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffc]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffd]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c\udffb|\ud83e\uddd1\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb\udffc]|\ud83e\uddd1\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udffd]|\ud83e\uddd1\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\u200d\ud83e\udd1d\u200d\ud83e\uddd1|\ud83d\udc6b\ud83c[\udffb-\udfff]|\ud83d\udc6c\ud83c[\udffb-\udfff]|\ud83d\udc6d\ud83c[\udffb-\udfff]|\ud83d[\udc6b-\udc6d])|(?:\ud83d[\udc68\udc69])(?:\ud83c[\udffb-\udfff])?\u200d(?:\u2695\ufe0f|\u2696\ufe0f|\u2708\ufe0f|\ud83c[\udf3e\udf73\udf93\udfa4\udfa8\udfeb\udfed]|\ud83d[\udcbb\udcbc\udd27\udd2c\ude80\ude92]|\ud83e[\uddaf-\uddb3\uddbc\uddbd])|(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75]|\u26f9)((?:\ud83c[\udffb-\udfff]|\ufe0f)\u200d[\u2640\u2642]\ufe0f)|(?:\ud83c[\udfc3\udfc4\udfca]|\ud83d[\udc6e\udc71\udc73\udc77\udc81\udc82\udc86\udc87\ude45-\ude47\ude4b\ude4d\ude4e\udea3\udeb4-\udeb6]|\ud83e[\udd26\udd35\udd37-\udd39\udd3d\udd3e\uddb8\uddb9\uddcd-\uddcf\uddd6-\udddd])(?:\ud83c[\udffb-\udfff])?\u200d[\u2640\u2642]\ufe0f|(?:\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d[\udc68\udc69]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc68|\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d[\udc68\udc69]|\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83c\udff3\ufe0f\u200d\ud83c\udf08|\ud83c\udff4\u200d\u2620\ufe0f|\ud83d\udc15\u200d\ud83e\uddba|\ud83d\udc41\u200d\ud83d\udde8|\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc6f\u200d\u2640\ufe0f|\ud83d\udc6f\u200d\u2642\ufe0f|\ud83e\udd3c\u200d\u2640\ufe0f|\ud83e\udd3c\u200d\u2642\ufe0f|\ud83e\uddde\u200d\u2640\ufe0f|\ud83e\uddde\u200d\u2642\ufe0f|\ud83e\udddf\u200d\u2640\ufe0f|\ud83e\udddf\u200d\u2642\ufe0f)|[#*0-9]\ufe0f?\u20e3|(?:[©®\u2122\u265f]\ufe0f)|(?:\ud83c[\udc04\udd70\udd71\udd7e\udd7f\ude02\ude1a\ude2f\ude37\udf21\udf24-\udf2c\udf36\udf7d\udf96\udf97\udf99-\udf9b\udf9e\udf9f\udfcd\udfce\udfd4-\udfdf\udff3\udff5\udff7]|\ud83d[\udc3f\udc41\udcfd\udd49\udd4a\udd6f\udd70\udd73\udd76-\udd79\udd87\udd8a-\udd8d\udda5\udda8\uddb1\uddb2\uddbc\uddc2-\uddc4\uddd1-\uddd3\udddc-\uddde\udde1\udde3\udde8\uddef\uddf3\uddfa\udecb\udecd-\udecf\udee0-\udee5\udee9\udef0\udef3]|[\u203c\u2049\u2139\u2194-\u2199\u21a9\u21aa\u231a\u231b\u2328\u23cf\u23ed-\u23ef\u23f1\u23f2\u23f8-\u23fa\u24c2\u25aa\u25ab\u25b6\u25c0\u25fb-\u25fe\u2600-\u2604\u260e\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262a\u262e\u262f\u2638-\u263a\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267b\u267f\u2692-\u2697\u2699\u269b\u269c\u26a0\u26a1\u26aa\u26ab\u26b0\u26b1\u26bd\u26be\u26c4\u26c5\u26c8\u26cf\u26d1\u26d3\u26d4\u26e9\u26ea\u26f0-\u26f5\u26f8\u26fa\u26fd\u2702\u2708\u2709\u270f\u2712\u2714\u2716\u271d\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u2764\u27a1\u2934\u2935\u2b05-\u2b07\u2b1b\u2b1c\u2b50\u2b55\u3030\u303d\u3297\u3299])(?:\ufe0f|(?!\ufe0e))|(?:(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75\udd90]|[\u261d\u26f7\u26f9\u270c\u270d])(?:\ufe0f|(?!\ufe0e))|(?:\ud83c[\udf85\udfc2-\udfc4\udfc7\udfca]|\ud83d[\udc42\udc43\udc46-\udc50\udc66-\udc69\udc6e\udc70-\udc78\udc7c\udc81-\udc83\udc85-\udc87\udcaa\udd7a\udd95\udd96\ude45-\ude47\ude4b-\ude4f\udea3\udeb4-\udeb6\udec0\udecc]|\ud83e[\udd0f\udd18-\udd1c\udd1e\udd1f\udd26\udd30-\udd39\udd3d\udd3e\uddb5\uddb6\uddb8\uddb9\uddbb\uddcd-\uddcf\uddd1-\udddd]|[\u270a\u270b]))(?:\ud83c[\udffb-\udfff])?|(?:\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc73\udb40\udc63\udb40\udc74\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc77\udb40\udc6c\udb40\udc73\udb40\udc7f|\ud83c\udde6\ud83c[\udde8-\uddec\uddee\uddf1\uddf2\uddf4\uddf6-\uddfa\uddfc\uddfd\uddff]|\ud83c\udde7\ud83c[\udde6\udde7\udde9-\uddef\uddf1-\uddf4\uddf6-\uddf9\uddfb\uddfc\uddfe\uddff]|\ud83c\udde8\ud83c[\udde6\udde8\udde9\uddeb-\uddee\uddf0-\uddf5\uddf7\uddfa-\uddff]|\ud83c\udde9\ud83c[\uddea\uddec\uddef\uddf0\uddf2\uddf4\uddff]|\ud83c\uddea\ud83c[\udde6\udde8\uddea\uddec\udded\uddf7-\uddfa]|\ud83c\uddeb\ud83c[\uddee-\uddf0\uddf2\uddf4\uddf7]|\ud83c\uddec\ud83c[\udde6\udde7\udde9-\uddee\uddf1-\uddf3\uddf5-\uddfa\uddfc\uddfe]|\ud83c\udded\ud83c[\uddf0\uddf2\uddf3\uddf7\uddf9\uddfa]|\ud83c\uddee\ud83c[\udde8-\uddea\uddf1-\uddf4\uddf6-\uddf9]|\ud83c\uddef\ud83c[\uddea\uddf2\uddf4\uddf5]|\ud83c\uddf0\ud83c[\uddea\uddec-\uddee\uddf2\uddf3\uddf5\uddf7\uddfc\uddfe\uddff]|\ud83c\uddf1\ud83c[\udde6-\udde8\uddee\uddf0\uddf7-\uddfb\uddfe]|\ud83c\uddf2\ud83c[\udde6\udde8-\udded\uddf0-\uddff]|\ud83c\uddf3\ud83c[\udde6\udde8\uddea-\uddec\uddee\uddf1\uddf4\uddf5\uddf7\uddfa\uddff]|\ud83c\uddf4\ud83c\uddf2|\ud83c\uddf5\ud83c[\udde6\uddea-\udded\uddf0-\uddf3\uddf7-\uddf9\uddfc\uddfe]|\ud83c\uddf6\ud83c\udde6|\ud83c\uddf7\ud83c[\uddea\uddf4\uddf8\uddfa\uddfc]|\ud83c\uddf8\ud83c[\udde6-\uddea\uddec-\uddf4\uddf7-\uddf9\uddfb\uddfd-\uddff]|\ud83c\uddf9\ud83c[\udde6\udde8\udde9\uddeb-\udded\uddef-\uddf4\uddf7\uddf9\uddfb\uddfc\uddff]|\ud83c\uddfa\ud83c[\udde6\uddec\uddf2\uddf3\uddf8\uddfe\uddff]|\ud83c\uddfb\ud83c[\udde6\udde8\uddea\uddec\uddee\uddf3\uddfa]|\ud83c\uddfc\ud83c[\uddeb\uddf8]|\ud83c\uddfd\ud83c\uddf0|\ud83c\uddfe\ud83c[\uddea\uddf9]|\ud83c\uddff\ud83c[\udde6\uddf2\uddfc]|\ud83c[\udccf\udd8e\udd91-\udd9a\udde6-\uddff\ude01\ude32-\ude36\ude38-\ude3a\ude50\ude51\udf00-\udf20\udf2d-\udf35\udf37-\udf7c\udf7e-\udf84\udf86-\udf93\udfa0-\udfc1\udfc5\udfc6\udfc8\udfc9\udfcf-\udfd3\udfe0-\udff0\udff4\udff8-\udfff]|\ud83d[\udc00-\udc3e\udc40\udc44\udc45\udc51-\udc65\udc6a-\udc6d\udc6f\udc79-\udc7b\udc7d-\udc80\udc84\udc88-\udca9\udcab-\udcfc\udcff-\udd3d\udd4b-\udd4e\udd50-\udd67\udda4\uddfb-\ude44\ude48-\ude4a\ude80-\udea2\udea4-\udeb3\udeb7-\udebf\udec1-\udec5\uded0-\uded2\uded5\udeeb\udeec\udef4-\udefa\udfe0-\udfeb]|\ud83e[\udd0d\udd0e\udd10-\udd17\udd1d\udd20-\udd25\udd27-\udd2f\udd3a\udd3c\udd3f-\udd45\udd47-\udd71\udd73-\udd76\udd7a-\udda2\udda5-\uddaa\uddae-\uddb4\uddb7\uddba\uddbc-\uddca\uddd0\uddde-\uddff\ude70-\ude73\ude78-\ude7a\ude80-\ude82\ude90-\ude95]|[\u23e9-\u23ec\u23f0\u23f3\u267e\u26ce\u2705\u2728\u274c\u274e\u2753-\u2755\u2795-\u2797\u27b0\u27bf\ue50a])|\ufe0f/g,UFE0Fg=/\uFE0F/g,U200D=String.fromCharCode(8205),rescaper=/[&<>'"]/g,shouldntBeParsed=/^(?:iframe|noframes|noscript|script|select|style|textarea)$/,fromCharCode=String.fromCharCode;return twemoji;function createText(text,clean){return document.createTextNode(clean?text.replace(UFE0Fg,""):text)}function escapeHTML(s){return s.replace(rescaper,replacer)}function defaultImageSrcGenerator(icon,options){return"".concat(options.base,options.size,"/",icon,options.ext)}function grabAllTextNodes(node,allText){var childNodes=node.childNodes,length=childNodes.length,subnode,nodeType;while(length--){subnode=childNodes[length];nodeType=subnode.nodeType;if(nodeType===3){allText.push(subnode)}else if(nodeType===1&&!("ownerSVGElement"in subnode)&&!shouldntBeParsed.test(subnode.nodeName.toLowerCase())){grabAllTextNodes(subnode,allText)}}return allText}function grabTheRightIcon(rawText){return toCodePoint(rawText.indexOf(U200D)<0?rawText.replace(UFE0Fg,""):rawText)}function parseNode(node,options){var allText=grabAllTextNodes(node,[]),length=allText.length,attrib,attrname,modified,fragment,subnode,text,match,i,index,img,rawText,iconId,src;while(length--){modified=false;fragment=document.createDocumentFragment();subnode=allText[length];text=subnode.nodeValue;i=0;while(match=re.exec(text)){index=match.index;if(index!==i){fragment.appendChild(createText(text.slice(i,index),true))}rawText=match[0];iconId=grabTheRightIcon(rawText);i=index+rawText.length;src=options.callback(iconId,options);if(iconId&&src){img=new Image;img.onerror=options.onerror;img.setAttribute("draggable","false");attrib=options.attributes(rawText,iconId);for(attrname in attrib){if(attrib.hasOwnProperty(attrname)&&attrname.indexOf("on")!==0&&!img.hasAttribute(attrname)){img.setAttribute(attrname,attrib[attrname])}}img.className=options.className;img.alt=rawText;img.src=src;modified=true;fragment.appendChild(img)}if(!img)fragment.appendChild(createText(rawText,false));img=null}if(modified){if(i<text.length){fragment.appendChild(createText(text.slice(i),true))}subnode.parentNode.replaceChild(fragment,subnode)}}return node}function parseString(str,options){return replace(str,function(rawText){var ret=rawText,iconId=grabTheRightIcon(rawText),src=options.callback(iconId,options),attrib,attrname;if(iconId&&src){ret="<img ".concat('class="',options.className,'" ','draggable="false" ','alt="',rawText,'"',' src="',src,'"');attrib=options.attributes(rawText,iconId);for(attrname in attrib){if(attrib.hasOwnProperty(attrname)&&attrname.indexOf("on")!==0&&ret.indexOf(" "+attrname+"=")===-1){ret=ret.concat(" ",attrname,'="',escapeHTML(attrib[attrname]),'"')}}ret=ret.concat("/>")}return ret})}function replacer(m){return escaper[m]}function returnNull(){return null}function toSizeSquaredAsset(value){return typeof value==="number"?value+"x"+value:value}function fromCodePoint(codepoint){var code=typeof codepoint==="string"?parseInt(codepoint,16):codepoint;if(code<65536){return fromCharCode(code)}code-=65536;return fromCharCode(55296+(code>>10),56320+(code&1023))}function parse(what,how){if(!how||typeof how==="function"){how={callback:how}}return(typeof what==="string"?parseString:parseNode)(what,{callback:how.callback||defaultImageSrcGenerator,attributes:typeof how.attributes==="function"?how.attributes:returnNull,base:typeof how.base==="string"?how.base:twemoji.base,ext:how.ext||twemoji.ext,size:how.folder||toSizeSquaredAsset(how.size||twemoji.size),className:how.className||twemoji.className,onerror:how.onerror||twemoji.onerror})}function replace(text,callback){return String(text).replace(re,callback)}function test(text){re.lastIndex=0;var result=re.test(text);re.lastIndex=0;return result}function toCodePoint(unicodeSurrogates,sep){var r=[],c=0,p=0,i=0;while(i<unicodeSurrogates.length){c=unicodeSurrogates.charCodeAt(i++);if(p){r.push((65536+(p-55296<<10)+(c-56320)).toString(16));p=0}else if(55296<=c&&c<=56319){p=c}else{r.push(c.toString(16))}}return r.join(sep||"-")}}();
      //       var int = undefined;

      // try {
      //   int = setInterval(
      //     function() {
      //       var elementList = document.getElementsByTagName("*");
      //       for(var i = 0; i < elementList.length; i++) {
      //         twemoji.parse(elementList[i], {"size":72});
      //       }}, 1)
      // }
      // catch (e) {
      //   clearInterval(int)
      // }
      // `, true)
      //       .then((result) => {
      //
      //       })

      this.emitWebNavigationEvent('onCompleted', {
        tabId: this.tabId,
        url: this.webContents.getURL(),
        frameId: 0,
        timeStamp: Date.now(),
        processId: process.pid,
      });
    });

    this.webContents.addListener('will-navigate', (e, url) => {
      e.preventDefault();
      appWindow.viewManager.selected.webContents.loadURL(url);

      //Discord Rich Presence
      const clientId = '565573138146918421';

      const rpclient = new Client({ transport: 'ipc' });
      const startTimestamp = Math.round(+new Date() / 1000);

      async function setActivity() {
        if (!rpclient) {
          return;
        }
        try {
          var details = 'Browsing on';

          if (appWindow.webContents.isCurrentlyAudible() == true) {
            details = 'Listening to audio on';
          }

          var pattern = /(.+:\/\/)?([^\/]+)(\/.*)*/i;
          var arr = pattern.exec(url);
          var state = arr[2];
          var largeImageKey = 'dlogo';
          var smallImageKey = 'dot-online';
          var smallImageText = `Browsing a webpage`;
        } catch (e) {
          var details = 'Dot Browser';
          var state = 'Idle';
          var largeImageKey = 'dlogo';
          var smallImageKey = 'dot-idle';
          var smallImageText = 'Idle';
        }
        rpclient.setActivity({
          details: details,
          state: state,
          startTimestamp,
          largeImageKey,
          smallImageKey,
          largeImageText: `Dot Browser ${app.getVersion()}`,
          smallImageText,
          instance: false,
        });
      }

      rpclient.on('ready', () => {
        setActivity();

        setInterval(() => {
          setActivity();
        }, 3e3);
      });

      rpclient.login({ clientId }).catch(console.error);
      //Discord Rich Presence
    });

    this.webContents.addListener(
      'new-window',
      (e, url, frameName, disposition, options, referrer) => {
        //Discord Rich Presence
        const clientId = '565573138146918421';

        const rpclient = new Client({ transport: 'ipc' });
        const startTimestamp = Math.round(+new Date() / 1000);

        async function setActivity() {
          if (!rpclient) {
            return;
          }
          try {
            var details = 'Browsing on';

            if (appWindow.webContents.isCurrentlyAudible() == true) {
              details = 'Listening to audio on';
            }

            var pattern = /(.+:\/\/)?([^\/]+)(\/.*)*/i;
            var arr = pattern.exec(url);
            var state = arr[2];
            var largeImageKey = 'dlogo';
            var smallImageKey = 'dot-online';
            var smallImageText = `Browsing a webpage`;
          } catch (e) {
            var details = 'Dot Browser';
            var state = 'Idle';
            var largeImageKey = 'dlogo';
            var smallImageKey = 'dot-idle';
            var smallImageText = 'Idle';
          }
          rpclient.setActivity({
            details: details,
            state: state,
            startTimestamp,
            largeImageKey,
            smallImageKey,
            largeImageText: `Dot Browser ${app.getVersion()}`,
            smallImageText,
            instance: false,
          });
        }

        rpclient.on('ready', () => {
          setActivity();

          setInterval(() => {
            setActivity();
          }, 3e3);
        });

        rpclient.login({ clientId }).catch(console.error);
        //Discord Rich Presence

        if (disposition === 'new-window') {
          if (disposition === 'new-window') {
            if (
              appWindow.viewManager.selected.title != `Dot - ${options.title}`
            ) {
              e.preventDefault();
              if (
                url.split('://')[0] != 'http' ||
                url.split('://')[0] != 'https'
              ) {
                return shell.openExternal(url);
              }
              let child = new BrowserWindow({
                show: false,
                frame: false,
                title: `Dot - ${options.title}`,
                width: options.width,
                height: options.height,
                icon: resolve(process.cwd() + '/static/icon.png'),
              });
              child.loadURL(process.cwd() + '/static/pages/util/window.html');
              child.once('ready-to-show', () => {
                child.show();
                child.webContents.send('load-url', url);
                if (isDev) {
                  child.webContents.toggleDevTools();
                }
              });
            }
          }
          if (frameName === 'link') {
            e.preventDefault();
            appWindow.viewManager.selected.webContents.loadURL(url);
          }
          if (frameName === '_self' || options.title == '_self') {
            e.preventDefault();
            appWindow.viewManager.selected.webContents.loadURL(url);
            appWindow.viewManager.selected.webContents.userAgent = appWindow.viewManager.selected.webContents.getUserAgent() + ' Dot Browser/getdot.js.org';
          }
          if (frameName === '_top' || options.title == '_top') {
            e.preventDefault();
            appWindow.viewManager.selected.webContents.loadURL(url);
            appWindow.viewManager.selected.webContents.userAgent = appWindow.viewManager.selected.webContents.getUserAgent() + ' Dot Browser/getdot.js.org';
          }
          if (frameName === '_blank' || options.title == '_blank') {
            e.preventDefault();
            appWindow.webContents.send('api-tabs-create', {
              url,
              active: true,
            });
          }
          if (frameName === 'modal') {
            e.preventDefault();
            appWindow.webContents.send('api-tabs-create', {
              url,
              active: true,
            });
          }
        } else if (disposition === 'foreground-tab') {
          e.preventDefault();
          appWindow.webContents.send('api-tabs-create', { url, active: true });
        } else if (disposition === 'background-tab') {
          e.preventDefault();
          appWindow.webContents.send('api-tabs-create', { url, active: false });
        } else if (frameName == '_blank') {
          e.preventDefault();
          appWindow.webContents.send('api-tabs-create', { url, active: true });
        }

        if (frameName == '_blank') {
          e.preventDefault();
          appWindow.webContents.send('api-tabs-create', { url, active: true });
        }

        this.emitWebNavigationEvent('onCreatedNavigationTarget', {
          tabId: this.tabId,
          url,
          sourceFrameId: 0,
          timeStamp: Date.now(),
        });
      },
    );

    this.webContents.addListener('dom-ready', () => {
      this.emitWebNavigationEvent('onDOMContentLoaded', {
        tabId: this.tabId,
        url: this.webContents.getURL(),
        frameId: 0,
        timeStamp: Date.now(),
        processId: process.pid,
      });
    });

    this.webContents.addListener(
      'page-favicon-updated',
      async (e, favicons) => {
        appWindow.webContents.send(
          `browserview-favicon-updated-${this.tabId}`,
          favicons[0],
        );
      },
    );

    this.webContents.addListener('did-change-theme-color', (e, color) => {
      appWindow.webContents.send(
        `browserview-theme-color-updated-${this.tabId}`,
        color,
      );
    });

    this.webContents.on('update-target-url', (e, url) => {
      appWindow.locationBar.show();
      appWindow.locationBar.rearrange()
      appWindow.locationBar.webContents.send('target-url-changed', url);
    });

    (this.webContents as any).addListener(
      'certificate-error',
      (
        event: Electron.Event,
        url: string,
        error: string,
        certificate: Electron.Certificate,
        callback: Function,
      ) => {
        if (`${this.webContents.getURL()}`.includes('#ise') == false) {
          event.preventDefault();
          this.webContents.loadURL(
            process.cwd() +
              '/static/pages/error/ssl-error.html?du=' +
              url +
              '&err=' +
              error,
          );
          callback(true);
        }
        if (`${this.webContents.getURL()}`.includes('#ise') == true) {
          event.preventDefault();
          this.webContents.loadURL(this.webContents.getURL() + '#ise');
          callback(true);
        }
      },
    );

    this.setAutoResize({ width: true, height: true });
    this.webContents.loadURL(url);
  }

  public updateNavigationState() {
    if (this.isDestroyed()) return;

    if (appWindow.viewManager.selectedId === this.tabId) {
      appWindow.webContents.send('update-navigation-state', {
        canGoBack: this.webContents.canGoBack(),
        canGoForward: this.webContents.canGoForward(),
      });
    }
  }

  public emitWebNavigationEvent = (name: string, ...data: any[]) => {
    this.webContents.send(`api-emit-event-webNavigation-${name}`, ...data);

    sendToAllExtensions(`api-emit-event-webNavigation-${name}`, ...data);
  };
}
