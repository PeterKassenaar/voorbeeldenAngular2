import {Component} from 'angular2/core';
import {Http, Headers, HTTP_PROVIDERS} from "angular2/http";
import {User} from './model/user.model';
// server library : https://github.com/auth0/nodejs-jwt-authentication-sample

@Component({
	selector : 'auth-component',
	templateUrl : 'app/auth.component.html',
	providers: [HTTP_PROVIDERS]
})

export class AuthComponent {
	randomQuote:string = '';
	authQuote:string   = '';
	errorMsg:string    = '';
	btnLoginMsg:string = 'Log in';
	isLoggedIn:boolean = false;
	user:User          = new User();

	constructor(private http:Http) {

	}

	getRandomQuote() {
		console.log('getting random quote');
		this.http.get('http://localhost:3001/api/random-quote')
			.subscribe(
				(res) => this.randomQuote = res.text(),
				(err) => {
					this.errorMsg = err.toString();
					this.logError(err)
				},
				() => console.log('getting quote complete')
			);
	}

	getAuthQuote() {
		console.log('getting authenticated quote');
		let token = localStorage.getItem('token');
		if (token) {
			let authHeader = new Headers();
			authHeader.append('Authorization', 'Bearer ' + token);
			this.http.get('http://localhost:3001/api/protected/random-quote',
				{headers: authHeader})
				.subscribe(
					res => this.authQuote = res.text(),
					err => this.logError(err),
					() => console.log('getting authenticated quote complete'));
		}
		else {
			let msg        = 'Sorry, not authenticated yet';
			this.authQuote = msg;
			console.log(msg);
		}
	}

	logError(err) {
		console.log('ERROR!', err);
	}

	onSubmit() {
		if (!this.isLoggedIn) {
			// logging in
			let creds = `username=${this.user.username}&password=${this.user.password}`;
			let header = new Headers();
			header.append('Content-Type', 'application/x-www-form-urlencoded');
			this.http.post('http://localhost:3001/sessions/create', creds,
				{headers: header})
				.subscribe((data) => {
						if (data) {
							this.saveJwt(data.json().id_token);
							this.btnLoginMsg = 'Log out';
							this.isLoggedIn  = true;
							this.user = new User();
						}
					},
					(error)=>this.logError(error),
					()=>console.log('authentication complete'))
		} else {
			// user already logged in. Logging out
			localStorage.removeItem('token');
			this.btnLoginMsg = 'Log In';
			this.isLoggedIn  = false;
			this.randomQuote = '';
		}
	}

	saveJwt(token) {
		if (token) {
			// assume modern browser
			localStorage.setItem('token', token);
		}
	}
}