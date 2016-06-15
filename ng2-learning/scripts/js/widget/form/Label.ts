import {Component} from '@angular/core';

@Component({
    selector: 'label',
    properties: [
        'value: value',
        'for: for'

    ],
    host: {
        'class': 'col-sm-2 control-label',
        '[htmlFor]': 'for'
    },
    template: `
        <span *ngIf="value == undefined">
            <ng-content></ng-content>
        </span>
        <span *ngIf="value != undefined">
            {{value}}
        </span>
    `
})

export class Label {
    value: boolean;
    for: string;

    constructor() {
    }

}