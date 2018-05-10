import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { MovieModel, IMovie } from '../model/movie.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MovieService {
  url: string = 'http://www.omdbapi.com/?apikey=f1f56c8e&';

  constructor(private http: HttpClient) {}

  // retourneer alle movies
  searchMovies(keyword): Observable<IMovie[]> {
    return this.http.get(this.url + `s=${keyword}`).pipe(
      map((res: any) => res.Search),
      map((movies: any[]) => {
        // mapping naar local Model van Movie.
        // Het enige dat hier wordt omgezet zijn de velden Title, Year en Poster.
        // Ze krijgen nu een Nederlandse naam.
        return movies.map(movie => {
          return new MovieModel(movie.Title, movie.Year, movie.Poster);
        });
      })
    );
  }
}
