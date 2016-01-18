import {Component} from 'angular2/core';
import {HTTP_PROVIDERS} from "angular2/http";
import {City} from './city.model'
import {CityService} from "./city.service";
import  'rxjs/Rx';

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

	constructor(private _cityService:CityService) {
		//...eventuele extra initialisaties
		this._getCities();
	}


	//***********************
	// implementation
	//***********************
	_getCities() {
		if (!this.cities) {
			this._cityService.getCities()
				.map(res => res.json())
				.delay(3000)
				.subscribe(cityData => {
						this.cities = cityData;				// 1. success handler
					},
					err => console.log(err),						// 2. error handler
					()=> console.log('Getting cities complete...')	// 3. complete handler
				)
		}
	}
}