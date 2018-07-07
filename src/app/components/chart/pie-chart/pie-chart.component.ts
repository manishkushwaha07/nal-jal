import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

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
