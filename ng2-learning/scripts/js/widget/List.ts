import {Component, Inject, ElementRef, ComponentRef} from '@angular/core';

@Component({
    selector: 'list',
    // properties: ['listItems: list-items'],
    // host: { 'itemVar': 'itemVar'}
    //viewBindings: [ComponentRef],
    //templateUrl: '../html/widget/list.html',
		template: `
    <div class="container">
	    <p>
	        Coming soon!
	    </p>
	</div>
    `,
})
export class List {
	
	itemVar: string;
    listItems;

    constructor( @Inject(ElementRef) elementRef: ElementRef) {
        //this.sorter = new Sorter();
        //this.itemVar = '#' + this.itemVar + ' of listItems';
        //{ { itemVar } } of listItems\
        var t;
    }
    sort(key) {
        //this.sorter.sort(key, this.rows);
    }
}