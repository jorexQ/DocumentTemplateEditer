import { extend } from './base-tool';
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

export interface AsyncStorage {
    asyncGet<T extends any>(key: string): Promise<T>;
    asyncSet<T extends any>(key: string, obj: T): Promise<void>;
    asyncHas(key: string): Promise<boolean>;
    asyncKeys(): Promise<string[]>;
    asyncRemove(key: string): Promise<void>;
    asyncClear(): Promise<void>;
    asyncGetMany<T extends any>(keys: string[]): Promise<T[]>;
};

export interface SyncStorage {
    get<T extends any>(key: string): T;
    set<T extends any>(key: string, obj: T): void;
    has(key: string): boolean;
    keys(): string[];
    remove(key: string): void;
    clear(): void;
    getMany<T extends any>(keys: string[]): T[];
};

export interface Storage extends SyncStorage, AsyncStorage { };