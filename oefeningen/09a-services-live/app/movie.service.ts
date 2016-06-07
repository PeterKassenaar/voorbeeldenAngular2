import { Injectable} from 'angular2/core';
import {Http} from 'angular2/http';

@Injectable()
export class MovieService {
	url:string = 'http://www.omdbapi.com/?';

	constructor(private http:Http) {

	}

	// retourneer alle cities
	searchMovies(keyword) {
		return this.http.get(this.url + `s=${keyword}`);
	}
}