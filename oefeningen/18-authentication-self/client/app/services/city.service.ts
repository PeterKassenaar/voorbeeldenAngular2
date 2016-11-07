import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {City} from "../model/city.model";
import 'rxjs/add/operator/map';

@Injectable()
export class CityService {
	private cities: City[];

	constructor(private _http: Http) {
	}

	// retourneer alle cities
	getCities(): any {
		return this._http.get('app/cities.json')
			.map(cityData=> cityData.json());
	}


// **************************
// Quick & Dirty handmatige cache voor cities
// **************************
	get cache() {
		return this.cities;
	}

	set    cache(value) {
		console.log('cache ingesteld: ', value);
		this.cities = value;
	}

	addCity(city: City) {
		this.cities.push(city);
	}
}