import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HighchartsChartModule } from 'highcharts-angular';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { MapComponent } from './map/map.component';
import { WeatherComponent } from './weather/weather.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';

import { MarkerService } from './services/marker.service';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    MapComponent,
    WeatherComponent,
    FetchDataComponent,
    PieChartComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    HighchartsChartModule,
    RouterModule.forRoot([
      { path: '', component: MapComponent, pathMatch: 'full' },
      { path: 'weather', component: WeatherComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'pie-chart', component: PieChartComponent },
    ])
  ],
  providers: [MarkerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
