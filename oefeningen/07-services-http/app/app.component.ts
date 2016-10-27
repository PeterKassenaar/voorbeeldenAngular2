import {Component, OnInit} from '@angular/core';
import {City} from './city.model'
import {CityService} from "./city.service";

@Component({
	selector   : 'hello-world',
	templateUrl: 'app/app.html',
	styles     : [`.cityPhoto{max-width:200px}`]
})

// Class met properties, array met cities
// push nieuwe city op de array
export class AppComponent implements OnInit {
	// Properties voor de component/class
	currentCity: City;
	cities: City[];
	cityPhoto: string;

	constructor(private cityService: CityService) {

	}

	ngOnInit() {
		this.cityService.getCities()
			.subscribe(cityData => {						// 1. success handler
					this.cities = cityData.json()
				},
				err => console.log('FOUT: ', err),			// 2. error handler
				() => console.log('Getting cities complete'));	// 3. complete handler
	}

	getCity(city:City){
		this.currentCity = city;
		this.cityPhoto   = `img/${this.currentCity.name}.jpg`;
	}
}