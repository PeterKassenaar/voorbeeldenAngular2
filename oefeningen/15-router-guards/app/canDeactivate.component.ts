// app.component.ts
import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
	selector   : 'can-deactivate',
	template: `
		<h1>Can this rout be deactivated?</h1>
		<input type="text" placeholder="type something useful..." class="input-lg">
		<button class="btn btn-success" (click)="moveAway()">Move away </button>
	`
})

// Class met properties, array met cities
export class CanDeactivateComponent implements OnInit {
	// Properties voor de component/class

	constructor(private route: Router) {
	}

	ngOnInit() {
		//...eventuele extra initialisaties

	}

	moveAway(){
		this.route.navigate(['/home']);
	}
}