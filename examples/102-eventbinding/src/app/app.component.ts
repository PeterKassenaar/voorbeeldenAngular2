import {Component} from '@angular/core';
import {City} from './shared/city.model'

// component with multi-line HTML-string
// List of cities via *ngFor
// Conditional heading is shown with *ngIf
@Component({
  selector: 'hello-world',
  templateUrl: 'app.component.html'
})

// Class with properties, array containing cities
export class AppComponent {
  // Properties on the component/class
  name = 'Peter Kassenaar';
  cities = [
    new City(1, 'Groningen', 'Groningen'),
    new City(2, 'Hengelo', 'Overijssel'),
    new City(3, 'Den Haag', 'Zuid-Holland'),
    new City(4, 'Enschede', 'Overijssel'),
  ];
  counter: number = 0;
  txtKeyUp: string = '';

  // 1. Bind to click-event in the page
  btnClick() {
    alert('You clicked ' + ++this.counter + ' time(s)'); // Workshop: check if 1 time or multiple times cliced
  }

  // 2. Bind to keyUp-event in the textbox
  onKeyUp(event: any) {
    this.txtKeyUp = event.target.value;
  }

  // 3. Bind to keyUp-event via local template variable
  betterKeyUp() {
    //... do nothing, for now
  }
}
