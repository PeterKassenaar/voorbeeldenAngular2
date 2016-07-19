import { Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class CityService {

	constructor(private _http:Http) {

	}

	// retourneer alle cities
	getCities() {
		return this._http.get('app/cities.json')
	}
}