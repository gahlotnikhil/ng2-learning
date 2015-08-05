import {Inject} from 'angular2/angular2';
import {Http, httpInjectables} from 'angular2/http';
import {AllComponents} from 'js/route/AllComponents';
import {RouteItem} from 'js/model/RouteItem';
import {RouteComponent} from 'js/route/RouteComponent';
import {Promise} from 'angular2/src/facade/async';
import { Injector } from 'angular2/di';

export class NavigationService {
  http: Http;
  configData: Array<RouteItem>;

  static instance: NavigationService;
  static isCreating: Boolean = false;
  static URL = '../json/menu.json';

  constructor( @Inject(Http) http: Http) {
    this.http = http;
  }

  private transformToRouteItem(configItem, subItems): RouteItem {
    var routeItem = new RouteItem(configItem.component, configItem.name, configItem.as, configItem.path);

    if (subItems != undefined) {
      subItems.forEach(item => {
      routeItem.addChildRoute(new RouteItem(AllComponents.components[item.component], item.component, item.as, item.path));
      });
    }
    return routeItem;
  }

  getChildRouteItems(component: RouteComponent): Array<RouteItem> {
     var routeItem = this.getRouteItemByName(component.getName());
     var list = routeItem.childRouteItems;
     var childItems = [];
      list.forEach(item => {
          var rlink = routeItem.as + '/' + item.as;
          var rpath = routeItem.path.slice(0, routeItem.path.indexOf('.') - 1) + item.path;
          childItems.push(new RouteItem(item.component, item.name, rlink, rpath));
      });

    return childItems;
  }

  getRouteItemByName(name: string): RouteItem {
    var menuItems = this.configData;
    var routeItem = undefined;
    menuItems.forEach(item => {
      if (name == item.name) {
        routeItem = item;
      }
    });

    return routeItem;
  }

  getRouteItems(): Array<RouteItem> {
    return this.configData;
  }

  loadConfigData() {
    return new Promise((resolve) => {
      if (this.configData) {
        resolve(this.configData);
      } else {
        this.http.get(NavigationService.URL).toRx().subscribe((res) => {
          var arr = res.json();
          this.configData = [];
          arr.forEach(item => {
            var configObj = {};
            if (item.path) {
              configObj['path'] = item.path;
            }
            if (item.component) {
              configObj['name'] = item.component;
              configObj['component'] = AllComponents.components[item.component];
            }
            if (item.as) {
              configObj['as'] = item.as;
            }

            this.configData.push(this.transformToRouteItem(configObj, item['sub-menu']))
          })
          resolve(this.configData);
        });
      }
    });
  }
}