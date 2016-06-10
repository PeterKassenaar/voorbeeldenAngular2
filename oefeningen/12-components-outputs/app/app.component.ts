// app.component.ts
import {Component} from 'angular2/core';
import {HTTP_PROVIDERS} from "angular2/http";
import {City} from './city.model'
import {CityService} from "./city.service";
import {CityDetail} from "./city.detail";
import {Observable} from "rxjs/Observable"; // Nieuwe component invoegen

@Component({
	selector   : 'city-app',
	templateUrl: 'app/app.html',
	providers  : [CityService, HTTP_PROVIDERS],
	directives : [CityDetail]	// Niet vergeten: invoegen bij directives!
})

// Class met properties, array met cities
export class AppComponent {
	// Properties voor de component/class
	public cities: City[];
	public currentCity: City;

	constructor(private cityService: CityService) {
		//...eventuele extra initialisaties
		this.getCities();
	}

	getCity(city) {
		this.currentCity = city;
	}

	clearCity() {
		this.currentCity = null;
	}

	// increase or decrease rating on Event Emitted
	updateRating(rating: number): void {
		this.currentCity.rating += rating;
	}

	updateFavorite(favorite: boolean): void {
		this.currentCity.favorite = favorite;
	}


	updateRating(rating: number): void {
		this.currentCity.rating += rating;
	}

	//***********************
	// implementation
	//***********************
	getCities() {
		if (!this.cities) {
			this.cityService.getCities()
				.subscribe(cityData => {
						this.cities = cityData.json(); // 1. success handler
						// voor nu: even hardcoded de property .favorite instellen.
						this.cities.forEach(city => city.favorite = false)
					},
					err => console.log(err),						// 2. error handler
					()=> console.log('Getting cities complete...')	// 3. complete handler
				)
		}
	}
}