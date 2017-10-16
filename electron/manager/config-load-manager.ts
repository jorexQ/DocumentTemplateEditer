export type CustomConvertMethod<T> = (result: any) => T;

export class ConfigLoadManager {
    private configStoragePath: string;
    private configJsonContent: any;

    constructor(configPath: string = '') {
        this.configStoragePath = configPath;
        this.parseConfigJson();
    }

    public parseConfigJson(): void { }

    public getOption<T extends {}>(rootKey: string, customConvertMethod?: CustomConvertMethod<T>): T {
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
};