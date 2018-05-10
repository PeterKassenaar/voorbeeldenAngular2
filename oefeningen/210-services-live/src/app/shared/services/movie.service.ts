import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class MovieService {
	url: string = 'http://www.omdbapi.com/?apikey=f1f56c8e&';

	constructor(private http: HttpClient) {

	}

	// retourneer alle movies
	searchMovies(keyword) {
		return this.http.get(this.url + `s=${keyword}`);
	}
}
