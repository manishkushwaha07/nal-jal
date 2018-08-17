import { Directive, Input } from '@angular/core';
import { Validator, AbstractControl, ValidationErrors, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[max]',
  // register validator in DI
  providers: [{provide: NG_VALIDATORS, useExisting: MaxValidatorDirective, multi: true}]
})
export class MaxValidatorDirective implements Validator {
  @Input() max: number;

  validate(control: AbstractControl): ValidationErrors {
    if(!control.value || control.value.length === 0){
      return null;
    }
    const currentValue = Number(control.value);
    const max = Number(this.max);
    const isValid = !isNaN(currentValue) && !isNaN(max) && currentValue <= max;
    // return errors as an object
    return isValid ? null : {
      max: {
        valid: false,
        requiredMax: max,
        actualMax: currentValue
      }
    };
  }

  constructor() { }

}