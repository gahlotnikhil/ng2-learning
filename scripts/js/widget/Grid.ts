import {Component} from '@angular/core';

@Component({
    selector: 'grid',
    properties: [
        'columns: columns',
        'rows: rows'
    ],
    template: `
    <div>
        <table class="table">
            <thead>
                <tr>
                    <th *ngFor="let column of columns">
                        {{column}}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="let row of rows">
                    <td *ngFor="let column of columns">
                        {{row[column]}}
                    </td>
                </tr>
            </tbody>
        </table>
	</div>
    `,
})

export class Grid {
    rows: any;
    columns: Array<string>;

    constructor() {
    }
}