import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnalyticsComponent } from './analytics/analytics.component';
import {CustomerDataTableComponent} from "./customer-data-table/customer-data-table.component";
import { DashComponent } from './dash/dash.component';
import {HomeComponent} from "./home/home.component";
import { MyBarChartComponent } from './my-bar-chart/my-bar-chart.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "data",
    component: CustomerDataTableComponent
  },
  {
    path: "bar-chart",
    component: MyBarChartComponent
  },
  {
    path: "dashboard",
    component: DashComponent
  },
  {
    path: "analytics",
    component: AnalyticsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
