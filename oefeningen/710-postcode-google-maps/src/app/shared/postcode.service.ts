import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class PostcodeService {

	baseUrl = 'http://api.postcodedata.nl/v1/postcode/?ref=domeinnaam.nl&type=json';

	constructor(private http: Http) {
	}

	getAddress(postcode: string, streetnumber: string) {
		return this.http.get(
			`${this.baseUrl}&postcode=${postcode}&streetnumber=${streetnumber}`
		).map(res => res.json())
	}
}
