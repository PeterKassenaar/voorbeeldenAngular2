import {Component} from '@angular/core';
import {City} from './shared/city.model'

// Component annotation
@Component({
  selector: 'hello-world',
  templateUrl: 'app.component.html',
})

// Class
export class AppComponent {
  newCity: string= '';
  newCityExtended: string = '';

  // Properties
  cities: City[] = [
    new City(1, 'Groningen', 'Groningen'),
    new City(2, 'Hengelo', 'Overijssel'),
    new City(3, 'Den Haag', 'Zuid-Holland'),
    new City(4, 'Enschede', 'Overijssel'),
  ];

  updateCity(city: City) {
    this.newCityExtended = city.name;
  }

  checkMe(event: any) { // <== Ugly, the 'any' type. So preferably avoid this.
    this.newCityExtended = event.target.value;
  }
}
