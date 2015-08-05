import {Inject, Component, View} from 'angular2/angular2';
import {routerInjectables, LocationStrategy, HashLocationStrategy, RouteRegistry} from 'angular2/router';
import {RootRouter, Pipeline, RouterLink, RouteConfig, Router, RouterOutlet, Location, RouteParams} from 'angular2/router';
import {NavigationService} from 'js/service/NavigationService';
import {Http, httpInjectables} from 'angular2/http';
import {RouteItem} from 'js/model/RouteItem';
import {RouteComponent} from 'js/route/RouteComponent'
import {SubMenu} from 'js/route/SubMenu';

@Component({
    selector: 'applications',
})

@View({
    templateUrl: '../html/applications.html',
    directives: [RouterLink, RouterOutlet, SubMenu]
})

export class Applications implements RouteComponent {
    routeItems: Array<RouteItem>;

    constructor( @Inject(NavigationService) navigationService: NavigationService) {
        this.routeItems = navigationService.getChildRouteItems(this);
    }

    getName(): string {
        return "applications";
    }
}