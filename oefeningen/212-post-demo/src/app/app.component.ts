import {Component, ViewChild, ElementRef} from '@angular/core';
import {Http, Headers} from "@angular/http";
import 'rxjs/add/operator/map';

@Component({
	selector   : 'post-app',
	templateUrl: 'app.component.html'
})

// Controller voor je View. Let op het gebruik van @ViewChild
// om referentie naar element in de view op te halen.
// Andere manier is om [(ngModel)] te gebruiken, maar dan moet je ook FormsModule importeren.
export class AppComponent {
	@ViewChild('email') email: ElementRef;
	@ViewChild('password') password: ElementRef;
						response: any;

	constructor(private http: Http) {

	}

	doLogin() {
		// Post data naar reqres.in API.
		// EIGENLIJK moet dit via een service, maar nu rechtstreeks in de controller/class gedefinieerd.
		// Zie voor meer info over deze API http://reqres.in.
		let url = 'https://reqres.in/api/login';

		let email    = this.email.nativeElement.value;		// waarde ophalen uit tekstveld
		let password = this.password.nativeElement.value;	// waarde ophalen uit tekstveld
		let data     = {
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
