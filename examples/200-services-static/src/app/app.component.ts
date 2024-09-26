import {Component, OnInit} from '@angular/core';
import {City} from './shared/city.model';
import {CityService} from "./shared/city.service";

@Component({
  selector: 'hello-world',
  templateUrl: 'app.component.html',
  styles: [`.cityPhoto {
    max-width: 200px
  }`]
})

// Class
export class AppComponent implements OnInit {
  // Properties
  currentCity?: City;
  cities: City[] = [];
  cityPhoto: string = '';

  // Injection of cityService, which is of type CityService.
  // Notice the use of the keyword `private` here.
  constructor(private cityService: CityService) {

  }

  ngOnInit() {
    // Invoking of the cityService and getting all the cities.
    // We are assigning them to the local variable this.cities.
    this.cities = this.cityService.getCities();
  }

  getCity(city: City) {
    this.currentCity = this.cityService.getCity(city.id);
    this.cityPhoto = `assets/img/${this.currentCity?.name}.jpg`;
    console.log('Fetched city:', this.currentCity);
  }
}
