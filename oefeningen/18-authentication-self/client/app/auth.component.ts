import {Component} from '@angular/core';
import {Http, Headers} from "@angular/http";
import {User} from './model/user.model';
import {Constants} from './constants';
import {LoginService} from "./services/login.service";
import {SessionService} from "./services/session.service";
// server library : https://github.com/auth0/nodejs-jwt-authentication-sample

@Component({
	selector   : 'auth-component',
	templateUrl: 'app/auth.component.html'
})

export class AuthComponent {
	btnLoginMsg:string = 'Log in';
	isLoggedIn:boolean = false;
	user:User          = new User();

	constructor(private http:Http,
				private loginService:LoginService,
				private sessionService:SessionService) {
	}

	logError(err:any) {
		console.log('ERROR!', err);
	}

	ngOnInit() {
		if (this.sessionService.user) {
			this.isLoggedIn  = true;
			this.btnLoginMsg = 'Log out';
		}
	}

	onSubmit() {
		if (!this.isLoggedIn) {
			// logging in
			let creds  = `username=${this.user.username}&password=${this.user.password}`;
			let header = new Headers();
			header.append('Content-Type', 'application/x-www-form-urlencoded');
			this.http.post('http://localhost:3001/sessions/create', creds,
				{headers: header})
				.subscribe((data) => {
						if (data) {
							let token = data.json().id_token;
							this.saveJwt(token);
							this.btnLoginMsg = 'Log out';
							this.isLoggedIn  = true;
							this.sessionService.create(this.user.username, token);
							this.loginService.Stream.next(Constants.AUTH_LOGIN_SUCCESS);// throw event
							this.user = new User(); // reset
						}
					},
					(error)=>{
						this.logError(error);
						this.loginService.Stream.next(Constants.AUTH_LOGIN_FAILED);// throw event
					},
					()=>console.log('authentication complete'))
		} else {
			// user already logged in. Logging out
			this.hardReset();
		}
	}

	saveJwt(token:string) {
		if (token) {
			// assume modern browser
			localStorage.setItem('token', token);
		}
	}

	// Hard het token verwijderen uit localStorage en de rest resetten.
	hardReset(){
		localStorage.removeItem('token');
		this.btnLoginMsg = 'Log In';
		this.isLoggedIn  = false;
		this.sessionService.destroy();
		this.loginService.Stream.next(Constants.AUTH_LOGOUT_SUCCESS);// throw event
	}
}