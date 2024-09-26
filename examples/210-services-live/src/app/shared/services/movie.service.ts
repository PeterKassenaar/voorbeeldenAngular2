import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class MovieService {
	// My private key. Sign up for your own key at www.omdbapi.com
	url: string = 'https://www.omdbapi.com/?apikey=f1f56c8e&';

	// inject HttpClient
	constructor(private http: HttpClient) {

	}

	// Return all movies. Read the documentation on parameters at www.omdbapi.com
	searchMovies(keyword : string) {
		return this.http.get(this.url + `s=${keyword}`);
	}
}
