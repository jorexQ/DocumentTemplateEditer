import "reflect-metadata";
import { injectable, inject } from "inversify";
import { BaseManager } from "../bootstrap/base-manager";
import {
  BootstrapEventBus,
  BootstrapArg
} from "../bootstrap/bootstrap-event-bus";
import { nameof } from "../Infrastructure/base-tool";
import { BootstrapContext } from "../bootstrap/bootstrap-context";
import { lazyInject } from "../bootstrap/bootstrap-ioc";
import { ConfigLoadManager } from "./config-load-manager";
import { EventHandler } from "../infrastructure/event-bus";

export interface WindowStateOption {
  height: number;
  width: number;
  isMaximize: boolean;
}

@injectable()
export class WindowStateManager extends BaseManager {
  // public name: string;
  private readonly _stateOption: WindowStateOption;

  @lazyInject(nameof(ConfigLoadManager))
  public configLoadManager: ConfigLoadManager;

  constructor(
    @inject(nameof(BootstrapEventBus)) bootstrapEventBus: BootstrapEventBus
  ) {
    super(bootstrapEventBus);
  }

  protected async preparingHandle(): Promise<
    EventHandler<BootstrapContext, BootstrapArg>
  > {
    return async function(this: BootstrapContext, arg: BootstrapArg) {
      console.log("ConfigLoadManager preparing");
      return;
    };
  }

  protected async initializingHandle(): Promise<
    EventHandler<BootstrapContext, BootstrapArg>
  > {
    return async function(this: BootstrapContext, arg: BootstrapArg) {
      console.log("ConfigLoadManager initializing");
      return;
    };
  }

  protected async startingHandle(): Promise<
    EventHandler<BootstrapContext, BootstrapArg>
  > {
    return async function(this: BootstrapContext, arg: BootstrapArg) {
      console.log("ConfigLoadManager starting");
      return;
    };
  }

  public initByOption(option: WindowStateOption) {}

  public refreshByOption(option: WindowStateOption) {}
}
