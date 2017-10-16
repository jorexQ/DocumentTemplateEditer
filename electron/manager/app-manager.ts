import { WindowStateManager, WindowStateOption } from './window-state-manager';
import { IpcEventManager } from './ipc-event-manager';
import { DevtoolExtensionManager, DevtoolExtensionOption, DevtoolExtensionOptionItem } from './devtool-extension-manager';
import { ConfigLoadManager, CustomConvertMethod, GetOptionMethod } from './config-load-manager';
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

    private readonly baseConfigGetter: GetOptionMethod;
    private readonly appOption: AppOption;

    constructor(configPath: string = '') {
        this.configLoadManager = new ConfigLoadManager();

        this.baseConfigGetter = this.configLoadManager.syncLoadConfigJson(configPath);

        this.appOption = this.baseConfigGetter<AppOption>("appOption", (result) => {
            let currentAppOption: AppOption = <AppOption>result;

            return Object.assign({
                pluginDirectory: './plugin',
                isDebugger: false,
                startUpFileUri: 'index.html'
            }, currentAppOption);
        });
    }

    public async prepareThings() {


    }

    public async init() { }

    public async star() { }
};