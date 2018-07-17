import { NgModule } from '@angular/core';
import { HttpModule  } from '@angular/http';
import { FormsModule, NG_VALIDATORS } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { UppercaseDirective } from "app/directives/uppercase.directive";
import { MinValidatorDirective } from "app/directives/min-validator.directive";
import { MaxValidatorDirective } from "app/directives/max-validator.directive";
import { FocusChangeDirective } from 'app/directives/focus-change.directive';
import { FocusDirective } from 'app/directives/focus.directive';

@NgModule({
    declarations: [
        FocusDirective,
        UppercaseDirective,
        MinValidatorDirective,
        MaxValidatorDirective,
        FocusChangeDirective,
    ],

    exports:[FocusDirective,
        UppercaseDirective,
        MinValidatorDirective,
        MaxValidatorDirective,
        FocusChangeDirective,
    ],

})
export class DirectiveModule { }