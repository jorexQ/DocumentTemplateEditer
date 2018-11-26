import "reflect-metadata";
import { injectable, inject } from "inversify";
import { BaseManager, BootstrapEventWrap } from "../bootstrap/base-manager";
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

  protected getBootstrapEventWrap(): BootstrapEventWrap {
    return {
      preparingHandle: async () => {
        return async function(this: BootstrapContext, arg: BootstrapArg) {
          console.log("WindowStateManager preparing");
          return;
        };
      },
      initializingHandle: async () => {
        return async function(this: BootstrapContext, arg: BootstrapArg) {
          console.log("WindowStateManager initializing");
          return;
        };
      },
      startingHandle: async () => {
        return async function(this: BootstrapContext, arg: BootstrapArg) {
          console.log("WindowStateManager starting");
          return;
        };
      }
    };
  }

  public initByOption(option: WindowStateOption) {}

  public createWindow(): (launchInfo: any) => void {
    return () => null;
  }

  public activateWindow(): (event: Event, hasVisibleWindows: boolean) => void {
    return () => null;
  }

  public isWindowAllClosed(): boolean {
    return true;
  }
}
