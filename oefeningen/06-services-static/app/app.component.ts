import {Component} from 'angular2/core';
import {City} from './city.model'
import {CityService} from "./city.service";

// Component annotation. Let op de injection van providers: []
@Component({
	selector   : 'hello-world',
	templateUrl: 'app/app.html',
	providers  : [CityService]
})

// Class met properties, array met cities
export class AppComponent {
	// Properties voor de component/class
	private  _cities:City[];
	public currentCity:City;

	constructor(private _cityService:CityService) {
		//...eventuele extra initialisaties
	}

	get cities() {
		return this._cities || this._getCities();  // caching!
	}

	getCity(city) {
		this.currentCity = this._cityService.getCity(city.id);
	}

	//***********************
	// implementation
	//***********************
	_getCities() {
		this._cities = [];
		this._cities = this._cityService.getCities();
		return this.cities;
	}
}