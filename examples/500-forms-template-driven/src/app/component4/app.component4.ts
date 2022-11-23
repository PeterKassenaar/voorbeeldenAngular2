import {Component, OnInit} from '@angular/core';

@Component({
	selector   : 'component4',
	templateUrl: 'app.component4.html'
})
export class AppComponent4 implements OnInit {
	public myLastName: string ='';

	constructor() {
	}

	ngOnInit() {
		this.myLastName = 'Default Value (coming from component): Kassenaar';
	}

	onSubmit(form: any) {
		console.log('Form submitted: ', form.value);
		alert('Form submitted!' + JSON.stringify(form.value));
		// TODO: send result to actual API/RESTful endpoint.
	}

}
