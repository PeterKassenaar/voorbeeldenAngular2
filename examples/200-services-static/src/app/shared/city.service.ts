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

	// return all cities
	getCities(): City[] {
		return this.cities;
	}

	// return city based on ID
	getCity(id: number): City | undefined {
		return this.cities.find(c => c.id === id);

		// another option: using .filter(). If you
		// would expect *multiple* results, and thus want to return an array
		// you would use something like:
        // return this.cities.filter(c => c.id === id)[0]; // In this case: index [0] b/c we only want 1 city
	}
}
