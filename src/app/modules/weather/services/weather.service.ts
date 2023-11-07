import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiKey: string = 'e511a5e24e6853248528e765aa55a9a6';

  constructor(private api: HttpClient) {}

  getWeatherDatas(cityName: string): Observable<any> {
    return this.api.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&mode=json&appid=${this.apiKey}`
    );
  }
}
