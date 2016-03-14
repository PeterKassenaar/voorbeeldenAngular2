import { Injectable} from 'angular2/core';
import {Http} from 'angular2/http';

@Injectable()
export class CityService {
	private cities;

	constructor(private _http:Http) {

	}

	// retourneer alle cities
	getCities() {
		return this._http.get('app/cities.json')
	}

	// **************************
	// Quick & Dirty handmatige cache voor cities
	// **************************
	get cache(){
		return this.cities;
	}

	set cache(value){
		console.log('cache ingesteld: ', value);
		this.cities=value;
	}
}