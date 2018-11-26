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

    bootstrapEventBus.awaitRegisterHandler(
      BootstrapEventType.preparing,
      this.preparingHandle()
    );

    bootstrapEventBus.awaitRegisterHandler(
      BootstrapEventType.initializing,
      this.initializingHandle()
    );

    bootstrapEventBus.awaitRegisterHandler(
      BootstrapEventType.starting,
      this.startingHandle()
    );
  }

  protected abstract async initializingHandle(): Promise<
    EventHandler<BootstrapContext, BootstrapArg>
  >;

  protected abstract async preparingHandle(): Promise<
    EventHandler<BootstrapContext, BootstrapArg>
  >;

  protected abstract async startingHandle(): Promise<
    EventHandler<BootstrapContext, BootstrapArg>
  >;
}
