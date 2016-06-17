import {Inject, Directive, ElementRef} from '@angular/core';
declare var jQuery:any;

@Directive({
    selector: '[class]',
    properties: [
        'classValue: class'
    ]
})
export class Class {
    private el: ElementRef;

    classValue: string;

    constructor( @Inject(ElementRef) elementRef: ElementRef) {
        var self = this;
        this.el = jQuery(elementRef.nativeElement);
        //this.el.addClass(this.classValue);
    }

}