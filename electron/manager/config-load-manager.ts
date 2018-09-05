import { Storage } from '../infrastructure/types';
import { StorageFile } from '../Infrastructure/storage-file';

//
export type CustomConvertMethod<T> = (result: T) => T;

//
export type GetOptionMethod<T> = <T extends {}>(rootKey: string, customConvertMethod?: CustomConvertMethod<T>) => T;

/**
 * 
 * 
 * @template T 
 * @param {string} rootKey 
 * @param {CustomConvertMethod<T>} [customConvertMethod] 
 * @returns {T} 
 */
function getOption<T extends {}>(rootKey: string, customConvertMethod?: CustomConvertMethod<T>): T {
    if (!customConvertMethod) {
        customConvertMethod = (result) => {
            return result;
        };
    };

    if (!this.configJsonContent) {
        return customConvertMethod(<T>{});
    }

    var currentValue = this.configJsonContent[rootKey];

    if (currentValue) {
        return customConvertMethod(currentValue);
    } else {
        return customConvertMethod(<T>{});
    }
}

/**
 * 
 * 
 * @export
 * @class ConfigLoadManager
 */
export class ConfigLoadManager {
    private readonly configRootPath: string
    constructor(configRootPath: string = '') {
        this.configRootPath = configRootPath;
    }

    public syncLoadConfigJson<T>(configStoragePath: string): GetOptionMethod<T> |null {

        let configJsonContent: any;

        return null;
    }

    public async asyncLoadConfigJson<T>(configStoragePath: string): Promise<GetOptionMethod<T>> {

        let configJsonContent: any;

        return new Promise<GetOptionMethod<T>>(function(){});
    }
};