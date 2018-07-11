import {Component, OnInit} from '@angular/core';
import {SessionService} from "./services/session.service";

@Component({
	selector: 'my-app',
	template: `
		<h1>City-app with authentication</h1>
		<!-- Static 'main menu'. Always visible-->
		<!-- Add routerLink directive. Angular replaces this with correct <a href="..."> -->
		<button routerLink="/home" class="btn btn-primary">List of cities</button>
		<button routerLink="/add" class="btn btn-primary" [disabled]="!sessionService.isLoggedIn()">Add city (protected)</button>
		<button routerLink="/api" class="btn btn-primary">API example</button>
		<button routerLink="/auth" class="btn btn-primary" *ngIf="!sessionService.isLoggedIn()">Login</button>
		<button routerLink="/auth" class="btn btn-warning" *ngIf="sessionService.isLoggedIn()">Logout</button>
    	<span class="pull-right">
			<login-component></login-component>
		</span>
		<hr>
		<!-- Dynamically inject views here -->
		<router-outlet></router-outlet>
		<!-- Static footer here. Always visible-->
		`
})
export class MainComponent implements OnInit {

	constructor(private sessionService: SessionService) {
	}

	ngOnInit() {
	}
}
