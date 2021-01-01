import { Component, Input } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { CustomerDataService } from '../services/customer-data.service';
import { Customer } from '../models/customer';

@Component({
  selector: 'app-my-bar-chart',
  templateUrl: './my-bar-chart.component.html',
  styleUrls: ['./my-bar-chart.component.scss']
})

export class MyBarChartComponent {
  @Input() xAxis:string;
  @Input() yAxis:string;
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public customer: Customer[];
  public barChartLabels: string[] = ['<30', '>30 < 50', '>50'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [];

  constructor(private customerDataService: CustomerDataService)  { 
    this.customerDataService.findAllCustomers().subscribe(response => {
    this.customer = response;
    });
  }
  public createChart(){
    if(this.xAxis==="Attrition" && this.yAxis==="Age"){
      this.setAttritionAge();
    }else if(this.xAxis==="Attrition" && this.yAxis==="Gender"){
      this.setAttritionGender();
    }
  }
  setAttritionAge(){
    //START: put data in Bar Chart
    this.barChartData = [
    { data: [this.customer.filter(a =>a.attritionFlag==='Existing Customer' && a.customerAge<30).length, 
    this.customer.filter(a =>a.attritionFlag==='Existing Customer' && a.customerAge>30 && a.customerAge<50).length,
    this.customer.filter(a =>a.attritionFlag==='Existing Customer' && a.customerAge>50).length], label: 'Existing Cusomter', stack: 'a' },
    {data: [this.customer.filter(a => a.attritionFlag==='Attrited Customer' && a.customerAge<30).length, 
    this.customer.filter(a =>a.attritionFlag==='Attrited Customer' && a.customerAge>30 && a.customerAge<50).length,
    this.customer.filter(a =>a.attritionFlag==='Attrited Customer' && a.customerAge>50).length], label: 'Attritted Customer', stack: 'a'}];
  //  this.barChartLabels = this.customer.filter(a => a.gender);
  //END: put data in Bar Chart
  }
  setAttritionGender(){
    //START: put data in Bar Chart
    this.barChartData = [
    { data: [this.customer.filter(a =>a.attritionFlag==='Existing Customer' && a.gender==='M').length,
    this.customer.filter(a =>a.attritionFlag==='Existing Customer' && a.gender==='F').length], label: 'Existing Cusomter', stack: 'a' },
    {data: [this.customer.filter(a => a.attritionFlag==='Attrited Customer' && a.gender==='M').length,
    this.customer.filter(a =>a.attritionFlag==='Attrited Customer'  && a.gender==='F').length], label: 'Attritted Customer', stack: 'a'}];
  //  this.barChartLabels = this.customer.filter(a => a.gender);
  //END: put data in Bar Chart
  }
} 