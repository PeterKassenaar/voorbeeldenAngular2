import {Component} from '@angular/core';
import {City} from './shared/city.model';

// component with multi-line HTML-string
// New: scoped classes
@Component({
  selector: 'hello-world',
  templateUrl: 'app.component.html',
  styles: [`
    .cityPhoto {
      max-width: 300px;
      border: 1px solid #333;
      padding: 10px;
      border-radius: 10px;
    }
  `]
})

// Class
export class AppComponent {
  // Properties
  name: string = 'Peter Kassenaar';
  cities: City[] = [
    new City(1, 'Groningen', 'Groningen'),
    new City(2, 'Hengelo', 'Overijssel'),
    new City(3, 'Den Haag', 'Zuid-Holland'),
    new City(4, 'Enschede', 'Overijssel'),
  ];
  textVisible: boolean = true;
  currentCity?: City;
  cityPhoto: string = '';

  // Update selected city in UI, using ES6 string interpolation
  updateCity(city: City) {
    this.currentCity = city;
    this.cityPhoto = `assets/img/${this.currentCity.name}.jpg`;
  }
}
