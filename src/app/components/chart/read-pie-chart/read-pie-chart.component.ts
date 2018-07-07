import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'read-pie-chart',
  templateUrl: './read-pie-chart.component.html',
  styleUrls: ['./read-pie-chart.component.css']
})
export class ReadPieChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public pieChartLabels:string[] = ['Total Consumer', 'AMR Consumer'];
  public pieChartData:number[] = [500, 200];
  public pieChartType:string = 'pie';

  //scaling property

  public pieChartOptions: any = {
    responsive: true,
    maintainAspectRatio: false
  };
   
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

}
