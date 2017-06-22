import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {City} from './shared/model/city.model'
import {CityService} from "./shared/services/city.service";

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
	cities: Observable<City[]>;
	cityPhoto: string;

	constructor(private cityService: CityService) {

	}

	ngOnInit() {

	}

	loadCities(){
		this.cities = this.cityService.getCities();
	}

	getCity(city: City) {
		this.currentCity = city;
		this.cityPhoto   = `assets/img/${this.currentCity.name}.jpg`;
	}

	clear() {
		this.cities = null;
	}
	clearCache() {
		this.cityService.clearCache();
	}


}