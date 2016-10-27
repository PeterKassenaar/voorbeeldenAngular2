// app.component.ts
import {Component} from '@angular/core';
import {City} from './city.model'
import {CityService} from "./city.service";
import {PubSubService} from "./services/pubSubService";

@Component({
	moduleId   : module.id,
	selector   : 'city-app',
	templateUrl: 'app.html',
})

// Class met properties, array met cities
export class AppComponent {
	// Properties voor de component/class
	public cities: City[];
	public processedCities: string[] = [];
	public currentCity: City;
	public numRatings: number        = 0; // <-- wordt doorgegeven aan Sibling Component

	constructor(private cityService: CityService,
				private pubSubService: PubSubService) {
	}

	ngOnInit() {
		this.getCities();
		this.pubSubService.Stream
			.subscribe((city: City) => {
				this.processCity(city);
				this.cityService.setCities(this.cities); // update cache;
			});
	}

	private processCity(city: City) {
		console.log('City ontvangen:', city);
		this.cities.push(city);
	}


	getCity(city) {
		this.currentCity = city;
	}

	clearCity() {
		this.currentCity = null;
	}

	// increase or decrease rating on Event Emitted
	updateRating(rating) {
		this.currentCity.rating += rating;
		this.numRatings++;
	}

	//***********************
	// implementation
	//***********************
	getCities() {
		if (!this.cities) {
			this.cityService.getCities()
				.subscribe(cityData => {
						this.cities = cityData.json();				// 1. success handler
						this.cityService.setCities(this.cities);	// cache cities
					},
					err => console.log(err),						// 2. error handler
					()=> console.log('Getting cities complete...')	// 3. complete handler
				)
		}
	}
}