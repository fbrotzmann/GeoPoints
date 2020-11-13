import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { MapComponent } from './map/map.component';
import { WeatherComponent } from './weather/weather.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';

import { MarkerService } from './_services/marker.service';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    MapComponent,
    WeatherComponent,
    FetchDataComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: MapComponent, pathMatch: 'full' },
      { path: 'weather', component: WeatherComponent },
      { path: 'fetch-data', component: FetchDataComponent },
    ])
  ],
  providers: [MarkerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
