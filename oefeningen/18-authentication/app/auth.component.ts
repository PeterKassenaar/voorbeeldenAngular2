import { Component } from 'angular2/core';
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
	<button class="btn btn-success" (click)="auth()">Authorize</button>

	<!-- TODO : activate Form
	<h2>Login</h2>
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
	`,
	providers: [HTTP_PROVIDERS]
})

export class AuthComponent {
	randomQuote:string = '';
	authQuote:string   = '';
	user:Object        = {};

	constructor(private http:Http) {

	}

	getRandomQuote() {
		console.log('getting random quote');
		this.http.get('http://localhost:3001/api/random-quote')
			.subscribe(
				res => this.randomQuote = res.text(),
				err => this.logError(err),
				() => console.log('getting quote complete'));
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
			console.log('Sorry, not authenticated yet');
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
		let creds  = 'username=gonto&password=gonto';
		let header = new Headers();
		header.append('Content-Type', 'application/x-www-form-urlencoded');
		this.http.post('http://localhost:3001/sessions/create', creds,
			{headers: header})
			.subscribe((data) => {
					this.saveJwt(data.json().id_token)
				},
				(error)=>this.logError(error),
				()=>console.log('authentication complete'))
	}

	saveJwt(token) {
		if (token) {
			// assume modern browser
			localStorage.setItem('token', token)
		}
	}
}