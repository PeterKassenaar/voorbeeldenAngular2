import {Component} from '@angular/core';
import {PostcodeService} from './shared/postcode.service';

declare const google: any;

@Component({
	selector: 'app-root',
	template: `
		<div class="container">
			<div class="row">
				<div class="col-sm-12">
					<h2>Postcodezoeker</h2>
					<div>
						<input type="text" class="input-lg" placeholder="postcode" size="10" #postcode>
						<input type="text" class="input-lg" placeholder="nr" size="3" #streetnumber>
						<button class="btn btn-primary" (click)="getAddress(postcode.value, streetnumber.value)">Zoek
						</button>
						<p class="error" *ngIf="postcodeNotFound">Fout: postcode niet gevonden</p>
					</div>

					<div *ngIf="hasAddress">
						<h3>{{ street }} ({{ province }})</h3>
						<h3>{{ city }}</h3>
						<button class="btn btn-success" (click)="clear()">Leegmaken</button>
						<!--Eventueel: werken met <agm-map></agm-map>, in plaats van eigen Google Map-div-->
						<!--<agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">-->
						<!--<agm-marker [latitude]="lat" [longitude]="lng"></agm-marker>-->
						<!--</agm-map>-->

					</div>
					<div id="map"></div>
				</div>
			</div>
		</div>
	`,
	styles  : [`
		.error{
			background-color: coral;
			color: whitesmoke;
			font-size: 14px;
		}
        agm-map {
            height : 300px;
        }

        #map {
            width  : 100%;
            height : 300px;
        }`]
})
export class AppComponent {
	street: string;
	city: string;
	province: string;
	hasAddress: boolean       = false;
	postcodeNotFound: boolean = false;

	// Bij gebruik van AGM (https://angular-maps.com/)
	lat: number;
	lng: number;
	zoom: number = 14;

	constructor(private postcodeService: PostcodeService) {

	}

	getAddress(postcode: string, streetnumber: string) {
		this.postcodeService.getAddress(postcode.toUpperCase(), streetnumber)
			.subscribe(res => {
				if (res.status === 'ok') {
					this.hasAddress       = true;
					this.postcodeNotFound = false;
					this.city             = res.details[0].city;
					this.province         = res.details[0].province;
					this.street           = res.details[0].street;
					this.lat              = +res.details[0].lat;
					this.lng              = +res.details[0].lon;
					this.initMap(+res.details[0].lat, +res.details[0].lon)
				}
				else if (res.status === 'error') {
					this.hasAddress       = false;
					this.postcodeNotFound = true;
					this.city             = this.province = this.street = '';
					this.lat = 0;
					this.lng = 0;
				}
				console.log(res)
			});
	}

	initMap(lat, lng) {
		let position = {lat: lat, lng: lng};
		let map      = new google.maps.Map(document.getElementById('map'), {
			zoom  : this.zoom,
			center: position
		});
		let marker   = new google.maps.Marker({
			position: position,
			map     : map
		});
	}

	clear() {
		// reset
		this.hasAddress                          = false;
		document.getElementById('map').innerHTML = '';
	}
}
