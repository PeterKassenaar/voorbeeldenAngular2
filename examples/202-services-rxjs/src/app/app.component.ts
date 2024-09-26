import {Component, OnInit} from '@angular/core';
import {City} from './shared/model/city.model';
import {CityService} from "./shared/services/city.service";

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

  constructor(private cityService: CityService) {

  }

  ngOnInit() {
    this.cityService.getCities()
      .subscribe(cityData => {
          this.cities = cityData;
        },
        err => console.log('FOUT: ', err),
        () => console.log('Getting cities complete'));
  }

  getCity(city: City) {
    this.currentCity = city;
    this.cityPhoto = `assets/img/${this.currentCity.name}.jpg`;
  }
}
