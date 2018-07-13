// app.component.ts
import { Component, OnInit } from '@angular/core';
import { City } from './shared/city.model';
import { CityService } from './shared/city.service';
import { CityDetailComponent } from './city.detail'; // Nieuwe component invoegen

@Component({
  selector: 'city-app',
  templateUrl: 'app.component.html'
})

// Class
export class AppComponent implements OnInit {
  // Properties
  public cities: City[];
  public currentCity: boolean = false;

  constructor(private cityService: CityService) {

  }
  ngOnInit() {
    this.cityService.getCities().subscribe(
      cityData => {
        this.cities = cityData; // 1. success handler
      },
      err => console.log(err), // 2. error handler
      () => console.log('Getting cities complete...') // 3. complete handler
    );
  }

  getCity() {
    this.currentCity = true;
    // later: this.currentCity = city;
  }

  clearCity() {
    this.currentCity = null;
  }
}
