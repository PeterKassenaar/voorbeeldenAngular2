// app.component.ts
import {Component} from 'angular2/core';
import {City} from "./model/city.model";
import {CityService} from './services/city.service';
import {HTTP_PROVIDERS} from "angular2/http";
import {CityDetail} from "./city.detail"; // Detail Component importeren
import {CityOrders} from "./city.orders";
import 'rxjs/Rx';
import {OrderService} from "./services/order.service";


@Component({
	selector   : 'hello-world',
	templateUrl: 'app/app.component.html',
	//providers  :, // <== Aaargh, hier vergeet ik *altijd* OrderService te injecteren. Anderhalf uur zoeken en debuggen... Beste Lezers, denk hier aan!
	directives : [CityDetail, CityOrders]
})

export class AppComponent {
	title:string     = 'Steden met ordercomponent';
	cities:City[]    = [];
	currentCity:City;

	constructor(private cityService:CityService) {
	}

	ngOnInit() {
		this.cityService.getCities()
			.subscribe(
				cityData => this.cities = cityData,
				err => console.log(err),
				() => console.log('Steden ophalen compleet.')
			)
	}

	showCity(city:City) {
		this.currentCity = city;
	}

	clearCity(){
		this.currentCity = null;
	}

	updateCityRating(rating){
		this.currentCity.rating += rating;
	}
}