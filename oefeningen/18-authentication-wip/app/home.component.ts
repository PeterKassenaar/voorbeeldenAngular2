import { Component } from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig} from "angular2/router";
import {AppComponent} from "./app.component";
import {CityAddComponent} from "./city.add.component";
import {AuthComponent} from "./auth.component";
import {LoginComponent} from "./login.component";
import {ApiComponent} from "./api.component";

@Component({
	selector  : 'home-component',
	directives: [ROUTER_DIRECTIVES, LoginComponent],
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

// home.component.ts
@RouteConfig([
	{path: '/', name: 'root', redirectTo: ['Home']},
	{path: '/home', name: 'Home', component: AppComponent},
	{path: '/add', name: 'Add', component: CityAddComponent},
	{path: '/auth', name: 'Auth', component: AuthComponent},
	{path: '/api', name: 'Api', component: ApiComponent},
])
export class HomeComponent {

}