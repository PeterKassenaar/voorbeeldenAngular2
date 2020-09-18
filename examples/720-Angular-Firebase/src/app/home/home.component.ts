import {Component, OnInit} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {City} from '../shared/model/city';
import {CityService} from '../shared/services/city.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cities$: Observable<City[]>;

  constructor(private  afs: AngularFirestore, private cityService: CityService) {
  }

  ngOnInit(): void {
    this.cities$ = this.cityService.getCities();
  }

  // remove/delete a city
  removeCity(id: string): void {
    if (confirm('Een stad verwijderen kan NIET ongedaan worden gemaakt. Doorgaan?')) {
      this.cityService.removeCity(id);
    }
  }
}
