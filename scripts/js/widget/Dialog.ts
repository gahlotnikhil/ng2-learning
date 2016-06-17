import {OnInit, EventEmitter, Component, Inject, ElementRef, Output} from '@angular/core';
declare var jQuery:any;

@Component({
    selector: 'ng2-dialog',
    properties: [
        'show: show',
        'title: title',
        'config: config'
    ],
    //events: ['onCloseFn: onClose'],
    //viewBindings: [EventEmitter],
    template: `
    <div class="modal" id="modal" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <span type="button"  class="close" aria-label="Close" title="Close">
                <i (click)="cancelAction()" aria-hidden="true">&times;</i>
            </span>
            <div id="modalLabel" class="confirmation-header">
                <p><span class="header">{{title}}</span></p>
            </div>
          </div>
          <div class="modal-body">
              <ng-content></ng-content>
          </div>
          <div class="modal-footer">
            <div class="confirmation-buttonpane">
                <div class="button-pane cf" >
                    <div class="button-alignment">
                        <button class="button" (click)="confirmAction()">OK</button>
                        <button class="button" (click)="cancelAction()">
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    `
})

export class Dialog implements OnInit{
    title: string;
    private _show: boolean;

    private dialogElem: any;

    @Output('onClose') 
    private onCloseFn: EventEmitter<any> = new EventEmitter();

    config;

    constructor(@Inject(ElementRef) elementRef: ElementRef) {
        //this.title = "Some Dialog";

        this.dialogElem = elementRef;
        
    }

    ngOnInit() {
        var el = jQuery(this.dialogElem.nativeElement);
        el.addClass('center-block');

        this.dialogElem = el.find('#modal');

        this.dialogElem['modal']({
            keyboard: false,
            backdrop: true,
            show: false
        });

        if (this.config != undefined) {
            this.config['open'] = () => {
                this.openAction();
            };
        }
    }

    get show(): boolean {
       return this._show;
    }

    set show(value: boolean) {
        if (value) {
            this.openAction();
        } else {
            this.cancelAction();
        }

        this._show = value;
    }

    openAction() {
        //this.show = true;
        this.dialogElem['modal']('show');
    }

    confirmAction() {
        //todo
        this.cancelAction();
    }

    cancelAction() {
        if (this.dialogElem['modal']) {
            this.dialogElem['modal']('hide');
        }
        this.onCloseFn.next(true);
    }

    
}