import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { City } from '../model/city.model';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class CityService {
	// Deprecated/OLD : constructor(private http: Http) { ... }
	constructor(private http: HttpClient) {}

	// retourneer alle cities
	getCities(): Observable<City[]> {
		return this.http.get<City[]>('assets/data/cities.json').pipe(
			catchError(err => {
				console.log('FOUT!!!!', err);
				return of([]);
			})
		);
	}
}
