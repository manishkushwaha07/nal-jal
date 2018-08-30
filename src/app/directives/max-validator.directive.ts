import { Directive, Input } from '@angular/core';
import { Validator, AbstractControl, ValidationErrors, NG_VALIDATORS } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Directive({
  selector: '[max]',
  // register validator in DI
  providers: [{provide: NG_VALIDATORS, useExisting: MaxValidatorDirective, multi: true}, DatePipe]
})
export class MaxValidatorDirective implements Validator {
  @Input() max: number;
  @Input() type: any;
  
  // @Input() a:number; // Make this a required attribute. Throw an exception if it doesnt exist
  // ngOnInit() {
  //   if(null == a) throw new Error("Attribute 'a' is required");
  // }

  constructor(private datePipe: DatePipe) { }

  validate(control: AbstractControl): ValidationErrors {
    if(!control.value || control.value.length === 0){
      return null;
    }
    if(this.type === 'text' || this.type === 'number'){
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
    }else if(this.type === 'date'){
      // const currentValue = new Date(control.value).toISOString().slice(0,10);
      // const max = new Date(this.max).toISOString().slice(0,10);
      const currentValue = (control.value);
      const max = (this.max);
      const isValid = currentValue <= max;
      // return errors as an object
      return isValid ? null : {
        max: {
          valid: false,
          requiredMax: this.datePipe.transform(max, 'dd-MMM-yyyy'),
          actualMax: this.datePipe.transform(currentValue, 'dd-MMM-yyyy')
        }
      };
    }
  }
}