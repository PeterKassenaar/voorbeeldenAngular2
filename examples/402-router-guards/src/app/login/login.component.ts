import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
   <h1>Dummy Login page</h1>
      <p>You are not logged in, therefore you are denied access to the requested resource.</p>
  `,
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
