import {Component} from '@angular/core';
import {Query, QueryList} from '@angular/core';
import {Dialog} from '../widget/Dialog';


@Component({
    selector: 'dialog-component',
    template: `
    <div class="container">
        <p>Dialog component:</p>
        <div>
    	    <a (click)="openDialog1()" class="link"> Open Dialog 1</a>
            <ng2-dialog [config]="dialogConfig" [title]="dialogTitle">
                body here
            </ng2-dialog>
        </div>

        <div>
            <a (click)="openDialog2()" class="link"> Open Dialog 2</a>
            <ng2-dialog [show]="showDialog" title="Dialog 2" (onClose)="onDialog2Close($event)">
                body here
            </ng2-dialog>
        </div>
	</div>
    `,
    directives: [Dialog]
})

export class DialogComponent {
    showDialog: boolean;
    dialogConfig;
    dialogTitle = null;

    constructor() {
        this.dialogConfig = {};
        this.dialogTitle = 'Dialog 1';
        this.showDialog =false;
    }

    openDialog1() {
        this.dialogConfig.open();
    }

    openDialog2() {
        this.showDialog = true;
    }

    onDialog2Close() {
        this.showDialog = false;
    }
}