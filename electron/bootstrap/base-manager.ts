import { BootstrapEventBus } from "./bootstrap-event-bus";


export class BaseManager {
  protected readonly bootstrapEventBus: BootstrapEventBus;

  constructor(bootstrapEventBus: BootstrapEventBus) {
    this.bootstrapEventBus = bootstrapEventBus;
  }
}
