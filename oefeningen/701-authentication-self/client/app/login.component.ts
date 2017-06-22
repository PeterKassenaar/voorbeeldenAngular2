import {Component} from '@angular/core';
import {LoginService} from "./services/login.service";
import {Constants} from'./constants';
import {SessionService} from "./services/session.service";

@Component({
	selector: 'login-component',
	template: `
		<span class="well">{{lblLogin}}</span>
	`
})

export class LoginComponent {
	lblLogin: string;

	constructor(private loginService: LoginService, private sessionService: SessionService) {

	}

	ngOnInit() {
		this.lblLogin = 'Welkom gast - niet ingelogd';
		this.loginService.Stream.subscribe(
			(event: string) => this.processEvent(event),
			(err) => console.log(err),
			()=>console.log('Login complete')
		)
	}

	processEvent(event: any) {
		console.log('login/out event binnengekregen: ', event);
		if (event === Constants.AUTH_LOGIN_SUCCESS) {
			console.log(this.sessionService.user);
			this.lblLogin = `Welkom ${this.sessionService.user.username} -  Succesvol ingelogd`;
		} else if (event === Constants.AUTH_LOGOUT_SUCCESS) {
			this.lblLogin = 'Welkom gast - niet ingelogd'
		} else if (event === Constants.AUTH_LOGIN_FAILED) {
			this.lblLogin = 'ERROR - foutieve username/wachtwoord';
		} else {
			this.lblLogin = 'ERROR - onbekende fout';
		}
	}
}