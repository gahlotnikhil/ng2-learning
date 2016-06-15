export class TaskSubjectModel {
  private _name: string;
  private _tasks: Array<string>;

  constructor(tName: string) {
    this._name = tName;
    this._tasks = [];
  }

  get name(): string {
    return this._name;
  }

  set name(newName: string) {
    this._name = newName;
  }

  get tasks(): Array<string> {
    return this._tasks;
  }
  
}