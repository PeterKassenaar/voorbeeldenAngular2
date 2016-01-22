import {Component} from 'angular2/core';
import {City} from './city.model'
import {CityService} from "./city.service";

// Component annotation. Let op de injection van providers: []
@Component({
	selector   : 'hello-world',
	templateUrl: 'app/app.html'
})

// Class met properties, array met cities
export class AppComponent {
	// Properties voor de component/class
	private  _cities:City[];
	public currentCity:City;

	constructor(private cityService:CityService) {
		//...eventuele extra initialisaties
	}

	get cities() {
		return this._cities || this.getCities();  // caching!
	}

	getCity(city) {
		this.currentCity = this.cityService.getCity(city.id);
	}

	//***********************
	// implementation
	//***********************
	private getCities() {
		this._cities = [];
		this._cities = this.cityService.getCities();
		return this.cities;
	}
}