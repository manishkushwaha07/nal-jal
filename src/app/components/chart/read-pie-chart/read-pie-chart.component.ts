import { Component, OnInit } from '@angular/core';
import { Color } from 'ng2-charts';
import 'chart.piecelabel.js';

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
    maintainAspectRatio: false,
    title: {
      display: true,
      text: 'AMR Consumers count'
    },
    legend:{
      display: true,
      position: 'bottom',
      fullWidth: true,
    },
    animation: {
      animateScale: true,
      animateRotate: true
    },
    pieceLabel: {
      render: 'percentage',//'value','label'
      fontColor: ['white', 'white'],
      fontStyle: 'bold',
      fontSize: 14,
      precision: 2,
      arc: false,
      overlap: true,
      position: 'border'//'outside'
    },
    tooltips: {
      enabled: true,
      mode: 'single',
      // callbacks: {
      //   label: function(tooltipItem, data) {
      //     var dataset = data.datasets[tooltipItem.datasetIndex];
      //     var total = dataset.data.reduce(function(previousValue, currentValue, currentIndex, array) {
      //       return previousValue + currentValue;
      //     });
      //     var tooltipLabel = data.labels[tooltipItem.index];
      //     var currentValue = dataset.data[tooltipItem.index];
      //     var precentage = Math.floor(((currentValue/total) * 100)+0.5);         
      //     return tooltipLabel + " " + precentage + "%";
      //   }
      // }
    }
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
