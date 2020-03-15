import Datastore from 'nedb';

import { Favicon } from '../models';
import { getPath } from '~/shared/utils/paths';
import { requestURL } from '../utils/network';
import { observable } from 'mobx';
import { fromBuffer } from 'file-type';

import * as icojs from 'icojs';

const convertIcoToPng = async (icoData: Buffer): Promise<ArrayBuffer> => {
  return (await icojs.parse(icoData, 'image/png'))[0].buffer;
};

export class FaviconsStore {
  public db = new Datastore({
    filename: getPath('storage/favicons.db'),
    autoload: true,
  });

  @observable
  public favicons: { [key: string]: string } = {};

  public faviconsBuffers: { [key: string]: Buffer } = {};

  constructor() {
    this.load();
  }

  public getFavicons = (query: Favicon = {}) => {
    return new Promise((resolve: (favicons: Favicon[]) => void, reject) => {
      this.db.find(query, (err: any, docs: Favicon[]) => {
        if (err) return reject(err);
        resolve(docs);
      });
    });
  };

  public addFavicon = async (url: string): Promise<string> => {
    return new Promise(async resolve => {
      if (!this.favicons[url]) {
        try {
          const res = await requestURL(url);

          if (res.statusCode === 404) {
            throw new Error('404 favicon not found');
          }
    
          let data = Buffer.from(res.data, 'binary');
    
          const type = await fromBuffer(data);
    
          if (type && type.ext === 'ico') {
            data = Buffer.from(new Uint8Array(await convertIcoToPng(data)));
          }
    
          const str = `data:${(await fromBuffer(data)).ext};base64,${data.toString(
            'base64',
          )}`;

          this.db.insert({
            url,
            data: str,
          });

          this.favicons[url] = str;

          resolve(str);
        } catch (e) {
          throw e;
        }
      } else {
        resolve(this.favicons[url]);
      }
    });
  };

  public async load() {
    await this.db.find({}, (err: any, docs: Favicon[]) => {
      if (err) return console.warn(err);

      docs.forEach(favicon => {
        const { data } = favicon;

        if (this.favicons[favicon.url] == null) {
          this.favicons[favicon.url] = data;
        }
      });
    });
  }
}