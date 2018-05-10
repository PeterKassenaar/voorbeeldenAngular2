// order.service.ts
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { City } from '../model/city.model';

@Injectable()
export class OrderService {
  Stream: Subject<City>;

  constructor() {
    this.Stream = new Subject<City>();
  }
}
