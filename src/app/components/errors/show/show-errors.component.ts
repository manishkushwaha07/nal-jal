import { Component, OnInit, Input } from '@angular/core';
import { AbstractControlDirective, AbstractControl } from '@angular/forms';

@Component({
  selector: 'nal-jal-show-errors',
  templateUrl: './show-errors.component.html',
  styleUrls: ['./show-errors.component.css']
})
export class ShowErrorsComponent implements OnInit {

  private static readonly errorMessages = {
    'required': () => 'This field is required',
    'minlength': (params) => 'The minimum lenght is: ' + params.requiredLength,
    'maxlength': (params) => 'The maximum length is: ' + params.requiredLength,
    'pattern': (params) => 'The required pattern is: ' + params.requiredPattern,
    'min': (params) => 'The minimum value is: ' + params.requiredMin,
    'max': (params) => 'The maximum value is: ' + params.requiredMax,
    // 'validateEqual':(params) => 'Input value mismatch with compare value',
    'compareEqual':(params) => 'Compare input mismatch',
  };

  @Input()
  public control: AbstractControlDirective | AbstractControl;
  
  constructor() { }

  ngOnInit() {
  }

  shouldShowErrors(): boolean {
    return this.control && this.control.errors && (this.control.dirty || this.control.touched);
  }
 
  listOfErrors(): string[] {
    // if(this.control.errors && this.control.errors.required){
    //   Object.keys(this.control.errors).forEach((element)=>{
    //     if(element !=='required'){
    //       delete this.control.errors[element];
    //     }
    //   });
    // }
    return Object.keys(this.control.errors).map(field => this.getMessage(field, this.control.errors[field]));
  }
 
  private getMessage(type: string, params: any) {
    if(ShowErrorsComponent.errorMessages[type]){
      return ShowErrorsComponent.errorMessages[type](params);
    }
  }

}
