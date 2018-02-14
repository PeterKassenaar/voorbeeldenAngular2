import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, Response} from "@angular/http";
import {Observable} from "rxjs";
import {City} from '../model/city.model';

// Import from rxjs
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/catch';

const API_URL = 'http://localhost:3000/cities';
// Set RequestOptions. In this case only the header.
const API_ARGS: RequestOptions = new RequestOptions();
const headers = new Headers();
headers.append('Content-Type', 'application/json');
API_ARGS.headers = headers;

@Injectable()
export class CityService {


    constructor(private http: Http) {
    }

    // GET: return all cities
    getCities(): Observable<City[]> {
        return this.http.get(API_URL)
            .map(result => result.json())
            .catch(err => {
                console.log('Error! Did you forget to start json-server? Run `npm run json-server` to start the server', err);
                return Observable.of([])
            })
    }

    // GET: Return 1 City, based on Id
    getCity(id: number): Observable<City> {
        return this.http.get(API_URL + `/${id}`)
            .map(result => result.json())
    }

    // POST: Add a new City
    addCity(cityName: string): Observable<City> {

        let newCity = new City(null, cityName);


        // Add city via POST request
        return this.http.post(
            API_URL,
            JSON.stringify(newCity),
            API_ARGS
        )
            .map(result => result.json())
    }

    // DELETE: Delete city from the .json-file (warning: no trash. City is actually removed)
    deleteCity(city): Observable<Response> {
        return this.http.delete(API_URL + `/${city.id}`)
            .map(response => response.json())
    }

    // PUT : update a current city
    updateCity(city: City): Observable<City> {

        return this.http.put(
            API_URL + `/${city.id}`,
            JSON.stringify(city),
            API_ARGS
        )
            .map(response => response.json())
    }

}