import {Component, View} from 'angular2/angular2';
import {Grid} from 'js/widget/Grid';

@Component({
    selector: 'grid-component',
})

@View({
    template: `
    <div class="container">
        <p>Grid component:</p>

        <grid [columns]="columns" [rows]="rows">

        </grid>
	</div>
    `,
    directives: [Grid]
})

export class GridComponent {
    rows: any;
    columns: Array<string>;

    constructor() {
        this.columns = ['Name', 'Occupation', 'Gender', 'Age'];
        this.rows = [{
            'Name': 'James',
            'Occupation': 'Secret agent',
            'Gender': 'Male',
            'Age': '40'
        }, 
        {
            'Name': 'Tom',
            'Occupation': 'Actor',
            'Gender': 'Male',
            'Age': '45'
        }];

    }
}