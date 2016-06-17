import {Inject, Component} from '@angular/core';
import {NavigationService} from '../service/NavigationService';
import {Location} from '@angular/common';
import {RouterLink, RouteConfig, Router, RouterOutlet, RouteParams} from '@angular/router-deprecated';
import {Http} from '@angular/http';
import {RouteItem} from '../model/RouteItem';

@Component({
    selector: 'sub-menu',
    properties: ['items: items'],
    template: `
    <ul class="nav nav-pills nav-stacked" style="border-radius: 6px;  border: 1px solid rgb(229, 229, 229);">
        <li *ngFor="let item of items" [class.active]="isSelected(item.path)">
            <a [routerLink]="getLink(item.as)" class="link">{{item.label}}</a>
        </li>
    </ul>
    `,
    directives: [RouterLink, RouterOutlet]
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