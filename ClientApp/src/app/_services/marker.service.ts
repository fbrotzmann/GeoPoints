import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';
import { Point } from '../point';

@Injectable({
  providedIn: 'root'
})
export class MarkerService {
  public points: Point[];
  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string)
  {
    http.get<Point[]>(baseUrl + 'Points').subscribe(result => { this.points = result; }, error => console.error(error));
  }

  makePoints(map: L.Map): void {
    for (const c of this.points) {
      const lat = c.latitud;
      const lon = c.longitud;
      const marker = L.marker([lat, lon]);
      marker.bindPopup(`<b>${c.nombre}</b><br><b>Zona:</b>${c.zona}<br><b>Valor:</b>${c.precio}`,
      { closeButton: true }).openPopup();
      marker.addTo(map);

    };
  }
}
