import { BootstrapEventBus } from "./bootstrap-event-bus";
import { BootstrapContext } from "./bootstrap-context";
import { IocTool } from "../infrastructure/ioc-tool";

import { AppManager } from "../manager/app-manager";
import { WindowStateManager } from "../manager/window-state-manager";
import { IpcEventManager } from "../manager/ipc-event-manager";
import { ChromeExtensionManager } from "../manager/chrome-extension-manager";
import { ConfigLoadManager } from "../manager/config-load-manager";
import { PluginManager } from "../manager/plugin-manager";
import { LocalFileManager } from "../manager/local-file-manager";
import { VersionManager } from "../manager/version-manager";
import { interfaces } from "inversify";

const managerClassArr = [
  <interfaces.Newable<AppManager>>AppManager,
  <interfaces.Newable<WindowStateManager>>WindowStateManager,
  <interfaces.Newable<IpcEventManager>>IpcEventManager,
  <interfaces.Newable<ChromeExtensionManager>>ChromeExtensionManager,
  <interfaces.Newable<ConfigLoadManager>>ConfigLoadManager,
  <interfaces.Newable<PluginManager>>PluginManager,
  <interfaces.Newable<LocalFileManager>>LocalFileManager,
  <interfaces.Newable<VersionManager>>VersionManager
];

export function managerLoad(
  iocTool: IocTool,
  bootstrapContext: BootstrapContext
) {
  let bootstrapEventBus = new BootstrapEventBus(bootstrapContext);
  iocTool.registerConstantValue(bootstrapEventBus);
  managerClassArr.forEach(x=>{
    iocTool.registerSingletonClass(<any>x);
  });

  managerClassArr.forEach(x => {
    let cons = iocTool.container.get(x);
  });

  return bootstrapEventBus;
}
