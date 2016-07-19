// app.component.ts
import {Component, OnInit} from '@angular/core';
import {HTTP_PROVIDERS} from "@angular/http";
import {RouterLink} from "@angular/router";
import {City} from './city.model'
import {CityService} from "./city.service";
import {ROUTER_DIRECTIVES} from "@angular/router";
import {CityDetail} from "./city.detail";

@Component({
	selector   : 'city-app',
	templateUrl: 'app/app.html',
	providers  : [CityService, HTTP_PROVIDERS],
	directives : [ROUTER_DIRECTIVES, CityDetail]
})

// Class met properties, array met cities
export class AppComponent implements OnInit {
	// Properties voor de component/class
	public cities:City[];
	public currentCity:City;

	constructor(private cityService:CityService) {

	}

	ngOnInit() {
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
	updateRating(rating) {
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