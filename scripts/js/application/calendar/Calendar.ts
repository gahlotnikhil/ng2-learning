import {Component, Inject, ElementRef, OnInit} from '@angular/core';
declare var jQuery:any;

@Component({
    selector: 'calendar',
    template: `
    
    <div>
        <p>Calendar component:</p>
	    
        <div class="calendar" id="calendar">
        </div>
	</div>
    `
})

export class Calendar implements OnInit{
    private calendarElem: ElementRef;

    constructor(@Inject(ElementRef) elementRef: ElementRef) {
        //var el = jQuery(elementRef.nativeElement);

        this.calendarElem = elementRef;

        
    }

    ngOnInit() {
        jQuery(this.calendarElem.nativeElement)['fullCalendar']({
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,basicWeek,basicDay'
            },
            editable: true,
            eventLimit: true
        })
    }
}