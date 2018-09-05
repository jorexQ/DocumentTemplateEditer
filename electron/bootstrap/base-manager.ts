import { BootstrapEventBus } from "./bootstrap-event-bus";
import { IocTool } from "../infrastructure/ioc-tool";

import { WindowStateManager } from "../manager/window-state-manager";
import { IpcEventManager } from "../manager/ipc-event-manager";
import { ChromeExtensionManager } from "../manager/chrome-extension-manager";
import { ConfigLoadManager } from "../manager/config-load-manager";
import { PluginManager } from "../manager/plugin-manager";
import { LocalFileManager } from "../manager/local-file-manager";

export class BaseManager {
  protected readonly bootstrapEventBus: BootstrapEventBus;

  constructor(bootstrapEventBus: BootstrapEventBus) {
    this.bootstrapEventBus = bootstrapEventBus;
  }
}

export function managerIocSetup(iocTool: IocTool) {
  iocTool
    .RegisterClass(WindowStateManager)
    .RegisterClass(IpcEventManager)
    .RegisterClass(ChromeExtensionManager)
    .RegisterClass(ConfigLoadManager)
    .RegisterClass(PluginManager)
    .RegisterClass(LocalFileManager);
}
