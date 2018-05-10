// app.component.ts
import { Component } from '@angular/core';
import { City } from './shared/model/city.model';
import { CityService } from './shared/services/city.service';

@Component({
  selector: 'city-app',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  title: string = 'Steden met ordercomponent';
  cities: City[] = [];
  currentCity: City;

  constructor(private cityService: CityService) {}

  ngOnInit() {
    this.cityService
      .getCities()
      .subscribe(
        cityData => (this.cities = cityData),
        err => console.log(err),
        () => console.log('Steden ophalen compleet.')
      );
  }

  showCity(city: City) {
    this.currentCity = city;
  }

  clearCity() {
    this.currentCity = null;
  }

  updateCityRating(rating) {
    this.currentCity.rating += rating;
  }
}
