import {Component} from '@angular/core';
import {List} from '../widget/List';

@Component({
    selector: 'list-component',
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