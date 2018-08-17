import { Directive, Input, ElementRef } from '@angular/core';
import { Validator, AbstractControl, ValidationErrors, NG_VALIDATORS } from '@angular/forms';

@Directive({
  // CSS selector for attributes
  selector: '[min]',
  providers: [{provide: NG_VALIDATORS, useExisting: MinValidatorDirective, multi: true}]
  
})
export class MinValidatorDirective implements Validator {
    // new @Input here
    // it will get the min number from the attribute
    // For example 5 for <input min=5 ...
    @Input() min: number;
  
    constructor() { }
  
    // Define validation logic
    validate(control: AbstractControl): ValidationErrors {
      if(!control.value || control.value.length === 0){
        return null;
      }
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
  
    }
  }