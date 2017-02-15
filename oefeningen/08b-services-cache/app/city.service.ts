import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {City} from "./city.model"; // Import rxjs-operator

@Injectable()
export class CityService {

	// private variable, acting as cache for cities
	private cityCache: any[];
	private observable: Observable<any>;

	constructor(private http: Http) {

	}

	// retourneer alle cities, gemapt naar json
	getCities(): Observable<City[]> {
		if (this.cityCache) {
			// 1. cities al aanwezig. Return Observable naar cities.
			return Observable.of(this.cityCache);
		}
		else if (this.observable) {
			// 2. Er is op dit moment nog een request gaande. Return het request-object.
			return this.observable;
		}
		else {
			// 3. Geen cities in cache. Doe nieuwe http-call
			this.observable = this.http.get('app/cities.json')
				.map(cities => {
					console.log('Fetched cities.json via HTTP-call');
					// 3a. Als er cached data is, hebben we this.observable niet meer nodig
					this.observable = null;
					// 3b. Data is binnen, set cache
					this.cityCache  = cities.json();
					return cities.json()
				})
				.catch((error:any)=> {
					//  3c. Error handling here, omdat we nu async-pipe gebruiken.
					console.log('Error while fetching cities: ', error);
					return Observable.of(null);
				});
			return this.observable;
		}
	}

	clearCache() {
		console.log('Cache cleared - cities removed');
		this.cityCache = null;
	}
}
