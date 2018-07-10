import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WaterWorksBillTimelineComponent } from './water-works-bill-timeline/water-works-bill-timeline.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoaderComponentModule } from '../loader/loader-component.module';
import { PaginationModule } from '../pagination/pagination.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LoaderComponentModule,
    PaginationModule
  ],
  declarations: [WaterWorksBillTimelineComponent],
  exports: [WaterWorksBillTimelineComponent]
})
export class BillModule { }
