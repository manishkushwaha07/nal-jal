import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nal-jal-root-form',
  template: `
    <div class='card-body' style='background-color: #f2f2f2'>
      <form nalJalNestedForm #form1="ngForm">
        <nal-jal-form-status formName="form-1" [isFormValid]="form1.valid"></nal-jal-form-status>
        <nal-jal-nested-form></nal-jal-nested-form>
      </form>
    </div>
  `,
})
export class RootFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
