import {Component, ElementRef, OnInit} from 'angular2/core';
declare var jQuery:any;
@Component({
	selector: 'hello-world',
	template: `
		<h1>Hello Angular - jQuery</h1>
		<div>
			<h2>Caroussel met cycle plugin</h2>
			<div id="slideshow">
				<img src="http://malsup.github.io/images/p1.jpg">
				<img src="http://malsup.github.io/images/p2.jpg">
				<img src="http://malsup.github.io/images/p3.jpg">
				<img src="http://malsup.github.io/images/p4.jpg">
			</div>
		</div>	
	`,
	styles  : ['img{max-width: 500px;}']
})
export class AppComponent implements OnInit {
	elementRef:ElementRef;

	constructor(elementRef:ElementRef) {
		this.elementRef = elementRef;
	}

	ngOnInit() {
		//console.log(jQuery(this.elementRef.nativeElement).find('div#slideshow'));
		jQuery(this.elementRef.nativeElement).find('div#slideshow').cycle();
	}
}