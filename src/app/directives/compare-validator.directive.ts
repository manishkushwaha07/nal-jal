import { Directive, forwardRef, Attribute } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';
@Directive({
    selector: '[compareEqual][formControlName],[compareEqual][formControl],[compareEqual][ngModel]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: forwardRef(() => CompareValidatorDirective), multi: true }
    ]
})
export class CompareValidatorDirective implements Validator {
  constructor(@Attribute('compareEqual') public compareEqual: string,
  @Attribute('reverse') public reverse: string) {
  }

  private get isReverse() {
      if (!this.reverse) return false;
      return this.reverse === 'true' ? true: false;
  }

  validate(c: AbstractControl): { [key: string]: any } {
      // self value
      let v = c.value;

      // control vlaue
      let e = c.root.get(this.compareEqual);
      console.log(v, e);

      // value not equal
      if (e && v !== e.value && !this.isReverse) {
          return {
              compareEqual :{
                valid: false,
                requiredValue: e.value,
                actualValue: c.value
              }
          }
      }

      // value equal and reverse
      if (e && v === e.value && this.isReverse) {
          delete e.errors['compareEqual'];
          if (!Object.keys(e.errors).length) e.setErrors(null);
      }

      // value not equal and reverse
      if (e && v !== e.value && this.isReverse) {
          e.setErrors({ compareEqual: false });
      }

      return null;
  }
}