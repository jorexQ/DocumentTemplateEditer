import * as path from "path";
import { app, screen } from "electron";

export interface WindowStateOption {
  height: number;
  width: number;
  isMaximize: boolean;
}

export class WindowStateManager {
  // public name: string;
  private readonly _stateOption: WindowStateOption;

  constructor(option: WindowStateOption) {}

  public initByOption(option: WindowStateOption) {}

  public refreshByOptoin(option: WindowStateOption) {}
}
