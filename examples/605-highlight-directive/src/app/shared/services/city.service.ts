import {Injectable} from '@angular/core';
import {City} from '../model/city.model';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class CityService {

  constructor(private http: HttpClient) {

  }

  // retourneer alle cities
  getCities() {
    return this.http.get<City[]>('assets/cities.json');
  }
}
