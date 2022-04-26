import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { ForecastDaily } from './forecast-daily.model';

@Injectable({
  providedIn: 'root',
})
export class ForecastDailyService {
  constructor(private http: HttpClient) {}

  private API_URL_FORECAST = 'http://api.openweathermap.org/data/2.5/forecast';

  getForecastDaily(address: string): Observable<any> {
    return this.http.get<ForecastDaily>(this.API_URL_FORECAST + '/daily', {
      params: {
        q: address,
        mode: 'json',
        units: 'metric',
        cnt: '7',
        lang: 'vi',
        APPID: environment.openweathermap_appid,
      }
    });
  }
}
