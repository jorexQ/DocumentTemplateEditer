import {AsyncStorage} from './types';
export class AsyncStorageCache < T extends {} > implements AsyncStorage < T > {

    constructor() {}

    get(key : string): Promise < T > {
        throw new Error("Method not implemented.");
    }

    set(key : string, json : T): Promise < void > {
        throw new Error("Method not implemented.");
    }

    has(key : string): Promise < boolean > {
        throw new Error("Method not implemented.");
    }

    keys(): Promise < string[] > {
        throw new Error("Method not implemented.");
    }

    remove(key : string): Promise < void > {
        throw new Error("Method not implemented.");
    }

    clear(): Promise < void > {
        throw new Error("Method not implemented.");
    }

    getMany(keys : string[]): Promise < any > {
        throw new Error("Method not implemented.");
    }
}