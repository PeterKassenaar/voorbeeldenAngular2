// city.add.component.ts
import { Component } from 'angular2/core';
import { NgForm } from 'angular2/common';
import { City } from "./city.model";
import {CanActivate} from "angular2/router";
import {SessionService} from "./services/session.service";
import {Router} from "angular2/router";

@Component({
	selector   : 'add-city-form',
	templateUrl: 'app/city.add.html'
})

// Idealiter: User mag alleen city toevoegen indien ingelogd. Dit kan
// worden bereikt met de decorator @CanActivate.
@CanActivate((next,prev)=>{
	console.log('In @CanActivate. Next: ', next);
	console.log('In @CanActivate. Prev: ', prev);
	// DIT kan niet, want services zijn nog niet geinstantieerd in deze fase.
	// Zie ook dit issue: https://github.com/angular/angular/issues/4112
	//if (this.sessionService.user) {
	//	return true;
	//}else {
	//	this.router.navigate(['Auth']);
	//	//return false;
	//}
	return true;
})

export class CityAddComponent {
	// lokale (dummy) data om te testen
	provinces:string[] = ['Groningen', 'Friesland', 'Drenthe', 'Overijssel', 'Flevoland', 'Gelderland', 'Noord-Holland', 'Zuid-Holland', 'Utrecht', 'Noord-Brabant', 'Zeeland', 'Limburg'];

	city:City = new City(8, 'Delfzijl', this.provinces[0], 0, ['De Dollard']);

	submitted:boolean = false;

	constructor(private sessionService: SessionService, private router:Router){

	}

	// voor nu: *IN* de component checken of hij mag worden gezien. Maar dat is
	// eigenlijk te laat, want dan in de component al geladen.
	ngOnInit(){
		if (!this.sessionService.user) {
			this.router.navigate(['Auth']);
		}
	}

	onSubmit() {
		this.submitted = true;
		// TODO: push city on the array and clear form
	}

	// TODO - weghalen zodra gereed
	get diagnostic() {
		return JSON.stringify(this.city);
	}
}
