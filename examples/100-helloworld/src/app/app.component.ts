import {Component, OnInit} from '@angular/core';

@Component({
	// 1. add component description/annotations here
	selector: 'hello-world',
	template: `
		<h1>Hello World!</h1>
		<h2>This is Angular</h2>
		<a href="http://angular.io" target="_blank">Angular Website</a>
	`
})

export class AppComponent implements OnInit {
	// optional: add constructor, class logic, etc. here
	constructor() {
	}

	ngOnInit() {
		console.log('Hello World - Angular is running');
	}
}
