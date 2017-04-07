import {Component} from '@angular/core';
import {MovieService} from "./shared/services/movie.service";
import  'rxjs/Rx';

// Component annotation. Let op de injection van providers: []
@Component({
	selector   : 'movie-app',
	templateUrl: 'app.html',
})

// Class met properties, array met cities
export class AppComponent {
	// Properties voor de component/class
	public movies: any;

	constructor(private movieService: MovieService) {
		//...eventuele extra initialisaties
	}

	searchMovies(keyword) {
		this.movieService.searchMovies(keyword)
			.map(res => res.json())
			.map((movies:any) => movies.Search)
			.subscribe(movieData => {
					this.movies = movieData;				// 1. success handler
				},
				err => console.log(err),						// 2. error handler
				()=> console.log('Getting movies complete...')	// 3. complete handler
			)
	}
}