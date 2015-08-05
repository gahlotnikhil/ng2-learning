import {Inject, Component, View, NgFor} from 'angular2/angular2';
import {routerInjectables, LocationStrategy, HashLocationStrategy, RouteRegistry} from 'angular2/router';
import {RootRouter, Pipeline, RouterLink, RouteConfig, Router, RouterOutlet, Location, RouteParams} from 'angular2/router';
import {NavigationService} from 'js/service/NavigationService';
import {Http, httpInjectables} from 'angular2/http';
import {RouteItem} from 'js/model/RouteItem';

@Component({
    selector: 'menu',
    properties: ['items']
})

@View({
    template: `
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <ul class="nav navbar-nav">
                <li *ng-for="#item of items" [class.active]="isSelected(item.path)" style="margin: 5px;">
                    <a [router-link]="getLink(item.as)" class="link">{{item.name}}</a>
                </li>
                </ul>
            </div>
        </nav>
    `,
    directives: [RouterLink, RouterOutlet, NgFor]
})

export class Menu {
    items: Array<RouteItem>;
    location: Location;

    constructor( @Inject(Location) location: Location) {
        this.location = location;
    }

    isSelected(path: string) {
        if (path.lastIndexOf('...') != -1) {
            return this.location.path().indexOf(path.slice(0, path.indexOf('.'))) === 0;
        } else {
            if (this.location.path() === '') {
                return (this.location.path() + '/') === path;
            }
            return this.location.path() === path;
        }
    }

    getLink(as) {
        if (as == '/') {
            return [as];
        }
        return ['/' + as];
    }
}