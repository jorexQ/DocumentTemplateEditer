export type BaseEventKey = "resize" | "move"
    | "devtools-opened" | "devtools-closed"
    | "close" | "closed" | "maximize" | "unmaximize" | "minimize"
    | "restore" | "enter-full-screen" | "leave-full-screen";

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

export interface AsyncStorage<T extends any> {  
    asyncGet(key: string): Promise<T>;
    asyncSet(key: string, obj: T): Promise<void>;
    asyncHas(key: string): Promise<boolean>;
    asyncKeys(): Promise<string[]>;
    asyncRemove(key: string): Promise<void>;
    asyncClear(): Promise<void>;
    asyncGetMany(keys: string[]): Promise<T[]>;
};

export interface SyncStorage<T extends any> {
    get(key: string): T;
    set(key: string, obj: T): void;
    has(key: string): boolean;
    keys(): string[];
    remove(key: string): void;
    clear(): void;
    getMany(keys: string[]): T[];
};