import {Component} from 'angular2/core';
import {City} from './city.model'

// component met multi-line HTML-string
// Nieuw: scoped classes
@Component({
	selector   : 'hello-world',
	templateUrl: 'app/app-02.html',
	styles     : [`
		.cityPhoto {
			max-width : 300px;
			border : 1px solid #333;
			padding : 10px;
			border-radius : 10px;
		}
	`]
})

// Class met properties, array met cities
export class AppComponent2 {
	// Properties voor de component/class
	name:string         = 'Peter Kassenaar';
	cities:City[]       = [
		new City(1, 'Groningen', 'Groningen'),
		new City(2, 'Hengelo', 'Overijssel'),
		new City(3, 'Den Haag', 'Zuid-Holland'),
		new City(4, 'Enschede', 'Overijssel'),
	];
	textVisible:boolean = true;
	currentCity:City    = null;
	cityPhoto:string    = '';

	// Geselecteerde city updaten in de ui. Nieuw : ES6 String interpolation
	updateCity(city:City) {
		this.currentCity = city;
		this.cityPhoto   = `img/${this.currentCity.name}.jpg`;
	}
}