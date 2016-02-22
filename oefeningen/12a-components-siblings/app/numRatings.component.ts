import { Component, Input } from 'angular2/core';

@Component({
	selector: 'num-ratings',
	template: `
	<div class="ratingStyle">
		<h1>Totaal aantal waarderingen: {{ numRatings }}</h1>

		<!--<hr />-->
		<!--<h2 *ngIf="ratingObject">Laatst gewaarderde stad: {{ ratingObject.name }}</h2>-->
	</div>
	`,
	styles:[`.ratingStyle {
		border: 1px solid blue;
		border-radius : 4px;
		padding: 10px;
		margin:10px 0;
	}`]
})

export class NumRatings {
	// input as simple number
	@Input() numRatings:number = 0;

	//input as complex type
	//@Input() ratingObject:City;
}