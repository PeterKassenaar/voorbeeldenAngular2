import { Injectable} from 'angular2/core';
import  {City} from './city.model'

@Injectable()
export class CityService {
	private _cities:City[] = [
		new City(1, 'Groningen', 'Groningen'),
		new City(2, 'Hengelo', 'Overijssel'),
		new City(3, 'Den Haag', 'Zuid-Holland'),
		new City(4, 'Enschede', 'Overijssel')
	];

	// retourneer alle cities
	getCities() {
		return this._cities
	}

	// retourneer city op basis van ID
	getCity(id:number) {
		return this._cities.filter(c => c.id === id)[0]; // index [0] omdat .filter() een Array retourneert.
	}
}