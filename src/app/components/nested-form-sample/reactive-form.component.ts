import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'nal-jal-reactive-form',
  template: `
    <div class='card-body'>
      <div [formGroup]="sampleForm" nalJalNestedForm #form3="ngForm">
        <h3>Reactive form</h3>
        <nal-jal-form-status formName="form-3" [isFormValid]="form3.valid"></nal-jal-form-status>
        <input type="text" class='form-control-sm' name="text3" formControlName="input3">

        <div class='card-body'>
          <ngForm nalJalNestedForm #form31="ngForm" required>
            <nal-jal-form-status formName="form-3.1" [isFormValid]="form31.valid"></nal-jal-form-status>
            <input type="text" class='form-control-sm' name="text31" ngModel required>
          </ngForm>
        </div>

      </div>
    </div>  
  `,
})
export class ReactiveFormComponent implements OnInit {

  private sampleForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.sampleForm = this.formBuilder.group({
      input3: ['', Validators.required],
    });
  }

}
