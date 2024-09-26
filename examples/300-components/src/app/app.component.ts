// app.component.ts
import {Component, OnInit} from '@angular/core';
import {City} from './shared/model/city.model';
import {CityService} from './shared/services/city.service';
import {CityDetailComponent} from './city-detail.component'; // Nieuwe component invoegen

@Component({
  selector: 'city-app',
  templateUrl: 'app.component.html'
})

// Class
export class AppComponent implements OnInit {
  // Properties
  public cities: City[] = [];
  public currentCity: boolean = false;

  constructor(private cityService: CityService) {

  }

  ngOnInit() {
    this.cityService.getCities()
      .subscribe(cityData => this.cities = cityData);
  }

  getCity() {
    this.currentCity = true;
    // later: this.currentCity = city;
  }

  clearCity() {
    this.currentCity = false;
  }
}
