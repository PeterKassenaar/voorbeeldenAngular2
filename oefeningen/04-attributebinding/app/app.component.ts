import {Component} from 'angular2/core';
import {City} from './city.model'

// component met multi-line HTML-string
// Lijst met steden via *ngFor
// Conditionele koptekst wordt getoond met *ngIf
@Component({
	selector   : 'hello-world',
	templateUrl: 'app/app.html'
})

// Class met properties, array met cities
// push nieuwe city op de array
export class AppComponent {
	// Properties voor de component/class
	name   = 'Peter Kassenaar';
	cities = [
		new City(1, 'Groningen', 'Groningen'),
		new City(2, 'Hengelo', 'Overijssel'),
		new City(3, 'Den Haag', 'Zuid-Holland'),
		new City(4, 'Enschede', 'Overijssel'),
	];
	textVisible=true;


	// City toevoegen aan de array
	addCity(txtCity) {
		let newID   = this.cities.length + 1;
		let newCity = new City(newID, txtCity.value, 'Onbekend');
		this.cities.push(newCity);
		txtCity.value = '';
	}

	// attribuut toggelen: tekst zichtbaar/onzichtbaar maken.
	toggleText(){
		this.textVisible = !this.textVisible;
	}
}