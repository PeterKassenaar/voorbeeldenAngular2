// app.component.ts
import {Component} from '@angular/core';
import {City} from './shared/model/city.model';
import {CityService} from './shared/services/city.service';

@Component({
  selector: 'city-app',
  templateUrl: 'app.component.html'
})

// Class
export class AppComponent {
  // Properties
  public cities: City[] = [];
  public currentCity?: City;

  constructor(private cityService: CityService) {
  }

  ngOnInit() {
    this.getCities();
  }

  getCity(city: City) {
    this.currentCity = city;
  }

  clearCity() {
    this.currentCity = undefined;
  }

  // increase or decrease rating on Event Emitted
  updateRating(rating: number) {
    if (this.currentCity) {
      this.currentCity.rating += rating;
    }
  }

  //***********************
  // implementation
  //***********************
  getCities() {
    if (this.cities.length === 0) {
      this.cityService.getCities().subscribe({
        next: cityData => {
          this.cities = cityData;
        },
        error: err => console.log(err),
        complete: () => console.log('Getting cities complete...')
      });
    }
  }
}
