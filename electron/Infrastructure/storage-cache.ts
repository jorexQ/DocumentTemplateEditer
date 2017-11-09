import { SyncStorage } from './types';
import { JsonStoreByCache } from './json-store';

/**
 * 
 * 
 * @export
 * @class StorageCache
 * @implements {SyncStorage}
 */
export class StorageCache implements SyncStorage {

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
     * @template T 
     * @param {string} key 
     * @returns {T} 
     * @memberof StorageCache
     */
    get<T extends any>(key: string): T {
        throw new Error("Method not implemented.");
    }

    /**
     * 
     * 
     * @template T 
     * @param {string} key 
     * @param {T} obj 
     * @memberof StorageCache
     */
    set<T extends any>(key: string, obj: T): void {
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
     * @template T 
     * @param {string[]} keys 
     * @returns {T[]} 
     * @memberof StorageCache
     */
    getMany<T extends any>(keys: string[]): T[] {
        throw new Error("Method not implemented.");
    }
}