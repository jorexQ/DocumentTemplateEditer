
class Lock {
    public readers: number = 0;
    public awaitExecuteQueue: Function[] = [];
}

export class FileRWLock {

    private static _defaultInstance: FileRWLock = new FileRWLock();

    private static _mapInstance: Map<string, FileRWLock> = new Map<string, FileRWLock>();

    private currentLock: Lock = new Lock();

    private constructor() { }

    public static getCurrent(key: string = ''): FileRWLock {

        if (key === '') return this._defaultInstance;

        if (this._mapInstance.has(key)) return this._mapInstance.get(key);

        let keyFileRWLock: FileRWLock = new FileRWLock();
        this._mapInstance.set(key, keyFileRWLock);
        return keyFileRWLock;
    };

};


