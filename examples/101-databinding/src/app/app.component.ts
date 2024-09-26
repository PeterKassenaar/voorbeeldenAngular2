import {Component, OnInit} from '@angular/core';
import {City} from "./shared/city.model";

@Component({
  // 1. add component description/annotations here
  selector: 'hello-world',
  templateUrl: 'app.component.html'
})

export class AppComponent implements OnInit {
  name: string = ''; // initialized as empty string
  city: string = '';
  cities: string[] = []; // initialized as empty array
  citiesVolgensModel?: City[]; // NOT initialized. Notice the Question Mark (?) behind the name. This is only to satisfy TypeScript compiler!

  constructor() {

  }

  ngOnInit() {
    this.name = 'Peter Kassenaar';
    this.city = 'Groningen';
    this.cities = ['Groningen', 'Hengelo', 'Den Haag', 'Enschede'];
    this.citiesVolgensModel = [
      new City(1, 'Groningen', 'Groningen'),
      new City(2, 'Hengelo', 'Overijssel'),
      new City(3, 'Den Haag', 'Zuid-Holland'),
      new City(4, 'Enschede', 'Overijssel'),
    ]
  }
}
