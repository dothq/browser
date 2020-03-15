import { Preferences } from './models/preferences';
import { Versions } from './models/versions';
import { AppWindow } from './app-window';
import { registerProtocol } from './protocols';
import { app, session } from 'electron';
import { resolve } from 'path';
import colors from 'colors';
import { readFileSync } from 'fs';

import { 
  startSessionManager, 
  preferencesLoad
} from './services';

export class WindowsManager {
  public window: AppWindow;

  public settings = new Preferences(this);

  public performanceStart: number;

  public versions = new Versions(this);

  public constructor() {
    this.startMonitor()
    this.onReady();
  }

  private async onReady() {
    await app.whenReady();

    let viewSession = session.fromPartition('persist:view');

    registerProtocol(viewSession);
    startSessionManager(viewSession);

    preferencesLoad()

    this.create()

    this.versions.once('load', () => this.versionsLoad())

    app.on('activate', this.create);
  }

  private create() {
    this.window = new AppWindow();
  }

  private startMonitor() {
    this.performanceStart = Date.now()
  }

  public checkForUpdates() {
    let packageLocation;

    if(process.env.ENV == 'dev') {
      packageLocation = resolve(process.cwd(), "package.json");
    } else {
      packageLocation = resolve(__dirname, "package.json");
    }

    const packageFile = readFileSync(packageLocation, 'utf-8')
    const pkg = JSON.parse(packageFile)

    const currentVersion = parseInt(pkg.version.replace(/\D/g, ""))
    const cleanLatestVersion = parseInt(this.versions.browser.replace(/\D/g, ""))

    if(currentVersion <= cleanLatestVersion) {
      console.log(`${colors.blue.bold('Updates')} Update available. \n   Current version: ${pkg.version} \n   Update version: ${this.versions.browser}`);
      process.env.__DOT_UPDATE_AVAILABLE = "true";
    } else if(currentVersion >= cleanLatestVersion) {
      console.log(`${colors.blue.bold('Updates')} Uh oh, time traveller detected!`);
      process.env.__DOT_UPDATE_AVAILABLE = "false";
    } else {
      console.log(`${colors.blue.bold('Updates')} You're all up to date!`);
      process.env.__DOT_UPDATE_AVAILABLE = "false";
    }
  }

  private versionsLoad() {
    console.log(`${colors.blue.bold('Versions')} Chromium is currently at ${this.versions.chromium}`);
    this.checkForUpdates()
  }
}
