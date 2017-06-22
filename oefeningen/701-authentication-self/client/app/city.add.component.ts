// city.add.component.ts
import {Component} from '@angular/core';
import {City} from "./model/city.model";
import {NgForm} from "@angular/forms";
import {CityService} from "./services/city.service";

@Component({
	selector   : 'add-city-form',
	templateUrl: 'app/city.add.html'
})


export class CityAddComponent {
	result: any;
	// lokale (dummy) data om te testen
	provinces: string[] = ['Groningen', 'Friesland', 'Drenthe', 'Overijssel', 'Flevoland', 'Gelderland', 'Noord-Holland', 'Zuid-Holland', 'Utrecht', 'Noord-Brabant', 'Zeeland', 'Limburg'];

	city: City = new City(8, 'Delfzijl', this.provinces[0], 0, ['De Dollard']);

	submitted: boolean = false;

	constructor(private cityService: CityService) {

	}

	onSubmit(cityForm: NgForm) {
		this.submitted = true;
		this.result    = cityForm.value;
		console.log(cityForm.value);
		// push city on the array. TODO: clear form
		this.cityService.addCity(<City>cityForm.value)
	}
}
