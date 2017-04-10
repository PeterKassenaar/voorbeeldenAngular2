import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { Router } from '@angular/router';

declare var Auth0Lock: any;

@Injectable()
export class AuthService {
    // Get the AUTH0_CLIENT_ID and AUTH0_DOMAIN from your management dashboard.
    // https://manage.auth0.com/#/
    // lock = new Auth0Lock('AUTH0_CLIENT_ID', 'AUTH0_DOMAIN');
    lock = new Auth0Lock('nAwJ6aa1J1TDCxFiFlaDtw6eHsKqIKgl', 'peterkassenaar.eu.auth0.com');

    constructor(private router: Router) {
        this.lock.on('authenticated', (authResult: any) => {
            localStorage.setItem('id_token', authResult.idToken);

            this.lock.getProfile(authResult.idToken, (error: any, profile: any) => {
                if (error) {
                    console.log(error);
                }

                localStorage.setItem('profile', JSON.stringify(profile));
            });

            this.lock.hide();
        });
    }

    login() {
        this.lock.show();
    }

    logout() {
        // To log out, just remove the token and profile
        // from local storage
        localStorage.removeItem('profile');
        localStorage.removeItem('id_token');

        // Send the user back to the home page after logout
        this.router.navigateByUrl('/');
    }

    loggedIn() {
        return tokenNotExpired();
    }
}
