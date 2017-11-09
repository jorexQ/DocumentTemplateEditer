
export function isPromise<T>(obj: any): obj is Promise<T> {
    return obj && obj.then && (obj.then instanceof Function);
}