import {Component, View, Inject, ElementRef} from 'angular2/angular2';

@Component({
    selector: 'calendar'
})

@View({
    template: `
    
    <div>
        <p>Calendar component:</p>
	    
        <div class="calendar" id="calendar">
        </div>
	</div>
    `
})

export class Calendar {
    private calendarElem: ElementRef;

    constructor(@Inject(ElementRef) elementRef: ElementRef) {
        var el = jQuery(elementRef.nativeElement);

        this.calendarElem = el.find('#calendar');

        this.calendarElem.fullCalendar({
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