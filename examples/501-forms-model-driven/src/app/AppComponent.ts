import {Component} from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <a routerLink="/component1">Component 1</a> |
    <a routerLink="/component2">Component 2</a> |
    <a routerLink="/component3">Component 3</a> |
    <hr>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
}
