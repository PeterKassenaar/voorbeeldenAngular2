import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import 'rxjs/add/operator/map';
import {City} from "./city.model"; // Import rxjs-operator

@Injectable()
export class CityService {

	constructor(private http: Http) {

	}

	// retourneer alle cities, gemapt naar json
	getCities(): Observable<City[]> {
		return this.http.get('app/cities.json')
			.map(cities => cities.json());	// transform stream in de service
	}
}
