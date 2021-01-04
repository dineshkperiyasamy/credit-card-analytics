import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerDataTableComponent} from "./customer-data-table/customer-data-table.component";
import { DashComponent } from './dash/dash.component';
import {HomeComponent} from "./home/home.component";
import { AboutUsComponent } from "./about/about-us/about-us.component";
import { LoginComponent } from "./login/login.component";
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "home",
    component: HomeComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: "data",
    component: CustomerDataTableComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: "dashboard",
    component: DashComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: "contact",
    component: AboutUsComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
