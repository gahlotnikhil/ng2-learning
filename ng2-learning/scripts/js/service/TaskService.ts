import {TaskSubjectModel} from 'js/model/TaskSubjectModel';
import {Inject} from 'angular2/angular2';

export class TaskService {
  tasks: Array<string>;
  constructor() {
    this.tasks = ['task 1'];
  }

  getSubjects(): Array<TaskSubjectModel> {
	  return [
	  	new TaskSubjectModel("one"),
		new TaskSubjectModel("two")
	  ];
  }
}