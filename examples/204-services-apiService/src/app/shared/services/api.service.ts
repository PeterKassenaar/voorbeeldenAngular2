import {Injectable} from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {City} from '../model/city.model';
import {environment} from '../../../environments/environment';

// Fetching URL from environment variable
const API_URL = environment.apiUrl;

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}

  // API: GET /cities - get all cities
  public getCities(): Observable<City[]> {
    const fullUrl = API_URL + '/cities';
    return this.http.get<City[]>(fullUrl).pipe(
      map(response => {
        return response.map((city: City) => {
          return new City(
            city.id,
            city.name,
            city.province,
            city.rating,
            city.highlights
          );
        });
      }),
      catchError(this.handleError)
    );
  }

  // API: GET city/:id - get city by ID
  public getCity(id: number): Observable<City> {
    return this.http.get<City>(API_URL + `/cities/${id}`).pipe(
      map(response => {
        const city: City = response;
        return new City(
          city.id,
          city.name,
          city.province,
          city.rating,
          city.highlights
        );
      }),
      catchError(this.handleError)
    );
  }

  // API: POST/cities - add a new city
  public createCity(city: City): Observable<City> {
    // set headers
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    // perform POST request
    return this.http
      .post<City>(API_URL + '/cities', city, { headers })
      .pipe(
        map((response: City) => {
          const c: City = response;
          return new City(
            c.id,
            c.name,
            c.province,
            c.rating,
            c.highlights
          );
        }),
        catchError(this.handleError)
      );
  }

  // API: PUT city/:id - update existing city
  public updateCity(city: City) {}

  // API: DELETE city/:id
  public deleteCity(id: number) {}

  private handleError(error: Response | any) {
    console.error('ApiService::handleError', error);
    console.info('Did you forget to start json server? (npm run json-server)');
    return throwError(error);
  }
}
