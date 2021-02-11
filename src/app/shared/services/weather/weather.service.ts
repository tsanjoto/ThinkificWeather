import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, BehaviorSubject, EMPTY } from 'rxjs';
import { Weather } from '@app/shared/interfaces';
import { catchError, map, pluck, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';

interface WeatherResponse {
  weather: Weather;
  cod: string;
  message: string;
}

@Injectable({ providedIn: 'root' })
export class WeatherService {
  
  constructor(private http: HttpClient) {}

  getWeather(city: string, apiKey: string): Observable<Weather> {
    return this.http
      .get<WeatherResponse>('/api/weather', {params: { city, apiKey }})
      .pipe(
        tap(({weather,cod,message}) => {
          if(cod === "404"){
            throw new Error(message);
          }
        }),
        pluck('weather')
     )

  }
}
