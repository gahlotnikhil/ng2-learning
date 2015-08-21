import {Component, View, NgFor} from 'angular2/angular2';

@Component({
    selector: 'grid',
    properties: [
        'columns: columns',
        'rows: rows'
    ]
})

@View({
    template: `
    <div>
        <table class="table">
            <thead>
                <tr>
                    <th *ng-for="#column of columns">
                        {{column}}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr *ng-for="#row of rows">
                    <td *ng-for="#column of columns">
                        {{row[column]}}
                    </td>
                </tr>
            </tbody>
        </table>
	</div>
    `,
    directives: [NgFor]
})

export class Grid {
    rows: any;
    columns: Array<string>;

    constructor() {
    }
}