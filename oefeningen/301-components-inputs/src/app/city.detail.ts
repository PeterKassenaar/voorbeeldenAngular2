// city.detail.ts
import { Component, Input } from '@angular/core';
import { City } from './shared/city.model';

@Component({
  selector: 'city-detail',
  template: `
	<h2>City details</h2>
	<div *ngIf="city">
		<ul class="list-group">
			<li class="list-group-item">Naam: {{ city.name }}</li>
			<li class="list-group-item">Provincie: {{ city.province }}</li>
			<li class="list-group-item">Highlights: {{ city.highlights }}</li>
		</ul>
		<img src="assets/img/{{ city.name}}.jpg" alt="Foto van {{ city.name }}" class="img-fluid"/>
	</div>
	`
})
export class CityDetail {
  @Input() city: City;
}
