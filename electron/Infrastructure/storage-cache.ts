import { AsyncStorage, SyncStorage } from './types';
export class StorageCache<T extends any> implements AsyncStorage<T>, SyncStorage<T> {
    private readonly _cacheWrapHasKey: string;
    constructor(cacheWrapHasKey: string) {
        this._cacheWrapHasKey = cacheWrapHasKey;
    }

    asyncGet(key: string): Promise<T> {
        throw new Error("Method not implemented.");
    }
    asyncSet(key: string, obj: T): Promise<void> {
        throw new Error("Method not implemented.");
    }
    asyncHas(key: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    asyncKeys(): Promise<string[]> {
        throw new Error("Method not implemented.");
    }
    asyncRemove(key: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    asyncClear(): Promise<void> {
        throw new Error("Method not implemented.");
    }
    asyncGetMany(keys: string[]): Promise<T[]> {
        throw new Error("Method not implemented.");
    }
    get(key: string): T {
        throw new Error("Method not implemented.");
    }
    set(key: string, json: T): void {
        throw new Error("Method not implemented.");
    }
    has(key: string): boolean {
        throw new Error("Method not implemented.");
    }
    keys(): string[] {
        throw new Error("Method not implemented.");
    }
    remove(key: string): void {
        throw new Error("Method not implemented.");
    }
    clear(): void {
        throw new Error("Method not implemented.");
    }
    getMany(keys: string[]): T[] {
        throw new Error("Method not implemented.");
    }
}