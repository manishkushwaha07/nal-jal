import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nal-jal-root-form',
  template: `
    <form nalJalNestedForm #form1="ngForm">

      <nal-jal-form-status formName="form-1" [isFormValid]="form1.valid"></nal-jal-form-status>
      <div class='card-body'>
        <nal-jal-nested-form></nal-jal-nested-form>
      </div>
    </form>
  `,
})
export class RootFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
