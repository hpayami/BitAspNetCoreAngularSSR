import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
  public forecasts: WeatherForecast[];

  public constructor(titleService: Title, private http: HttpClient) {
    titleService.setTitle('Weather');
  }

  public ngOnInit() {
    this.http.get<WeatherForecast[]>('odata/SampleApp/WeatherForecast').subscribe(result => {
      this.forecasts = result;
    }, error => console.error(error));
  }
}

interface WeatherForecast {
  Date: string;
  TemperatureC: number;
  TemperatureF: number;
  Summary: string;
}
