// app.component.ts
import {Component} from 'angular2/core';
import {HTTP_PROVIDERS} from "angular2/http";
import {City} from './city.model'
import {CityService} from "./city.service";
import {RouterLink} from "angular2/router";

@Component({
	selector   : 'city-app',
	templateUrl: 'app/app.html',
	providers  : [CityService, HTTP_PROVIDERS],
	directives:[RouterLink]
})

// Class met properties, array met cities
export class AppComponent {
	// Properties voor de component/class
	public cities:City[];
	public currentCity:City;

	constructor(private cityService:CityService) {
		//...eventuele extra initialisaties
		this.getCities();
	}

	// Not used in this example
	getCity(city) {
		this.currentCity = city;
	}

	// Not used in this example
	clearCity() {
		this.currentCity = null;
	}

	// Not used in this example
	updateRating(rating){
		this.currentCity.rating += rating;
	}

	//***********************
	// implementation
	//***********************
	getCities() {
		if (!this.cities) {
			this.cityService.getCities()
				.subscribe(cityData => {
						this.cities = cityData.json();				// 1. success handler
					},
					err => console.log(err),						// 2. error handler
					()=> console.log('Getting cities complete...')	// 3. complete handler
				)
		}
	}
}