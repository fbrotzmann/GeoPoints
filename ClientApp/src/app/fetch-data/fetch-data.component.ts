import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
  public points: Point[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Point[]>(baseUrl + 'Points').subscribe(result => {
      this.points = result;
    }, error => console.error(error));
  }
}

interface Point {
  latitud: number;
  longitud: number;
  nombre: string;
  precio: number;
  zona: string;
}
