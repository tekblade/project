import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Measurements, WeatherData } from './measurements';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  url = 'https://airapi.airly.eu/v2/measurements/installation?installationId=7026';
  metaUrl = 'https://airapi.airly.eu/v2/installations/7026';
  headers: HttpHeaders = new HttpHeaders()
    .set('Accept', 'application/json')
    .set('apikey', 'CK4U993zDAATUnV5t9lsgk40XC6rQyWh');
  
  constructor(private http: HttpClient) {

  }
  
  getDataById(){
    return this.http.get<WeatherData>(`${this.url}`, { headers: this.headers });
  }
  getMetaDataById(){
    return this.http.get(`${this.metaUrl}`, {headers:this.headers});
  }
}
