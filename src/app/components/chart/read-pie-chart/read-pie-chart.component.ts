import { Component, OnInit } from '@angular/core';
import 'chart.piecelabel.js';

@Component({
  selector: 'read-pie-chart',
  templateUrl: './read-pie-chart.component.html',
  styleUrls: ['./read-pie-chart.component.css']
})
export class ReadPieChartComponent implements OnInit {

  public chartType:string = 'pie';
  
  public chartData = {
    legend: true,
    datasets:[{ 
      data: [1723,249],
    }],
    labels: ['Non AMR Consumer', 'AMR Consumer'],
    colors: [{
      backgroundColor: ['orange','green'],
      hoverBackgroundColor: ['gray','gray'],
      borderColor:['orange','green'],
      borderWidth:[2,2]
    }],
  }

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

  constructor() { }

  ngOnInit() {
  }
   
  chartClicked(e:any):void {
    console.log(e);
  }
 
  chartHovered(e:any):void {
    console.log(e);
  }

  randomizeType(chartType:string):void {
    if(chartType ==='pie'){
      this.chartType = 'doughnut';
    }else if(chartType ==='doughnut'){
      this.chartType = 'polarArea';
    }else{
      this.chartType = 'pie';
    }
  }

}
