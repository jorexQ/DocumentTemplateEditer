export function extend<T extends {}>(target: T, source: T): T {

    return null;
}

export function isPromise<T>(obj: any): obj is Promise<T> {
    return obj && obj.then && (obj.then instanceof Function);
}