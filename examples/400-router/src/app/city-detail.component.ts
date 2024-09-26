// city.detail.ts
import {Component, Input, Output, EventEmitter} from '@angular/core';
import {City} from "./shared/model/city.model";

@Component({
  selector: 'city-detail',
  template: `
    <h2>City details
      <button (click)="rate(1)" class="btn btn-sm btn-success">+1</button>
      <button (click)="rate(-1)" class="btn btn-sm btn-danger">-1</button>
    </h2>
    <div *ngIf="city">
      <ul class="list-group">
        <li class="list-group-item">Naam: {{ city.name }}</li>
        <li class="list-group-item">Provincie: {{ city.province }}</li>
        <li class="list-group-item">Highlights: {{ city.highlights }}</li>
      </ul>
      <img src="assets/img/{{ city.name}}.jpg" alt="Foto van {{ city.name }}" class="img-fluid"/>
    </div>
  `
})

export class CityDetailComponent {
  @Input() city?: City;
  @Output() rating: EventEmitter<number> = new EventEmitter<number>();

  rate(num: number) {
    if (this.city) {
      console.log('rating voor ', this.city.name, ': ', num);
      this.rating.emit(num);
    }
  }
}
