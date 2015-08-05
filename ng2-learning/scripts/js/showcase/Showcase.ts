import {Inject, Component, View} from 'angular2/angular2';
import {RouterLink, RouterOutlet} from 'angular2/router';
import {NavigationService} from 'js/service/NavigationService';
import {RouteItem} from 'js/model/RouteItem';
import {RouteComponent} from 'js/route/RouteComponent';
import {SubMenu} from 'js/route/SubMenu';

@Component({
    selector: 'showcase',
})

@View({
    templateUrl: '../html/components.html',
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