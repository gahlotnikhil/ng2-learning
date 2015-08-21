import {Component, View} from 'angular2/angular2';
import {Query, QueryList} from 'angular2/angular2';
import {Dialog} from 'js/widget/Dialog';


@Component({
    selector: 'dialog-component'
})

@View({
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
            <ng2-dialog [show]="showDialog" title="Dialog 2" (on-close)="onDialog2Close($event)">
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

    constructor() {
        this.dialogConfig = {};
        this.dialogTitle = 'Dialog 1';
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