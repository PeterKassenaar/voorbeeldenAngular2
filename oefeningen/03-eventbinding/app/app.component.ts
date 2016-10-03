import {Component} from '@angular/core';
import {City} from './city.model'

// component met multi-line HTML-string
// Lijst met steden via *ngFor
// Conditionele koptekst wordt getoond met *ngIf
@Component({
	selector   : 'hello-world',
	templateUrl: 'app/app.html'
})

// Class met properties, array met cities
export class AppComponent {
	// Properties voor de component/class
	name   = 'Peter Kassenaar';
	cities = [
		new City(1, 'Groningen', 'Groningen'),
		new City(2, 'Hengelo', 'Overijssel'),
		new City(3, 'Den Haag', 'Zuid-Holland'),
		new City(4, 'Enschede', 'Overijssel'),
	];
	counter: number =0;
	txtKeyUp : string = '';

	// 1. Binden aan click-event in de pagina
	btnClick(){
		alert('Je hebt '+ ++this.counter +' keer geklikt');
	}

	// 2. Binden aan keyUp-event in de textbox
	onKeyUp(event:any){
		this.txtKeyUp = event.target.value;
	}

	 // 3. Binden aan keyUp-event via local template variable
	betterKeyUp(){
		//... do nothing, for now
	}
}