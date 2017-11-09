import { Storage } from './types';
import { RWLock, LockOptions } from './rw-lock';
import { JsonStoreByFile } from './json-store';
import fs from 'fs';

/**
 * 
 * 
 * @export
 * @class StorageFile
 * @implements {Storage}
 */
export class StorageFile implements Storage {
    private _filePath: string;

    /**
     * Creates an instance of StorageFile.
     * @param {string} filePath 
     * @memberof StorageFile
     */
    constructor(filePath: string) {
        this._filePath = filePath;
    }

    private async asyncGetFileContent(): Promise<{}> {
        let rwLock = RWLock.getCurrent();
        let option: LockOptions<void, Promise<{}>> = {
            callBack: () => new Promise<{}>((resolve, reject) => {
                fs.readFile(this._filePath, (ex, data) => {
                    let contentStr = data.toString();
                    let obj = JSON.parse(contentStr) as {};
                    resolve(obj);
                });
            }),
            scope: null,
            timeout: 20000,
        };
        let promise = await rwLock.asyncRead(option)
        return promise;
    }

    private getFileContent(): {} {
        return null;
    }

    private setFileContent() {

    }

    /**
     * 
     * 
     * @template T 
     * @param {string} key 
     * @returns {T} 
     * @memberof StorageFile
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
     * @memberof StorageFile
     */
    set<T extends any>(key: string, obj: T): void {
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
     * @template T 
     * @param {string[]} keys 
     * @returns {T[]} 
     * @memberof StorageFile
     */
    getMany<T extends any>(keys: string[]): T[] {
        throw new Error("Method not implemented.");
    }

    /**
     * 
     * 
     * @template T 
     * @param {string} key 
     * @returns {Promise<T>} 
     * @memberof StorageFile
     */
    asyncGet<T extends any>(key: string): Promise<T> {
        throw new Error("Method not implemented.");
    }

    /**
     * 
     * 
     * @template T 
     * @param {string} key 
     * @param {T} obj 
     * @returns {Promise<void>} 
     * @memberof StorageFile
     */
    asyncSet<T extends any>(key: string, obj: T): Promise<void> {
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
     * @template T 
     * @param {string[]} keys 
     * @returns {Promise<T[]>} 
     * @memberof StorageFile
     */
    asyncGetMany<T extends any>(keys: string[]): Promise<T[]> {
        throw new Error("Method not implemented.");
    }
}