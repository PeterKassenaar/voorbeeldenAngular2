import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {HttpClient} from '@angular/common/http';
import {City} from '../models/city.model';

@Injectable()
export class CityService {
  private cities;

  constructor(private http: HttpClient) {

  }

  // return alll cities
  getCities() {
    return this.http.get<City[]>('assets/data/cities.json');
  }
}
