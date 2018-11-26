import { BaseWindowCtrl } from "../base-window-ctrl";
import path from 'path';

export class MainWindowCtrl extends BaseWindowCtrl {
  public getViewHtmlUri (): string {
    return path.join(__dirname,"./main-window-ctrl.html");
  }
  constructor() {
    super();
  }
}
