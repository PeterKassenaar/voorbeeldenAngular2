// app.component.ts
import {Component} from '@angular/core';
import {City} from './model/city.model'
import {CityService} from "./services/city.service";

@Component({
	selector   : 'city-app',
	templateUrl: 'app/app.html'
})

// Class met properties, array met cities
export class AppComponent {
	// Properties die met pipes worden getoond in de component
	public cities: City[];
	public filterCity: string = '';

	constructor(private cityService: CityService) {
	}

	ngOnInit() {
		//...eventuele extra initialisaties
		this.getCities();
	}


	//***********************
	// implementation
	//***********************
	getCities() {
		this.cityService.getCities()
			.subscribe((cityData: any) => {
					this.cities            = cityData;				// 1. success handler
					this.cityService.cache = this.cities;			// caching van cities
				},
				(err: any) => console.log(err),						// 2. error handler
				()=> console.log('Getting cities complete...')	// 3. complete handler
			)
	}
}