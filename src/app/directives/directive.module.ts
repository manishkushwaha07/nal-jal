import { NgModule } from '@angular/core';
import { HttpModule  } from '@angular/http';
import { FormsModule, NG_VALIDATORS } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { UppercaseDirective } from "app/directives/uppercase.directive";
import { MinValidatorDirective } from "app/directives/min-validator.directive";
import { MaxValidatorDirective } from "app/directives/max-validator.directive";
import { FocusChangeDirective } from 'app/directives/focus-change.directive';
import { FocusDirective } from 'app/directives/focus.directive';
import { LowercaseDirective } from 'app/directives/lowercase.directive';
import { RemoveCharacterDirective } from './remove-character.directive';
import { NestedFormDirective } from 'app/directives/nested-form.directive';
import { EqualValidatorDirective } from './equal-validator.directive';
import { CompareValidatorDirective } from './compare-validator.directive';

@NgModule({
    declarations: [
        FocusDirective,
        UppercaseDirective,
        LowercaseDirective,
        MinValidatorDirective,
        MaxValidatorDirective,
        FocusChangeDirective,
        RemoveCharacterDirective,
        NestedFormDirective,
        EqualValidatorDirective,
        CompareValidatorDirective,
    ],

    exports:[FocusDirective,
        UppercaseDirective,
        LowercaseDirective,
        MinValidatorDirective,
        MaxValidatorDirective,
        FocusChangeDirective,
        RemoveCharacterDirective,
        NestedFormDirective,
        EqualValidatorDirective,
        CompareValidatorDirective,
    ],

})
export class DirectiveModule { }