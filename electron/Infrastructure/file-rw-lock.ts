type QueueMehodType = () => Promise < void >;
type ReleaseLockMethodType = () => Promise < void >;
type CallBackMehodType = (releaseLockMethod : ReleaseLockMethodType) => Promise < void >;

export interface LockOptions < T > {
    callBack: CallBackMehodType,
    timeout?: number,
    scope?: T,
    timeoutCallBack?: () => Promise < void >;
}

export class FileRWLock {
    private static _defaultInstance : FileRWLock = new FileRWLock();

    private static _mapInstance : Map < string,
    FileRWLock > = new Map < string,
    FileRWLock > ();

    private readers : number = 0;

    private awaitExecuteQueue : Array < QueueMehodType > = new Array < QueueMehodType > ();

    private constructor() {}

    public static getCurrent(key : string = '') : FileRWLock {

        if(key === '') 
            return this._defaultInstance;
        
        if (this._mapInstance.has(key)) 
            return this._mapInstance.get(key);
        
        let keyFileRWLock: FileRWLock = new FileRWLock();
        this
            ._mapInstance
            .set(key, keyFileRWLock);
        return keyFileRWLock;
    };

    public read < T > (option : LockOptions < T >) {

        
    }
};
