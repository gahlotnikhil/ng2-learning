import {Inject, Component, View, NgIf, CSSClass} from 'angular2/angular2';
import {forms, required} from 'angular2/forms';
import {FormBuilder, Validators, formDirectives, ControlGroup, Control} from 'angular2/forms';
import {FormField} from 'js/widget/form/FormField';

@Component({
  selector: 'form-example1',
  viewBindings: [
    FormBuilder
  ]
})

@View({
  template: `
    <form  [ng-form-model]="form" class="form-horizontal">
      <form-field [valid]="!form.hasError('required', 'name')">
          <label for="name" class="col-sm-2 control-label">Name</label>
          <input ng-control="name" class="form-control" id="name">
      </form-field>

      <form-field [valid]="!form.hasError('required', 'occupation')">
          <label for="occupation" class="col-sm-2 control-label">Occupation</label>
          <input ng-control="occupation" class="form-control" id="occupation">
      </form-field>

      <form-field [valid]="!form.hasError('required', 'gender')">
          <label for="gender" class="col-sm-2 control-label">Gender</label>
          <input ng-control="gender" class="form-control" id="gender">
      </form-field>

      <form-field [valid]="!form.hasError('required', 'age')">
          <label for="age" class="col-sm-2 control-label">Age</label>
          <input ng-control="age" class="form-control" id="age">
      </form-field>

      <form-field [valid]="!form.hasError('invalidZipCode', 'zip')">
          <label for="zip" class="col-sm-2 control-label">Zip</label>
          <input ng-control="zip" class="form-control" id="zip">
      </form-field>

      <button [disabled]="!form.valid" type="submit" class="btn-primary">Save</button>

    </form>   

    <pre>{{json()}}</pre>
  `,
  directives: [NgIf, formDirectives, CSSClass, FormField]
})
export class FormExample1 {
 
  form: ControlGroup;

  constructor( @Inject(FormBuilder) fb: FormBuilder) {

    this.form = new ControlGroup({
      name: new Control("Matt", Validators.required),
      occupation: new Control("Engineer", Validators.required),
      gender: new Control("Male", Validators.required),
      age: new Control("45", Validators.required),
      zip: new Control("80027", this.zipCodeValidator)
    });

  }

  zipCodeValidator(control) {
    if (!control.value.match(/\d\d\d\d\d(-\d\d\d\d)?/)) {
      return { invalidZipCode: true };
    }
  }

  json(){
      return JSON.stringify(this.form.value,null,"\t");
  }

  onSignUp(value) {

  }

}