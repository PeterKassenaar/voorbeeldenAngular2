import {Component} from 'angular2/core';
import {Http, Headers, HTTP_PROVIDERS} from "angular2/http";
// server library : https://github.com/auth0/nodejs-jwt-authentication-sample

@Component({
	selector : 'auth-component',
	template : `
	<h2>Authentication Component</h2>
	<button class="btn btn-success" (click)="getRandomQuote()">Get random quote</button>
	<button class="btn btn-success" (click)="getAuthQuote()">Get auth quote</button>
	<div>Random quote: {{ randomQuote }}</div>
	<div>Random auth quote: {{ authQuote }}</div>
	<hr>

	<!-- TODO : activate Form -->
	<!--<h2>Login - TODO : activate form</h2>
	<form (submit)="onSubmit()" #loginForm="ngForm">
 	<div class="form-group">
        <label for="userName">Username</label>
        <input type="text" id="userName" class="form-control"
               [(ngModel)]="user.name"
               ngControl="userName"
               #name="ngForm"
               required>
	</div>
	<div class="form-group">
        <label for="password">Password</label>
        <input type="text" id="password" class="form-control"
               [(ngModel)]="user.password"
               ngControl="password"
               #password="ngForm"
               required>
	</div>
	<button type="submit" class="btn btn-default">Submit</button>
	</form>
	-->
	<button class="btn btn-success" (click)="auth()">{{btnLoginMsg}}</button>
	
	`,
	providers: [HTTP_PROVIDERS]
})

export class AuthComponent {
	randomQuote:string = '';
	authQuote:string   = '';
	user:Object        = {};
	errorMsg:string    = '';
	btnLoginMsg:string = 'Log in';
	isLoggedIn:boolean = false;
	user:Object        = {
		username: '',
		password: ''
	};

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
		// TODO
		console.log('form submitted, getting credentials');
	}

	auth() {
		if (!this.isLoggedIn) {
			// logging in
			let username = this.user;
			let creds    = 'username=gonto&password=gonto';
			let header   = new Headers();
			header.append('Content-Type', 'application/x-www-form-urlencoded');
			this.http.post('http://localhost:3001/sessions/create', creds,
				{headers: header})
				.subscribe((data) => {
						if (data) {
							this.saveJwt(data.json().id_token);
							this.btnLoginMsg = 'Log out';
							this.isLoggedIn  = true;
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