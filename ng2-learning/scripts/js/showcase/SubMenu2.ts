import {Component, View} from 'angular2/angular2';

@Component({
    selector: 'sub-menu2'
})

@View({
    template: `
    <div class="container">
	    <p>
	        Sub menu
	    </p>
	</div>
    `
})

export class SubMenu2 {
    constructor() {
    }
}