// city.detail.component.ts
import {Component, OnDestroy, OnInit} from '@angular/core';
import {City} from "./city.model";
import {CityService} from "./city.service";

// import {RouteParams} from "@angular/router"; // OLD way
import {ActivatedRoute} from '@angular/router'; // NEW way
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Component({
	selector: 'city-detail',
	template: `<h1>City Detail</h1>
	<h2>Details voor city: {{ id }}</h2>	

	<!--<div *ngIf="currentCity">-->
	<!--<h2>Details voor city: {{ currentCity.name }}</h2>	-->
		<!--<ul class="list-group">-->
			<!--<li class="list-group-item">Naam: {{ currentCity.name }}</li>-->
			<!--<li class="list-group-item">Provincie: {{ currentCity.province }}</li>-->
			<!--<li class="list-group-item">Highlights: {{ currentCity.highlights }}</li>-->
		<!--</ul>-->
		<!--<img src="img/{{ currentCity.name}}.jpg" alt="Foto van {{ currentCity.name }}" class="img-responsive"/>-->
	<!--</div>-->
	`
})

export class CityDetailComponent implements OnInit, OnDestroy {
	id: string;
	name: string;
	currentCity: City;
	private sub: any; // pointer to subscription on Route

	constructor(private route: ActivatedRoute, private cityService: CityService) {
		// Credits: http://blog.thoughtram.io/angular/2016/06/14/routing-in-angular-2-revisited.html
		// ActivatedRoute comes with a 'params' property which is an Observable.
		// To access the property 'id', all we have to do is to subscribe to
		// the parameters Observable changes.
	}

	ngOnInit() {
		// OLD:
		// this.id = this.route.get('id');

		// NEW:
		this.sub = this.route.params
			.subscribe((params: any) => {
				this.id = params['id'];
			});

		// OR:
		// Work via Router-snapshot:
		// Sometimes we’re not interested in future changes of a route parameter.
		// All we need the id and once we have it, we can provide the data we want to provide.
		// In this case, an Observable can bit a bit of an overkill.
		// A *snapshot* is simply a snapshot representation of the activated route.
		// this.id = this.route.snapshot.params['id'];
		// this.name = this.route.snapshot.params['name'];


		// NEW, with fetching details via Service:
		// this.sub = this.route.params
		// 	.map(params => params['id'])
		// 	.switchMap(id => this.cityService.getCity(id))
		// 	.subscribe((city) => {
		// 		this.currentCity = <City>city[0]; // b/c our service returns an array w/ 1 object (not best practice, but hey, it works)
		// 	});
	}

	ngOnDestroy() {
		// If subscribed, we must unsubscribe before Angular destroys the component.
		// Failure to do so could create a memory leak.
		this.sub.unsubscribe();
	}

}
