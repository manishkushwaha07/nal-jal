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

  public chartLabels:string[] = ['Total Consumer', 'AMR Consumer'];
  public chartData:number[] = [1972,249];
  public chartType:string = 'pie';
  public chartLegend: boolean = true;
  public backgroundColor:Array<any> = ['orange','green'];
  public hoverBackgroundColor:Array<any> = ['gray','gray'];
  public chartColors: Array<Color> = [
    {
    backgroundColor: this.backgroundColor,
    hoverBackgroundColor: this.hoverBackgroundColor
    }
  ];

  //scaling property

  public chartOptions: any = {
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

  public randomizeType(chartType:string):void {
    if(chartType ==='pie'){
      this.chartType = 'doughnut';
    }else if(chartType ==='doughnut'){
      this.chartType = 'polarArea';
    }else{
      this.chartType = 'pie';
    }

    // this.chartType = this.chartType === 'pie' ? 'doughnut' : ('doughnut' ? 'polarArea' : 'pie');
    console.log(this.chartType);
  }

}
