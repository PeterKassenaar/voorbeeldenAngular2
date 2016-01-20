// city.add.component.ts
import { Component } from 'angular2/core';
import { NgForm } from 'angular2/common';
import { City } from "./city.model";

@Component({
	selector   : 'add-city-form',
	templateUrl: 'app/city.add.html'
})

export class CityAddComponent {
	// lokale (dummy) data om te testen
	provinces:string[] = ['Groningen', 'Friesland', 'Drenthe', 'Overijssel', 'Flevoland', 'Gelderland', 'Noord-Holland', 'Zuid-Holland', 'Utrecht', 'Noord-Brabant', 'Zeeland', 'Limburg'];

	model:City = new City(8, 'Delfzijl', this.provinces[0], 0, ['De Dollard']);

	submitted:boolean = false;

	onSubmit() {
		this.submitted = true;
	}

	// TODO - weghalen zodra gereed
	get diagnostic() {
		return JSON.stringify(this.model);
	}
}
