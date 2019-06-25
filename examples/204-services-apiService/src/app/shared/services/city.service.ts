import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {City} from '../model/city.model';
import {ApiService} from './api.service';

@Injectable()
export class CityService {


  // by using an extra apiService, our CityService doesn't have to know
  // about the Http-backend (or Mock) anymore.
  // This adds a layer of complexity/abstraction, but is also more flexible.
  constructor(private apiService: ApiService) {
  }

  // return all cities as an Observable
  getCities(): Observable<City[]> {
    return this.apiService.getCities();
  }

  // get city by ID
  getCity(id: number): Observable<City> {
    return this.apiService.getCity(id);
  }

  // add a new city, return the added city as an Observable
  addCity(newCity: City): Observable<City> {
    return this.apiService.createCity(newCity);
  }
}
