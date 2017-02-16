import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {MovieModel} from "./movie.model";
import {Observable} from "rxjs/Observable";
import  'rxjs/add/operator/map';

@Injectable()
export class MovieService {
	url:string = 'http://www.omdbapi.com/?';

	constructor(private http:Http) {

	}

	// retourneer alle cities
	searchMovies(keyword):Observable<MovieModel[]> {
		return this.http.get(this.url + `s=${keyword}`)
			.map(res => (res.json().Search))
			.map((movies:any) => {
				// mapping naar local Model van Movie.
				// Het enige dat hier wordt omgezet zijn de velden Title, Year en Poster.
				// Ze krijgen nu een kleine letter.
				return movies.map(movie => {
					return new MovieModel(
						movie.Title,
						movie.Year,
						movie.Poster);
				})
			})
	}
}
