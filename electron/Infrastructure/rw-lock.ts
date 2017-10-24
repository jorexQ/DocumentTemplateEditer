//
type QueueMehodType = () => Promise<void>;

//
type ReleaseLockMethodType = () => Promise<void>;

//
type CallBackMehodType<T, T1> = (this: T, releaseLockMethod: ReleaseLockMethodType) => T1;

/**
 * 
 * 
 * @export
 * @interface LockOptions
 * @template T 
 * @template T1 
 */
export interface LockOptions<T, T1> {
    callBack: CallBackMehodType<T, T1>,
    scope: T,
    timeout: number,
    timeoutCallBack?: () => void;
}

/**
 * 
 * 
 * @export
 * @class SyncWaiter
 */
export class SyncWaiter {
    private readonly _timeout: number;
    private readonly _whenMehod: () => boolean;

    constructor(timeout: number, whenMehod: () => boolean) {
        this._timeout = timeout;
        this._whenMehod = whenMehod;
    }

    /**
     * 
     * 
     * @returns {void} 
     * @memberof SyncWaiter
     */
    run<T>(execMethod: () => T): T {
        let isDone: boolean = false;
        let isTimeout: boolean = false;
        var currentUseTime = 0;
        var clearIntervalTimeout = setInterval(() => {
            currentUseTime++;
            if (currentUseTime === this._timeout) {
                isTimeout = true;
                clearInterval(clearIntervalTimeout);
                clearIntervalTimeout = null;
            }
        }, 1);

        do {
            isDone = this._whenMehod();
        } while (!isDone && !isTimeout);

        if (clearIntervalTimeout) {
            clearInterval(clearIntervalTimeout);
        }

        if (isTimeout) {
            return execMethod();
        } else {
            return null;
        }
    }
};

/**
 * 
 * 
 * @export
 * @class RWLock
 */
export class RWLock {
    /**
     * 
     * 
     * @private
     * @static
     * @type {RWLock}
     * @memberof RWLock
     */
    private static _defaultInstance: RWLock = new RWLock();

    /**
     * 
     * 
     * @private
     * @static
     * @type {Map<string, RWLock>}
     * @memberof RWLock
     */
    private static _mapInstance: Map<string, RWLock> = new Map<string, RWLock>();

    /**
     * -1 为正在写
     * >0 为有人在读
     * @private
     * @type {number}
     * @memberof RWLock
     */
    private _readers: number = 0;

    /**
     * 
     * 
     * @private
     * @type {Array<QueueMehodType>}
     * @memberof RWLock
     */
    private _awaitExecuteQueue: Array<QueueMehodType> = new Array<QueueMehodType>();

    /**
     * Creates an instance of RWLock.
     * @memberof RWLock
     */
    private constructor() { }

    /**
     * 
     * 
     * @static
     * @param {string} [key=''] 
     * @returns {RWLock} 
     * @memberof RWLock
     */
    public static getCurrent(key: string = ''): RWLock {

        if (key === '')
            return this._defaultInstance;

        if (this._mapInstance.has(key))
            return this._mapInstance.get(key);

        let keyRWLock: RWLock = new RWLock();

        this
            ._mapInstance
            .set(key, keyRWLock);

        return keyRWLock;
    };

    /**
     * 
     * 
     * @returns {boolean} 
     * @memberof RWLock
     */
    public checkIsLocking(action: 'read' | 'write'): boolean {
        if (action === 'read') {
            return this._readers < 0 || this._awaitExecuteQueue.length > 0;
        } else if (action === 'write') {
            return this._readers > 0 || this._awaitExecuteQueue.length > 0;
        } else {
            throw new TypeError();
        }
    }

    public read<T, T1>(option: LockOptions<T, T1>): T1 {
        return null;
    };

    public write<T, T1>(option: LockOptions<T, T1>): T1 {
        return null;
    };

    public asyncRead<T, T1>(option: LockOptions<T, T1>): Promise<T1> {


        return null;
    };

    public asyncWrite<T, T1>(option: LockOptions<T, T1>): Promise<T1> {


        return null;
    };
};
