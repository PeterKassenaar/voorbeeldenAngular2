// city.detail.component.ts
import { Component } from 'angular2/core';
import { RouteParams } from "angular2/router";
import {City} from "./city.model";
import {CityService} from "./city.service";

@Component({
	selector : 'city-detail',
	template : `<h1>City Detail</h1>
	<h2>Details voor city: {{ id }}</h2>
	<div *ngIf="currentCity">
		<ul class="list-group">
			<li class="list-group-item">Naam: {{ currentCity.name }}</li>
			<li class="list-group-item">Provincie: {{ currentCity.province }}</li>
			<li class="list-group-item">Highlights: {{ currentCity.highlights }}</li>
		</ul>
		<img src="img/{{ currentCity.name}}.jpg" alt="Foto van {{ currentCity.name }}" class="img-responsive"/>
	</div>
	`
})

export class CityDetailComponent {
	id:string;
	currentCity:City;

	constructor(private routeParams:RouteParams, private cityService:CityService) {
		this.id    = routeParams.get('id');
		// Kijk of er cities in de cache staan, zo ja, gebruik deze. (zo nee, : TODO)
		var cities = cityService.cache;
		if (cities) {
			cities.forEach(city => {
				if (city.id === this.id) {
					this.currentCity = city;
				}
			})
		}
	}
}
