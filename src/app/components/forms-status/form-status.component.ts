import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'nal-jal-form-status',
  template: `
    <p>{{formName}} validity is:
      <span class="form-state" [ngClass]="{'text-success': isFormValid, 'text-danger':!isFormValid}">
          <strong>{{isFormValid}}</strong>
        </span>
    </p>
  `,
})
export class FormStatusComponent implements OnInit {

  @Input() private isFormValid: boolean;

  @Input() private formName: string;

  constructor() { }

  ngOnInit() {
  }

}
