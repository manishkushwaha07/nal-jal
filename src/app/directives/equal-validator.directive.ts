import { Directive, forwardRef, Attribute, Input } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS, ValidationErrors } from '@angular/forms';
import { Subscription } from 'rxjs';
@Directive({
    selector: '[validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: EqualValidatorDirective, multi: true }
    ]
})
export class EqualValidatorDirective implements Validator {

    @Input('validateEqual') controlNameToValiateEqual: string;
    constructor() {}

    validate(control: AbstractControl): ValidationErrors | null {
        if(!control.value || control.value.length === 0){
            return null;
        }
        const controlToCompare = control.root.get(this.controlNameToValiateEqual);
        if(controlToCompare){
            const subscription: Subscription = controlToCompare.valueChanges.subscribe(()=>{
                control.updateValueAndValidity();
                subscription.unsubscribe();
            });
        }

        const isValid = controlToCompare && controlToCompare.value == control.value;
        return isValid ? null :{
            validateEqual:{
                valid: false,
                actualValue: control.value,
                requiredValue:controlToCompare.value,
            }
        }
    }
}