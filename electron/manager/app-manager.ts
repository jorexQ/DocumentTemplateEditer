import "reflect-metadata";
import { injectable, inject } from "inversify";
import { nameof } from "../infrastructure/base-tool";
import { WindowStateManager } from "./window-state-manager";
import { IpcEventManager } from "./ipc-event-manager";
import { ChromeExtensionManager } from "./chrome-extension-manager";
import { ConfigLoadManager, GetOptionMethod } from "./config-load-manager";
import { PluginManager } from "./plugin-manager";
import { BaseManager } from "../bootstrap/base-manager";
import { BootstrapEventBus } from "../bootstrap/bootstrap-event-bus";
import { lazyInject } from "../bootstrap/bootstrop-ioc";

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
