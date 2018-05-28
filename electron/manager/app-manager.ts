import { WindowStateManager, WindowStateOption } from './window-state-manager';
import { IpcEventManager } from './ipc-event-manager';
import { ChromeExtensionManager, ChromeExtensionOption, ChromeExtensionOptionItem } from './chrome-extension-manager';
import { ConfigLoadManager, CustomConvertMethod, GetOptionMethod } from './config-load-manager';
import { PluginManager } from './plugin-manager';
import { app } from 'electron';

export interface AppOption {
    pluginDirectory?: string,
    isDebugger?: boolean,
    startUpFileUri?: string
}

const defatulOptoin: AppOption = {
    pluginDirectory: './plugin',
    isDebugger: false,
    startUpFileUri: 'index.html'
}

const configField = 'appOption';

export class AppManager {
    private readonly _windowStateManager: WindowStateManager;
    private readonly _ipcEventManager: IpcEventManager;
    private readonly _chromeExtensionManager: ChromeExtensionManager;
    private readonly _configLoadManager: ConfigLoadManager;
    private readonly _pluginManager: PluginManager;

    private readonly _baseConfigGetter: GetOptionMethod<AppOption>;
    private readonly _appOption: AppOption;

    constructor(configPath: string = '') {
        this._configLoadManager = new ConfigLoadManager();

        this._baseConfigGetter = this._configLoadManager.syncLoadConfigJson(configPath);

        this._appOption = this._baseConfigGetter<AppOption>(configField, (currentAppOption) => Object.assign(defatulOptoin, currentAppOption));
    }

    public async prepareThings () {


    }

    public async init () { }

    public async star () { }
};