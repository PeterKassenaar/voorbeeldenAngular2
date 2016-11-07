import { Component } from '@angular/core';
import {AppComponent} from "./app.component";
import {CityAddComponent} from "./city.add.component";
import {AuthComponent} from "./auth.component";
import {LoginComponent} from "./login.component";
import {ApiComponent} from "./api.component";

@Component({
	selector  : 'home-component',
	template  : `
	<h1>My City picker</h1>
	<a [routerLink]="['/Home']" class="btn btn-primary">List of cities</a>
	<a [routerLink]="['/Add']" class="btn btn-primary">Add city (protected)</a>
	<a [routerLink]="['/Api']" class="btn btn-primary">API example</a>
	<a [routerLink]="['/Auth']" class="btn btn-primary">Login</a>
	<span class="pull-right">
		<login-component></login-component>
	</span>
	<hr>
	<!-- Dynamically inject views here -->
	<router-outlet></router-outlet>
	`
})
export class HomeComponent {

}