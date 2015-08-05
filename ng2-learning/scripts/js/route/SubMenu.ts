import {Inject, Component, View, NgFor} from 'angular2/angular2';
import {routerInjectables, LocationStrategy, HashLocationStrategy, RouteRegistry} from 'angular2/router';
import {RootRouter, Pipeline, RouterLink, RouteConfig, Router, RouterOutlet, Location, RouteParams} from 'angular2/router';
import {NavigationService} from 'js/service/NavigationService';
import {Http, httpInjectables} from 'angular2/http';
import {RouteItem} from 'js/model/RouteItem';

@Component({
    selector: 'sub-menu',
    properties: ['items: items']
})

@View({
    template: `
    <ul class="nav nav-pills nav-stacked" style="border-radius: 6px;  border: 1px solid rgb(229, 229, 229);">
        <li *ng-for="#item of items" [class.active]="isSelected(item.path)">
            <a [router-link]="getLink(item.as)" class="link">{{item.name}}</a>
        </li>
    </ul>
    `,
    directives: [RouterLink, RouterOutlet, NgFor]
})

export class SubMenu {
    items: Array<RouteItem>;
    location: Location;

    constructor( @Inject(Location) location: Location) {
        this.location = location;
    }

    isSelected(path) {
        return this.location.path() === path;
    }

    getLink(as) {
        if (as == '/') {
            return [as];
        }
        return ['/' + as];
    }
}