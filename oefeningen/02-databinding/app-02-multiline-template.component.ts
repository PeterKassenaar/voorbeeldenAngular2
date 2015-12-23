import {Component} from 'angular2/core';

// component met multi-line HTML-string
@Component({
	selector: 'hello-world',
		template: `<h1>Hello Angular 2</h1>
		<h2>Mijn naam is : {{ name }}</h2>
		<h2>Mijn favoriete stad is : {{ city }}</h2>
	`
})

// Class met twee properties, gebonden via een constructor
export class AppComponent {
	name: string;
	city: string;

	constructor() {
		this.name = 'Peter Kassenaar';
		this.city = 'Groningen'
	}
}