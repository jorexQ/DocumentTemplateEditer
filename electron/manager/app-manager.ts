import { WindowStateManager, WindowStateOption } from './window-state-manager';
import { IpcEventManager } from './ipc-event-manager';
import { DevtoolExtensionManager, DevtoolExtensionOption, DevtoolExtensionOptionItem } from './devtool-extension-manager';
import { ConfigLoadManager, CustomConvertMethod } from './config-load-manager';
import { PluginManager } from './plugin-manager';

export interface AppOption {
    pluginDirectory?: string,
    isDebugger?: boolean,
    startUpFileUri?: string
}

export class AppManager {
    private readonly windowStateManager: WindowStateManager;
    private readonly ipcEventManager: IpcEventManager;
    private readonly devtoolExtensionManager: DevtoolExtensionManager;
    private readonly configLoadManager: ConfigLoadManager;
    private readonly pluginManager: PluginManager;

    private readonly appOption: AppOption;

    constructor(configPath: string = '') {
        this.configLoadManager = new ConfigLoadManager(configPath);
        this.appOption = this.configLoadManager.getOption<AppOption>("", (result) => {
            let currentAppOption = <AppOption>result;

            
        })

    }

    public prepareThings() { }

    public init() { }

    public star() { }
};