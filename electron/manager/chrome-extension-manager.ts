import "reflect-metadata";
import { injectable, inject } from "inversify";
import { nameof } from "../infrastructure/base-tool";
import { BaseManager } from "../bootstrap/base-manager";
import { BootstrapEventBus, BootstrapArg } from "../bootstrap/bootstrap-event-bus";
import { BootstrapContext } from "../bootstrap/bootstrap-context";

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

  protected async initializingHandle(
    this: BootstrapContext,
    arg: BootstrapArg
  ): Promise<void> {
    console.log("ChromeExtensionManager initializing");
  }

  protected async preparingHandle(
    this: BootstrapContext,
    arg: BootstrapArg
  ): Promise<void> {
    console.log("ChromeExtensionManager preparing");
  }

  protected async startingHandle(
    this: BootstrapContext,
    arg: BootstrapArg
  ): Promise<void> {
    console.log("ChromeExtensionManager starting");
  }
  
}
