import {Component} from 'angular2/core';
import {HTTP_PROVIDERS} from "angular2/http";
import  'rxjs/Rx';
import {Observable} from "rxjs/Observable";
import {Subscriber} from "rxjs/Subscriber";

// Component annotation. Let op de injection van providers: []
@Component({
	selector   : 'my-app',
	templateUrl: 'app/app.html',
	providers  : [HTTP_PROVIDERS]
})

// Class met properties, array met cities
export class AppComponent {
	o:Observable<any>;
	sub;
	id;
	i;
	stream;
	// Properties voor de component/class
	constructor() {
		this.o = new Observable((sink:Subscriber<number>)=> {
			this.i  = 0;
			this.id = setInterval(()=> {
				sink.next(++this.i);
			}, 500);
			// sink.next(1);
			// sink.next(2);
			// sink.next(3);
			// sink.complete();
		});


	}

	start() {
		this.sub = this.o
			.subscribe(
				(val)=> {
					this.stream = val;
					console.log(val)
				},
				(err)=>console.log(err),
				()=>console.log('done.')
			)
	}

	stop() {
		clearInterval(this.id);
		this.sub.unsubscribe();

	}
}