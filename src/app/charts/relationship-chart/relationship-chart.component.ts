import { Component, OnInit, Input } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { nextTick } from 'process';
import { CustomerDataService } from '../../services/customer-data.service';

@Component({
  selector: 'app-relationship-chart',
  templateUrl: './relationship-chart.component.html',
  styleUrls: ['./relationship-chart.component.scss']
})
export class RelationshipChartComponent implements OnInit {

  @Input() type: string;
  @Input() ic1: number;
  @Input() ic2: number;
  @Input() ic3: number;
  @Input() ic4: number;
  @Input() ic5: number;
  @Input() ic6: number;

  public lineChartData: ChartDataSets[] = [
  ];
  public lineChartLabels: Label[] = ['$60k to $80k', 'Less than $40k', '$80k to $120k', '$40K - $60K' , '$120k+', 'Unknown'];
  public lineChartOptions: ChartOptions = {
    responsive: true,
    scales : {
      yAxes: [{
        gridLines: {
          display:false
      },
      display: false,
      ticks: {
        min: 100,
        max : 1000,
      }
      }]
    },
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];


  constructor(private customerDataService: CustomerDataService) { }
    
    
  ngOnInit() {
  }

}
