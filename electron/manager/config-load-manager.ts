export class ConfigLoadManager {
    private configStoragePath : string;

    constructor(configPath : string = '') {
        this.configStoragePath = configPath;
        this.parseConfigJson();
    }

    public parseConfigJson() : void {}
};