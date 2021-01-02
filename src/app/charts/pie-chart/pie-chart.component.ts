import { Component, Input, AfterViewInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Legend } from 'highcharts';
import { Label, SingleDataSet } from 'ng2-charts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements AfterViewInit {

  @Input() type: string;
  @Input() ic1: number;
  @Input() ic2: number;
  @Input() ic3: number;
  @Input() ic4: number;
  @Input() ic5: number;
  @Input() ic6: number;
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
 
  public pieChartLabels: Label[] = [];
  public pieChartData: SingleDataSet = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  public pieChartColors: Array < any > = [{
    backgroundColor: ['#fc5858', '#19d863', '#fdf57d', '#0000FF', '#FF8C00', '#8B0000'],
    borderColor: ['rgba(252, 235, 89, 0.2)', 'rgba(77, 152, 202, 0.2)', 'rgba(241, 107, 119, 0.2)', 'rgb(0,0,255)', 'rgb(255,140,0)','rgb(139,0,0)']
  }];

  constructor() { }

  ngAfterViewInit() {
    this.pieChartLabels = ['$60k to $80k', 'Less than $40k', '$80k to $120k', '$40K - $60K' , '$120k+', 'Unknown'];
    this.pieChartData = [this.ic1, this.ic2, this.ic3, this.ic4, this.ic5, this.ic6];
    this.pieChartOptions = {title:{
      display: true,
      text: this.type
    }};
  }

}
