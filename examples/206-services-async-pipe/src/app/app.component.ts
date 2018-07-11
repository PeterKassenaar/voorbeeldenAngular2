import { Component, OnInit } from '@angular/core';
import { City } from './shared/model/city.model';
import { CityService } from './shared/services/city.service';
import { Observable } from 'rxjs';

@Component({
	selector: 'hello-world',
	templateUrl: 'app.html',
	styles: [
		`
			.cityPhoto {
				max-width: 200px;
			}
		`
	]
})

// Class met properties, array met cities
// push nieuwe city op de array
export class AppComponent implements OnInit {
	// Properties voor de component/class
	currentCity: City;
	// cities$ is nu een observable naar een array van cities.
	cities$: Observable<City[]>;
	cityPhoto: string;

	constructor(private cityService: CityService) {}

	ngOnInit() {
		// de OBSERVABLE wordt toegekend.
		// Geen .subscribe() meer, dit wordt afgehandeld
		// door |async in de html
		this.cities$ = this.cityService.getCities();
	}

	getCity(city: City) {
		this.currentCity = city;
		this.cityPhoto = `assets/img/${this.currentCity.name}.jpg`;
	}
}
