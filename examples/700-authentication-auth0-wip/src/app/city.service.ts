import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {City} from "./city.model";
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";

@Injectable()
export class CityService {

	constructor(private _http: Http) {

	}

	// retourneer alle cities
	getCities() {
		return this._http.get('app/cities.json')
	}

	// retourneer een city, op basis van ID
	getCity(id: string): Observable<City> {
		return this._http.get('app/cities.json')
			.map(cities =>cities.json())
			.map(cities => cities.filter((city: City) => {
				return city.id === parseInt(id);
			}))
	}
}