import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {City} from "../model/city.model";

@Injectable()
export class CityService {
	private cities: City[];

	constructor(private _http: Http) {

	}

	setCities(cities) {
		this.cities = cities;
	}

	// retourneer alle cities
	getCities() {
		return this._http.get('assets/data/cities.json')
	}

	numCities() {
		return this.cities.length;
	}
}