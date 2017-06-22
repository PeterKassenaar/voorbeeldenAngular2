import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import {City} from "../model/city.model";
import 'rxjs/add/operator/map';// Import rxjs-operator

@Injectable()
export class CityService {

    constructor(private http: Http) {

    }

    // retourneer alle cities, gemapt naar json
    getCities(): Observable<City[]> {
        return this.http.get('assets/data/cities.json')
            .map(cities => cities.json())
    }
}
