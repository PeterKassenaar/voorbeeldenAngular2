import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {City} from '../model/city.model';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  // Dependency Injection from HttpClient (it is imported as HttpClientModule in app.module.ts)
  constructor(private http: HttpClient) {

  }

  // return all cities
  getCities(): Observable<City[]> {
    return this.http.get<City[]>('assets/data/cities.json');
  }
}
