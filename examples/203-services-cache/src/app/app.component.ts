import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {City} from './shared/model/city.model';
import {CityService} from './shared/services/city.service';

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
  cities?: Observable<City[]>;
  cityPhoto: string = '';


  constructor(private cityService: CityService) {
  }

  ngOnInit() {
  }

  loadCities() {
    this.cities = this.cityService.getCities();
  }

  getCity(city: City) {
    this.currentCity = city;
    this.cityPhoto = `assets/img/${this.currentCity.name}.jpg`;
  }

  clear() {
    this.cities = undefined;
  }

  clearCache() {
    this.cityService.clearCache();
  }
}
