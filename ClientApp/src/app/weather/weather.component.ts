import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-weather-component',
  templateUrl: './weather.component.html'
})
export class WeatherComponent {
  public weather: Weather;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Weather>(baseUrl + 'OpenWeather').subscribe(result => {
      this.weather = result;
    }, error => console.error(error));
  }
}

interface Weather {
  temp: string;
  summary: string;
  city: string;
}

