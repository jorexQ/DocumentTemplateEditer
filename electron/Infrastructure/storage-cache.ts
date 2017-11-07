import { AsyncStorage, SyncStorage } from './types';

/**
 * 
 * 
 * @export
 * @class StorageCache
 * @implements {AsyncStorage<T>}
 * @implements {SyncStorage<T>}
 * @template T 
 */
export class StorageCache<T extends any> implements AsyncStorage<T>, SyncStorage<T> {
    private readonly _cacheWrapHasKey: string;

    /**
     * Creates an instance of StorageCache.
     * @param {string} cacheWrapHasKey 
     * @memberof StorageCache
     */
    constructor(cacheWrapHasKey: string) {
        this._cacheWrapHasKey = cacheWrapHasKey;
    }

    /**
     * 
     * 
     * @param {string} key 
     * @returns {Promise<T>} 
     * @memberof StorageCache
     */
    asyncGet(key: string): Promise<T> {
        throw new Error("Method not implemented.");
    }

    /**
     * 
     * 
     * @param {string} key 
     * @param {T} obj 
     * @returns {Promise<void>} 
     * @memberof StorageCache
     */
    asyncSet(key: string, obj: T): Promise<void> {
        throw new Error("Method not implemented.");
    }

    /**
     * 
     * 
     * @param {string} key 
     * @returns {Promise<boolean>} 
     * @memberof StorageCache
     */
    asyncHas(key: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    /**
     * 
     * 
     * @returns {Promise<string[]>} 
     * @memberof StorageCache
     */
    asyncKeys(): Promise<string[]> {
        throw new Error("Method not implemented.");
    }

    /**
     * 
     * 
     * @param {string} key 
     * @returns {Promise<void>} 
     * @memberof StorageCache
     */
    asyncRemove(key: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

    /**
     * 
     * 
     * @returns {Promise<void>} 
     * @memberof StorageCache
     */
    asyncClear(): Promise<void> {
        throw new Error("Method not implemented.");
    }

    /**
     * 
     * 
     * @param {string[]} keys 
     * @returns {Promise<T[]>} 
     * @memberof StorageCache
     */
    asyncGetMany(keys: string[]): Promise<T[]> {
        throw new Error("Method not implemented.");
    }

    /**
     * 
     * 
     * @param {string} key 
     * @returns {T} 
     * @memberof StorageCache
     */
    get(key: string): T {
        throw new Error("Method not implemented.");
    }

    /**
     * 
     * 
     * @param {string} key 
     * @param {T} json 
     * @memberof StorageCache
     */
    set(key: string, json: T): void {
        throw new Error("Method not implemented.");
    }

    /**
     * 
     * 
     * @param {string} key 
     * @returns {boolean} 
     * @memberof StorageCache
     */
    has(key: string): boolean {
        throw new Error("Method not implemented.");
    }

    /**
     * 
     * 
     * @returns {string[]} 
     * @memberof StorageCache
     */
    keys(): string[] {
        throw new Error("Method not implemented.");
    }

    /**
     * 
     * 
     * @param {string} key 
     * @memberof StorageCache
     */
    remove(key: string): void {
        throw new Error("Method not implemented.");
    }

    /**
     * 
     * 
     * @memberof StorageCache
     */
    clear(): void {
        throw new Error("Method not implemented.");
    }
    
    /**
     * 
     * 
     * @param {string[]} keys 
     * @returns {T[]} 
     * @memberof StorageCache
     */
    getMany(keys: string[]): T[] {
        throw new Error("Method not implemented.");
    }
}