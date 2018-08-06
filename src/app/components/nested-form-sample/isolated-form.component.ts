import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nal-jal-isolated-form',
  template: `
    <div ngForm nalJalNestedForm rootNestedForm="true" #form4="ngForm">
      <h3>Isolated form</h3>
      <nal-jal-form-status formName="form-4" [isFormValid]="form4.valid"></nal-jal-form-status>
      <input type="text" name="text4" ngModel required>

      <div ngForm nalJalNestedForm #form41="ngForm">
        <nal-jal-form-status formName="form-4.1" [isFormValid]="form41.valid"></nal-jal-form-status>
        <input type="text" name="text41" ngModel required>
      </div>

    </div>
  `,
})
export class IsolatedFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
