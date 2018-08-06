import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nal-jal-nested-form',
  template: `
    <ngForm nalJalNestedForm #form2="ngForm">
      <nal-jal-form-status formName="form-2" [isFormValid]="form2.valid"></nal-jal-form-status>
      <input type="text" name="text2" ngModel required>

      <div ngForm nalJalNestedForm #form21="ngForm">
        <nal-jal-form-status formName="form-2.1" [isFormValid]="form21.valid"></nal-jal-form-status>
        <input type="text" name="text21" ngModel required>
      </div>

      <div ngForm nalJalNestedForm #form22="ngForm">
        <nal-jal-form-status formName="form-2.2" [isFormValid]="form22.valid"></nal-jal-form-status>
        <input type="text" name="text22" ngModel required>
      </div>

      <button type="button" style="margin-left: 15px" (click)="isReactiveDisabled = !isReactiveDisabled">Toggle Reactive form</button>
      
      <nal-jal-reactive-form *ngIf="!isReactiveDisabled"></nal-jal-reactive-form>
      <nal-jal-isolated-form></nal-jal-isolated-form>
    </ngForm>
  `,
})
export class NestedFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
