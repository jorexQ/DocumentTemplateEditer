import {WindowStateManager} from './window-state-manager';
import {IpcEventManager} from './ipc-event-manager';
import {DevtoolExtensionManager} from './devtool-extension-manager';
import {ConfigLoadManager} from './config-load-manager';

export class AppManager {
    private windowStateManager : WindowStateManager;
    private ipcEventManager : IpcEventManager;
    private devtoolExtensionManager : DevtoolExtensionManager;

    constructor(configPath : string = '') {
        let configLoadManager = new ConfigLoadManager(configPath);

    }
};