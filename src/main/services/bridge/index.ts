import * as express from 'express';
import { IOutboundMessage } from './interfaces/IOutboundMessage';
import { remote, ipcRenderer } from 'electron';
var bodyParser = require('body-parser');

export class Brisk {
  constructor() {
    const app = express();

    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    app.listen(3467, function() {
      console.log('Dot Bridge started on port 3467');
    });

    app.get('/', function(req, res) {
      res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4444');

      res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, POST, OPTIONS, PUT, PATCH, DELETE',
      );

      res.setHeader(
        'Access-Control-Allow-Headers',
        'X-Requested-With,content-type',
      );

      const data = {
        version: remote.app.getVersion(),
        electron: process.versions.electron,
      };

      res.send(data);
    });

    /*
        @post Send a message to a channel
    */

    app.post('/messenger/send/:channel', function(req, res) {
      res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4444');

      res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, POST, OPTIONS, PUT, PATCH, DELETE',
      );

      res.setHeader(
        'Access-Control-Allow-Headers',
        'X-Requested-With,content-type',
      );

      ipcRenderer.send(
        `bskmsg-${req.params.channel}`,
        JSON.stringify(req.body),
      );

      res.send({ channel: req.params.channel, data: JSON.stringify(req.body) });
    });
  }

  public send(channel: string, data: any) {
    fetch(`http://localhost:3467/messenger/send/${channel}`, {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then(function(res) {
        return res.json();
      })
      .then(function(data) {
        return data;
      });
  }
}
