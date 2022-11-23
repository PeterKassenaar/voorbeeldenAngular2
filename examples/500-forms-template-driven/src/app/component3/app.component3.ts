import {Component, OnInit} from '@angular/core';

@Component({
	selector   : 'component3',
	templateUrl: 'app.component3.html'
})
export class AppComponent3 implements OnInit {
	myLastName : string = '';

	constructor() {
	}

	ngOnInit() {
		this.myLastName = 'Default Value (coming from component): Kassenaar';
	}

}
