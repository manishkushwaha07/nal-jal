import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LocationService } from '../../../services/location/location.service';
import { BillService } from '../../../services/bill/bill.service';

@Component({
  selector: 'nal-jal-water-works-bill-timeline',
  templateUrl: './water-works-bill-timeline.component.html',
  styleUrls: ['./water-works-bill-timeline.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class WaterWorksBillTimelineComponent implements OnInit {

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
    this.circleId = undefined;
    this.divisionId = undefined;
    this.locationCode = undefined;
    this.getCirclesByRegionId();
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
    this.getDivisionsByCircleId();
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
    this.getZonesByDivisionId();
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
    this.bills = undefined;
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
    this.getBills(discomId, regionId, circleId, divisionId, locationCode);
  }

  getBills(discomId, regionId, circleId, divisionId, locationCode){
    this.billService.getBillsByBillMonthAndlocation(this.billMonth, discomId, regionId, circleId, divisionId, locationCode, this.RESPONSE_FALSE).subscribe(success =>{
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
