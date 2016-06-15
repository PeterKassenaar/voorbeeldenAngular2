// city.service.ts
import { Injectable} from 'angular2/core';
import {City} from '../model/city.model'
import {Http, Response} from "angular2/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class CityService {
	constructor(private http:Http) {

	}

	// getCities, met expliciete mapping al hier in de service.
	getCities() {
		return this.http.get('app/cities.json')
			.map(res => <City[]> res.json());
	}
}