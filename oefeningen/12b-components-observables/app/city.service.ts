import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';

@Injectable()
export class CityService {
	constructor(private _http:Http) {

	}

	// retourneer alle cities
	getCities() {
		return this._http.get('app/cities.json')
	}
}