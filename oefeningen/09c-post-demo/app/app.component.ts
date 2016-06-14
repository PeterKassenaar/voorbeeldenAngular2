import {Component} from 'angular2/core';
import {Http, HTTP_PROVIDERS, Headers} from "angular2/http";
import 'rxjs/Rx';

// TypeScript Decorator
@Component({
	selector   : 'post-app',
	templateUrl: 'app/app.component.html',
	providers  : [HTTP_PROVIDERS]
})

// Controller voor je View.
export class AppComponent {
	email:string;
	password:string;
	response:any;

	constructor(private http:Http) {

	}

	doLogin() {
		// post data naar reqres.in API
		let url  = 'http://reqres.in/api/login';
		let data = {
			"email"   : this.email,
			"password": this.password
		};

		let headers = new Headers();
		headers.append('Content-Type', 'application/json');

		this.http.post(url, JSON.stringify(data),
			{ headers : headers})
			.map(res => res.json())
			.subscribe(res => this.response = res,
				err => console.log('FOUT:', err),
				() => console.log('Login complete')
			);
		this.email = this.password = '';
	}
}
