import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {City} from '../shared/model/city';
import {CityService} from '../shared/services/city.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  added = false;

  constructor(private cityService: CityService,
              private router: Router) {
  }

  addCity(name: string, province: string, highlights: string): void {
    const newCity: City = {
      name,
      province,
      highlights: highlights.split(','),
      rating: 0
    };
    this.cityService.addCity(newCity);
    // show alert and navigate back to homepage after 1,5s.
    this.added = true;
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 1500);
  }

  cancel(): void {
    this.router.navigate(['/']);
  }

}
