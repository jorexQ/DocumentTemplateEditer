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
    private readonly _windowStateManager: WindowStateManager;
    private readonly _ipcEventManager: IpcEventManager;
    private readonly _devtoolExtensionManager: DevtoolExtensionManager;
    private readonly _configLoadManager: ConfigLoadManager;
    private readonly _pluginManager: PluginManager;

    private readonly _baseConfigGetter: GetOptionMethod;
    private readonly _appOption: AppOption;

    constructor(configPath: string = '') {
        this._configLoadManager = new ConfigLoadManager();

        this._baseConfigGetter = this._configLoadManager.syncLoadConfigJson(configPath);

        this._appOption = this._baseConfigGetter<AppOption>("appOption", (result) => {
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