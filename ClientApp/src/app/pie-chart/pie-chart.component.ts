import { Component, Inject} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Point } from '../point';
import * as Highcharts from 'highcharts';

import { MarkerService } from '../_services/marker.service';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html'
})
export class PieChartComponent {
  public points: Point[];

  constructor(private markerService: MarkerService,
    http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Point[]>(baseUrl + 'Points').subscribe(result => {
      this.points = result;
    }, error => console.error(error));
  }

  public sumaNorte: number = 300000;
  public sumaSur: number = 125000;
  public sumaEste: number = 125000;
  public sumaOeste: number = 1125000;
  public sumaCentro: number = 325000;

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
    },
    title: {
      text: 'Suma de valor por Zona'
    },
    
    accessibility: {
      point: {
        valueSuffix: '$'
      }
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}:</b> ${point.y}'
        },
        showInLegend: true
      }
    },
    series: [{
      name: '$',
      data: [{
              name: 'Zona Norte', y: this.sumaNorte},
            {name: 'Zona Este', y: this.sumaEste },
            {name: 'Zona Oeste', y: this.sumaOeste },
            {name: 'Zona Sur', y: this.sumaSur },
            {name: 'Zona Centro', y: this.sumaCentro
      }],
      type: 'pie'
    }]



  };
}

  //public chartData: number[] = [];
  //ngOnInit() {
  //  for (const c of this.points) {
  //    if (c.zona = "Norte") {
  //      this.sumaNorte += c.precio;
  //    }
  //    else if (c.zona = "Sur") {
  //      this.sumaSur += c.precio;
  //    }
  //    else if (c.zona = "Este") {
  //      this.sumaEste += c.precio;
  //    }
  //    else if (c.zona = "Oeste") {
  //      this.sumaOeste += c.precio;
  //    }
  //    else if (c.zona = "Centro") {
  //      this.sumaCentro += c.precio;
  //    }
  //  };

  //  this.chartData.push(this.sumaNorte, this.sumaEste, this.sumaOeste, this.sumaSur, this.sumaCentro);

  //}
