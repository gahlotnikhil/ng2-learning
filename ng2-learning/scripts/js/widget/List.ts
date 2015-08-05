import {Component, View, bootstrap, NgFor} from 'angular2/angular2';

@Component({
    selector: 'list',
    properties: ['listItems: list-items'],
    host: { 'itemVar': 'itemVar'}
})

@View({
	//templateUrl: '../html/widget/list.html',
		template: `
    <div class="container">
        List view:
	    <p>
	        Coming soon!
	    </p>
	</div>
    `,
    directives: [NgFor]
})
export class List {
	
	itemVar: string;
    listItems;

    constructor() {
        //this.sorter = new Sorter();
        //this.itemVar = '#' + this.itemVar + ' of listItems';
        //{ { itemVar } } of listItems\
        var t;
    }
    sort(key) {
        //this.sorter.sort(key, this.rows);
    }
}