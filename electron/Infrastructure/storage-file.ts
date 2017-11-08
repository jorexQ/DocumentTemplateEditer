import { Storage } from './types';
import { RWLock, LockOptions } from './rw-lock';
import { JsonStore } from './json-store';
import fs from 'fs';

/**
 * 
 * 
 * @export
 * @class StorageFile
 * @implements {AsyncStorage<string>}
 * @implements {SyncStorage<string>}
 */
export class StorageFile implements Storage<string> {
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
    async asyncGet(key: string): Promise<string> {
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
    async asyncSet(key: string, obj: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

    /**
     * 
     * 
     * @param {string} key 
     * @returns {Promise<boolean>} 
     * @memberof StorageFile
     */
    async asyncHas(key: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    /**
     * 
     * 
     * @returns {Promise<string[]>} 
     * @memberof StorageFile
     */
    async asyncKeys(): Promise<string[]> {
        throw new Error("Method not implemented.");
    }

    /**
     * 
     * 
     * @param {string} key 
     * @returns {Promise<void>} 
     * @memberof StorageFile
     */
    async asyncRemove(key: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

    /**
     * 
     * 
     * @returns {Promise<void>} 
     * @memberof StorageFile
     */
    async asyncClear(): Promise<void> {
        throw new Error("Method not implemented.");
    }

    /**
     * 
     * 
     * @param {string[]} keys 
     * @returns {Promise<string[]>} 
     * @memberof StorageFile
     */
    async asyncGetMany(keys: string[]): Promise<string[]> {
        throw new Error("Method not implemented.");
    }
}