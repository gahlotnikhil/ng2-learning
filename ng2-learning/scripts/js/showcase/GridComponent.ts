import {Component} from '@angular/core';
import {Grid} from '../widget/Grid';

@Component({
    selector: 'grid-component',
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