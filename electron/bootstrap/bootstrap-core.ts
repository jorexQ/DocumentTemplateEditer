import { Container } from "inversify";
import { IocTool } from "../infrastructure/ioc-tool";

/**
 *启动引导器
 *
 * @export
 * @class Bootstrap
 */
export class BootstrapCore {
  public readonly managerContainer: Container;

  /**
   * 引导器构造 会做的事:
   * 1.获取依赖容器，并注册基础管理器。
   *
   *
   * @memberof Bootstrap
   */
  public constructor() {
    let iocTool = new IocTool();
    this.managerContainer = this.getManagerContainer(iocTool);
  }

  public getManagerContainer(iocTool: IocTool): Container {
    let managerLoad = require("./bootstrop-ioc");
    managerLoad(iocTool);
    return iocTool.container;
  }

  /**
   * 启动准备期 会做的事:
   * 1.加载各个管理器的本地配置文件和相关的功能配置。
   * 2.
   *
   * @memberof Bootstrap
   */
  private async preparing(): Promise<void> {}

  /**
   * 启动初始化期 会做的事:
   * 1.初始化各个管理器相关的事件和功能。
   * 2.
   *
   * @memberof Bootstrap
   */
  private async initializing(): Promise<void> {}

  /**
   * 启动开始期
   *
   * @memberof Bootstrap
   */
  private async starting(): Promise<void> {}

  public async open(): Promise<void> {}

  private static instance: BootstrapCore;

  public static impl(): BootstrapCore {
    if (!this.instance) {
      this.instance = new BootstrapCore();
    }
    return this.instance;
  }
}
