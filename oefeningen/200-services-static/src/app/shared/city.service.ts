import {Injectable} from '@angular/core';
import  {City} from './city.model'

@Injectable()
export class CityService {
	private cities: City[] = [
		new City(1, 'Groningen', 'Groningen'),
		new City(2, 'Hengelo', 'Overijssel'),
		new City(3, 'Den Haag', 'Zuid-Holland'),
		new City(4, 'Enschede', 'Overijssel')
	];

	// retourneer alle cities
	getCities(): City[] {
		return this.cities
	}

	// retourneer city op basis van ID
	getCity(id: number) {
		return this.cities.find(c => c.id === id);
		// andere optie: .filter() gebruiken. Als je
		// *meerdere* resultaten zou kunnen verwachten en dus een array wilt retourneren
		// return this.cities.filter(c => c.id === id)[0]; // In dit geval: index [0] omdat we maar 1 city willen
	}
}