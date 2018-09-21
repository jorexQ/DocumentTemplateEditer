import "reflect-metadata";
import { injectable, inject } from "inversify";
import { BaseManager } from "../bootstrap/base-manager";
import { nameof } from "../Infrastructure/base-tool";
import { BootstrapEventBus } from "../bootstrap/bootstrap-event-bus";


@injectable()
export class IpcEventManager extends BaseManager  {
    constructor(
        @inject(nameof(BootstrapEventBus)) bootstrapEventBus: BootstrapEventBus
      ) {
        super(bootstrapEventBus);
      }
};