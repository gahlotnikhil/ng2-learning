import {Inject, Component} from '@angular/core';
import {NavigationService} from '../service/NavigationService';
import {Location} from '@angular/common';
import {RouterLink, RouteConfig, Router, RouterOutlet, RouteParams} from '@angular/router-deprecated';
import {Http} from '@angular/http';
import {RouteItem} from '../model/RouteItem';

@Component({
    selector: 'menu',
    properties: ['items'],
    template: `
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <ul class="nav navbar-nav">
                <li *ngFor="let item of items" [class.active]="isSelected(item.path)" style="margin: 5px;">
                    <a [routerLink]="getLink(item.as)" class="link">{{item.label}}</a>
                </li>
                </ul>
            </div>
        </nav>
    `,
    directives: [RouterLink, RouterOutlet]
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