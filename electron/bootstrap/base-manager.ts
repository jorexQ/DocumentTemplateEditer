import { injectable, inject } from "inversify";
import { nameof } from "../infrastructure/base-tool";
import {
  BootstrapEventBus,
  BootstrapEventType,
  BootstrapArg
} from "./bootstrap-event-bus";
import { EventHandler } from "../infrastructure/event-bus";
import { BootstrapContext } from "./bootstrap-context";

@injectable()
export abstract class BaseManager {
  protected readonly bootstrapEventBus: BootstrapEventBus;

  constructor(
    @inject(nameof(BootstrapEventBus)) bootstrapEventBus: BootstrapEventBus
  ) {
    this.bootstrapEventBus = bootstrapEventBus;
    let self = this;
    bootstrapEventBus.registerHandler(
      BootstrapEventType.initializing,
      async function(this: BootstrapContext, arg: BootstrapArg) {
        await self.initializingHandle.call(this,BootstrapArg);
      }
    );

    bootstrapEventBus.registerHandler(
      BootstrapEventType.preparing,
      this.preparingHandle
    );

    bootstrapEventBus.registerHandler(
      BootstrapEventType.starting,
      this.startingHandle
    );
  }

  protected abstract async initializingHandle(
    this: BootstrapContext,
    arg: BootstrapArg
  ): Promise<void>

  protected abstract async preparingHandle(
    this: BootstrapContext,
    arg: BootstrapArg
  ): Promise<void> 

  protected abstract async startingHandle(
    this: BootstrapContext,
    arg: BootstrapArg
  ): Promise<void>
}
