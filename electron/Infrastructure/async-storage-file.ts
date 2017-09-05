import {AsyncStorage} from './types';
import {FileRWLock} from './file-rw-lock';

export class AsyncStorageFile implements AsyncStorage<string> {

    constructor() {}

    get  (key : string) : Promise < string > {
        return new Promise < string > ((resolve, reject) => {

            resolve();
        });
    }

    set  (key : string, content : string) : Promise < void > {
        throw new Error("Method not implemented.");
    }

    has(key : string) : Promise < boolean > {
        throw new Error("Method not implemented.");
    }

    keys() : Promise < string[] > {
        throw new Error("Method not implemented.");
    }

    remove(key : string) : Promise < void > {
        throw new Error("Method not implemented.");
    }

    clear() : Promise < void > {
        throw new Error("Method not implemented.");
    }

    getMany(keys : string[]) : Promise < any > {
        throw new Error("Method not implemented.");
    }
}