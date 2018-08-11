import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nal-jal-nested-form',
  template: `
  <div class='card-body' style='background-color: #a2f2d1'>
    <ngForm nalJalNestedForm #form2="ngForm">
      <nal-jal-form-status formName="form-2" [isFormValid]="form2.valid"></nal-jal-form-status>
      <input type="text" class='form-control-sm' name="text2" ngModel required>
      
      <div class='card-body' style='background-color: #a2a2d1'>
        <div ngForm nalJalNestedForm #form21="ngForm">
          <nal-jal-form-status formName="form-2.1" [isFormValid]="form21.valid"></nal-jal-form-status>
          <input type="text" class='form-control-sm' name="text21" ngModel required>
        </div>
      </div>  
      <div class='card-body' style='background-color: #a2b2d1'>
        <div ngForm nalJalNestedForm #form22="ngForm">
          <nal-jal-form-status formName="form-2.2" [isFormValid]="form22.valid"></nal-jal-form-status>
          <input type="text" class='form-control-sm' name="text22" ngModel required>
        </div>
      </div>

      <div class='text-center'>
        <button type="button" class='btn btn-sm btn-primary' (click)="isReactiveDisabled = !isReactiveDisabled">Toggle Reactive form</button>
      </div>
      
      <nal-jal-reactive-form *ngIf="!isReactiveDisabled"></nal-jal-reactive-form>
      <nal-jal-isolated-form></nal-jal-isolated-form>
    </ngForm>
    </div>
  `,
})
export class NestedFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}