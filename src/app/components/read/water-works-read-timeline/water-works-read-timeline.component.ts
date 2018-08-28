import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LocationService } from 'app/services/location/location.service';
import { ReadService } from '../../../services/read/read.service';
import { GlobalConstants } from 'app/utility/global.constants';

@Component({
  selector: 'nal-jal-water-works-read-timeline',
  templateUrl: './water-works-read-timeline.component.html',
  styleUrls: ['./water-works-read-timeline.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class WaterWorksReadTimelineComponent implements OnInit {
  public readonly DATE_FORMAT = GlobalConstants.DATE_FORMAT;
  ALL : any = "ALL";
  RESPONSE_TRUE : boolean = true;
  RESPONSE_FALSE : boolean = false;
  discom : any = {id : 1 , name : "INDORE"};
  regions : any = [];
  regionId : any;
  circles : any = [];
  circleId : any;
  divisions : any = [];
  divisionId : any;
  zones : any = [];
  locationCode : any;
  billMonths : any;
  billMonth : any;
  readings : any;
  loading : boolean = false;

  constructor(private locationService : LocationService, private readService : ReadService) { }

  ngOnInit() {
    this.getRegions();
  }

  getRegions(){
    this.locationService.getAllRegions(this.RESPONSE_FALSE).subscribe(success =>{
      this.regions = <any> success;
      this.getAllScheduledBillMonths();
    }, error =>{
      console.log(error);
      this.regions = [];
    });
  }

  regionChanged(){
    this.circles = [];
    this.divisions = [];
    this.zones = [];
    this.circleId = undefined;
    this.divisionId = undefined;
    this.locationCode = undefined;
    if(this.regionId && this.regionId !== this.ALL){
      this.getCirclesByRegionId();
    }
  }

  getCirclesByRegionId(){
    this.locationService.getCirclesByRegionId(this.regionId,this.RESPONSE_FALSE).subscribe(success =>{
      this.circles = <any> success;
    }, error =>{
      console.log(error);
      this.circles = [];
    });
  }

  circleChanged(){
    this.divisions = [];
    this.zones = [];
    this.divisionId = undefined;
    this.locationCode = undefined;
    if(this.circleId && this.circleId !== this.ALL){
      this.getDivisionsByCircleId();
    }
  }

  getDivisionsByCircleId(){
    this.locationService.getDivisionsByCircleId(this.circleId,this.RESPONSE_FALSE).subscribe(success =>{
      this.divisions = <any> success;
    }, error =>{
      console.log(error);
      this.divisions = [];
    });
  }

  divisionChanged(){
    this.zones = [];
    this.locationCode = undefined;
    if(this.divisionId && this.divisionId !== this.ALL){
      this.getZonesByDivisionId();
    }
  }

  getZonesByDivisionId(){
    this.locationService.getZonesByDivisionId(this.divisionId,this.RESPONSE_FALSE).subscribe(success =>{
      this.zones = <any> success;
    }, error =>{
      console.log(error);
      this.zones = [];
    });
  }

  getAllScheduledBillMonths(){
    this.locationService.getAllScheduledBillMonths(this.RESPONSE_FALSE).subscribe(success =>{
      this.billMonths = <any> success;
    }, error =>{
      console.log(error);
      this.billMonths = [];
    });
  }

  searchClicked(){
    this.loading = true;
    this.readings = undefined;
    let discomId = this.discom.id;
    let regionId = this.regionId;
    let circleId = this.circleId;
    let divisionId = this.divisionId;
    let locationCode = this.locationCode;
    if(this.regionId === this.ALL){
      regionId = undefined;
    } else if(this.circleId === this.ALL){
      circleId = undefined;
    } else if(this.divisionId === this.ALL){
      divisionId = undefined;
    } else if(this.locationCode === this.ALL){
      locationCode = undefined;
    } 
    this.getReadings(discomId, regionId, circleId, divisionId, locationCode);
  }

  getReadings(discomId, regionId, circleId, divisionId, locationCode){
    this.readService.getReadingsByBillMonthAndlocation(this.billMonth, discomId, regionId, circleId, divisionId, locationCode, this.RESPONSE_FALSE).subscribe(success =>{
      this.loading = false;
      this.readings = <any> success;
      console.log(this.readings);
    },error =>{
      this.readings = [];
      this.loading = false;
      console.log(error);
    });
  }

}
