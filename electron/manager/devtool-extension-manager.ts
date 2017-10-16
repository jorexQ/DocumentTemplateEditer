export type DevtoolExtensionOptionItem = {
    tokenKey: string
};

export interface DevtoolExtensionOption {
    extensionRootUri : string,
    extensions : DevtoolExtensionOptionItem[]

}

export class DevtoolExtensionManager {};