import { Component } from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {AppComponent} from "./app.component"; // To remove warning 'AppComponent' not found in precompile array.' in the console

@Component({
	selector  : 'home-component',
	directives: [ROUTER_DIRECTIVES],
	template  : `
	<h1>Pick your favorite city</h1>
	<!-- add [routerLink] directive. Angular replaces this with correct <a href="..."> -->
	<a [routerLink]="['/home']" class="btn btn-primary">List of cities</a>
	<a [routerLink]="['/add']" class="btn btn-primary">Add City</a>
	<hr>
	<!-- Dynamically inject views here -->
	<router-outlet></router-outlet>
	`,
	precompile: [AppComponent]	// to remove warning 'AppComponent' not found in precompile array.' in the console
})

export class HomeComponent {

}