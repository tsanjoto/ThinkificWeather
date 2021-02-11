import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, BehaviorSubject, EMPTY } from 'rxjs';
import { Weather } from '@app/shared/interfaces';

@Injectable({ providedIn: 'root' })
export class WeatherService {
  
  constructor(private http: HttpClient) {}

  getWeather(city: string, apiKey: string): Observable<Weather> {
    return this.http
      .get<Weather>('/api/weather', {params: { city, apiKey }})

  }
}
