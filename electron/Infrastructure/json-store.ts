import { Storage } from './types';

export class JsonStore {

    private readonly _storage: Storage<string>;

    constructor(storage: Storage<string>) {
        this._storage = storage;
    }

    public set<T extends {}>(keyStr: string, value: T) {

    }

    public async asyncSet<T extends {}>(keyStr: string, value: T): Promise<void> {

    }

    public get<T extends {}>(keyStr: string): T {
        return null;
    }

    public async asyncGet<T extends {}>(keyStr: string): Promise<T> {
        return null;
    }
};