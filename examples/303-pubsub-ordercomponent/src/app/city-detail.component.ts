// city.detail.ts
import {Component, Input, Output, EventEmitter} from '@angular/core';
import {City} from './shared/model/city.model';
import {OrderService} from "./shared/services/order.service";

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
      <h2>Price for a weekend city trip:
        {{ city.price | currency:'EUR':'symbol':'1.2' }}
        <button class="btn btn-lg btn-info"
                (click)="order(city)">Order now!
        </button>
      </h2>
    </div>
  `
})

export class CityDetailComponent {
  @Input() city?: City;
  @Output() rating: EventEmitter<number> = new EventEmitter<number>();

  constructor(private orderService: OrderService) {

  }

  // send rating for current city
  rate(num: number): void {
    console.log(`Rating voor : ${this.city?.name}, ${num}`);
    this.rating.emit(num);
  }

  // Place Order. Emitten event for this city via OrderService event bus.
  // Capture the event in city-orders.component.ts
  order(city: City) {
    console.log(`City trip booked for: ${this.city?.name}, for EUR ${this.city?.price}`);
    this.orderService.Stream.next(city);
  }
}
