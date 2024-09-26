import {Injectable} from '@angular/core';
import {MovieModel, IMovie} from '../model/movie.model';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class MovieService {
  // My private key. Please sign up for your own key at www.omdbapi.com
  url: string = 'http://www.omdbapi.com/?apikey=f1f56c8e&';

  constructor(private http: HttpClient) {
  }

  // return all movies
  searchMovies(keyword: string): Observable<MovieModel[]> {
    return this.http.get(this.url + `s=${keyword}`).pipe(
      map((res: any) => res.Search),
      map((movies: any[]) => {
        // mapping to local Model of Movie.
        // the only fields translated are Title, Year en Poster.
        // They're getting a Dutch name.
        return movies.map(movie => {
          return new MovieModel(movie.Title, movie.Year, movie.Poster);
        });
      })
    );
  }
}
