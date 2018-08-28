import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'dcb-bar-chart',
  templateUrl: './dcb-bar-chart.component.html',
  styleUrls: ['./dcb-bar-chart.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class DcbBarChartComponent implements OnInit {

  public chartType: string = 'bar';//horizontalBar
  public chartData = {
    legend: true,
    datasets:[
      { 
        label: 'Demand',
        data: [99266088, 111928983, 82470994], 
        fill:false 
      },
      { 
        label: 'Arrear',
        data: [79380903, 89042948, 68415112], 
        fill:false 
      }
  ],
    labels: ['APR', 'MAY', 'JUN'],
    colors: [
      {
        backgroundColor: '#17a2b8',
        hoverBackgroundColor: 'gray',
        borderColor:'#17a2b8',
        borderWidth:2
      },
      {
        backgroundColor: 'red',
        hoverBackgroundColor: 'gray',
        borderColor:'red',
        borderWidth:2
      },
    ],
  }

  //Scaling property
  public chartOptions: any = { 
    scaleShowVerticalLines: false,
    scaleShowValues: true,
    responsive: true,
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: -10
      }
    },
    title: {
      display: true,
      position: 'top',
      text: 'Demand and Arrear (in millions)'
    },
    legend:{
      display: true,
      position: 'bottom',
      fullWidth: true,
      labels: {
        fontColor: 'rgb(255, 99, 132)',
        fontStyle: 'bold',
      },
    },
    animation: {
      animateScale: true,
      animateRotate: true,
      duration: 2000
    },
    scales: {
      yAxes: [{
        ticks: {
            max: 150000000,
            min: 1000000,
            stepSize: 50000000,
            mirror: false,
        }
      }],
    },
    tooltips: {
      enabled: true,
      mode: 'single',
    }
   };

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
