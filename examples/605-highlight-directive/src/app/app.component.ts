import {Component, OnInit} from '@angular/core';
import {City} from './shared/model/city.model';
import {CityService} from './shared/services/city.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements  OnInit {
  // Properties
  public cities: City[];

  constructor(private cityService: CityService) {
  }

  ngOnInit() {
    this.getCities();
  }

  // ***********************
  // implementation
  // ***********************
  getCities() {
    if (!this.cities) {
      this.cityService.getCities()
        .subscribe(cityData => {
            this.cities = cityData;				// 1. success handler
          },
          err => console.log(err),						// 2. error handler
          () => console.log('Getting cities complete...')	// 3. complete handler
        );
    }
  }
}
