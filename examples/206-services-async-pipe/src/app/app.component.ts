import {Component, OnInit} from '@angular/core';
import {City} from './shared/model/city.model';
import {CityService} from './shared/services/city.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'hello-world',
  templateUrl: 'app.component.html',
  styles: [
    `
      .cityPhoto {
        max-width: 200px;
      }
    `
  ]
})

// Class
export class AppComponent implements OnInit {
  // Properties
  currentCity?: City;
  // cities$ is now an observable to an array of cities.
  cities$?: Observable<City[]>;
  cityPhoto: string = '';

  constructor(private cityService: CityService) {
  }

  ngOnInit() {
    // The  OBSERVABLE from the service is now directly assigned to the class property.
    // no more .subscribe(), this is being handled
    // by | async in the html
    this.cities$ = this.cityService.getCities();
  }

  getCity(city: City) {
    this.currentCity = city;
    this.cityPhoto = `assets/img/${this.currentCity.name}.jpg`;
  }
}
