import {Component} from 'angular2/core';

// component met multi-line HTML-string
// Lijst met steden via *ngFor
@Component({
	selector: 'hello-world',
	template: `<h1>Hello Angular 2</h1>
		<h2>Mijn naam is : {{ name }}</h2>
		<h2>Mijn favoriete steden  zijn :</h2>
		<ul>
			<li *ngFor="#city of cities">{{ city }}</li>
		</ul>
	`
})

// Class met properties, array met cities
export class AppComponent {
	name:string;
	cities:string[];

	constructor() {
		this.name   = 'Peter Kassenaar';
		this.cities = ['Groningen', 'Hengelo', 'Den Haag', 'Enschede']
	}
}