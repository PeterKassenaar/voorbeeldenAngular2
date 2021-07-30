// city.detail.ts
import { Component } from '@angular/core';

@Component({
	selector: 'city-detail',
	template: `
	<h2>City details</h2>
		<ul class="list-group">
			<li class="list-group-item">Name: [city name]</li>
			<li class="list-group-item">Province: [city province]</li>
			<li class="list-group-item">Highlights: [city highlights]</li>
		</ul>
	`
})

export class CityDetailComponent{

}
