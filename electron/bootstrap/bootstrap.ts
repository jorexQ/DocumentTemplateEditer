import { IocTool } from "../infrastructure/ioc-tool";
import { managerIocSetup } from "./base-manager";
import { Container } from "inversify";

export class Bootstrap {
  public readonly managerContainer: Container;

  private constructor() {
    let iocTool = new IocTool();
    this.managerContainer = this.getManagerContainer(iocTool);
  }

  public getManagerContainer(iocTool: IocTool): Container {
    managerIocSetup(iocTool);
    return iocTool.container;
  }

  public preparing(): void {}

  public initializing(): void {}

  public starting(): void {}

  public async open(): Promise<void> {}

  private static instance: Bootstrap;
  public static get impl(): Bootstrap {
    if (!this.instance) {
      this.instance = new Bootstrap();
    }
    return this.instance;
  }
}
