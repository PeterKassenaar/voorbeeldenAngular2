// city.orders.ts - Some kind of 'shopping basket',
// to remember which city trips are booked.
import {Component, OnInit} from '@angular/core';
import {OrderService} from './shared/services/order.service';
import {City} from './shared/model/city.model';
import {CityOrderModel} from './shared/model/cityOrders.model';

@Component({
  selector: 'city-orders',
  template: `
    <div *ngIf="currentOrders.length > 0">
      <h2>Your bookings:</h2>
      <table class="table table-striped">
        <tr>
          <th>Trip to:</th>
          <th>Number</th>
          <th>Price</th>
        </tr>
        <tbody>
        <tr *ngFor="let order of currentOrders ">
          <td>{{ order.city.name }}</td>
          <td>{{ order.numBookings }}</td>
          <td>{{ order.city.price | currency:'EUR':'symbol':'1.2' }}</td>
        </tr>
        <tr>
          <td colspan="2">Total</td>
          <td><strong>{{ totalPrice | currency:'EUR':'symbol':'1.2' }}</strong></td>
        </tr>
        </tbody>
      </table>
      <button class="btn btn-default" (click)="cancel()">Cancel</button>
      <button class="btn btn-success" (click)="confirm()">Confirm</button>
    </div>
  `
})

export class CityOrdersComponent implements OnInit{
  currentOrders: CityOrderModel[] = [];
  totalPrice: number = 0;

  // Injection of *the same* instance of OrderService.
  constructor(private orderService: OrderService) {

  }

  ngOnInit() {
    // Subscribe to events being published on the orderService.Stream property.
    this.orderService.Stream
      .subscribe({
        next: (city: City) => this.processOrder(city),
        error: (err) => console.log('Error when processing City-order'),
        complete: () => console.log('Complete...')
      });
  }

  processOrder(city: City) {
    console.log('Received order for city: ', city);
    this.currentOrders.push(new CityOrderModel(city));
    this.calculateTotal();
  }

  calculateTotal() {
    this.totalPrice = 0; // reset
    this.currentOrders.forEach(order => {
      this.totalPrice += (order.numBookings * order.city.price);
    });

    // OR: use reduce-function on arrays
    // this.totalPrice = this.currentOrders
    //     .reduce((acc, order) => acc + order.numBookings * order.city.price, 0)
  }

  cancel() {
    this.currentOrders = [];
  }

  confirm() {
    // POST this.currentOrders.stringify()....etc.
    alert('TODO: save order in database...');
  }
}
