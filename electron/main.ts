import { app, BrowserWindow, ipcMain, WebContentsView, screen } from 'electron';
import path from 'node:path';
import { WindowStateService, defaultWindowState, type PersistedWindowState } from './window-state';

const isDev = !app.isPackaged;

class AppWindowManager {
  private floatingWindow: BrowserWindow | null = null;
  private expandedWindow: BrowserWindow | null = null;
  private pageView: WebContentsView | null = null;
  private readonly stateService = new WindowStateService();
  private state: PersistedWindowState = defaultWindowState;

  async init(): Promise<void> {
    this.state = await this.stateService.load();
    this.createFloatingWindow();
    this.createExpandedWindow();
    this.registerIpc();
  }

  private registerIpc(): void {
    ipcMain.handle('app:open-orb', async () => {
      this.floatingWindow?.show();
      this.floatingWindow?.focus();
      this.expandedWindow?.show();
      this.expandedWindow?.focus();
      this.state.floatingVisible = true;
      await this.stateService.save(this.state);
    });

    ipcMain.handle('window:minimize', () => {
      this.expandedWindow?.minimize();
    });

    ipcMain.handle('window:maximize', () => {
      if (!this.expandedWindow) return;
      if (this.expandedWindow.isMaximized()) {
        this.expandedWindow.unmaximize();
      } else {
        this.expandedWindow.maximize();
      }
      this.state.maximized = !!this.expandedWindow.isMaximized();
      void this.stateService.save(this.state);
    });

    ipcMain.handle('window:close', () => {
      if (!this.expandedWindow) return;
      this.expandedWindow.hide();
      if (this.floatingWindow) {
        this.floatingWindow.show();
      }
      this.state.floatingVisible = true;
      void this.stateService.save(this.state);
    });

    ipcMain.handle('window:hide-expanded', () => {
      this.expandedWindow?.hide();
      if (this.floatingWindow) {
        this.floatingWindow.show();
      }
    });

    ipcMain.handle('browser:open-page', async (_event, url: string) => {
      if (!this.expandedWindow) return;
      const safeUrl = /^https?:\/\//i.test(url) ? url : `https://${url}`;
      this.attachPageView(safeUrl);
      this.expandedWindow.show();
      this.expandedWindow.focus();
    });

    ipcMain.handle('browser:back-to-chat', () => {
      this.detachPageView();
      if (this.expandedWindow) {
        this.expandedWindow.show();
        this.expandedWindow.focus();
      }
      if (isDev) {
        this.expandedWindow?.loadURL('http://localhost:5173/#chat');
      }
    });
  }

  private createFloatingWindow(): void {
    const primaryDisplay = screen.getPrimaryDisplay();
    const { width, height } = primaryDisplay.workAreaSize;

    this.floatingWindow = new BrowserWindow({
      width: 102,
      height: 102,
      x: Math.max(16, width - 140),
      y: Math.max(36, height - 180),
      show: this.state.floatingVisible && !this.state.floatingDisabled,
      frame: false,
      transparent: true,
      alwaysOnTop: true,
      skipTaskbar: true,
      resizable: false,
      movable: true,
      minimizable: false,
      maximizable: false,
      closable: false,
      focusable: true,
      webPreferences: {
        preload: path.join(__dirname, 'preload.js'),
        contextIsolation: true,
        nodeIntegration: false,
        sandbox: true,
      },
    });

    this.floatingWindow.setBackgroundColor('#00000000');
    this.floatingWindow.setAlwaysOnTop(true, 'screen-saver');
    this.floatingWindow.setIgnoreMouseEvents(false);

    if (isDev) {
      void this.floatingWindow.loadURL('http://localhost:5173/#orb');
    } else {
      void this.floatingWindow.loadFile(path.join(__dirname, '../dist/index.html'), { hash: 'orb' });
    }

    this.floatingWindow.on('blur', () => {
      this.floatingWindow?.setAlwaysOnTop(true, 'screen-saver');
    });

    this.floatingWindow.on('close', () => {
      this.floatingWindow = null;
    });
  }

  private createExpandedWindow(): void {
    const { x, y, width, height } = this.state.expandedBounds;

    this.expandedWindow = new BrowserWindow({
      x,
      y,
      width,
      height,
      minWidth: 900,
      minHeight: 640,
      show: false,
      title: 'BlaBlaBla',
      backgroundColor: '#07101a',
      frame: false,
      webPreferences: {
        preload: path.join(__dirname, 'preload.js'),
        contextIsolation: true,
        nodeIntegration: false,
        sandbox: true,
      },
    });

    this.expandedWindow.setMenuBarVisibility(false);
    if (this.state.maximized) {
      this.expandedWindow.maximize();
    }

    if (isDev) {
      void this.expandedWindow.loadURL('http://localhost:5173/#chat');
    } else {
      void this.expandedWindow.loadFile(path.join(__dirname, '../dist/index.html'), { hash: 'chat' });
    }

    this.expandedWindow.on('close', (event) => {
      if (!app.isQuitting) {
        event.preventDefault();
        this.expandedWindow?.hide();
        this.floatingWindow?.show();
        return;
      }
      this.pageView = null;
    });

    this.expandedWindow.on('maximize', () => {
      this.state.maximized = true;
      void this.stateService.save(this.state);
    });

    this.expandedWindow.on('unmaximize', () => {
      this.state.maximized = false;
      void this.stateService.save(this.state);
    });

    this.expandedWindow.on('resize', () => {
      if (!this.expandedWindow || this.expandedWindow.isMaximized()) return;
      const bounds = this.expandedWindow.getBounds();
      this.state.expandedBounds = {
        x: bounds.x,
        y: bounds.y,
        width: bounds.width,
        height: bounds.height,
      };
      void this.stateService.save(this.state);
    });

    this.expandedWindow.on('move', () => {
      if (!this.expandedWindow || this.expandedWindow.isMaximized()) return;
      const bounds = this.expandedWindow.getBounds();
      this.state.expandedBounds = {
        x: bounds.x,
        y: bounds.y,
        width: bounds.width,
        height: bounds.height,
      };
      void this.stateService.save(this.state);
    });
  }

  private attachPageView(url: string): void {
    if (!this.expandedWindow) return;
    if (this.pageView) {
      this.pageView.webContents.loadURL(url);
      return;
    }

    const view = new WebContentsView({
      webPreferences: {
        contextIsolation: true,
        nodeIntegration: false,
        sandbox: true,
      },
    });

    this.expandedWindow.contentView.addChildView(view);
    const bounds = this.expandedWindow.getContentBounds();
    view.setBounds({ x: 0, y: 0, width: bounds.width, height: bounds.height });
    view.webContents.loadURL(url);
    this.pageView = view;
  }

  private detachPageView(): void {
    if (!this.pageView) return;
    this.pageView.removeFromParent();
    this.pageView = null;
  }
}

const appWindowManager = new AppWindowManager();

app.whenReady().then(async () => {
  await appWindowManager.init();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      void appWindowManager.init();
    }
  });
});

app.on('before-quit', () => {
  app.isQuitting = true;
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
