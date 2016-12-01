import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class CityService {
	private cities;

	constructor(private http: Http) {

	}

	// return alll cities
	getCities() {
		return this.http.get('app/cities.json')
	}
}