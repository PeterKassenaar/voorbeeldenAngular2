import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
	selector  : 'home-component',
	directives: [ROUTER_DIRECTIVES],
	template  : `
	<h1>Pick your favorite city</h1>
	<a [routerLink]="['home']" class="btn btn-primary">List of cities</a>
	<hr>
	<!-- Dynamically inject views here -->
	<router-outlet></router-outlet>
	`
})

export class HomeComponent {

}