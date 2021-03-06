import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dcb-bar-chart',
  templateUrl: './dcb-bar-chart.component.html',
  styleUrls: ['./dcb-bar-chart.component.css']
})
export class DcbBarChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public barChartLabels: string[] = ['APR', 'MAY', 'JUN'];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;

  public barChartData: any[] = [
    { data: [99266088, 111928983, 82470994], label: 'Demand' },
    { data: [79380903, 89042948, 68415112], label: 'Arrear' }
  ];

  //Scaling property
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

}
