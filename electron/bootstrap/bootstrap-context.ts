export class BootstrapContext {
  public readonly startHtmlUrl: string;
  public readonly startOptionUrl: string;

  constructor(options: BootstrapOptions) {
    if (!options) return;
    this.startHtmlUrl = options.startHtmlUrl;
    this.startOptionUrl = options.startOptionUrl;
  }
}

export interface BootstrapOptions {
  startHtmlUrl: string;
  startOptionUrl: string;
}
