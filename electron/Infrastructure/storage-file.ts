import { AsyncStorage, SyncStorage } from './types';
import { RWLock } from './rw-lock';

/**
 * 
 * 
 * @export
 * @class StorageFile
 * @implements {AsyncStorage<string>}
 * @implements {SyncStorage<string>}
 */
export class StorageFile implements AsyncStorage<string>, SyncStorage<string> {
    private _filePath: string;

    /**
     * Creates an instance of StorageFile.
     * @param {string} filePath 
     * @memberof StorageFile
     */
    constructor(filePath: string) {
        this._filePath = filePath;
    }

    /**
     * 
     * 
     * @param {string} key 
     * @returns {string} 
     * @memberof StorageFile
     */
    get(key: string): string {
        throw new Error("Method not implemented.");
    }

    /**
     * 
     * 
     * @param {string} key 
     * @param {string} obj 
     * @memberof StorageFile
     */
    set(key: string, obj: string): void {
        throw new Error("Method not implemented.");
    }

    /**
     * 
     * 
     * @param {string} key 
     * @returns {boolean} 
     * @memberof StorageFile
     */
    has(key: string): boolean {
        throw new Error("Method not implemented.");
    }

    /**
     * 
     * 
     * @returns {string[]} 
     * @memberof StorageFile
     */
    keys(): string[] {
        throw new Error("Method not implemented.");
    }

    /**
     * 
     * 
     * @param {string} key 
     * @memberof StorageFile
     */
    remove(key: string): void {
        throw new Error("Method not implemented.");
    }

    /**
     * 
     * 
     * @memberof StorageFile
     */
    clear(): void {
        throw new Error("Method not implemented.");
    }

    /**
     * 
     * 
     * @param {string[]} keys 
     * @returns {string[]} 
     * @memberof StorageFile
     */
    getMany(keys: string[]): string[] {
        throw new Error("Method not implemented.");
    }

    /**
     * 
     * 
     * @param {string} key 
     * @returns {Promise<string>} 
     * @memberof StorageFile
     */
    asyncGet(key: string): Promise<string> {
        throw new Error("Method not implemented.");
    }

    /**
     * 
     * 
     * @param {string} key 
     * @param {string} obj 
     * @returns {Promise<void>} 
     * @memberof StorageFile
     */
    asyncSet(key: string, obj: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

    /**
     * 
     * 
     * @param {string} key 
     * @returns {Promise<boolean>} 
     * @memberof StorageFile
     */
    asyncHas(key: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    /**
     * 
     * 
     * @returns {Promise<string[]>} 
     * @memberof StorageFile
     */
    asyncKeys(): Promise<string[]> {
        throw new Error("Method not implemented.");
    }

    /**
     * 
     * 
     * @param {string} key 
     * @returns {Promise<void>} 
     * @memberof StorageFile
     */
    asyncRemove(key: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

    /**
     * 
     * 
     * @returns {Promise<void>} 
     * @memberof StorageFile
     */
    asyncClear(): Promise<void> {
        throw new Error("Method not implemented.");
    }

    /**
     * 
     * 
     * @param {string[]} keys 
     * @returns {Promise<string[]>} 
     * @memberof StorageFile
     */
    asyncGetMany(keys: string[]): Promise<string[]> {
        throw new Error("Method not implemented.");
    }
}