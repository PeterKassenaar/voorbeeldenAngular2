import {Component, OnInit} from '@angular/core';

@Component({
  // 1. Inside @Component Decorator.
  // Add component description/annotations here
  selector: 'hello-world',
  template: `
    <h1>Hello World!</h1>
    <h2>This is Angular</h2>
    <a href="https://angular.dev" target="_blank">Angular Website</a>
  `
})

export class AppComponent implements OnInit {
  // 2. optional: add variables, constructor, class logic, etc. here
  constructor() {
  }

  ngOnInit() {
    console.log('Hello World - Angular is running');
  }
}
