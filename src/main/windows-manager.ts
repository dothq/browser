import { Preferences } from './models/preferences';
import { AppWindow } from './app-window';
import { registerProtocol } from './protocols';
import { app, session } from 'electron';
import { 
  startSessionManager, 
  runWebRequestService, 
  loadFilters 
} from './services';

export class WindowsManager {
  public window: AppWindow;

  public settings = new Preferences(this);

  public constructor() {
    this.onReady();
  }

  private async onReady() {
    await app.whenReady();

    let viewSession = session.fromPartition('persist:view');

    registerProtocol(viewSession);
    startSessionManager(viewSession);

    this.create()

    loadFilters();
    runWebRequestService(this.window);

    app.on('activate', this.create);
  }

  private create() {
    this.window = new AppWindow();
  }
}
