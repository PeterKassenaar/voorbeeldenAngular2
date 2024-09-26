import {Component} from '@angular/core';
import {MovieService} from "./shared/services/movie.service";
import {MovieModel} from "./shared/model/movie.model";

// Component annotation.
@Component({
  selector: 'movie-app',
  templateUrl: 'app.component.html',
  styles: [`.moviePoster {
    max-height: 200px
  }`]
})

// Class
export class AppComponent {
  // Properties , now a Custom model
  public movies?: MovieModel[];

  constructor(private movieService: MovieService) {

  }

  searchMovies(keyword: string) {
    this.movieService.searchMovies(keyword)
      .subscribe((movieData: MovieModel[]) => {
          this.movies = movieData;				// 1. success handler, mapped on client-sided Model
        },
        err => console.log(err),						// 2. error handler
        () => console.log('Getting movies complete...')	// 3. complete handler
      )
  }
}
