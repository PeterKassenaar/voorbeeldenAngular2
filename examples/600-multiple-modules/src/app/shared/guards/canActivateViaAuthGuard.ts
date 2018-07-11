// canActivateViaAuthGuard.ts
// Een voorbeeld Guard die authentication service aanroept om user wel/geen toegang te verlenen.
import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Injectable()
export class CanActivateViaAuthGuard implements CanActivate {

	constructor(private authService: AuthService) {
	}

	canActivate() {
		let isLoggedIn = this.authService.isLoggedIn();
		console.log('Is logged in? ', isLoggedIn);
		return isLoggedIn;
	}
}