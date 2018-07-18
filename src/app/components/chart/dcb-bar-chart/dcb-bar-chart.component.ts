import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dcb-bar-chart',
  templateUrl: './dcb-bar-chart.component.html',
  styleUrls: ['./dcb-bar-chart.component.css']
})
export class DcbBarChartComponent implements OnInit {

  
  public chartLabels: string[] = ['APR', 'MAY', 'JUN'];
  public chartType: string = 'bar';//horizontalBar
  public chartLegend: boolean = true;

  public chartData: any[] = [
    { label: 'Demand', 
      data: [99266088, 111928983, 82470994], 
      fill:false 
    },
    { 
      label: 'Arrear',
      data: [79380903, 89042948, 68415112], 
      fill:false 
    }
  ];

  //Scaling property
  public chartOptions: any = { 
    scaleShowVerticalLines: false,
    responsive: true,
    title: {
      display: true,
      text: 'Demand and Arrear (in millions)'
    },
    legend:{
      display: true,
      position: 'bottom',
      fullWidth: true,
    },
    animation: {
      animateScale: true,
      animateRotate: true
    }
   };

  // public chartColors:Array<any> = [
  //   { backgroundColor: '#007bff', borderColor: '#007bff', hoverBackgroundColor:'#17a2b8'},
  //   { backgroundColor: '#dc3545', borderColor: '#dc3545', hoverBackgroundColor:'#ffc107'},
  // ];

  constructor() { }

  ngOnInit() {
  }
  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  public randomizeType(chartType:string):void {
    if(chartType ==='bar'){
      this.chartType = 'line';
    }else if(chartType ==='line'){
      this.chartType = 'radar';
    }else{
      this.chartType = 'bar';
    }
  }
  
}
