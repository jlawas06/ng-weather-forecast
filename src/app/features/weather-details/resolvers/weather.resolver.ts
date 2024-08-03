import { inject } from '@angular/core';
import { Router, type ResolveFn } from '@angular/router';
import { Observable, of } from 'rxjs';
import { IWeather } from '../interfaces';
import { WeatherService } from '../services';

export const weatherResolver: ResolveFn<Observable<IWeather | null>> = (
  route,
  _
) => {
  const weatherSvc = inject(WeatherService);
  const router = inject(Router);

  const city = route.queryParamMap.get('city');
  if (!city) {
    router.navigate(['/home']);
    return of(null);
  }

  return weatherSvc.getWeatherDetailsByCity(city);
};
