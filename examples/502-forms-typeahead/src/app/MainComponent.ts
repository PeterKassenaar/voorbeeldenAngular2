import {Component, OnInit} from '@angular/core';

@Component({
	selector: 'my-app',
	template: `
			<router-outlet></router-outlet>
		`
})
export class MainComponent implements OnInit {
	constructor() {
	}

	ngOnInit() {
	}

}
