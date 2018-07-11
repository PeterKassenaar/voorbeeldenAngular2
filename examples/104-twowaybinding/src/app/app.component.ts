import {Component} from '@angular/core';
import {City} from './shared/city.model'

// Component annotation
@Component({
	selector   : 'hello-world',
	templateUrl: 'app.component.html',
})

// Class
export class AppComponent {
	newCityExtended:string = '';

	// Properties
	cities:City[]  = [
		new City(1, 'Groningen', 'Groningen'),
		new City(2, 'Hengelo', 'Overijssel'),
		new City(3, 'Den Haag', 'Zuid-Holland'),
		new City(4, 'Enschede', 'Overijssel'),
	];

	updateCity(city:City){
		// console.log(mijnEvent);
		// console.log(mijnEvent.target.value);
		this.newCityExtended = city.name;
	}
}