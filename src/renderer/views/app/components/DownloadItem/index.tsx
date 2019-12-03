import * as React from 'react';
import { observer } from 'mobx-react';

import { DownloadItem } from '../../models/download-item';
import { StyledItem, Icon, Progress, Name, Info, Details } from './style';
import { shell, remote, clipboard } from 'electron';
import store from '../../store';

const prettyBytes = require('pretty-bytes');

const onClick = (path: string) => () => {
  shell.openItem(path);
};

const ctxMenu = (download: DownloadItem) => () => {
  const menu = remote.Menu.buildFromTemplate([
    {
      label: store.locale.lang.standard[0].button_open,
      click: () => {
        shell.openItem(download.savePath);
      },
    },
    {
      type: "separator"
    },
    {
      label: 'Show in folder',
      click: () => {
        shell.openItem(download.savePath.split(download.fileName)[0])
      },
    },
    {
      label: 'Copy download link',
      click: () => {
        clipboard.clear();
        clipboard.writeText(download.downloadedFrom);
      },
    },
    {
      type: "separator"
    },
    {
      label: 'Hide',
      enabled: download.completed == true,
      click: () => {
        var index = store.downloads.list.indexOf(download.id);
        if (index > -1) {
          store.downloads.list.splice(index, 1);
        }
      },
    },
  ]);

  menu.popup();
};

export default observer(({ data }: { data: DownloadItem }) => {
  const progress = (data.receivedBytes / data.totalBytes) * 200;

  return (
    <StyledItem onClick={onClick(data.savePath)} title={data.fileName} onContextMenu={ctxMenu(data)}>
      <Progress
        style={{
          width: progress,
          display: data.completed ? 'none' : 'block',
        }}
      />
      <Icon />
      <Info>
        <Name>{data.fileName}</Name>
        <Details visible={!data.completed}>
          <div>
            {prettyBytes(data.receivedBytes)}/{prettyBytes(data.totalBytes)}
          </div>
        </Details>
      </Info>
    </StyledItem>
  );
});
