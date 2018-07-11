import {Component, OnInit} from '@angular/core';
import {City} from './shared/city.model';
import {CityService} from "./shared/city.service";

@Component({
	selector   : 'hello-world',
	templateUrl: 'app.html',
	styles     : [`.cityPhoto{max-width:200px}`]
})

// Class met properties, array met cities
// push nieuwe city op de array
export class AppComponent implements OnInit {
	// Properties voor de component/class
	currentCity: City;
	cities: City[];
	cityPhoto: string;

	constructor(private cityService: CityService) {

	}

	ngOnInit() {
		this.cities = this.cityService.getCities();
	}

	getCity(city: City) {
		this.currentCity = this.cityService.getCity(city.id);
		this.cityPhoto   = `assets/img/${this.currentCity.name}.jpg`;
		console.log('City opgehaald:', this.currentCity);
	}
}