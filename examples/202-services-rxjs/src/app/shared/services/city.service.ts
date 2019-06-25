import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from '../model/city.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CityService {
  constructor(private http: HttpClient) {}

  // return all cities
  getCities(): Observable<City[]> {
    return this.http.get<City[]>('assets/data/cities.json');
  }
}
