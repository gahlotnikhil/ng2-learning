import {Inject, Component} from '@angular/core';
//import {forms, required} from '@angular/forms';
//import {FormBuilder, Validators, formDirectives, ControlGroup, Control} from '@angular/forms';
import {FormField} from '../widget/form/FormField';
import {FormModel} from './FormModel';
import { NgForm, ControlGroup, Control, Validators, FormBuilder, FORM_DIRECTIVES, FORM_PROVIDERS }    from '@angular/common';

@Component({
  selector: 'form-example1',
  providers: [FORM_PROVIDERS],
  template: `
    <form  [ngFormModel]='form' class="form-horizontal">
      <form-field [valid]="!form.hasError('required', 'name')">
          <label for="name" class="col-sm-2 control-label">Name</label>
          <input ngControl="name" class="form-control" id="name">
      </form-field>

      <form-field [valid]="!form.hasError('required', 'occupation')">
          <label for="occupation" class="col-sm-2 control-label">Occupation</label>
          <input ngControl="occupation" class="form-control" id="occupation">
      </form-field>

      <form-field [valid]="!form.hasError('required', 'gender')">
          <label for="gender" class="col-sm-2 control-label">Gender</label>
          <input ngControl="gender" class="form-control" id="gender">
      </form-field>

      <form-field [valid]="!form.hasError('required', 'age')">
          <label for="age" class="col-sm-2 control-label">Age</label>
          <input ngControl="age" class="form-control" id="age">
      </form-field>

      <form-field [valid]="!form.hasError('invalidZipCode', 'zip')">
          <label for="zip" class="col-sm-2 control-label">Zip</label>
          <input class="form-control" id="zip" ngControl="zip" >
      </form-field>

      <button [disabled]="!form.valid" type="submit" class="btn-primary">Save</button>

    </form>   

    <pre>{{json()}}</pre>
  `,
  //directives: [ formDirectives, FormField]
  directives: [FORM_DIRECTIVES, FormField]
})

export class FormExample1 {

  // form;

  //model = new FormModel(18, 'Matt', "Engineer", 'Male', '80027');
 
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

  zipCodeValidator(controlVal) {
    if (!controlVal.value.match(/\d\d\d\d\d(-\d\d\d\d)?/)) {
      return { invalidZipCode: true };
    }
  }

  json(){
      return JSON.stringify(this.form.value,null,"\t");
  }

  onSignUp(value) {

  }

}