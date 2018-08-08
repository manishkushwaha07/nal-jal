import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormStatusComponentModule } from '../forms-status/form-status-component.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectiveModule } from 'app/directives/directive.module';
import { RootFormComponent } from 'app/components/tutorial/nested-form-sample/root-form.component';
import { NestedFormComponent } from 'app/components/tutorial/nested-form-sample/nested-form.component';
import { ReactiveFormComponent } from 'app/components/tutorial/nested-form-sample/reactive-form.component';
import { IsolatedFormComponent } from 'app/components/tutorial/nested-form-sample/isolated-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormStatusComponentModule,
    DirectiveModule
  ],
  declarations: [IsolatedFormComponent, NestedFormComponent, ReactiveFormComponent, RootFormComponent],
  exports: [IsolatedFormComponent, NestedFormComponent, ReactiveFormComponent, RootFormComponent],
})
export class TutorialComponentModule { }
