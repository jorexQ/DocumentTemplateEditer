import { JsonStore } from '../infrastructure/json-store';
import { Storage } from '../infrastructure/types';
import { StorageFile } from '../Infrastructure/storage-file';
import { JsonStore } from '../Infrastructure/json-store';

//
export type CustomConvertMethod<T> = (result: any) => T;

//
export type GetOptionMethod = <T extends {}>(rootKey: string, customConvertMethod?: CustomConvertMethod<T>) => T;

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
            return <T>result;
        };
    };

    if (!this.configJsonContent) {
        return customConvertMethod(null);
    }

    var currentValue = this.configJsonContent[rootKey];

    if (currentValue) {
        return customConvertMethod(currentValue);
    } else {
        return customConvertMethod(null);
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

    public syncLoadConfigJson(configStoragePath: string): GetOptionMethod {

        let storageFile: StorageFile = new StorageFile(configStoragePath);
        
        let jsonStore = new JsonStore(storageFile);

        

        let configJsonContent: any;

        return null;
    }

    public async asyncLoadConfigJson(configStoragePath: string): Promise<GetOptionMethod> {

        let configJsonContent: any;

        return new Promise<GetOptionMethod>(null);
    }
};