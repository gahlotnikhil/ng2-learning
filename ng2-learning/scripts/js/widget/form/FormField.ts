import {LifecycleEvent, Component, View, NgFor, CSSClass} from 'angular2/angular2';
import {FormBuilder, Validators, formDirectives, ControlGroup, Control} from 'angular2/forms';

@Component({
    selector: 'form-field',
    properties: [
        'valid: valid'
    ]
})

@View({
    template: `
    <div class="form-group has-feedback" [class]="valid?'has-success':'has-error'">
        <ng-content select="label"></ng-content>
        <div class="col-sm-7">
          <ng-content select="input"></ng-content>
          <span class="glyphicon form-control-feedback" 
            [class]="valid?'glyphicon-ok':'glyphicon-remove'" aria-hidden="true"></span>
        </div>
    </div>
    `,
    directives: [NgFor, CSSClass, formDirectives]
})

export class FormField {
    valid: boolean;

    constructor() {
    }
}