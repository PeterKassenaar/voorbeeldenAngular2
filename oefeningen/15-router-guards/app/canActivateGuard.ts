/**
 * Created by Peter Kassenaar on 20-7-2016.
 */
import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';

@Injectable()
export  class CanActivateGuard implements CanActivate{
	constructor(){
		// typically the AuthService should be injected here and instantiated
	}

	canActivate(){
		// typically we authenticate a user here against the AuthService.
		// For now, return true.
		return true;
	}
}