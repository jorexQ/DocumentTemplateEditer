import "reflect-metadata";
import { injectable, inject } from "inversify";

import { nameof } from "../infrastructure/base-tool";
import { BaseManager } from "../bootstrap/base-manager";
import { BootstrapEventBus } from "../bootstrap/bootstrap-event-bus";
import { Storage } from "../infrastructure/types";
import { StorageFile } from "../Infrastructure/storage-file";

//
export type CustomConvertMethod<T> = (result: T) => T;

//
export type GetOptionMethod<T> = <T extends {}>(
  rootKey: string,
  customConvertMethod?: CustomConvertMethod<T>
) => T;

/**
 *
 *
 * @template T
 * @param {string} rootKey
 * @param {CustomConvertMethod<T>} [customConvertMethod]
 * @returns {T}
 */
function getOption<T extends {}>(
  rootKey: string,
  customConvertMethod?: CustomConvertMethod<T>
): T {
  if (!customConvertMethod) {
    customConvertMethod = result => {
      return result;
    };
  }

  if (!this.configJsonContent) {
    return customConvertMethod(<T>{});
  }

  var currentValue = this.configJsonContent[rootKey];

  if (currentValue) {
    return customConvertMethod(currentValue);
  } else {
    return customConvertMethod(<T>{});
  }
}

/**
 *
 *
 * @export
 * @class ConfigLoadManager
 */
@injectable()
export class ConfigLoadManager extends BaseManager {
  private readonly configRootPath: string = "";
  constructor(
    @inject(nameof(BootstrapEventBus)) bootstrapEventBus: BootstrapEventBus
  ) {
    super(bootstrapEventBus);
  }

  public syncLoadConfigJson<T>(
    configStoragePath: string
  ): GetOptionMethod<T> | null {
    let configJsonContent: any;

    return null;
  }

  public async asyncLoadConfigJson<T>(
    configStoragePath: string
  ): Promise<GetOptionMethod<T>> {
    let configJsonContent: any;

    return new Promise<GetOptionMethod<T>>(function() {});
  }
}
