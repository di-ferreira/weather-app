import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiKey: string = environment.API_KEY;

  constructor(private api: HttpClient) {}

  getWeatherDatas(cityName: string): Observable<any> {
    return this.api.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&mode=json&appid=${this.apiKey}`
    );
  }
}
