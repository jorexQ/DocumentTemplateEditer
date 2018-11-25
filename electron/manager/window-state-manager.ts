import "reflect-metadata";
import { injectable, inject } from "inversify";
import { BaseManager } from "../bootstrap/base-manager";
import { BootstrapEventBus, BootstrapArg } from "../bootstrap/bootstrap-event-bus";
import { nameof } from "../Infrastructure/base-tool";
import { BootstrapContext } from "../bootstrap/bootstrap-context";

export interface WindowStateOption {
  height: number;
  width: number;
  isMaximize: boolean;
}

@injectable()
export class WindowStateManager extends BaseManager {
  // public name: string;
  private readonly _stateOption: WindowStateOption;

  constructor(
    @inject(nameof(BootstrapEventBus)) bootstrapEventBus: BootstrapEventBus
  ) {
    super(bootstrapEventBus);
  }
  
  protected async initializingHandle(
    this: BootstrapContext,
    arg: BootstrapArg
  ): Promise<void> {
    console.log("WindowStateManager initializing");
  }

  protected async preparingHandle(
    this: BootstrapContext,
    arg: BootstrapArg
  ): Promise<void> {
    console.log("WindowStateManager preparing");
  }

  protected async startingHandle(
    this: BootstrapContext,
    arg: BootstrapArg
  ): Promise<void> {
    console.log("WindowStateManager starting");
  }

  public initByOption(option: WindowStateOption) {}

  public refreshByOption(option: WindowStateOption) {}
}
