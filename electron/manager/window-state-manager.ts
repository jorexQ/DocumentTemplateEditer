import "reflect-metadata";
import { injectable, inject } from "inversify";
import { BaseManager } from "../bootstrap/base-manager";
import { BootstrapEventBus } from "../bootstrap/bootstrap-event-bus";
import { nameof } from "../Infrastructure/base-tool";

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

  public initByOption(option: WindowStateOption) {}

  public refreshByOption(option: WindowStateOption) {}
}
