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
    get(key: string): Promise<T>;
    set(key: string, json: T): Promise<void>;
    has(key: string): Promise<boolean>;
    keys(): Promise<string[]>;
    remove(key: string): Promise<void>;
    clear(): Promise<void>;
    getMany(keys: string[]): Promise<any & {}>;
};

export interface Storage<T extends any> {
    get(key: string): T;
    asyncGet(key: string): Promise<T>;
    set(key: string, obj: T): void;
    asyncSet(key: string, obj: T): Promise<void>;
    has(key: string): boolean;
    asyncHas(key: string): Promise<boolean>;
    keys(): string[];
    asyncKeys(): Promise<string[]>;
    remove(key: string): void;
    asyncRemove(key: string): Promise<void>;
    clear(): void;
    asyncClear(): Promise<void>;
    getMany(keys: string[]): T[];
    asyncGetMany(keys: string[]): Promise<T[]>;
};