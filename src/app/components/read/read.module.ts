import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WaterWorksReadTimelineComponent } from './water-works-read-timeline/water-works-read-timeline.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LocationServiceModule } from '../../services/location/location-service.module';
import { ReadServiceModule } from '../../services/read/read-service.module';
import { LoaderComponentModule } from '../loader/loader-component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LocationServiceModule,
    ReadServiceModule,
    LoaderComponentModule
  ],
  declarations: [WaterWorksReadTimelineComponent],
  exports: [WaterWorksReadTimelineComponent]
})
export class ReadModule { }
