import {Component} from '@angular/core';
import {TaskSubjectModel} from '../../model/TaskSubjectModel';
import {TaskService} from '../../service/TaskService';

@Component({
  selector: 'task-subjects',
  bindings: [TaskService],
  templateUrl: '/client/html/application/todo/taskSubjects.html'
})

export class TaskSubjectsView {
  showTaskView: boolean;
  subjects: Array<TaskSubjectModel>;
  private _selectedTaskSubjectModel: TaskSubjectModel;
  private taskService: TaskService;

  constructor(taskService: TaskService) {
    this.taskService = taskService;
    this.subjects = this.taskService.getSubjects();
  }

  addSubject(subject: string) {
    this.subjects.push(new TaskSubjectModel(subject));
  }

  removeSubject(subject: TaskSubjectModel) {
    for (var index in this.subjects) {
      if (subject.name == this.subjects[index].name) {
        this.subjects.splice(parseInt(index), 1);
      }
    }
  }

  get selectedSubject(): TaskSubjectModel {
    return this._selectedTaskSubjectModel;
  }

  addTask(task: string) {
    this._selectedTaskSubjectModel.tasks.push(task);
  }

  openTaskView(subject: TaskSubjectModel) {
    this.showTaskView = true;
    this._selectedTaskSubjectModel = subject;
  }

  goBack() {
    this.showTaskView = false;
    this._selectedTaskSubjectModel = null;
  }

  doneTyping($event, isSubject) {
    if($event.which === 13) {
      if (isSubject) {
        this.addSubject($event.target.value);
      } else {
        this.addTask($event.target.value);
      }
      $event.target.value = null;
    }
  }
}