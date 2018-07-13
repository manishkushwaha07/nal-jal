import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WaterWorksReadTimelineComponent } from './water-works-read-timeline/water-works-read-timeline.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoaderComponentModule } from '../loader/loader-component.module';
import { WaterWorksAssessedReadTimelineComponent } from './water-works-assessed-read-timeline/water-works-assessed-read-timeline.component';
import { WaterWorksZeroReadTimelineComponent } from './water-works-zero-read-timeline/water-works-zero-read-timeline.component';
import { PaginationComponentModule } from 'src/app/components/pagination/pagination-component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LoaderComponentModule,
    PaginationComponentModule
  ],
  declarations: [
    WaterWorksReadTimelineComponent, 
    WaterWorksAssessedReadTimelineComponent, 
    WaterWorksZeroReadTimelineComponent
  ],
  exports: [
    WaterWorksReadTimelineComponent, 
    WaterWorksAssessedReadTimelineComponent, 
    WaterWorksZeroReadTimelineComponent
  ]
})
export class ReadModule { }
