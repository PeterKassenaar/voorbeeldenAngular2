import {Component} from 'angular2/core';
import {City} from './city.model'

// component met multi-line HTML-string
// Lijst met steden via *ngFor
@Component({
	selector: 'hello-world',
	template: `<h1>Hello Angular 2</h1>
		<h2>Mijn naam is : {{ name }}</h2>
		<h2>Mijn favoriete steden  zijn :</h2>
		<ul>
			<li *ngFor="#city of cities">{{ city.id}} - {{ city.name }}</li>
		</ul>
	`
})

// Class met properties, array met cities
export class AppComponent {
		name   = 'Peter Kassenaar';
		cities =[
			new City(1, 'Groningen', 'Groningen'),
			new City(2, 'Hengelo', 'Overijssel'),
			new City(3, 'Den Haag', 'Zuid-Holland'),
			new City(4, 'Enschede', 'Overijssel'),
		]
}