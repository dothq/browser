export interface DownloadItem {
  fileName?: string;
  receivedBytes?: number;
  totalBytes?: number;
  savePath?: string;
  downloadedFrom?: string;
  id?: string;
  completed?: boolean;
}
