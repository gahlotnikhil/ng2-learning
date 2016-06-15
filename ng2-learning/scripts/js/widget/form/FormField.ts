import {Component} from '@angular/core';
import { NgForm }    from '@angular/common';

@Component({
    selector: 'form-field',
    properties: [
        'valid: valid'
    ],
    template: `
    <div class="form-group has-feedback" [ngClass]="valid?'has-success':'has-error'">
        <ng-content select="label"></ng-content>
        <div class="col-sm-7">
          <ng-content select="input"></ng-content>
          <span class="glyphicon form-control-feedback" 
            [ngClass]="valid?'glyphicon-ok':'glyphicon-remove'" aria-hidden="true"></span>
        </div>
    </div>
    `
})

export class FormField {
    valid: boolean;

    constructor() {
    }
}