// Credits: http://www.syntaxsuccess.com/viewarticle/pub-sub-in-angular-2.0
import {Component} from 'angular2/core';
import {PubSubService} from "./services/pubSubService";
import {City} from "./city.model";

@Component({
	selector: 'producer',
	template: `
		<hr/>
		<h3>Producer Component</h3>
		
		<input class="input-lg" 
			[(ngModel)]="cityName"  placeholder="New city"/>
		<input class="input-lg" 
			[(ngModel)]="provinceName"  placeholder="Province"/>
	
		<div style="margin-top: 10px;">
			<button  class="btn btn-primary" 
			 	(click)="emitCity()">Emit City</button>
		</div>
		`
})

export class ProducerComponent {
	cityName:string     = '';
	provinceName:string = '';

	constructor(private pubSubService:PubSubService) {

	}

	// Er wordt nu een nieuw object ge-emit vh type City
	emitCity() {
		let city = new City(1, this.cityName, this.provinceName, 0)
		console.log('Emitted: ', city);
		this.pubSubService.Stream.next(city);
	}
}
