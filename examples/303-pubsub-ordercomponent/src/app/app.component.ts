// app.component.ts
import {Component} from '@angular/core';
import {City} from './shared/model/city.model';
import {CityService} from './shared/services/city.service';

@Component({
  selector: 'city-app',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  title: string = 'Cities with order Component and event bus';
  cities: City[] = [];
  currentCity?: City;

  constructor(private cityService: CityService) {
  }

  ngOnInit() {
    this.cityService
      .getCities()
      .subscribe(
        cityData => (this.cities = cityData),
        err => console.log(err),
        () => console.log('Fetching cities complete...')
      );
  }

  showCity(city: City) {
    this.currentCity = city;
  }

  clearCity() {
    this.currentCity = undefined;
  }

  updateCityRating(rating: number) {
    if (this.currentCity) {
      this.currentCity.rating += rating;
    }
  }
}
