import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomerDataTableComponent } from './customer-data-table/customer-data-table.component';
import { AppMaterialModule } from './app-material/app-material.module';
import { HttpClientModule} from "@angular/common/http";
import { CustomerDataService } from "./services/customer-data.service";
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu/menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { AnalyticsComponent } from './analytics/analytics.component';
import { MyBarChartComponent } from './my-bar-chart/my-bar-chart.component';
import { ChartsModule } from 'ng2-charts';
import { DashComponent } from './dash/dash.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MiniCardComponent } from './mini-card/mini-card.component';
import { PieChartComponent } from './charts/pie-chart/pie-chart.component';
import { CardComponent } from './card/card.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomerDataTableComponent,
    HomeComponent,
    MenuComponent,
    AnalyticsComponent,
    MyBarChartComponent,
    DashComponent,
    MiniCardComponent,
    PieChartComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    HttpClientModule,
    LayoutModule,
    ChartsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [
    CustomerDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
