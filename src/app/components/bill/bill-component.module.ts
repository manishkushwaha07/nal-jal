import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WaterWorksBillTimelineComponent } from './water-works-bill-timeline/water-works-bill-timeline.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoaderComponentModule } from '../loader/loader-component.module';
import { PaginationComponentModule } from 'app/components/pagination/pagination-component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LoaderComponentModule,
    PaginationComponentModule
  ],
  declarations: [WaterWorksBillTimelineComponent],
  exports: [WaterWorksBillTimelineComponent]
})
export class BillComponentModule { }
