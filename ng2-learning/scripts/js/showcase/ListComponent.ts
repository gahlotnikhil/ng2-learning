import {Component, View} from 'angular2/angular2';
import {List} from 'js/widget/List';

@Component({
    selector: 'list-component'
})

@View({
    template: `
    <div class="container">
        List component:

        <list></list>
	</div>
    `,
    directives: [List]
})

export class ListComponent {
    constructor() {
    }
}