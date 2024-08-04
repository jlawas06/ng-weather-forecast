import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { IWeather } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeatherDetailsByCity(city: string): Observable<IWeather> {
    return this.http
      .get(
        `${environment.weatherApiEndpoint}?q=${city}&units=imperial&appid=${environment.weatherApiKey}`
      )
      .pipe(
        map((x: any) => {
          return {
            date: new Date(x.dt * 1000),
            temperature: x.main?.temp,
            description: x.weather[0]?.description,
            main: x.weather[0]?.main,
            pressure: x.main?.pressure,
            humidity: x.main?.humidity,
            icon: x.weather[0]?.icon,
            name: x.name,
          } as IWeather;
        })
      );
  }
}
