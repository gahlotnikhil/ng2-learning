import {EventEmitter, Inject, Directive, ElementRef} from '@angular/core';
declare var jQuery:any;

@Directive({
	selector: '[sortable]',
	events: ['sortFn: onSort'],
	bindings: [EventEmitter]
})

export class Sortable {
	private el;
	private sortFn: EventEmitter<any>;

    constructor( @Inject(ElementRef) elementRef: ElementRef, 
		@Inject(EventEmitter) _sortFn: EventEmitter<any>) {
		var self = this;
		this.sortFn = _sortFn;
		this.el = jQuery(elementRef.nativeElement);

		this.el.sortable({
			start: function(e, ui) {
				//this.sortFn = new EventEmitter();
				ui.item.data('start', ui.item.index());
			},
			update: function(e, ui) {
				var start = ui.item.data('start');
				var end = ui.item.index();
				self.sortFn.next({ start: start, end: end });
			}
		});
		this.el.disableSelection();
		this.el.addClass('sortable');
    }

}