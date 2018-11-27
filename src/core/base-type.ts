export interface ViewComponent extends BaseComponent {
  route: string;
}

export interface PageGlobalComponent extends BaseComponent {
  isContainer: boolean;
}

export interface PageComponent extends BaseComponent {
  position: string;
  isContainer: boolean;
}

interface BaseComponent {
  dependencyComponent: string[];
  key: string;
  name: string;
  action: any;
  store: any;
  class: any;
}
