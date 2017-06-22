import {Component} from '@angular/core';
import {Http, Headers} from "@angular/http";
import 'rxjs/add/operator/map';

@Component({
	selector: 'login-component',
	template: `
		<div class="jumbotron">
			<h1>Dummy login form</h1>
			<!--Let op gebruik van Local template variables #email en #password -->
			<input #email type="text"
				   class="input-lg" placeholder="email...">
			<input #password type="text"
				   class="input-lg" placeholder="password...">
			<p>
				<button class="btn btn-primary"
						(click)="doLogin(email, password)">Login
				</button>
			</p>
		</div>
		<div class="row">
			<div class="col-md-6">
				<!-- toon response van http://reqres.in/ -->
				<h2>Result from http://reqres.in:</h2>
				<pre>
{{ response | json }}
				</pre>
			</div>
		</div>

	`
})

// Controller voor je View. Let op het gebruik van @ViewChild
// om referentie naar element in de view op te halen.
// Andere manier is om [(ngModel)] te gebruiken, maar dan moet je ook FormsModule importeren.
export class LoginComponent {
	response: string = '';

	constructor(private http: Http) {

	}

	doLogin(email: string, password: string): void {
		// Post data naar reqres.in API.
		// EIGENLIJK moet dit via een service, maar nu rechtstreeks in de controller/class gedefinieerd.
		// Zie voor meer info over deze API http://reqres.in.
		let url = 'http://reqres.in/api/login';

		let data = {
			"email"   : email,
			"password": password
		};

		let headers = new Headers();
		headers.append('Content-Type', 'application/json');

		this.http.post(url, JSON.stringify(data),
			{headers: headers})
			.map(res => res.json())
			.subscribe(res => this.response = res,
				err => console.log('FOUT:', err),
				() => console.log('Login complete')
			);
	}
}

