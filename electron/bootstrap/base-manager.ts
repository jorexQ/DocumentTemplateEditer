import { injectable, inject } from "inversify";
import { nameof } from "ts-simple-nameof";
import { BootstrapEventBus } from "./bootstrap-event-bus";

@injectable()
export class BaseManager {
  protected readonly bootstrapEventBus: BootstrapEventBus;

  constructor(
    @inject(nameof(BootstrapEventBus)) bootstrapEventBus: BootstrapEventBus
  ) {
    this.bootstrapEventBus = bootstrapEventBus;
  }
}
