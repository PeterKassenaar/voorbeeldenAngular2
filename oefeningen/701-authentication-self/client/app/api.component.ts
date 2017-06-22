import {Component} from '@angular/core';
import {Http, Headers} from "@angular/http";

@Component({
	selector: 'api-component',
	template: `
		<h2>Public and Protected API Routes</h2>
	
		<!-- Example: getting text from a protected resource on the API -->
		<button class="btn btn-success" (click)="getPublicText()">Get public text</button>
		<button class="btn btn-success" (click)="getAuthText()">Get auth text</button>
		<h3>Public text: {{ publicText }}</h3>
		<h3>Authorized text: {{ authText }}</h3>
		`
})

export class ApiComponent {
	publicText:string  = '';
	authText:string    = '';
	errorMsg:string    = '';

	constructor(private  http:Http){

	}

	logError(err:any) {
		console.log('ERROR!', err);
	}

	getPublicText() {
		console.log('Hitting public API endpoint');
		this.http.get('http://localhost:3001/api/public')
			.subscribe(
				(res) => this.publicText = res.text(),
				(err) => {
					this.errorMsg = err.toString();
					this.logError(err)
				},
				() => console.log('getting public text complete')
			);
	}

	getAuthText() {
		console.log('getting authenticated quote');
		let token = localStorage.getItem('token');
		if (token) {
			let authHeader = new Headers();
			authHeader.append('Authorization', 'Bearer ' + token);
			this.http.get('http://localhost:3001/api/protected',
				{headers: authHeader})
				.subscribe(
					res => this.authText = res.text(),
					err => this.logError(err),
					() => console.log('getting authenticated quote complete'));
		}
		else {
			let msg       = 'Sorry, not authenticated yet';
			this.authText = msg;
			console.log(msg);
		}
	}
}