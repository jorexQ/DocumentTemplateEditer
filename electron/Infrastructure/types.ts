export type BaseEventKey = "resize" | "move" 
| "devtools-opened" | "devtools-closed" 
| "close" | "closed" | "maximize" 
| "unmaximize" | "minimize" | "restore" 
| "enter-full-screen" | "leave-full-screen";

export interface StateConfig {
    fullScreen?: boolean;
    devToolsOpened?: boolean;
    bounds?: Electron.Rectangle;
    isMaximized?: boolean;
    displayBounds?: Electron.Rectangle;
};

export interface ExtensionConfig {
    rootPath?: string;
    extensionTokens?: string[];
};
