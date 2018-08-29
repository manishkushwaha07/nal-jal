import { Directive, Input, ElementRef } from '@angular/core';
import { Validator, AbstractControl, ValidationErrors, NG_VALIDATORS } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Directive({
  // CSS selector for attributes
  selector: '[min]',
  providers: [{provide: NG_VALIDATORS, useExisting: MinValidatorDirective, multi: true}, DatePipe]
  
})
export class MinValidatorDirective implements Validator {
    // new @Input here
    // it will get the min number from the attribute
    // For example 5 for <input min=5 ...
    @Input() min: number;
    @Input() type: any;
  
    constructor(private datePipe: DatePipe) { }
  
    // Define validation logic
    validate(control: AbstractControl): ValidationErrors {
      console.log(this.type);
      if(!control.value || control.value.length === 0){
        return null;
      }
      if(this.type ==='text' || this.type === 'number'){
        const currentValue = Number(control.value);
        const min = Number(this.min);
        const isValid = !isNaN(currentValue) && !isNaN(min) && currentValue >= min;
        // return errors as an object
        return isValid ? null : {
          min: {
            valid: false,
            requiredMin: min,
            actualMin: currentValue
          }
        };
      }else if(this.type === 'date'){
        // const currentValue = new Date(control.value).toISOString().slice(0,10);
        // const min = new Date(this.min).toISOString().slice(0,10);
        const currentValue = (control.value);
        const min = (this.min);
        const isValid = currentValue >= min;
        // return errors as an object
        return isValid ? null : {
          min: {
            valid: false,
            requiredMin: this.datePipe.transform(min,'dd-MMM-yyyy'),
            actualMin:  this.datePipe.transform(currentValue,'dd-MMM-yyyy')
          }
        };
      }  
    }
  }