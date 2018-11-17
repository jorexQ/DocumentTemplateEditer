import { EventBus } from "../infrastructure/event-bus";
import { injectable } from "inversify";
import { EventHandler } from "../infrastructure/event-bus";
import { BootstrapContext } from "./bootstrap-context";

export enum BootstrapEventType {
  preparing = "preparing",
  initializing = "initializing",
  starting = "starting"
}

@injectable()
export class BootstrapEventBus extends EventBus<
  BootstrapEventType,
  BootstrapContext,
  BootstrapArg
> {
  private readonly context: BootstrapContext;

  constructor(context: BootstrapContext) {
    super();
    this.context = context;
  }

  public registerHandler(
    eventName: BootstrapEventType,
    eventHandler: EventHandler<BootstrapContext, BootstrapArg>
  ) {
    this.register(this.context, eventName, eventHandler);
  }

  public async triggerHandler(
    eventName: BootstrapEventType,
    arg: BootstrapArg
  ) {}
}


export class BootstrapArg {
  constructor() {}
}
