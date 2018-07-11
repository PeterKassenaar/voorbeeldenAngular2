import { Component } from 'angular2/core';

@Component({
	selector: 'city-component',
	template: `
	<h2>Lijst met steden (Angular 2 Component):</h2>
		<ul class="list-group">
			<li class="list-group-item"
				*ngFor="#city of cities">
				{{city.name}}
			</li>
		</ul>
	`
})

export class CityComponent {
	cities = [
		{name: 'Las Vegas, NV'},
		{name: 'New York, NY'},
		{name: 'Los Angeles, CA'},
		{name: 'Detroit, MI'},
		{name: 'San Francisco, CA'},
		{name: 'Portland, MN'},
		{name: 'Boston, MA'}
	]
}
