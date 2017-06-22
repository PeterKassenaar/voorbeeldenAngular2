import {Injectable} from '@angular/core';
import {environment} from 'environments/environment';
import {Http, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {City} from '../model/city.model';

// RxJS operators
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

// Fetching URL from environment variable
const API_URL = environment.apiUrl;

@Injectable()
export class ApiService {

	constructor(private http: Http) {
	}

	// API: GET /cities - get all cities
	public getCities(): Observable<City[]> {
		return this.http.get(API_URL + '/cities')
			.map(response => {
				const allCities = response.json();
				return allCities.map((city: City) => {
					return new City(city.id, city.name, city.province, city.rating, city.highlights)
				})
			})
			.catch(this.handleError);
	}

	// API: GET city/:id - get city by ID
	public getCity(id: number): Observable<City> {
		return this.http.get(API_URL + `/cities/${id}`)
			.map(response => {
				const city: City = response.json();
				return new City(city.id, city.name, city.province, city.rating, city.highlights)
			})
			.catch(this.handleError);
	}

	// API: POST/cities - add a new city
	public createCity(city: City): Observable<City> {
		// set headers
		const headers = new Headers();
		headers.append('Content-Type', 'application/json');

		// perform POST request
		return this.http.post(API_URL + '/cities', JSON.stringify(city), {headers: headers})
			.map(response => {
				const city: City = response.json();
				return new City(city.id, city.name, city.province, city.rating, city.highlights)
			})
			.catch(this.handleError);
	}

	// API: PUT city/:id - update existing city
	public updateCity(city: City) {

	}

	// API: DELETE city/:id
	public deleteCity(id: number) {

	}

	private handleError(error: Response | any) {
		console.error('ApiService::handleError', error);
		return Observable.throw(error);
	}

}
