import {Component, View} from 'angular2/angular2';

@Component({
    selector: 'about'
})

@View({
    template: `
    <div class="container">
	    <p>
	        About this work: ToDo
	    </p>
	</div>
    `
})

export class About {
    constructor() {
    }
}