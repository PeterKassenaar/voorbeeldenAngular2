// app.component.ts
import {Component, OnInit} from '@angular/core';
import {City} from './shared/city.model'
import {CityService} from "./shared/city.service";

@Component({
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

	ngOnInit() {
		this.getCities();
	}

	getCity(city) {
		this.currentCity = city;
	}

	clearCity() {
		this.currentCity = null;
	}

	//***********************
	// implementation
	//***********************
	getCities() {
		if (!this.cities) {
			this.cityService.getCities()
				.subscribe(cityData => {
						this.cities = cityData;				// 1. success handler
					},
					err => console.log(err),						// 2. error handler
					()=> console.log('Getting cities complete...')	// 3. complete handler
				)
		}
	}
}