import { AsyncStorage, SyncStorage } from './types';
import { RWLock } from './rw-lock';

export class StorageFile implements AsyncStorage<string>, SyncStorage<string> {
    private _filePath: string;
    constructor(filePath: string) {
        this._filePath = filePath;
    }
    get(key: string): string {
        throw new Error("Method not implemented.");
    }
    set(key: string, obj: string): void {
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
    getMany(keys: string[]): string[] {
        throw new Error("Method not implemented.");
    }
    asyncGet(key: string): Promise<string> {
        throw new Error("Method not implemented.");
    }
    asyncSet(key: string, obj: string): Promise<void> {
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
    asyncGetMany(keys: string[]): Promise<string[]> {
        throw new Error("Method not implemented.");
    }
}