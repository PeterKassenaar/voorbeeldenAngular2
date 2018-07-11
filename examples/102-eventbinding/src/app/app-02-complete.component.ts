import {Component} from '@angular/core';
import {City} from './shared/city.model';

@Component({
	selector   : 'hello-world',
	templateUrl: 'app-02.component.html'
})

// push new city to the array
export class AppComponent2 {
	// Properties
	name   = 'Peter Kassenaar';
	cities = [
		new City(1, 'Groningen', 'Groningen'),
		new City(2, 'Hengelo', 'Overijssel'),
		new City(3, 'Den Haag', 'Zuid-Holland'),
		new City(4, 'Enschede', 'Overijssel'),
	];

	addCity(txtCity) {
		// Calculate dummy new ID.
		let newID   = this.cities.length + 1;
		
		// Create new City-object and add it to the array.
		let newCity = new City(newID, txtCity.value, 'Unknown');
		this.cities.push(newCity);
		txtCity.value = '';
	}
}
