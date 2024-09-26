import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {City} from '../model/city.model';
import {HttpClient} from '@angular/common/http';
import {map, catchError} from 'rxjs/operators';

@Injectable()
export class CityService {
  // private variable, acting as cache for cities
  private cityCache: any[] = [];
  private observable: Observable<any> | undefined;

  constructor(private http: HttpClient) {
  }

  // retourneer alle cities, gemapt naar json
  getCities(): Observable<City[]> {
    if (this.cityCache.length > 0) {
      // 1. cities al aanwezig. Return Observable naar cities.
      return of(this.cityCache);
    } else if (this.observable) {
      // 2. Er is op dit moment nog een request gaande. Return het request-object.
      return this.observable;
    } else {
      // 3. Geen cities in cache. Doe nieuwe http-call
      this.observable = this.http.get<City[]>('assets/data/cities.json').pipe(
        map(cities => {
          console.log('Fetched cities.json via HTTP-call');
          // 3a. Als er cached data is, hebben we this.observable niet meer nodig
          this.observable = undefined;
          // 3b. Data is binnen, set cache
          this.cityCache = cities;
          return cities;
        }),
        catchError((error: any) => {
          //  3c. Error handling here, omdat we nu async-pipe gebruiken.
          console.log('Error while fetching cities: ', error);
          return of(null);
        })
      );
      return this.observable;
    }
  }

  clearCache() {
    console.log('Cache cleared - cities removed');
    this.cityCache = [];
  }
}
