import { BaseManager } from "../bootstrap/base-manager";
import { Bootstrap } from "../bootstrap/bootstrap";
import { BootstrapEventBus } from "../bootstrap/bootstrap-event-bus";
import "reflect-metadata";
import { Container, injectable, inject } from "inversify";
import getDecorators from "inversify-inject-decorators";
import { nameof } from "ts-simple-nameof";

const { lazyInject } = getDecorators(Bootstrap.impl.managerContainer);

import { WindowStateManager, WindowStateOption } from "./window-state-manager";
import { IpcEventManager } from "./ipc-event-manager";
import {
  ChromeExtensionManager,
  ChromeExtensionOption,
  ChromeExtensionOptionItem
} from "./chrome-extension-manager";
import {
  ConfigLoadManager,
  CustomConvertMethod,
  GetOptionMethod
} from "./config-load-manager";
import { PluginManager } from "./plugin-manager";
import { app } from "electron";

export interface AppOption {
  pluginDirectory?: string;
  isDebugger?: boolean;
  startUpFileUri?: string;
}

const defatulOptoin: AppOption = {
  pluginDirectory: "./plugin",
  isDebugger: false,
  startUpFileUri: "index.html"
};

const configField = "appOption";

@injectable()
export class AppManager extends BaseManager {
  @lazyInject(nameof(WindowStateManager))
  public windowStateManager: WindowStateManager;

  @lazyInject(nameof(IpcEventManager))
  public ipcEventManager: IpcEventManager;

  @lazyInject(nameof(ChromeExtensionManager))
  public chromeExtensionManager: ChromeExtensionManager;

  @lazyInject(nameof(ConfigLoadManager))
  public configLoadManager: ConfigLoadManager;

  @lazyInject(nameof(PluginManager))
  public pluginManager: PluginManager;

  public baseConfigGetter: GetOptionMethod<AppOption>;
  public appOption: AppOption;

  constructor(
    @inject(nameof(BootstrapEventBus)) bootstrapEventBus: BootstrapEventBus
  ) {
    super(bootstrapEventBus);
    // this._configLoadManager = new ConfigLoadManager();
    // this._baseConfigGetter = this._configLoadManager.syncLoadConfigJson(
    //   configPath
    // );
    // this._appOption = this._baseConfigGetter<AppOption>(
    //   configField,
    //   currentAppOption => Object.assign(defatulOptoin, currentAppOption)
    // );
  }
}
