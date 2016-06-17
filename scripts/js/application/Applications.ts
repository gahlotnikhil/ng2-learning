import {Inject, Component} from '@angular/core';
import {NavigationService} from '../service/NavigationService';
import {Http} from '@angular/http';
import {RouteItem} from '../model/RouteItem';
import {RouteComponent} from '../route/RouteComponent'
import {SubMenu} from '../route/SubMenu';
import {RouterLink, RouteConfig, Router, RouterOutlet, RouteParams} from '@angular/router-deprecated';

@Component({
    selector: 'applications',
    templateUrl: '/client/html/applications.html',
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