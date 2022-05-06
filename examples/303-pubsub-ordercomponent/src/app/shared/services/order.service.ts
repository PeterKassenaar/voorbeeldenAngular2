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

  // Info: DON'T use a .pipe() directly on the Stream property. This won't work.
  // See https://stackoverflow.com/questions/57603724/rxjs-pipe-and-subscribe-on-a-subject-in-two-separate-steps-not-working-as-expe
  // for more information.
  // Instead, declare a new variable, based on the Stream, and create a pipe on this variable. Subscribe
  // to this variable in the components, not directly on the Stream.
}
