// app.component.ts
import {Component} from 'angular2/core';
import {HTTP_PROVIDERS} from "angular2/http";
import {City} from './city.model'
import {CityService} from "./city.service";
import {CityDetail} from "./city.detail";
import {NumRatings} from "./numRatings.component";
import {ProducerComponent} from "./producer.component";
import {PubSubService} from "./services/pubSubService"; // Nieuwe component invoegen

@Component({
	selector   : 'city-app',
	templateUrl: 'app/app.html',
	providers  : [CityService, HTTP_PROVIDERS],
	directives : [CityDetail, NumRatings, ProducerComponent]	// Niet vergeten: invoegen bij directives!
})

// Class met properties, array met cities
export class AppComponent {
	// Properties voor de component/class
	public cities:City[];
	public processedCities:string[] = [];
	public currentCity:City;
	public numRatings:number        = 0; // <-- wordt doorgegeven aan Sibling Component

	constructor(private cityService:CityService,
				private pubSubService:PubSubService) {
	}

	ngOnInit() {
		this.getCities();
		this.pubSubService.Stream
			.subscribe((city:City) => this.processCity(city));
	}

	private processCity(city:City) {
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
					},
					err => console.log(err),						// 2. error handler
					()=> console.log('Getting cities complete...')	// 3. complete handler
				)
		}
	}
}