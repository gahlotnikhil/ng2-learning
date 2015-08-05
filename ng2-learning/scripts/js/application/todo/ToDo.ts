import {Component, View} from 'angular2/angular2';
import {TaskSubjectsView} from 'js/application/todo/TaskSubjectsView';
import {TaskView} from 'js/application/todo/TaskView';
import {RouteParams} from 'angular2/router';

@Component({
    selector: 'todo'
})

@View({
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