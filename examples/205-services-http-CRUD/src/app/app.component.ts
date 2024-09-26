import {Component, OnInit} from '@angular/core';
import {City} from './shared/model/city.model';
import {CityService} from './shared/services/city.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'hello-world',
  templateUrl: 'app.component.html',
  styles: [
    `
      .cityPhoto {
        max-width: 200px;
      }
    `,
  ],
})

// **************
// Application to edit city data, options to add/delete/edit city via
// package json-server (https://github.com/typicode/json-server)
// For bigger apps a better solution would be to use @ngrx/store, using redux-principles.
// This is covered in the Angular Advanced training.
//
// Also, the Delete/Edit buttons should be in their own respective components, instead
// of just buttons on the template. This is covered later in this course.
// *************
export class AppComponent implements OnInit {
  // Properties on the component/class
  currentCity?: City;
  cities$?: Observable<City[]>;
  cityPhoto: string = '';
  cityAdded?: City;
  isEditing = false;

  constructor(private cityService: CityService) {
  }

  // 0. Initialize. Fetch all cities
  ngOnInit() {
    // we can use the async pipe here
    this.cities$ = this.cityService.getCities();
  }

  // 1. Get city by Id
  getCity(city: City): void {
    // Not using the async pipe, because of additional calculations in the .subscribe() block
    this.cityService.getCity(city.id).subscribe((c) => {
      this.currentCity = c;
      this.cityPhoto = `assets/img/${this.currentCity.name}.jpg`;
    });
  }

  // 2. Add a city
  addCity(name: string): void {
    this.cityService.addCity(name).subscribe((result) => {
      this.cityAdded = result;
      this.cities$ = this.cityService.getCities();
    });
  }

  // 3. Delete a city
  removeCity(city : City) {
    this.cityService.deleteCity(city).subscribe((res) => {
      this.currentCity = undefined;
      this.isEditing = false;
      this.cities$ = this.cityService.getCities();
    });
  }

  // 4. Edit a city & update
  updateCity() {
    this.cityService.updateCity(this.currentCity).subscribe((res) => {
      this.currentCity = res; // should be the same.
      this.isEditing = false;
    });
  }

  cancel() {
    this.isEditing = false;
  }

  protected readonly City = City;
}
