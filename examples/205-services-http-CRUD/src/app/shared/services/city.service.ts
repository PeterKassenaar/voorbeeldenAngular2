import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {City} from '../model/city.model';

// Import from rxjs
import {map, catchError} from 'rxjs/operators';
import {of} from 'rxjs';

const API_URL = 'http://localhost:3000/cities';
// Set RequestOptions. In this case only the header.
const headers = new HttpHeaders().set('Content-Type', 'application/json');
const API_ARGS = {headers};

@Injectable()
export class CityService {


  constructor(private http: HttpClient) {
  }

  // GET: return all cities
  getCities(): Observable<City[]> {
    return this.http.get<City[]>(API_URL).pipe(
      catchError(err => {
        console.log('Error! Did you forget to start json-server? Run `npm run json-server` to start the server', err);
        return of([]);
      })
    );
  }

  // GET: Return 1 City, based on Id
  getCity(id: number): Observable<City> {
    return this.http.get<City>(API_URL + `/${id}`);
  }

  // POST: Add a new City
  addCity(cityName: string): Observable<City> {

    const newCity = new City(undefined, cityName);

    // Add city via POST request
    return this.http.post<City>(
      API_URL,
      JSON.stringify(newCity),
      API_ARGS
    );
  }

  // DELETE: Delete city from the .json-file (warning: no trash. City is actually removed)
  deleteCity(city: any) {
    return this.http.delete(API_URL + `/${city.id}`);
  }

  // PUT : update a current city
  updateCity(city: City | undefined): Observable<City> {
    return this.http.put<City>(
      API_URL + `/${city?.id}`,
      JSON.stringify(city),
      API_ARGS
    );
  }
}
