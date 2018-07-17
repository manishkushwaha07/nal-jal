import { Component, OnInit } from '@angular/core';
import { Color } from 'ng2-charts';

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
  public pieChartData:number[] = [1972,249];
  public pieChartType:string = 'pie';
  public backgroundColor:Array<any> = ['orange','green'];
  public hoverBackgroundColor:Array<any> = ['gray','gray'];
  public pieChartColors: Array<Color> = [
    {
    backgroundColor: this.backgroundColor,
    hoverBackgroundColor: this.hoverBackgroundColor
    }
  ];

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
