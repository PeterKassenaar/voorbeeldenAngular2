import {Component} from '@angular/core';
import {MovieService} from "./shared/services/movie.service";
import {map} from "rxjs/operators";

// Component annotation.
@Component({
  selector: 'movie-app',
  templateUrl: 'app.component.html',
})

// Class
export class AppComponent {
  // Properties
  public movies: any; // TODO: Should be typed as MovieModel, or the like.

  constructor(private movieService: MovieService) {

  }

  searchMovies(keyword : string) {
    // Workshop: refactor this call, so the architecture/structure is better.
    this.movieService.searchMovies(keyword)
      .pipe(
        map((movies: any) => movies.Search)
      )
      .subscribe(movieData => {
          this.movies = movieData;				// 1. success handler
        },
        err => console.log(err),						// 2. error handler
        () => console.log('Getting movies complete...')	// 3. complete handler
      )
  }
}
