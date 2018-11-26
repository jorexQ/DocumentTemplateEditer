import { BaseWindowCtrl } from "../base-window-ctrl";
import { WindowStateOption } from "../../manager/window-state-manager";
import { BrowserWindow } from "electron";
import * as path from "path";
import * as url from "url";

export class MainWindowCtrl extends BaseWindowCtrl {
  private win: BrowserWindow | null = null;
  private windowStateOption: WindowStateOption;
  constructor() {
    super();
  }

  public getName(): string {
    return "main";
  }

  public getViewHtmlUri(): string {
    return url.format({
      pathname: path.join(__dirname, "main-window-ctrl.html"),
      protocol: "file",
      slashes: true
    });
  }

  public openOrActive(windowStateOption?: WindowStateOption | undefined): void {
    if (!this.win) {
      let currentWin = new BrowserWindow({
        width: 1280,
        height: 720,
        frame: false,
        maximizable: true,
        title: "electron demo"
      });
      currentWin.setMenu(null);
      currentWin.loadURL(this.getViewHtmlUri());
      this.win = currentWin;
      this.initEvent();
    } else {
      this.win.showInactive();
    }
  }

  public initEvent(): void {
    if (!this.win) return;
    this.win.on("closed", () => {
      if (!this.win) return;
      this.win.destroy();
      this.win = null;
    });
  }
}
