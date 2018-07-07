import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/services/location/location.service';
import { ReadService } from '../../../services/read/read.service';

@Component({
  selector: 'app-water-works-read-timeline',
  templateUrl: './water-works-read-timeline.component.html',
  styleUrls: ['./water-works-read-timeline.component.css']
})
export class WaterWorksReadTimelineComponent implements OnInit {

  RESPONSE_TRUE : boolean = true;
  RESPONSE_FALSE : boolean = false;
  regions : any;
  region : any;
  circles : any;
  circle : any;
  divisions : any;
  division : any;
  zones : any;
  zone : any;
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
    this.circle = undefined;
    this.division = undefined;
    this.zone = undefined;
    this.getCirclesByRegionId();
  }

  getCirclesByRegionId(){
    this.locationService.getCirclesByRegionId(this.region.id,this.RESPONSE_FALSE).subscribe(success =>{
      this.circles = <any> success;
    }, error =>{
      console.log(error);
      this.circles = [];
    });
  }

  circleChanged(){
    this.divisions = [];
    this.zones = [];
    this.division = undefined;
    this.zone = undefined;
    this.getDivisionsByCircleId();
  }

  getDivisionsByCircleId(){
    this.locationService.getDivisionsByCircleId(this.circle.id,this.RESPONSE_FALSE).subscribe(success =>{
      this.divisions = <any> success;
    }, error =>{
      console.log(error);
      this.divisions = [];
    });
  }

  divisionChanged(){
    this.zones = [];
    this.zone = undefined;
    this.getZonesByDivisionId();
  }

  getZonesByDivisionId(){
    this.locationService.getZonesByDivisionId(this.division.id,this.RESPONSE_FALSE).subscribe(success =>{
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
    let locationCode = null;
    if(this.zone){
      locationCode = this.zone.code;
    } 
    this.readService.getReadingsByBillMonthAndlocation(this.billMonth, locationCode, this.division.id, this.RESPONSE_FALSE).subscribe(success =>{
      this.loading = false;
      this.readings = <any> success;
      console.log(this.readings);
    },error =>{
      this.readings = [];
      this.loading = false;
      console.log(error);
    })
  }

}
