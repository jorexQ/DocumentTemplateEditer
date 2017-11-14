
//
type NullOrUnderfined = null | undefined;

/**
 * 
 * 
 * @export
 * @template T 
 * @param {*} obj 
 * @returns {obj is Promise<T>} 
 */
export function isPromise<T>(obj: any): obj is Promise<T> {
    return obj && obj.then && (obj.then instanceof Function);
}

/**
 * 
 * 
 * @export
 * @param {*} obj 
 * @returns {obj is NullOrUnderfined} 
 */
export function isNullOrUnderfined(obj: any): obj is NullOrUnderfined {
    return obj === null || obj === undefined;
}