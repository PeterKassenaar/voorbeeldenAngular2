import {Component} from 'angular2/core';
import {City} from './city.model'
import {CityService} from "./city.service";
import {Http, HTTP_PROVIDERS} from "angular2/http";

// Component annotation. Let op de injection van providers: []
@Component({
	selector   : 'hello-world',
	templateUrl: 'app/app.html',
	providers  : [CityService, HTTP_PROVIDERS]
})

// Class met properties, array met cities
export class AppComponent {
	// Properties voor de component/class
	public  cities:City[];
	public currentCity:City;

	constructor(private _cityService:CityService) {
		//...eventuele extra initialisaties
		this._getCities();
	}

	// TODO: Nog niet compleet. 
	getCity(city) {
		this.currentCity = this._cityService.getCity(city.id);
	}


	//***********************
	// implementation
	//***********************
	_getCities() {
		this.cities = [];
		this._cityService.getCities()
			.subscribe(cityData => this.cities = cityData.json())
	}
}