// app.component.ts
import {Component, OnInit} from '@angular/core';
import {City} from './shared/model/city.model'
import {CityService} from "./shared/services/city.service";

@Component({
  selector: 'city-app',
  templateUrl: 'app.component.html',
})

// Class
export class AppComponent implements OnInit {
  // Properties
  public cities: City[] = [];
  public currentCity?: City;

  constructor(private cityService: CityService) {

  }

  ngOnInit() {
    this.cityService.getCities()
      .subscribe(cityData => {
          this.cities = cityData; // 1. success handler
          // for now: set the property .favorite hardcoded to `false`.
          this.cities.forEach(city => city.favorite = false)
        },
        err => console.log(err),						// 2. error handler
        () => console.log('Getting cities complete...')	// 3. complete handler
      )
  }

  getCity(city: City) {
    this.currentCity = city;
  }

  clearCity() {
    this.currentCity = undefined;
  }

  // increase or decrease rating on Event Emitted
  updateRating(rating: number): void {
    // @ts-ignore
    this.currentCity.rating += rating;
  }

  updateFavorite(favorite: boolean): void {
    // @ts-ignore
    this.currentCity.favorite = favorite;
  }
}
