import {Component, View} from 'angular2/angular2';

@Component({
    selector: 'list-component'
})

@View({
    template: `
    <div class="container">
        List component:
	    <p>
	        Coming soon!
	    </p>
	</div>
    `
})

export class ListComponent {
    constructor() {
    }
}