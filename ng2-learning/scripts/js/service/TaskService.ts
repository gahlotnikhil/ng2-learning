import {TaskSubjectModel} from '../model/TaskSubjectModel';

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