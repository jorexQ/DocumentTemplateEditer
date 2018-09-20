import { BootstrapEventBus } from "./bootstrap-event-bus";
import { IocTool } from "../infrastructure/ioc-tool";

import { AppManager } from "../manager/app-manager";
import { WindowStateManager } from "../manager/window-state-manager";
import { IpcEventManager } from "../manager/ipc-event-manager";
import { ChromeExtensionManager } from "../manager/chrome-extension-manager";
import { ConfigLoadManager } from "../manager/config-load-manager";
import { PluginManager } from "../manager/plugin-manager";
import { LocalFileManager } from "../manager/local-file-manager";

const managerClassArr = [
  AppManager,
  WindowStateManager,
  IpcEventManager,
  ChromeExtensionManager,
  ConfigLoadManager,
  PluginManager,
  LocalFileManager
];

export function managerLoad(iocTool: IocTool) {
  iocTool.RegisterSingletonClass(BootstrapEventBus);

  managerClassArr.forEach(constructor =>
    iocTool.RegisterSingletonClass(constructor)
  );

  let container = iocTool.container;
  managerClassArr.forEach(constructor => {
    container.resolve(constructor);
  });
}
