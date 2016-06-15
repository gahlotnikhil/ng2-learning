import {Inject} from '@angular/core';
import {Http} from '@angular/http';
import {AllComponents} from '../route/AllComponents';
import {RouteItem} from '../model/RouteItem';
import {RouteComponent} from '../route/RouteComponent';
import {Observable} from 'rxjs/Observable';

export class NavigationService {
  http: Http;
  configData: Array<RouteItem>;

  private obs: Observable<Array<number>>;

  static instance: NavigationService;
  static isCreating: Boolean = false;
  static URL = 'client/json/menu.json';

  constructor( @Inject(Http) http: Http) {
    this.http = http;
  }

  private transformToRouteItem(configItem, subItems): RouteItem {
    var routeItem = new RouteItem(configItem.component, configItem.name, configItem.as, configItem.path, configItem.label);

    if (subItems != undefined) {
      subItems.forEach(item => {
      routeItem.addChildRoute(new RouteItem(AllComponents.components[item.component], item.component, item.as, item.path, item.label));
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
          childItems.push(new RouteItem(item.component, item.name, rlink, rpath, item.label));
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

    return new Observable((observer) => {
      if (this.configData) {
        observer.next(this.configData);
        observer.complete();
      } else {
        this.http.get(NavigationService.URL).subscribe((res) => {
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

            if (item.label) {
              configObj['label'] = item.label;
            }

            this.configData.push(this.transformToRouteItem(configObj, item['sub-menu']))
          })
          observer.next(this.configData);
          observer.complete();
        });
      }
    });
  }
}