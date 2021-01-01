import { Component, OnInit, ɵConsole } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { CustomerDataService } from '../services/customer-data.service';
import { Customer } from '../models/customer';
import { MyBarChartComponent } from '../my-bar-chart/my-bar-chart.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  chartArray: any = [];
  xArray: any = [];
  yArray: any = [];
  chart: string;
  xAxis: string;
  yAxis: string;
  display: boolean = false;
  public customerInfo: Customer[];
  private mybar:MyBarChartComponent;
  constructor(private customerDataService: CustomerDataService)  { }
  ngOnInit(): void {
    
    this.chartArray = ['Bar Chart', 'Pie Chart'];
    this.xArray = ["Attrition", "Gender"];
    this.yArray = ["Age", "Gender"];
    this.customerDataService.findAllCustomers().subscribe(response => {
      this.customerInfo = response;
      console.log(this.customerInfo);
    }
  )
  }
  setChartType(chart: string){
    this.chart=chart;
    this.setDisplayChart();
  }
  setXaxis(xAxis: string){
    this.xAxis = xAxis;
    this.setDisplayChart();
  }
  setYaxis(yAxis: string){
    this.yAxis = yAxis;
    this.setDisplayChart();
  }
  setDisplayChart(){
  if(this.yAxis != null && this.xAxis != null && this.chart != null)
  {
    this.display = true;
    if(this.chart==='Bar Chart'){
      this.mybar.createChart();
    }
  }else{
  this.display = false;
  }
}
}

