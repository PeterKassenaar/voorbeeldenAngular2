import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {City} from "../model/city.model";
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";

@Injectable()
export class CityService {

    constructor(private http: Http) {

    }

    // retourneer alle cities
    getCities() {
        return this.http.get('assets/data/cities.json')
    }

    // retourneer een city, op basis van ID
    getCity(id: string): Observable<City> {
        return this.http.get('app/cities.json')
            .map(cities => cities.json())
            .map(cities => cities.filter((city: City) => {
                return city.id === parseInt(id);
            }))
    }
}