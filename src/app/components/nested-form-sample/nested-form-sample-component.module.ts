import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IsolatedFormComponent } from 'app/components/nested-form-sample/isolated-form.component';
import { NestedFormComponent } from './nested-form.component';
import { ReactiveFormComponent } from './reactive-form.component';
import { RootFormComponent } from './root-form.component';
import { FormStatusComponentModule } from '../forms-status/form-status-component.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectiveModule } from 'app/directives/directive.module';

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
export class NestedFormSampleComponentModule { }
