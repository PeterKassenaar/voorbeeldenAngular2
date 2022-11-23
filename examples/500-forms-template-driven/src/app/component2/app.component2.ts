import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'component2',
  templateUrl: 'app.component2.html'
})
export class AppComponent2 implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }

  submitForm(data: any) {
    alert('you submitted: ' + JSON.stringify(data))
  }
}
