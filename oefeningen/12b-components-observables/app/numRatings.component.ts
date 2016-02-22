import {Component, Input, OnInit} from 'angular2/core';
import {PubSubService} from "./services/pubSubService";
import {City} from "./city.model";

@Component({
	selector: 'num-ratings',
	template: `
	<div class="ratingStyle">
		<h1>Totaal aantal waarderingen: {{ numRatings }}</h1>
		<ul>
			<li *ngFor="#city of processedCities">
				{{ city |json }}
			</li>
		</ul>
		
	</div>
	`,
	styles  : [`.ratingStyle {
		border: 1px solid blue;
		border-radius : 4px;
		padding: 10px;
		margin:10px 0;
	}`]
})

export class NumRatings implements OnInit {
	// input as simple number
	@Input()
	numRatings:number        = 0;
	processedCities:City[] = [];

	constructor(private pubSubService:PubSubService) {

	}

	ngOnInit() {
		this.pubSubService.Stream
			.subscribe((city:City) => this.processCity(city));
	}

	processCity(city:City) {
		this.processedCities.push(city);
	}
}