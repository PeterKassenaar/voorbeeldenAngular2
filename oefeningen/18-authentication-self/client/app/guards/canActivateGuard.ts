// canActivateGuard.ts
// Een voorbeeld Guard die authentication service aanroept om user wel/geen toegang te verlenen.
import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import {SessionService} from '../services/session.service';

@Injectable()
export class CanActivateGuard implements CanActivate {

	constructor(private sessionService: SessionService) {
	}

	canActivate() {
		let isLoggedIn = this.sessionService.isLoggedIn();
		console.log('Is logged in? ', isLoggedIn);
		return isLoggedIn;
	}
}
