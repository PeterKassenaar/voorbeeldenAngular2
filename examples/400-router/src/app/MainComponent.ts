import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <h1>Pick your favorite city</h1>
        <!-- Static 'main menu'. Always visible-->
        <!-- Add routerLink directive. Angular replaces this with correct <a href="..."> -->
        <a routerLink="home" class="btn btn-primary">List of cities</a>
        <a routerLink="add" class="btn btn-primary">Add City</a>
        <hr>
        <!-- Dynamically inject views here -->
        <router-outlet></router-outlet>

        <!-- Static footer here. Always visible-->
        <hr>
        Copyright (C) 2024
    `
})
export class MainComponent {
}
