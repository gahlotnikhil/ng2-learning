import {Component, View} from 'angular2/angular2';

@Component({
    selector: 'home'
})

@View({
    template: `
    <div class="container">
	    <p>
	        Welcome Home
	    </p>
	</div>
    `
})

export class Home {
    constructor() {
    }
}