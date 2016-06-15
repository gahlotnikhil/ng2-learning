import {Host, Component} from '@angular/core';
import {TaskSubjectsView} from '../../application/todo/TaskSubjectsView';
import {Sortable} from '../../widget/Sortable';


@Component({
  selector: 'task-subject',
  //bindings: [TaskSubjectsView],
  templateUrl: '/client/html/application/todo/task.html'
})

// Component controller
export class TaskView {
  
  private taskSubjectsView: TaskSubjectsView;

  constructor( @Host() parentView: TaskSubjectsView) {
    this.taskSubjectsView = parentView;
  }

  get tasks(): Array<string> {
    return (this.taskSubjectsView.selectedSubject != null) ? this.taskSubjectsView.selectedSubject.tasks : [];
  }

  get name(): string {
    return (this.taskSubjectsView.selectedSubject != null) ? this.taskSubjectsView.selectedSubject.name : '';
  }

  removeTask(todo: string) {
    for (var index in this.tasks) {
      if (todo == this.tasks[index]) {
        this.tasks.splice(parseInt(index), 1);
      }
    }
  }

  addTask(todo: string) {
    this.taskSubjectsView.addTask(todo);
  }

  doneTyping($event) {
    if ($event.which === 13) {
      this.addTask($event.target.value);
      $event.target.value = null;
    }
  }

  onSortFn(sortData) {
    this.tasks.splice(sortData.end - 1, 0, this.tasks.splice(sortData.start - 1, 1)[0]);
  }
}