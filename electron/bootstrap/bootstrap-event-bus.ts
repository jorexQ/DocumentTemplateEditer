import { EventBus } from "../infrastructure/event-bus";

export type BootstrapEventType = "preparing" | "initializing" | "starting";

export class BootstrapEventBus extends EventBus<
  BootstrapContext,
  BootstrapArg
> {
  constructor() {
    super();
  }
}

export class BootstrapContext {
  constructor(startHtmlUrl: string, startOptionUrl: string) {}
}

export class BootstrapArg {
  constructor() {}
}
