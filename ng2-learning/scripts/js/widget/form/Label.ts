import {Component, View, NgIf} from 'angular2/angular2';

@Component({
    selector: 'label',
    properties: [
        'value: value',
        'for: for'

    ],
    host: {
        'class': 'col-sm-2 control-label',
        '[htmlFor]': 'for'
    }
})

@View({
    template: `
        <span *ng-if="value == undefined">
            <ng-content></ng-content>
        </span>
        <span *ng-if="value != undefined">
            {{value}}
        </span>
    `,
    directives: [NgIf]
})

export class Label {
    value: boolean;
    for: string;

    constructor() {
    }

}