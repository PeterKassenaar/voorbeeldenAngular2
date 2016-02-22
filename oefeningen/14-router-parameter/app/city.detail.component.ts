// city.detail.component.ts
import {Component} from 'angular2/core';
import {RouteParams} from "angular2/router";
import {City} from "./city.model";
import {CityService} from "./city.service";

@Component({
	selector: 'city-detail',
	template: `<h1>City Detail</h1>
	<h2>Details voor city: {{ id }}</h2>
	`
})

export class CityDetailComponent {
	id:string;
	currentCity:City;

	constructor(private routeParams:RouteParams) {

	}

	ngOnInit() {
		this.id = this.routeParams.get('id');
	}
}
