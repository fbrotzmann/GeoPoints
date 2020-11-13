import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-weather-component',
  templateUrl: './weather.component.html'
})
export class WeatherComponent {
  openWeather: OpenWeather;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<OpenWeather>(baseUrl + 'OpenWeather').subscribe(result => {
      this.openWeather = result;
    }, error => console.error(error));
   
  }


}
interface OpenWeather {
  main: [];
  name: string
}
interface Main {
     temp: number
     temp_min: number
     Temp_max: number
     pressure: number
     humidity: number
}
