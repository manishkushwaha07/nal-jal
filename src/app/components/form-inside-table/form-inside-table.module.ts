import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormInsideTableComponent } from '@nal-jal-components/form-inside-table/form-inside-table.component';
import { FormsModule } from '@angular/forms';
import { DirectiveModule } from '@nal-jal-directives/directive.module';
import { NestedFormComponent } from '@nal-jal-components/tutorial/nested-form-sample/nested-form.component';
import { DynamicModalModule } from '../../dynamic-modal/dynamic-modal.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DirectiveModule,
    DynamicModalModule,
  ],
  declarations: [FormInsideTableComponent],
  exports: [FormInsideTableComponent],
  entryComponents:[FormInsideTableComponent]
})
export class FormInsideTableModule { }
