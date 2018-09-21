import "reflect-metadata";
import { injectable, inject } from "inversify";
import { nameof } from "../infrastructure/base-tool";
import { BaseManager } from "../bootstrap/base-manager";
import { BootstrapEventBus } from "../bootstrap/bootstrap-event-bus";

export type ChromeExtensionOptionItem = {
  tokenKey: string;
};

export interface ChromeExtensionOption {
  extensionRootUri: string;
  extensions: ChromeExtensionOptionItem[];
}

@injectable()
export class ChromeExtensionManager extends BaseManager {
  constructor(
    @inject(nameof(BootstrapEventBus)) bootstrapEventBus: BootstrapEventBus
  ) {
    super(bootstrapEventBus);

  }
}
