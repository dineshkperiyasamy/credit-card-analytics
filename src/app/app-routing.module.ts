import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerDataTableComponent} from "./customer-data-table/customer-data-table.component";
import { DashComponent } from './dash/dash.component';
import {HomeComponent} from "./home/home.component";
import { AboutUsComponent } from "./about/about-us/about-us.component";

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
    path: "dashboard",
    component: DashComponent
  },
  {
    path: "about",
    component: AboutUsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
