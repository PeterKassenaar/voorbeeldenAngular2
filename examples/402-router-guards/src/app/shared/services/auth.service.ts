// auth.service.ts
// voorbeeld 'authentication service'. Voor nu : altijd true retourneren
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

    constructor() { }

    isLoggedIn(){
        // return false;
    	return true; // do real authentication here!
	}

}
