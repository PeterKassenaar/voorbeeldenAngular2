import {Component, OnInit} from 'angular2/core';
import {City} from './city.model'

@Component({
	selector   : 'hello-world',
	templateUrl: 'app/app.html',
	styles     : [`.cityPhoto{max-width:200px}`]
})

// Class met properties, array met cities
// push nieuwe city op de array
export class AppComponent implements OnInit {
	// Properties voor de component/class
	currentCity: string;
	cityPhoto: string;
	cities: City[];

	ngOnInit() {
		this.cities      = [
			new City(1, 'Groningen', 'Groningen'),
			new City(2, 'Hengelo', 'Overijssel'),
			new City(3, 'Den Haag', 'Zuid-Holland'),
			new City(4, 'Enschede', 'Overijssel'),
		];
		this.currentCity = this.cities[0].name;
	}

	changeCity() {
		console.log(this.currentCity);
		this.cityPhoto = `img/${this.currentCity}.jpg`;
	}
}