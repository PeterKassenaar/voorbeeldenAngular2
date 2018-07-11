import { Injectable} from 'angular2/core';
import { City } from './city.model'
import { Http } from 'angular2/http';

@Injectable()
export class CityService {

	constructor(private http:Http) {

	}

	// retourneer alle cities
	getCities() {
		return this.http.get('app/cities.json')
	}
}