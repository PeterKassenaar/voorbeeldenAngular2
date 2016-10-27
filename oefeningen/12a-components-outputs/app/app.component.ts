// app.component.ts
import {Component, OnInit} from '@angular/core';
import {City} from './city.model'
import {CityService} from "./city.service";

@Component({
	moduleId   : module.id,
	selector   : 'city-app',
	templateUrl: 'app.html',
})

// Class met properties, array met cities
export class AppComponent implements  OnInit{
	// Properties voor de component/class
	public cities: City[];
	public currentCity: City;

	constructor(private cityService: CityService) {
		//...eventuele extra initialisaties
	}

	ngOnInit(){
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
}
