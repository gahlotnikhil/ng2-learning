import { bootstrap }    from '@angular/platform-browser-dynamic';
import {Component, bind, Inject} from '@angular/core';
import {LocationStrategy, HashLocationStrategy, Location, CORE_DIRECTIVES} from '@angular/common';
import {RouteRegistry} from '@angular/router-deprecated';

import {RouterLink, RouteConfig, Router, RouterOutlet, RouteParams, ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {Http, HTTP_PROVIDERS} from '@angular/http';
import {AllComponents} from './js/route/AllComponents';
import {RouteItem} from './js/model/RouteItem';
import {Menu} from './js/route/Menu';
import {NavigationService} from './js/service/NavigationService';



@Component({
  selector: 'my-app',
  templateUrl: 'client/html/app.html',
  directives: [RouterLink, RouterOutlet, Menu]
})

class TaskAppComponent {
	router: Router;
    location: Location;
    ready: boolean;
    menuItems: Array<RouteItem>;
	//constructor(router: Router ) {
    constructor( @Inject(Router) router: Router, @Inject(Location) location: Location, 
		@Inject(RouteRegistry) registry: RouteRegistry, @Inject(NavigationService) navigationService: NavigationService) {
        this.router = router;
        this.location = location;
        this.ready = false;
        this.menuItems = [];

		navigationService.loadConfigData().subscribe(
          (data: Array<RouteItem>) => {

			var confData = [];

			data.forEach(item => {

				var confObj = {
					"component": item.component,
					"path": item.path,
					"as": item.as,
				};

				confData.push(confObj);
			});

			// Add route config here
			router.config(confData);

			// Add child routes
			data.forEach(item => {
				var childRouteItems = [];
				var defaultChild = undefined;

				item.childRouteItems.forEach(child => {
					defaultChild = child;

					// Register child routes
					registry.config(item.component, {
						"component": child.component,
						"path": child.path,
						"as": child.as,
					});
				});
				var rlink = item.as;
				var rpath = item.path;
				if (defaultChild) {
					rlink = rlink + '/' + defaultChild.as;
					//rpath = item.path.slice(0, item.path.indexOf('.') - 1);
				}
				this.menuItems.push(new RouteItem(item.component, item.name, rlink, rpath, item.label));

			});

			this.ready = true;
		});
    }
    getLinkStyle(path) {
        return this.location.path() === path;
    }
}

bootstrap(TaskAppComponent, [ROUTER_PROVIDERS, HTTP_PROVIDERS, CORE_DIRECTIVES, NavigationService, AllComponents, bind(LocationStrategy).toClass(HashLocationStrategy)]);

// bootstrap(TaskAppComponent, [NavigationService, AllComponents, httpInjectables, routerInjectables, bind(LocationStrategy).toClass(HashLocationStrategy)]);

