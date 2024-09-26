// city.detail.ts
import { Component, Input } from '@angular/core';
import { City } from './shared/model/city.model';

@Component({
  selector: 'city-detail',
  template: `
	<h2>City details</h2>
	<div *ngIf="city">
		<ul class="list-group">
			<li class="list-group-item">Name: {{ city.name }}</li>
			<li class="list-group-item">Province: {{ city.province }}</li>
			<li class="list-group-item">Highlights: {{ city.highlights }}</li>
		</ul>
		<img src="../assets/img/{{ city.name}}.jpg" alt="Photo of {{ city.name }}" class="img-fluid"/>
	</div>
	`
})
export class CityDetailComponent {
    // Input parameter - define `city` as an attribute on this component
  @Input() city?: City;
}
