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
export class BaseManager {
  protected readonly bootstrapEventBus: BootstrapEventBus;

  constructor(
    @inject(nameof(BootstrapEventBus)) bootstrapEventBus: BootstrapEventBus
  ) {
    this.bootstrapEventBus = bootstrapEventBus;

    bootstrapEventBus.registerHandler(
      BootstrapEventType.initializing,
      this.initializingHandle
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

  protected async initializingHandle(
    this: BootstrapContext,
    arg: BootstrapArg
  ): Promise<void> {}

  protected async preparingHandle(
    this: BootstrapContext,
    arg: BootstrapArg
  ): Promise<void> {}

  protected async startingHandle(
    this: BootstrapContext,
    arg: BootstrapArg
  ): Promise<void> {}
}
