import {Component, OnInit} from '@angular/core';
import {City} from './shared/model/city.model';
import {CityService} from "./shared/services/city.service";

@Component({
    selector: 'hello-world',
    templateUrl: 'app.html',
    styles: [`.cityPhoto {
        max-width: 200px
    }`]
})

// Class met properties, array met cities
// push nieuwe city op de array
export class AppComponent implements OnInit {
    // Properties voor de component/class
    currentCity: City;
    cities: City[];
    cityPhoto: string;

    constructor(private cityService: CityService) {

    }

    ngOnInit() {
        this.cityService.getCities()
            .subscribe(cityData => {						// 1. success handler
                    this.cities = cityData
                },
                err => console.log('FOUT: ', err),			// 2. error handler
                () => console.log('Getting cities complete'));	// 3. complete handler
    }

    getCity(city: City) {
        this.currentCity = city;
        this.cityPhoto = `assets/img/${this.currentCity.name}.jpg`;
    }
}