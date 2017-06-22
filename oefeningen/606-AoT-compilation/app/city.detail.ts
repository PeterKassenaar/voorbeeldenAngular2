// city.detail.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import {City} from'./model/city.model';
import {OrderService} from "./services/order.service";

@Component({
	selector : 'city-detail',
	template : `
	<h2>City details
		<button (click)="rate(1)" class="btn btn-sm btn-success">+1</button>
		<button (click)="rate(-1)" class="btn btn-sm btn-danger">-1</button>
	</h2>
		<ul class="list-group">
			<li class="list-group-item">Naam: {{city.name}}</li>
			<li class="list-group-item">Provincie: {{city.province}}</li>
			<li class="list-group-item">Highlights: {{city.highlights}}</li>
		</ul>
		<img src="../img/{{ city.name}}.jpg" alt="Foto van {{ city.name }}" class="img-responsive"/>
		<h2>Prijs voor een weekendje weg: 
		{{ city.price | currency:'EUR':true:'1.2' }}
		<button class="btn btn-lg btn-info" 
			(click)="order(city)">Boek nu!</button>
		</h2>
	`
})

export class CityDetail {
	@Input() city:City;
	@Output() rating:EventEmitter<number> = new EventEmitter<number>();

	constructor(private orderService:OrderService) {

	}

	// rating versturen voor huidige city
	rate(num:number) {
		console.log(`Rating voor : ${this.city.name}, ${num}`);
		this.rating.emit(num);
	}

	// Order plaatsen. Event emitten voor deze stad.
	// Dit gaan opvangen in city.orders.ts
	order(city:City) {
		console.log(`Stedentripje geboekt voor: ${this.city.name}, voor EUR ${this.city.price}`);
		this.orderService.Stream.next(city);
	}
}