

export class RouteItem {
  private _as: string;
  private _component: any;
  private _name: string;
  private _label: string;
  private _path: string;
  private _childRouteItems: Array<RouteItem>;

  constructor(component: any, name: string, as: string, path: string, label: string) {
    this._component = component;
    this._name = name;
    this._as = as;
    this._path = path;
    this._label = label;
    this._childRouteItems = [];
  }

  get name(): string {
    return this._name;
  }

  get component(): any {
    return this._component;
  }

  get as(): string {
    return this._as;
  }

  get path(): string {
    return this._path;
  }

  get label(): string {
    if (this._label == undefined) {
      return this._name;
    }
    return this._label;
  }

  get childRouteItems(): Array<RouteItem> {
    return this._childRouteItems;
  }

  addChildRoute(routeItem: RouteItem): void {
    this._childRouteItems.push(routeItem);
  }

}