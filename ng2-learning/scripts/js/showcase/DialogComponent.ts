import {Component, View} from 'angular2/angular2';

@Component({
    selector: 'dialog-component'
})

@View({
    template: `
    <div class="container">
        Dialog component:
	    <p>
	        Coming soon!
	    </p>
	</div>
    `
})

export class DialogComponent {
    constructor() {
    }
}