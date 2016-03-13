// app.component.ts
import {Component} from 'angular2/core';
import {City} from './city.model'
import {CityService} from "./city.service";
import {RouterLink} from 'angular2/router'


@Component({
	selector   : 'city-app',
	templateUrl: 'app/app.html',
	directives : [RouterLink],
})

// Class met properties, array met cities
export class AppComponent {
	// Properties die met pipes worden getoond in de component
	public cities:City[];
	public filterCity:string = '';

	constructor(private cityService:CityService) {
	}

	ngOnInit() {
		//...eventuele extra initialisaties
		this.getCities();
	}


	//***********************
	// implementation
	//***********************
	getCities() {
		if (!this.cities) {
			this.cityService.getCities()
				.subscribe(cityData => {
						this.cities            = cityData.json();				// 1. success handler
						this.cityService.cache = this.cities;			// caching van cities
					},
					err => console.log(err),						// 2. error handler
					()=> console.log('Getting cities complete...')	// 3. complete handler
				)
		}
	}
}