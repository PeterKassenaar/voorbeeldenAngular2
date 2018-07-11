import {Component} from '@angular/core';
import {MovieService} from "./shared/services/movie.service";
import {MovieModel} from "./shared/model/movie.model";

// Component annotation. Let op de injection van providers: []
@Component({
	selector   : 'movie-app',
	templateUrl: 'app.html',
	styles     : [`.moviePoster {max-height:200px}`]
})

// Class met properties, array met cities
export class AppComponent {
	// Properties voor de component/class
	public movies:MovieModel[];

	constructor(private movieService:MovieService) {
		//...eventuele extra initialisaties
	}

	searchMovies(keyword) {
		this.movieService.searchMovies(keyword)
			.subscribe((movieData:MovieModel[]) => {
					this.movies = movieData;				// 1. success handler, nu gemapt op specifiek client-sided Model
				},
				err => console.log(err),						// 2. error handler
				()=> console.log('Getting movies complete...')	// 3. complete handler
			)
	}
}
