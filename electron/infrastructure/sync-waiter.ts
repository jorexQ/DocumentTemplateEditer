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
    run(execMethod: () => void, timeoutExecMethod: () => void): void {
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
            timeoutExecMethod();
        }

        if (isDone) {
            execMethod();
        }
    }
};