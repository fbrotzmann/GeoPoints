//import { Component, Inject } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
//@Component({
//  selector: 'app-counter-component',
//  templateUrl: './counter.component.html'
//})
//export class CounterComponent {
//  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
//    http.get<OpenWeather[]>(baseUrl + 'OpenWeather').subscribe(result => {
//      this.OpenWeather = result;
//    }, error => console.error(error));
//  }
//}
//module OpenWeather {
//  export interface Coord {
//    lon: number;
//    lat: number;
//  }
//  export interface Weather {
//    id: number;
//    main: string;
//    description: string;
//    icon: string;
//  }
//  export interface Main {
//    temp: number;
//    feels_like: number;
//    temp_min: number;
//    temp_max: number;
//    pressure: number;
//    humidity: number;
//  }
//  export interface Wind {
//    speed: number;
//    deg: number;
//  }
//  export interface Clouds {
//    all: number;
//  }
//  export interface Sys {
//    type: number;
//    id: number;
//    country: string;
//    sunrise: number;
//    sunset: number;
//  }
//  export interface RootObject {
//    coord: Coord;
//    weather: Weather[];
//    base: string;
//    main: Main;
//    visibility: number;
//    wind: Wind;
//    clouds: Clouds;
//    dt: number;
//    sys: Sys;
//    timezone: number;
//    id: number;
//    name: string;
//    cod: number;
//  }
//}
//# sourceMappingURL=counter.component.js.map