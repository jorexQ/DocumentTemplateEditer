import { Container } from "inversify";
import { nameof } from "../infrastructure/base-tool";

type constructor<T> = new (...params: any[]) => T;

export class IocTool {
  public readonly container: Container;

  public RegisterSingletonClass<T>(constructor: constructor<T>): IocTool {
    var typeName = nameof(constructor);
    this.container
      .bind<T>(typeName)
      .to(constructor)
      .inSingletonScope();
    return this;
  }

  public RegisterConstantValue<T>(impl: T): IocTool {
    var typeName = impl.constructor.name;
    this.container.bind<T>(typeName).toConstantValue(impl);
    return this;
  }

  constructor() {
    this.container = new Container({
      autoBindInjectable: true,
      defaultScope: "Singleton"
    });
  }
}
