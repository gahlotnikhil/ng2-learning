import {Inject, Component} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router-deprecated';
import {NavigationService} from '../service/NavigationService';
import {RouteItem} from '../model/RouteItem';
import {RouteComponent} from '../route/RouteComponent';
import {SubMenu} from '../route/SubMenu';

@Component({
    selector: 'showcase',
    templateUrl: '/client/html/components.html',
    directives: [RouterLink, RouterOutlet, SubMenu]
})

export class Showcase implements RouteComponent {
    routeItems: Array<RouteItem>;

    constructor( @Inject(NavigationService) navigationService: NavigationService) {
        this.routeItems = navigationService.getChildRouteItems(this);
    }

    getName(): string {
        return "showcase";
    }
}