import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CityService} from "../shared/services/city.service";
import {City} from "../shared/model/city";
import {take} from "rxjs/operators";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  cityId: string;
  updated = false;
  // variables
  cityName: string;
  cityProvince: string;
  cityHighlights: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private cityService: CityService) {
  }

  ngOnInit(): void {
    this.cityId = this.route.snapshot.params.id;
    this.cityService.getCity(this.cityId)
      .pipe(
        take(1)
      )
      .subscribe(city => {
        const fetchedCity = city.payload.data() as City;
        this.cityName = fetchedCity.name;
        this.cityProvince = fetchedCity.province;
        this.cityHighlights = fetchedCity.highlights.join(',');
      });
  }

  updateCity(): void {
    const newCity: City = {
      name: this.cityName,
      province: this.cityProvince,
      highlights: this.cityHighlights.split(','),
      rating: 0
    };
    this.cityService.updateCity(this.cityId, newCity);
    // show alert and navigate back to homepage after 1,5s.
    this.updated = true;
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 1500);
  }

  cancel(): void {
    this.router.navigate(['/']);
  }
}
