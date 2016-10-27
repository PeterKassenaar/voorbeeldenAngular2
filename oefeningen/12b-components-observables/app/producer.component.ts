// Credits: http://www.syntaxsuccess.com/viewarticle/pub-sub-in-angular-2.0
import {Component, ElementRef, ViewChild} from '@angular/core';
import {PubSubService} from "./services/pubSubService";
import {City} from "./city.model";
import {CityService} from "./city.service";

@Component({
	selector: 'producer',
	template: `
		<hr/>
		<h3>Producer Component</h3>
		
		<input class="input-lg" 
			#cityName  placeholder="New city"/>
		<input class="input-lg" 
			#provinceName  placeholder="Province"/>
	
		<div style="margin-top: 10px;">
			<button  class="btn btn-primary" 
			 	(click)="emitCity()">Emit City</button>
		</div>
		`
})

export class ProducerComponent {
	@ViewChild('cityName') cityName: ElementRef;
	@ViewChild('provinceName') provinceName: ElementRef;

	constructor(private cityService: CityService,
				private pubSubService: PubSubService) {

	}

	// Er wordt nu een nieuw object ge-emit vh type City
	emitCity() {
		let cityName     = this.cityName.nativeElement.value;
		let provinceName = this.provinceName.nativeElement.value;
		let newId        = this.cityService.numCities() + 1; // bereken nieuw id
		let city         = new City(newId, cityName, provinceName, 0);
		console.log('Emitted: ', city);
		this.pubSubService.Stream.next(city);
	}
}
