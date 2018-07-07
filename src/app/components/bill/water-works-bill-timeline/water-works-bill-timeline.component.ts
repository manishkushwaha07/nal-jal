import { Component, OnInit } from '@angular/core';
import { LocationService } from '../../../services/location/location.service';
import { BillService } from '../../../services/bill/bill.service';

@Component({
  selector: 'nal-jal-water-works-bill-timeline',
  templateUrl: './water-works-bill-timeline.component.html',
  styleUrls: ['./water-works-bill-timeline.component.css']
})
export class WaterWorksBillTimelineComponent implements OnInit {

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
  bills : any;
  loading : boolean = false;

  constructor(private locationService : LocationService, private billService : BillService) { }

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
    this.bills = undefined;
    let locationCode = null;
    if(this.zone && this.zone !== 'ALL'){
      locationCode = this.zone;
    } 
    this.billService.getBillsByBillMonthAndlocation(this.billMonth, locationCode, this.division.id, this.RESPONSE_FALSE).subscribe(success =>{
      this.loading = false;
      this.bills = <any> success;
      console.log(this.bills);
    },error =>{
      this.bills = [];
      this.loading = false;
      console.log(error);
    });
  }
}
