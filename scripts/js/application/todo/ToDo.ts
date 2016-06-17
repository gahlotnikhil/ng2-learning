import {Component} from '@angular/core';
import {TaskSubjectsView} from '../../application/todo/TaskSubjectsView';
import {TaskView} from '../../application/todo/TaskView';
import {RouteParams} from '@angular/router-deprecated';

@Component({
    selector: 'todo',
    template: `
        <h3>ToDo Application</h3>
        <task-subjects>
            <task-subject></task-subject>
        </task-subjects>
    `,
    directives: [TaskSubjectsView, TaskView]
})

export class ToDo {
    constructor() {
    }
}