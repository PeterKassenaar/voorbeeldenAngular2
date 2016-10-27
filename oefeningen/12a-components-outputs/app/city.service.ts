import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class CityService {

	constructor(private http: Http) {
	}

	// retourneer alle cities
	getCities() {
		return this.http.get('app/cities.json')
	}
}