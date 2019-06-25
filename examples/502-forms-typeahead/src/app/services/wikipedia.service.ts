// Credits: http://blog.thoughtram.io/angular/2016/01/06/taking-advantage-of-observables-in-angular2.html
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {distinctUntilChanged} from 'rxjs/operators';

// NOT WORKING YET? HAVE TO WORK ON THE SEARCH PARAMETERS. SEE
// http://orizens.com/wp/topics/upgrading-to-angular-5-using-httpclient-jsonp-with-parameters/ FOR INFO
// FIXED (as of 26-06-2019)

@Injectable()
export class WikipediaService {
  constructor(private http: HttpClient) {
  }

  search(keyword: string) {
    const search = new URLSearchParams();
    search.set('action', 'opensearch');
    search.set('search', keyword);
    search.set('format', 'json');
    const searchParams = 'action=opensearch&format=json&search=' + keyword;
    return this.http.jsonp('http://en.wikipedia.org/w/api.php?' + searchParams,
      'callback')
      .pipe(
        distinctUntilChanged()
      );
  }
}
