// app.component.ts
import {Component} from '@angular/core';
import {City} from "./model/city.model";
import {CityService} from './services/city.service';

@Component({
	moduleId   : module.id,
	selector   : 'city-app',
	templateUrl: 'app.component.html'
})

export class AppComponent {
	title: string  = 'Steden met ordercomponent';
	cities: City[] = [];
	currentCity: City;

	constructor(private cityService: CityService) {
	}

	ngOnInit() {
		this.cityService.getCities()
			.subscribe(
				cityData => this.cities = cityData.json(),
				err => console.log(err),
				() => console.log('Steden ophalen compleet.')
			)
	}

	showCity(city: City) {
		this.currentCity = city;
	}

	clearCity() {
		this.currentCity = null;
	}

	updateCityRating(rating:number):void {
		this.currentCity.rating += rating;
	}
}